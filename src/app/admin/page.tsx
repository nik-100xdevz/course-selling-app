"use client";

import { motion } from "framer-motion";
import { 
  DollarSign, 
  Users, 
  BookOpen, 
  TrendingUp,
  MoreHorizontal,
  ArrowUpRight
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: "Active Students",
      value: "2,350",
      change: "+180 new this week",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Active Courses",
      value: "12",
      change: "+2 new courses",
      icon: BookOpen,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      label: "Completion Rate",
      value: "84.5%",
      change: "+4% from last month",
      icon: TrendingUp,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
  ];

  const recentSales = [
    {
      user: "Alice Johnson",
      email: "alice@example.com",
      amount: "+$499.00",
      course: "Full Stack Bootcamp",
      status: "Completed",
    },
    {
      user: "Mark Smith",
      email: "mark@example.com",
      amount: "+$299.00",
      course: "UI/UX Masterclass",
      status: "Processing",
    },
    {
      user: "Sarah Williams",
      email: "sarah@example.com",
      amount: "+$199.00",
      course: "Python for Beginners",
      status: "Completed",
    },
    {
      user: "James Brown",
      email: "james@example.com",
      amount: "+$599.00",
      course: "Data Science A-Z",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-['Outfit'] text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">Overview of your academy's performance.</p>
        </div>
        <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
          <ArrowUpRight size={18} />
          Generate Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Sales Table */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Enrollments</h2>
            <button className="text-sm text-amber-500 hover:text-amber-400">View All</button>
          </div>
          
          <div className="space-y-4">
            {recentSales.map((sale, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    {sale.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{sale.user}</p>
                    <p className="text-xs text-slate-400">{sale.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{sale.amount}</p>
                  <p className="text-xs text-slate-400">{sale.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Notifications */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
              <BookOpen size={18} /> Add New Course
            </button>
            <button className="w-full p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
              <Users size={18} /> Manage Users
            </button>
            <button className="w-full p-3 rounded-xl bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2">
              <Settings size={18} /> System Settings
            </button>
          </div>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Server Status</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Operational
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Database</span>
              <span className="text-emerald-400">Connected</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Last Backup</span>
              <span className="text-white">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
