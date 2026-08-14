import React, { useState, useEffect } from 'react';
import { useEnquiry } from '../context/EnquiryContext';

export default function EnquiryForm() {
  const { addEnquiry, editId,setEditId, enquiries, updateEnquiry} = useEnquiry();

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

  useEffect(() => {
    if (editId !== null && editId !== undefined) {
      const existingData = enquiries.find((item) => item.id == editId);
      if (existingData) {
        setFormData({
          name: existingData.name || '',
          email: existingData.email || '',
          phone: existingData.phone || '',
          tour: existingData.tour || existingData.property || '',
          budget: existingData.budget || '',
          message: existingData.message || ''
        });
      }
    } else {
      setFormData(initialFormState);
    }
  }, [editId, enquiries]);

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

    if(editId !== null && editId !== undefined){
      updateEnquiry(editId, formData);
    } else{
      addEnquiry(formData);
    }
    
    // Form Reset 
    setFormData(initialFormState);
  };

  return (
    <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 w-full">
      <h2 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2 border-b pb-2 text-slate-800">📋 Enquiry Form</h2>
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
            className="w-full p-2.5 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2.5 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2.5 sm:p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2.5 sm:p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Budget (in INR)</label>
          <input
            type="text"
            name="budget"
            placeholder="Enter budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full p-2.5 sm:p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-2.5 sm:p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full text-white font-semibold py-2.5 rounded-md shadow transition ${
            editId !== null 
              ? 'bg-amber-500 hover:bg-amber-600' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {editId !== null ? '✏️ Update Enquiry' : '✈️ Submit Enquiry'}
        </button>
      </form>
    </div>
  );
}