
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import StatCard from "../components/DashboardCard";

const shipmentData = [
  { month: "Jan", shipments: 180 },
  { month: "Feb", shipments: 300 },
  { month: "Mar", shipments: 250 },
  { month: "Apr", shipments: 400 },
  { month: "May", shipments: 330 },
  { month: "Jun", shipments: 500 },
];

const vehicleData = [
  { type: "In Use", count: 90 },
  { type: "Idle", count: 30 },
];

const statusData = [
  { status: "On Time", value: 75 },
  { status: "Delayed", value: 20 },
  { status: "Lost in Space", value: 5 },
];

const COLORS = ["#10B981", "#FBBF24", "#EF4444"];

export default function Dashboard() {
  return (
    <div
      className="p-6 space-y-8 bg-gray-50 min-h-screen"
      style={{ width: '80%', marginLeft: '200px' }}
    >
      {/* KPI Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-6 ml-6">
          <div className="text-center" style={{ width: '200px' }}>
            <h3 className="text-sm font-semibold text-gray-700">Shipments (Today)</h3>
            <p className="text-lg font-bold">1,240</p>
          </div>
          <div
            className="text-center"
            style={{ marginTop: '-76px', marginLeft: '290px' }}
          >
            <h3 className="text-sm font-semibold text-gray-700">Warehouses</h3>
            <p className="text-lg font-bold">18</p>
          </div>
          <div
            className="text-center"
            style={{ marginTop: '-76px', marginLeft: '590px' }}
          >
            <h3 className="text-sm font-semibold text-gray-700">Vehicles (Total)</h3>
            <p className="text-lg font-bold">120</p>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div
        className="bg-white shadow rounded-lg p-6"
        style={{ width: '500px', marginTop: '50px' }}
      >
        <h3 className="text-lg font-semibold mb-4">Shipments Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={shipmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="shipments" stroke="#10B981" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div
        className="bg-white shadow rounded-lg p-6"
        style={{ marginTop: '-358px', marginLeft: '500px', width: '460px' }}
      >
        <h3 className="text-lg font-semibold mb-4">Vehicles In Use vs Idle</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={vehicleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Delivery Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="status"
              outerRadius={120}
              label
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
