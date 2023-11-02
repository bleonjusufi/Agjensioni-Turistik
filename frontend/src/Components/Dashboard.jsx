import './CSS/dashboard.css';
import Topbar from './Topbar/topbar';
import Sidebar from './sidebar/Sidebar';
import DashHome from './dashHome/dashHome';
//import UsersList from './dashPages/userList/usersList';



function Dashboard() {
    return (
        <>
        <div className="dash-container">
            <Topbar/>
            <div className='dashboardContainer'>
                <Sidebar/>
                 <DashHome/>  
                
            </div>
        </div>
        
        </>
    );
}

export default Dashboard;