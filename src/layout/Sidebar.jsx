import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings as SettingsIcon,
  Layers,
  X,
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Users', path: '/users', icon: Users },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Settings', path: '/settings', icon: SettingsIcon },
]

export default function Sidebar({ mobileOpen = false, setMobileOpen = () => {} }) {
  const location = useLocation()

  const navContent = (
    <div className="flex flex-col h-full bg-slate-900 dark:bg-slate-950 text-slate-200 border-r border-slate-800 dark:border-slate-800/80 transition-colors">
      {/* Brand Header */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800 dark:border-slate-800/80">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            Nova<span className="text-blue-400">Analytics</span>
          </span>
        </div>
        {/* Mobile close button */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 md:hidden"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/70 dark:hover:bg-slate-800/90'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>

      {/* Footer / Status */}
      <div className="p-4 border-t border-slate-800 dark:border-slate-800/80">
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/60 dark:bg-slate-900/60 border border-slate-800 dark:border-slate-800/80">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div className="text-xs">
            <p className="font-medium text-slate-200">System Live</p>
            <p className="text-slate-400 text-[11px]">v1.0.0 Enterprise</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden md:flex flex-col fixed inset-y-0 left-0 w-64 z-30">
        {navContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-64 shadow-2xl z-50">
            {navContent}
          </aside>
        </div>
      )}
    </>
  )
}
