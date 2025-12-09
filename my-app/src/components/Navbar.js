// Navbar.js
export default function Navbar() {
  return (
    <header
  className="flex justify-between items-center px-6 py-4 bg-brand-950 text-white shadow"
  style={{ width: '60%', marginLeft: '400px' }}
>
      <h1 className="text-xl font-bold">Analytics Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-black font-semibold">
          Upgrade
        </button>
        <div className="w-10 h-10 rounded-full bg-brand-400 text-black flex items-center justify-center font-bold">
          
        </div>
      </div>
    </header>
  );
}
