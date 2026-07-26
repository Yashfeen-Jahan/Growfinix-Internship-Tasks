import React, { useState } from 'react';
import { useEnquiry } from '../context/EnquiryContext';

export default function EnquiryForm() {
  const { addEnquiry } = useEnquiry();

  // Initial Form State
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    tour: '',
    budget: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  // Common Change Handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add enquiry to context
    addEnquiry(formData);

    // Form Reset karna
    setFormData(initialFormState);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b pb-2">📋 Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name" 
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter 10 digit number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Tour Name</label>
          <input
            type="text"
            name="tour"
            placeholder="Enter tour Name"
            value={formData.tour}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Budget (in INR)</label>
          <input
            type="number"
            name="budget"
            placeholder="Enter budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            rows="3"
            name="message"
            placeholder="Write message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md shadow transition"
        >
          ✈️ Submit Enquiry
        </button>
      </form>
    </div>
  );
}