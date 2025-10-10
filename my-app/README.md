Keystone Labs Logistics Dashboard

A project developed under LANFORTE Holdings (Keystone Tech Clinic)

 Overview

This dashboard is a React-based logistics analytics system designed to visualize key performance indicators ,
It was built from scratch using Create React App, Tailwind CSS, and Recharts, integrating a professional sidebar, navbar, KPI cards, and charts for live analytics simulation.

The goal is to model a real operational dashboard that can later connect to live API data from LANFORTE’s logistics, petroleum, or ESG systems.

 What’s Working So Far

Functional sidebar navigation — full height, fixed to the left, collapsible, with icons and hover effects.
Top navbar — shows the dashboard title (“Analytics Dashboard”) and a test action button (“Upgrade”).
Dashboard page layout — KPI cards arranged horizontally (Shipments, Warehouses, Vehicles).

Data visualizations using Recharts:

Line chart → Shipments over time

Bar chart → Vehicles in use vs idle

Pie chart → Delivery status breakdown (On Time, Delayed, Lost in Space)

Organized folder structure for components and pages.



 Folder Structure
my-app/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Navbar.js
│   │   └── DashboardCard.js
│   │
│   ├── Pages/
│   │   └── Dashboard.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── setupTests.js
│   └── reportWebVitals.js
│
├── package.json
└── README.md

 Layout Description

The dashboard runs inside a flex container with two main parts:

Sidebar → fixed width (200px), beige background, vertical menu

Main section → occupies the rest of the screen using flex-1

Navbar sits at the top of the main section.

Dashboard.js renders KPIs and charts.

Each chart uses Recharts’ responsive container so it scales well with window resizing.

 How To Run
# Clone the repo
git clone https://github.com/<your-username>/keystone-labs-dashboard.git
cd keystone-labs-dashboard

# Install dependencies
npm install

# Run locally
npm start

The dashboard  will open at: http://localhost:3000

Next Steps 

Add authentication (Admin / Analyst / Viewer).

Implement data export (PDF, CSV).

Build mobile responsiveness for field users.


