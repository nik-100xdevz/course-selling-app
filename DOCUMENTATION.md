# Developer Documentation

This guide provides a comprehensive technical overview of the Course Selling Website. It is designed to help developers understand the architecture, setup the environment, and contribute to the project.

## 1. Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local or Atlas)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
Create a `.env` file in the root directory with the following variables:

```env
# Database Connection
MONGODB_URI=mongodb://localhost:27017/course-selling-app # or your Atlas URI

# NextAuth Configuration
NEXTAUTH_SECRET=your_super_secret_key # Generate using `openssl rand -base64 32`
NEXTAUTH_URL=http://localhost:3000 # For local development
```

### Running the App
- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Start Production**: `npm run start`

## 2. Architecture Overview

The application is built using the **Next.js App Router** architecture, leveraging Server Components for performance and Client Components for interactivity.

- **Frontend**: React, Tailwind CSS, Shadcn UI.
- **Backend**: Next.js API Routes (`src/app/api`).
- **Database**: MongoDB with Mongoose ODM.
- **Authentication**: NextAuth.js (Credentials Provider).

## 3. Database Schema

The application uses three primary data models defined in `src/models`.

### User (`User.ts`)
Represents a registered user (student or admin).
- **Fields**:
  - `name`, `email`, `password`: Basic auth details.
  - `role`: `'student'` or `'admin'`.
  - `wishlist`: Array of `Course` ObjectIds.
  - `purchasedCourses`: Array of `Course` ObjectIds.
  - `purchaseHistory`: Array of `PurchaseHistory` ObjectIds.
  - `learningPoints`: Gamification metric (default 0).

### Course (`Course.ts`)
Represents a course available for purchase.
- **Fields**:
  - `title`, `description`, `price`, `thumbnail`: Display info.
  - `instructor`: Name of the instructor.
  - `creator`: ObjectId of the Admin `User` who created it.
  - `studentsEnrolledCount`: Counter for popularity.
  - `purchasedUsers`: Array of `User` ObjectIds who bought it.

### PurchaseHistory (`PurchaseHistory.ts`)
Records a transaction.
- **Fields**:
  - `user`: ObjectId of the buyer.
  - `course`: ObjectId of the course.
  - `price`: Amount paid.
  - `transactionId`: Unique identifier for the payment.
  - `status`: `'completed'`, `'pending'`, or `'failed'`.

## 4. API & Authentication

### Authentication Flow
1. **Sign Up**: `POST /api/signup` creates a new user.
2. **Sign In**: Handled by NextAuth (`/api/auth/[...nextauth]`). Uses `CredentialsProvider` to validate email/password against the MongoDB `User` collection.
3. **Session**: JWT-based sessions. The `session` object is customized to include `id`, `role`, and `email`.

### Key API Endpoints
- **Courses**:
  - `GET /api/all-courses`: Fetch all courses.
  - `POST /api/add-course`: Create a new course (Admin only).
  - `GET /api/course-info`: Get details for a specific course.
- **User Actions**:
  - `POST /api/purchase-course`: Handle course purchase.
  - `POST /api/wishlist`: Add/remove from wishlist.
  - `GET /api/get-purchased-courses`: List user's courses.
  - `PUT /api/user/update-profile`: Update user details.

## 5. Directory Structure Key
- `src/app/(auth)`: Authentication pages (grouped to share layout/middleware logic if needed).
- `src/components/ui`: Reusable UI components (buttons, inputs) from Shadcn UI.
- `src/lib`:
  - `dbConnect.ts`: Singleton pattern for MongoDB connection to prevent multiple connections in serverless environment.
  - `auth.ts`: NextAuth configuration and callbacks.

## 6. Common Workflows

### Adding a New Feature
1. **Model**: If data changes, update `src/models`.
2. **API**: Create a new route in `src/app/api/your-feature/route.ts`.
3. **UI**: Create components in `src/components` and a page in `src/app`.
4. **Validation**: Use Zod schemas in `src/schemas` to validate input.
