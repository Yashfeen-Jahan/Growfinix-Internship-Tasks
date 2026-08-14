import React from 'react';
import { useEnquiry } from '../context/EnquiryContext';

export default function EnquiryTable() {
  const { enquiries, searchTerm, statusFilter, deleteEnquiry, setEditId } = useEnquiry();

  // Search and Filter Logic
  const filteredData = enquiries.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tour.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All Status' || statusFilter === ''?
      true
      :item.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-amber-100 text-amber-700';
      case 'Closed':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg border overflow-x-auto shadow-sm">
      <table className="w-full text-left text-xs min-w-[600px] ">
        <thead className="bg-[#0b1e3f] text-white">
          <tr>
            <th className="p-3 whitespace-nowrap">#</th>
            <th className="p-3 whitespace-nowrap">Name</th>
            <th className="p-3 whitespace-nowrap">Email</th>
            <th className="p-3 whitespace-nowrap">Phone</th>
            <th className="p-3 whitespace-nowrap">Tour</th>
            <th className="p-3 whitespace-nowrap">Budget</th>
            <th className="p-3 whitespace-nowrap">Status</th>
            <th className="p-3 text-center whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold whitespace-nowrap">{index + 1}</td>
              <td className="p-3 font-medium whitespace-nowrap">{item.name}</td>
              <td className="p-3 text-gray-500 whitespace-nowrap">{item.email}</td>
              <td className="p-3 text-gray-500 whitespace-nowrap">{item.phone}</td>
              <td className="p-3 whitespace-nowrap">{item.tour || item.property}</td>
              <td className="p-3 font-medium whitespace-nowrap">₹{item.budget}</td>
              <td className="p-3 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${getStatusBadge(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td className="p-3 text-center space-x-2 whitespace-nowrap">
                <button
                  onClick={() =>
                    setEditId(item.id)}
                  className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600"
                >
                  ✏️
                </button>
                <button
                  onClick={() =>
                    deleteEnquiry(item.id)}
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}