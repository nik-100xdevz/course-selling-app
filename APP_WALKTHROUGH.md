# Application Walkthrough

This document provides a detailed overview of the Course Selling Website application, explaining its structure, key features, and components.

## 1. Project Structure

The project follows a standard Next.js App Router structure with TypeScript.

```
src/
├── actions/        # Server actions for form handling and data mutations
├── app/            # Next.js App Router pages and API routes
├── components/     # Reusable UI components and feature-specific components
├── constants/      # Static data and configuration constants
├── lib/            # Utility functions and database connections
├── models/         # Mongoose data models for MongoDB
├── schemas/        # Zod schemas for data validation
└── types/          # TypeScript type definitions
```

## 2. Key Features & Pages

### Authentication (`src/app/(auth)`)
- **Sign In & Sign Up**: Secure authentication using NextAuth.js.
- **Pages**: `SignIn.tsx`, `SignUp.tsx`.

### Course Management
- **Browse Courses**: Users can browse available courses.
  - **Page**: `src/app/courses`
  - **Components**: `CourseCard.tsx`, `CourseHomePage.tsx`, `CategoryPage.tsx`.
- **Course Details**: Detailed view of a specific course.
  - **Page**: `src/app/courses/[courseId]` (implied)
  - **Components**: `CoursePage.tsx`, `AccordionComponent.tsx` (for curriculum).
- **Add Course**: Admin/Instructor feature to create new courses.
  - **Page**: `src/app/add-course`
  - **Component**: `AddCourseForm.tsx`.

### User Dashboard
- **Profile Management**: View and edit user profile, change password.
  - **Pages**: `src/app/profile`, `src/app/edit-profile`, `src/app/change-password`.
  - **Components**: `EditProfile.tsx`, `ChangePassword.tsx`.
- **My Courses**: View purchased courses.
  - **Page**: `src/app/my-courses`.
  - **Component**: `UserPurchasedCourses.tsx`.
- **Wishlist**: Save courses for later.
  - **Page**: `src/app/wishlist`.
  - **Component**: `WishlistCourses.tsx`.
- **Purchase History**: View past transactions.
  - **Page**: `src/app/purchase-history`.
  - **Component**: `UserPurchaseHistory.tsx`.
- **My Learnings**: Track learning progress.
  - **Page**: `src/app/my-learnings`.

### UI Components (`src/components`)
The application uses a modern, responsive UI built with **Shadcn UI** and **Tailwind CSS**.
- **Layout**: `Appbar.tsx`, `Footer.tsx`.
- **Interactive Elements**: `Carousel.tsx`, `DropDownMenu.tsx`, `AlertDialogBox.tsx`.
- **Visual Effects**: `Background-Gradient.tsx`, `Card-hover-effect.tsx`, `infinite-moving-cards.tsx`.
- **Forms**: `AddCourseForm.tsx` (uses React Hook Form and Zod).

## 3. Data Models (`src/models`)

The application uses **MongoDB** with **Mongoose** for data persistence.

- **User (`User.ts`)**: Stores user information, authentication details, and role.
- **Course (`Course.ts`)**: Stores course metadata, content, pricing, and instructor details.
- **PurchaseHistory (`PurchaseHistory.ts`)**: Records user transactions and course enrollments.

## 4. API Routes (`src/app/api`)

Backend logic is handled via Next.js API routes, likely including:
- Authentication endpoints (NextAuth).
- Course CRUD operations.
- User profile updates.
- Payment processing (implied).

## 5. Styling

- **Tailwind CSS**: Utility-first styling.
- **Global Styles**: `src/app/globals.css`.
- **Theming**: Dark/Light mode support via `next-themes` (`ThemeSwitchButton.tsx`, `theme-provider.tsx`).
