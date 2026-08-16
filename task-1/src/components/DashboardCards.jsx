import React from 'react';
import { useEnquiry } from '../context/EnquiryContext';

export default function DashboradCards() {
  const { enquiries } = useEnquiry();

  const total = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'New').length;
  const inProgress = enquiries.filter(e => e.status === 'In Progress').length;
  const closed = enquiries.filter(e => e.status === 'Closed').length;

  const stats = [
    { label: "Total Enquiries", count: total, bg: "bg-blue-50", text: "text-blue-900", border: "border-blue-200" },
    { label: "New Enquiries", count: newCount, bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200" },
    { label: "In Progress", count: inProgress, bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200" },
    { label: "Closed", count: closed, bg: "bg-purple-50", text: "text-purple-900", border: "border-purple-200" }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {stats.map((item, idx) => (
        <div key={idx} className={`${item.bg} border ${item.border} p-3 md:p-4 rounded-xl shadow-sm flex flex-col justify-center transition-transform hover:scale-[1.02]`}>
          <p className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${item.text}`}>{item.count}</p>
          <p className="text-xs font-semibold text-gray-600 mt-1 leading-tight truncate">{item.label}</p>
        </div>
      ))}
    </div>
  );
}