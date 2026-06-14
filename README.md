# Kambaz LMS

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)

Full-stack **Learning Management System** frontend built with Next.js 15 App Router — a Kambaz clone developed for Northeastern University's CS5610 Web Development course.

## Features

- Authentication flow — sign up, sign in, profile management
- Dashboard with responsive course grid (Bootstrap 5)
- Nested dynamic routes for courses, modules, and assignments
- Full CRUD UI — create, edit, and delete modules and assignments
- Role-aware navigation (Faculty, Student, TA, Admin)
- Educational labs covering CSS, Bootstrap, layout systems, and React Icons

## Tech Stack

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Framework    | Next.js 15 (App Router + Turbopack)     |
| Language     | TypeScript 5 (strict)                   |
| UI Library   | React 19                                |
| Styling      | Bootstrap 5 + React Bootstrap           |
| Icons        | React Icons 5                           |
| HTTP Client  | Axios                                   |
| Linting      | ESLint 9 (Next.js ruleset)              |

## Quick Start

```bash
git clone https://github.com/anurag-bg-neu/kambaz-next-js.git
cd kambaz-next-js
npm install
npm run dev          # starts on http://localhost:3000
```

> **Requires** Node.js 18+ and the [Kambaz Node Server](https://github.com/anurag-bg-neu/kambaz-node-server-app) running on port 4000.

## Environment Variables

Create `.env.development` in the project root:

```env
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
```

## Key Routes

| Route                              | Description                      |
|------------------------------------|----------------------------------|
| `/Account/Signin`                  | Login page (default redirect)    |
| `/Account/Signup`                  | Registration                     |
| `/Account/Profile`                 | User profile & settings          |
| `/Dashboard`                       | All enrolled courses grid        |
| `/Courses/:cid/Home`               | Course overview & status         |
| `/Courses/:cid/Modules`            | Module list with inline editing  |
| `/Courses/:cid/Assignments`        | Assignment list                  |
| `/Courses/:cid/Assignments/:aid`   | Assignment detail & editor       |
| `/Courses/:cid/Grades`             | Grades view                      |
| `/Labs`                            | Interactive CSS & React labs     |

## Project Structure

```
kambaz-next-js/
├── app/
│   ├── (Kambaz)/               # Route group — LMS application
│   │   ├── Account/            # Auth pages (Signin, Signup, Profile)
│   │   ├── Dashboard/          # Course grid + cards
│   │   ├── Courses/[cid]/      # Dynamic course routes
│   │   │   ├── Home/
│   │   │   ├── Modules/
│   │   │   ├── Assignments/[aid]/
│   │   │   ├── Grades/
│   │   │   └── People/
│   │   └── Navigation.tsx      # Global sidebar
│   ├── Labs/                   # Educational lab exercises
│   │   ├── Lab1/ Lab2/ Lab3/
│   │   └── TOC.tsx
│   ├── layout.tsx              # Root layout (Bootstrap CSS, Geist font)
│   └── page.tsx                # Redirects → /Account/Signin
├── public/images/              # Static assets
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Scripts

```bash
npm run dev      # Turbopack dev server — http://localhost:3000
npm run build    # Production build (Turbopack)
npm run start    # Serve production build
npm run lint     # ESLint
```

## License

MIT © [Anurag Bheemappa Gnanamurthy](https://github.com/anurag-bg-neu)
