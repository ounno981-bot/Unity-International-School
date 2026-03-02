import React, { useState } from 'react';
import { Search, Plus, Filter, Mail, Trash2, Edit2, Book } from 'lucide-react';
import { Teacher } from '../types';

const MOCK_TEACHERS: Teacher[] = [
  { id: '1', name: 'Dr. Sarah Smith', email: 'sarah.s@school.edu', subject: 'Mathematics', status: 'active', avatar: 'https://picsum.photos/seed/sarah/40/40' },
  { id: '2', name: 'Prof. James Wilson', email: 'james.w@school.edu', subject: 'Physics', status: 'active', avatar: 'https://picsum.photos/seed/james/40/40' },
  { id: '3', name: 'Ms. Emily Brown', email: 'emily.b@school.edu', subject: 'English Literature', status: 'on-leave', avatar: 'https://picsum.photos/seed/emily/40/40' },
  { id: '4', name: 'Mr. Robert Taylor', email: 'robert.t@school.edu', subject: 'History', status: 'active', avatar: 'https://picsum.photos/seed/robert/40/40' },
];

export default function Teachers() {
  const [teachers] = useState<Teacher[]>(MOCK_TEACHERS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeachers = teachers.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Teacher Faculty</h1>
          <p className="text-slate-500">Manage faculty members and their assigned subjects.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
          <Plus size={20} />
          <span>Add Teacher</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="glass-card p-6 group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={teacher.avatar} 
                  alt={teacher.name} 
                  className="w-14 h-14 rounded-2xl border border-slate-200 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{teacher.name}</h3>
                  <p className="text-xs text-slate-500">{teacher.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-600">
                <Book size={16} className="text-indigo-500" />
                <span className="text-sm font-medium">{teacher.subject}</span>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                teacher.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {teacher.status === 'active' ? 'Active' : 'On Leave'}
              </span>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/student-${i}/24/24`} 
                    className="w-6 h-6 rounded-full border-2 border-white"
                    alt="Student"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                  +12
                </div>
              </div>
              <button className="text-xs font-bold text-indigo-600 hover:underline">View Schedule</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
