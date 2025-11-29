# Technical Architecture & Implementation Details

This document provides a comprehensive, deep-dive analysis of every page in the "Course's Academy" application. It details the technologies used, implementation logic, key functions, and component hierarchy for each route.

---

## 1. Global Architecture
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with a custom "Luminous Forge" design system (Deep Navy/Amber/Coral).
- **State Management**: React Hooks (`useState`, `useEffect`) and URL search params.
- **Authentication**: NextAuth.js (Credentials Provider).
- **Database**: MongoDB with Mongoose.

---

## 2. Page-by-Page Analysis

### A. Home Page (`src/app/page.tsx`)
**Route**: `/`
- **Purpose**: Landing page to attract users, showcase skills, testimonials, and featured courses.
- **Implementation**: Client Component (`"use client"`).
- **Key Components**:
  1.  **`LampComponent`** (`src/components/ui/lamp.tsx`):
      -   **Tech**: Framer Motion, Tailwind.
      -   **Function**: Creates the "Luminous Forge" hero section with a warm amber spotlight animation.
      -   **Logic**: Uses `motion.div` for initial ease-in-out animation of the lamp glow.
  2.  **`HoverEffect`** (`src/components/Card-hover-effect.tsx`):
      -   **Tech**: Framer Motion (`AnimatePresence`).
      -   **Function**: Displays a grid of skills.
      -   **Logic**: Tracks `hoveredIndex` state to render a moving gradient background behind the hovered card.
  3.  **`InfiniteMovingCards`** (`src/components/infinite-moving-cards.tsx`):
      -   **Tech**: CSS Animations (`@keyframes`), React Refs.
      -   **Function**: Auto-scrolling testimonials.
      -   **Logic**: Duplicates the list of items to create a seamless infinite loop effect.
  4.  **`AccordionComponent`** (`src/components/AccordionComponent.tsx`):
      -   **Tech**: Radix UI Accordion.
      -   **Function**: FAQ section.

### B. Courses Listing (`src/app/courses/page.tsx`)
**Route**: `/courses`
- **Purpose**: Browse all available courses.
- **Implementation**: Server Component (wrapper) -> Client Component (`CourseHomePage`).
- **Key Components**:
  1.  **`BackgroundBoxes`** (`src/components/Background-boxdemo.tsx`):
      -   **Tech**: Framer Motion.
      -   **Function**: Interactive background where boxes highlight on hover.
  2.  **`CourseHomePage`** (`src/components/CourseHomePage.tsx`):
      -   **Tech**: Axios, React Hooks.
      -   **Function**: Fetches and displays courses.
      -   **Logic**:
          -   `useEffect`: Calls `GET /api/all-courses` on mount.
          -   `useState`: Manages `courses` array and `isLoading` state.
          -   **Rendering**: Maps over `courses` to render `CourseCard`.
  3.  **`CourseCard`** (`src/components/CourseCard.tsx`):
      -   **Tech**: Next.js `Image`, Framer Motion.
      -   **Function**: Displays individual course info (thumbnail, title, price).
      -   **Logic**: "Glass-Steel" design with `group-hover` effects for lift and inner glow.

### C. Admin Dashboard (`src/app/admin/page.tsx`)
**Route**: `/admin`
- **Purpose**: Overview of system performance for administrators.
- **Implementation**: Client Component.
- **Key Components**:
  1.  **`AdminLayout`** (`src/app/admin/layout.tsx`):
      -   **Tech**: Next.js Layouts.
      -   **Function**: Provides the persistent sidebar navigation.
  2.  **Stats Cards**:
      -   **Tech**: Framer Motion (staggered entry).
      -   **Function**: Shows Revenue, Users, etc.
  3.  **Recent Activity Table**:
      -   **Tech**: Standard HTML Table with Tailwind styling.
      -   **Function**: Lists recent enrollments.

### D. Add Course (`src/app/add-course/page.tsx`)
**Route**: `/add-course`
- **Purpose**: Form for admins to create new courses.
- **Implementation**: Server Component (for protection) -> Client Component (`AddCourseForm`).
- **Security**:
    -   **Server-Side**: Checks `session.user.role === 'admin'`. Redirects if false.
- **Key Components**:
  1.  **`AddCourseForm`** (`src/components/AddCourseForm.tsx`):
      -   **Tech**: React Hook Form, Zod, Shadcn UI (`Form`, `Input`, `Select`).
      -   **Function**: Collects course data and submits to API.
      -   **Logic**:
          -   Uses `zodResolver` to validate input against `CourseSchema`.
          -   `onSubmit`: Sends POST request to `/api/add-course`.
          -   Handles loading state and toast notifications.

### E. Authentication Pages
**Routes**: `/sign-in`, `/sign-up`
- **Purpose**: User registration and login.
- **Implementation**: Client Components.
- **Key Components**:
  -   **`SignIn`** / **`SignUp`** components.
  -   **Logic**:
      -   **Sign Up**: POST to `/api/sign-up` to create a user in MongoDB.
      -   **Sign In**: Calls `signIn("credentials")` from `next-auth/react`.

### F. API Routes (`src/app/api/...`)
-   **`/api/add-course`**:
    -   **Method**: POST.
    -   **Logic**: Verifies Admin role -> Validates Zod schema -> Creates `Course` document.
-   **`/api/all-courses`**:
    -   **Method**: GET.
    -   **Logic**: Connects DB -> Fetches all courses -> Returns JSON.
-   **`/api/auth/[...nextauth]`**:
    -   **Logic**: Configures NextAuth with `CredentialsProvider`, `callbacks` for JWT and Session customization.

---

## 3. Key Reusable Components
-   **`Appbar`** (`src/components/Appbar.tsx`):
    -   **Features**: Sticky positioning, glassmorphism, conditional rendering (Login/Logout/Avatar).
    -   **Logic**: Checks `useSession()` to determine if user is logged in.
-   **`Footer`** (`src/components/Footer.tsx`):
    -   **Features**: Static links, branding, copyright info.

## 4. Design System ("Luminous Forge")
-   **Colors**: Defined in `globals.css` (CSS Variables).
    -   `--background`: Deep Navy.
    -   `--primary`: Amber (Glow).
    -   `--accent`: Coral (Heat).
-   **Typography**: `Outfit` (Headings) and `Inter` (Body).
-   **Effects**:
    -   `.glass-card`: Backdrop blur + border.
    -   `.text-heat`: Gradient text.
