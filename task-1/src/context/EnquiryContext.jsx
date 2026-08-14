import { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  // Initial sample data from image
  const [enquiries, setEnquiries] = useState([
    { id: 1, name: 'Aman Verma', email: 'aman@gmail.com', phone: '9876543210', tour: 'Goa Tour Package', budget: '50,000', status: 'New' },
    { id: 2, name: 'Neha Sharma', email: 'neha@gmail.com', phone: '9123456780', tour: 'Kerala Tour', budget: '45,000', status: 'In Progress' },
    { id: 3, name: 'Rohit Singh', email: 'rohit@gmail.com', phone: '9988776655', tour: 'Manali Tour', budget: '30,000', status: 'New' },
    { id: 4, name: 'Priya Patel', email: 'priya@gmail.com', phone: '9898989898', tour: '2 BHK Flat', budget: '25,000,000', status: 'In Progress' },
    { id: 5, name: 'Karan Mehta', email: 'karan@gmail.com', phone: '9009122334', tour: '3 BHK Flat', budget: '40,50,000', status: 'Closed' },
    { id: 6, name: 'Sneha Reddy', email: 'snehareddy@gamil.com', phone: '9090906789', tour: 'Dubai Tour', budget: '80,000', status: 'New'},
    { id: 7, name: 'Vivek Joshi', email: 'vivekjoshi@gamil.com', phone: '9234567891', tour: 'Switzerland Tour', budget: '1,20,000', status: 'Closed' },
    { id: 8, name: 'Anjali Gupta', email: 'anjaligupta@gmail.com', phone: '9812345678', tour: 'Villa in Jaipur', budget: '60,00,000', status: 'In Progress'}
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [editId, setEditId] = useState(null);

  // 1. New Enquiry Add karna
  const addEnquiry = (newEnquiry) => {
    setEnquiries([...enquiries, { ...newEnquiry, id: Date.now(), status: 'New' }]);
  };

  // 2. Enquiry Delete karna
  const deleteEnquiry = (id) => {
    setEnquiries(enquiries.filter((item) => item.id !== id));
  };

  // 3. Enquiry Edit/Update 
  const updateEnquiry = (id, updatedItem) => {
    setEnquiries((prev) => 
      prev.map((item) =>{
        if(item.id == id) {
          return{
            ...item,
            ...updatedItem,
            property: updatedItem.tour || item.property,
            tour: updatedItem.tour || item.tour
          }
        }
        return item;
      })  
    );
    setEditId(null);
  };

  return (
    <EnquiryContext.Provider value={{
      enquiries,
      addEnquiry,
      deleteEnquiry,
      updateEnquiry,
      searchTerm,
      setSearchTerm,
      statusFilter,
      setStatusFilter,
      editId,
      setEditId
    }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => useContext(EnquiryContext);