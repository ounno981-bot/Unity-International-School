import React from 'react';
import { Users, GraduationCap, BookOpen, TrendingUp, Clock, Calendar } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Students', value: '1,284', icon: GraduationCap, color: 'bg-blue-500', trend: '+12%' },
    { label: 'Total Teachers', value: '84', icon: Users, color: 'bg-purple-500', trend: '+2%' },
    { label: 'Active Classes', value: '42', icon: BookOpen, color: 'bg-emerald-500', trend: '0%' },
    { label: 'Avg. Attendance', value: '94.2%', icon: TrendingUp, color: 'bg-orange-500', trend: '+1.5%' },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'enrolled in', target: 'Grade 10-A', time: '2 hours ago' },
    { id: 2, user: 'Sarah Smith', action: 'updated grades for', target: 'Mathematics', time: '4 hours ago' },
    { id: 3, user: 'Mike Ross', action: 'marked attendance for', target: 'Physics', time: '5 hours ago' },
    { id: 4, user: 'Emma Wilson', action: 'joined as new', target: 'Teacher', time: '1 day ago' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500">Welcome back, here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6">
            <div className="flex items-start justify-between">
              <div className={`${stat.color} p-3 rounded-xl text-white`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {stat.trend}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-slate-900">Recent Activity</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                  <Clock size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600">
                    <span className="font-bold text-slate-900">{activity.user}</span> {activity.action} <span className="font-semibold text-indigo-600">{activity.target}</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="glass-card p-6">
          <h3 className="font-bold text-lg text-slate-900 mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {[
              { title: 'Parent-Teacher Meeting', date: 'Mar 15, 2024', time: '09:00 AM' },
              { title: 'Spring Semester Exams', date: 'Mar 22, 2024', time: '08:30 AM' },
              { title: 'Annual Sports Day', date: 'Apr 05, 2024', time: '10:00 AM' },
            ].map((event, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3 text-indigo-600 mb-2">
                  <Calendar size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{event.date}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{event.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{event.time}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors">
            + Add New Event
          </button>
        </div>
      </div>
    </div>
  );
}
