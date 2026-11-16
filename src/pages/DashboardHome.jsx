import {
  DollarSign,
  Users,
  TrendingUp,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const stats = [
  {
    title: 'Total Revenue',
    value: '$128,430',
    change: '+14.2%',
    trend: 'up',
    timeframe: 'vs last month',
    icon: DollarSign,
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400',
  },
  {
    title: 'Active Users',
    value: '14,825',
    change: '+8.1%',
    trend: 'up',
    timeframe: 'vs last month',
    icon: Users,
    color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400',
  },
  {
    title: 'New Subscriptions',
    value: '2,450',
    change: '+23.6%',
    trend: 'up',
    timeframe: 'vs last month',
    icon: TrendingUp,
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400',
  },
  {
    title: 'Churn Rate',
    value: '1.8%',
    change: '-0.4%',
    trend: 'down',
    timeframe: 'vs last month',
    icon: Activity,
    color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400',
  },
]

const monthlyData = [
  { month: 'Jan', revenue: 45000, target: 40000 },
  { month: 'Feb', revenue: 52000, target: 46000 },
  { month: 'Mar', revenue: 49000, target: 50000 },
  { month: 'Apr', revenue: 63000, target: 58000 },
  { month: 'May', revenue: 78000, target: 66000 },
  { month: 'Jun', revenue: 85000, target: 74000 },
  { month: 'Jul', revenue: 94000, target: 82000 },
  { month: 'Aug', revenue: 91000, target: 88000 },
  { month: 'Sep', revenue: 105000, target: 96000 },
  { month: 'Oct', revenue: 112000, target: 104000 },
  { month: 'Nov', revenue: 121000, target: 112000 },
  { month: 'Dec', revenue: 128430, target: 120000 },
]

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time analytics and revenue performance metrics for NovaAnalytics.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
          <span>Period:</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Current Fiscal Year
          </span>
        </div>
      </div>

      {/* Grid of 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon
          const isUp = stat.trend === 'up'
          return (
            <div
              key={stat.title}
              className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </span>
                <div className={`p-2.5 rounded-lg ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span
                    className={`inline-flex items-center text-xs font-semibold ${
                      isUp
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {isUp ? (
                      <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                    ) : (
                      <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
                    )}
                    {stat.change}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">
                    {stat.timeframe}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recharts LineChart Section */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Revenue & Growth Trends
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Monthly actual revenue vs projected target ($ in thousands)
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                Actual Revenue
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-400" />
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                Target
              </span>
            </div>
          </div>
        </div>

        {/* Responsive Line Chart */}
        <div className="w-full h-80 pt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={monthlyData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-slate-200 dark:stroke-slate-800"
              />
              <XAxis
                dataKey="month"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `$${val / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderColor: '#334155',
                  borderRadius: '0.5rem',
                  color: '#f8fafc',
                  fontSize: '12px',
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, '']}
              />
              <Legend verticalAlign="top" height={36} wrapperStyle={{ display: 'none' }} />
              <Line
                type="monotone"
                dataKey="revenue"
                name="Actual Revenue"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 4, fill: '#2563eb' }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                name="Target"
                stroke="#94a3b8"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
