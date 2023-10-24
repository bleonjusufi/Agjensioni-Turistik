import './CSS/dashboard.css';
import Topbar from './Topbar/topbar'
import Sidebar from './sidebar/Sidebar';
import DashHome from './dashHome/dashHome';




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
    )
}

export default Dashboard
