import { Menu, Search, Bell, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Topbar({ onToggleMobileMenu = () => {} }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-20 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between transition-colors">
      {/* Left: Mobile Menu Toggle & Search Bar */}
      <div className="flex items-center gap-3 md:gap-4 flex-1 max-w-lg">
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="p-2 -ml-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search analytics, users, metrics..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Right: Actions, Notifications, Theme Toggle & User Avatar */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Quick Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle dark mode"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>

        {/* Notification Bell */}
        <button
          type="button"
          className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="View notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white dark:ring-slate-900" />
        </button>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-[1px] bg-slate-200 dark:border-slate-800" />

        {/* User Profile Avatar */}
        <div className="flex items-center gap-3 pl-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:ring-slate-900 rounded-full" />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight">
              Alex Morgan
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Platform Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
