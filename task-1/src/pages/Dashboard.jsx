import Navbaar from "../components/Navbaar";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryTable from "../components/EnquiryTable";

function Dashboard(){
    return(
        <>
        <Navbaar />

        <div className="min-h-screen bg-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EnquiryForm />
                <EnquiryTable />
            </div>
        </div>
        </>
    );
}

export default Dashboard;