import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import MainLayout from './layout/MainLayout'
import DashboardHome from './pages/DashboardHome'
import UsersList from './pages/UsersList'
import Settings from './pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="users" element={<UsersList />} />
            <Route
              path="analytics"
              element={
                <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Analytics
                  </h1>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Detailed analytics and conversion breakdown coming soon.
                  </p>
                </div>
              }
            />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
