import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Apr", revenue: 42000 },
  { month: "May", revenue: 52000 },
  { month: "Jun", revenue: 48000 },
  { month: "Jul", revenue: 65000 },
  { month: "Aug", revenue: 72000 },
  { month: "Sep", revenue: 84500 },
]

function RevenueChart() {
  return (
    <div className="revenue-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis
           tickFormatter={(value) => `₹${value / 1000}K`}
         />

          <Tooltip
            formatter={(value) => `₹${value.toLocaleString()}`}
         />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart