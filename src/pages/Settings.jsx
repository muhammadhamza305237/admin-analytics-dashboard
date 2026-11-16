import { Sun, Moon, Check, Monitor, Bell, Shield, Sparkles } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Settings() {
  const { theme, setTheme, toggleTheme } = useTheme()

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Platform Settings
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Customize your workspace interface, theme preferences, and account controls.
        </p>
      </div>

      {/* Theme & Appearance Section */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Appearance & Theme
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Choose how NovaAnalytics looks to you. Switch dynamically between Light and Dark mode.
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Theme Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Light Mode Card */}
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`p-4 rounded-xl border-2 text-left transition-all relative flex flex-col gap-3 ${
                theme === 'light'
                  ? 'border-blue-600 bg-blue-50/40 dark:bg-slate-800/80 ring-2 ring-blue-600/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
                  <Sun className="w-5 h-5" />
                </div>
                {theme === 'light' && (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  Light Theme
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Clean white slate palette with crisp text contrast.
                </p>
              </div>
            </button>

            {/* Dark Mode Card */}
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`p-4 rounded-xl border-2 text-left transition-all relative flex flex-col gap-3 ${
                theme === 'dark'
                  ? 'border-blue-600 bg-blue-950/20 dark:bg-slate-800/80 ring-2 ring-blue-600/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-slate-800 text-blue-400 dark:bg-blue-900/40 dark:text-blue-300">
                  <Moon className="w-5 h-5" />
                </div>
                {theme === 'dark' && (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">
                  Dark Theme
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Deep modern slate background for reduced eye strain.
                </p>
              </div>
            </button>
          </div>

          {/* Quick Toggle Switch Bar */}
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-white dark:bg-slate-700 shadow-xs text-slate-700 dark:text-slate-200">
                {theme === 'dark' ? (
                  <Moon className="w-4 h-4 text-blue-400" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Quick Toggle Switch
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Currently active: <span className="capitalize font-semibold text-blue-600 dark:text-blue-400">{theme} Mode</span>
                </p>
              </div>
            </div>

            {/* Toggle switch button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                theme === 'dark' ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Workspace Preferences (Mock Enterprise Configuration) */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Workspace Configuration
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Organization Name
            </label>
            <input
              type="text"
              defaultValue="NovaAnalytics Corp"
              readOnly
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Primary Timezone
            </label>
            <select
              defaultValue="UTC"
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200"
            >
              <option value="UTC">UTC (Universal Time)</option>
              <option value="EST">EST (Eastern Standard Time)</option>
              <option value="PST">PST (Pacific Standard Time)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
