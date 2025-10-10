// import { useState } from "react";
// import { FiMenu, FiHome, FiTruck, FiBox, FiBarChart2, FiSettings } from "react-icons/fi";
//  import "../App.css"; 

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`${
//           isOpen ? "w-64" : "w-20"
//         } bg-gradient-to-b from-brand-950 to-brand-700 text-white min-h-screen transition-all duration-300`}
//       >
//         {/* Toggle Button */}
//         <div className="flex justify-between items-center p-4">
//           <span className={`${!isOpen && "hidden"} text-xl font-bold`}>
//             Keystone Labs
//           </span>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white"
//           >
//             <FiMenu size={20} />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <nav className="mt-6 flex flex-col space-y-4">
//           <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//             <FiHome size={20} /> {isOpen && "Dashboard"}
//           </a>
//           <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//             <FiTruck size={20} /> {isOpen && "Shipments"}
//           </a>
//           <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//             <FiBox size={20} /> {isOpen && "Inventory"}
//           </a>
//           <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//             <FiBarChart2 size={20} /> {isOpen && "Analytics"}
//           </a>
//           <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//             <FiSettings size={20} /> {isOpen && "Settings"}
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// // Sidebar.js
// import { useState } from "react";
// import { FiMenu, FiHome, FiTruck, FiBox, FiBarChart2, FiSettings } from "react-icons/fi";
// import "../App.css";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <aside
//       className={`${
//         isOpen ? "w-64" : "w-20"
//       } bg-gradient-to-b from-brand-950 to-brand-700 text-white min-h-screen transition-all duration-300`}
//     >
//       {/* Toggle */}
//       <div className="flex justify-between items-center p-4">
//         <span className={`${!isOpen && "hidden"} text-xl font-bold`}>Keystone Labs</span>
//         <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//           <FiMenu size={20} />
//         </button>
//       </div>

//       {/* Menu */}
//       <nav className="mt-6 flex flex-col space-y-2">
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//           <FiHome size={20} /> {isOpen && "Dashboard"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//           <FiTruck size={20} /> {isOpen && "Shipments"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//           <FiBox size={20} /> {isOpen && "Inventory"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//           <FiBarChart2 size={20} /> {isOpen && "Analytics"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-brand-600 rounded">
//           <FiSettings size={20} /> {isOpen && "Settings"}
//         </a>
//       </nav>
//     </aside>
//   );
// }


// import { useState } from "react";
// import { FiMenu, FiHome, FiTruck, FiBox, FiBarChart2, FiSettings } from "react-icons/fi";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div
//       className={`${
//         isOpen ? "w-64" : "w-20"
//       } bg-gradient-to-b from-gray-950 to-gray-800 min-h-screen text-white transition-all duration-300 flex flex-col`}
//     >
//       {/* Toggle */}
//       <div className="flex justify-between items-center p-4">
//         {isOpen && <h1 className="text-lg font-bold">Keystone Labs</h1>}
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <FiMenu />
//         </button>
//       </div>

//       {/* Nav Items */}
//       <nav className="flex flex-col mt-6 space-y-4">
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded">
//           <FiHome /> {isOpen && "Dashboard"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded">
//           <FiTruck /> {isOpen && "Shipments"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded">
//           <FiBox /> {isOpen && "Inventory"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded">
//           <FiBarChart2 /> {isOpen && "Analytics"}
//         </a>
//         <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded">
//           <FiSettings /> {isOpen && "Settings"}
//         </a>
//       </nav>
//     </div>
//   );
// }

import { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiTruck,
  FiBox,
  FiBarChart2,
  FiSettings,
  FiMail,
} from "react-icons/fi";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FiHome size={20} /> },
    { name: "Orders", icon: <FiBox size={20} /> },
    { name: "Shipments", icon: <FiTruck size={20} /> },
    { name: "Reports", icon: <FiBarChart2 size={20} /> },
    { name: "Messages", icon: <FiMail size={20} />, badge: 4 },
    { name: "Settings", icon: <FiSettings size={20} /> },
  ];

  return (
<div
  className="h-full bg-black text-white p-6 flex flex-col"
  style={{ width: '200px', height: '780px', backgroundColor: 'beige' }}
>
         {/* Toggle Button */}
      <button onClick={() => {}} className="text-white mb-8">
        <FiMenu size={24} />
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer transition
              ${
                active === item.name
                  ? "bg-lime-400 text-black font-semibold"
                  : "hover:bg-gray-800"
              }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.name}</span>
            </div>

            {/* Badge */}
            {item.badge && (
              <span className="bg-lime-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
