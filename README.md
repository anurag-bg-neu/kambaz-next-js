# Kambaz LMS

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)

> **Live UI Demo →** <https://anurag-bg-kambaz.vercel.app>

NextJS & React frontend for **Kambaz** — a full-stack web application built to simulate an online **Learning Management System**.

## Features

- Authentication flow — sign up, sign in, profile management
- Dashboard with responsive course grid (Bootstrap 5)
- Nested dynamic routes for courses, modules, and assignments
- Full CRUD UI — create, edit, and delete modules and assignments
- Role-aware navigation (Faculty, Student, TA, Admin)
- Educational labs covering CSS, Bootstrap, layout systems, and React Icons

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 15 (App Router + Turbopack) |
| Language    | TypeScript 5 (strict)               |
| UI Library  | React 19                            |
| Styling     | Bootstrap 5 + React Bootstrap       |
| Icons       | React Icons 5                       |
| HTTP Client | Axios                               |
| Linting     | ESLint 9 (Next.js ruleset)          |

## Local Development

```bash
git clone https://github.com/anurag-bg-neu/kambaz-next-js.git
cd kambaz-next-js
npm install
npm run dev          # Turbopack dev server — http://localhost:3000
```

> Requires Node.js 18+ and the [Kambaz Node Server](https://github.com/anurag-bg-neu/kambaz-node-server-app) running on `http://localhost:4000`.

## Production Deployment

Deployed on **Vercel** at [Kambaz Client UI](https://anurag-bg-kambaz.vercel.app). On each push to `main`, Vercel runs:

| Step  | Command                                     |
|-------|---------------------------------------------|
| Build | `npm run build` → `next build --turbopack`  |
| Start | Served automatically by Vercel edge network |

## Environment Variables

Create `.env.development` in the project root:

```text
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
```

## Key Routes

| Route                            | Description                     |
|----------------------------------|---------------------------------|
| `/Account/Signin`                | Login page (default redirect)   |
| `/Account/Signup`                | Registration                    |
| `/Account/Profile`               | User profile & settings         |
| `/Dashboard`                     | All enrolled courses grid       |
| `/Courses/:cid/Home`             | Course overview & status        |
| `/Courses/:cid/Modules`          | Module list with inline editing |
| `/Courses/:cid/Assignments`      | Assignment list                 |
| `/Courses/:cid/Assignments/:aid` | Assignment detail & editor      |
| `/Courses/:cid/Grades`           | Grades view                     |
| `/Labs`                          | Interactive CSS & React labs    |

## Project Structure

```text
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
