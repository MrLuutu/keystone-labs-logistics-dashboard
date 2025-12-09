

// DashboardCard.js
export default function StatCard({ title, value, hint }) {
  return (
    <div className="p-6 rounded-lg shadow-md border border-brand-400 bg-white hover:shadow-lg transition">
      <h3 className="text-sm text-brand-700">{title}</h3>
      <p className="text-2xl font-bold text-brand-900">{value}</p>
      {hint ? <p className="text-xs text-brand-700/70 mt-1">{hint}</p> : null}
    </div>
  );
}
