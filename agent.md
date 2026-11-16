# Frontend Rules for SaaS Analytics Dashboard

## Tech Stack
- Framework: React.js (Vite)
- Styling: Tailwind CSS
- Charts: Recharts
- Icons: lucide-react
- Routing: React Router DOM

## Architecture & Coding Standards
- UI Design: Clean, enterprise-grade admin dashboard layout. Must include a fixed sidebar navigation and a top header.
- State Management: Implement a global Dark/Light mode toggle using React Context or local state with Tailwind's `dark:` classes.
- Data Visualization: Use `Recharts` to build responsive line charts (for revenue trends) and bar charts (for user analytics) using realistic dummy JSON data.
- Modularity: Keep layout components (Sidebar, Topbar) separate from page components (DashboardHome, UsersTable).