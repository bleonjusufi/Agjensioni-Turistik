import './CSS/dashboard.css';
import Topbar from './Topbar/topbar'
import Sidebar from './sidebar/Sidebar';





function Dashboard() {
    return (
        <>
        <div className="dash-container">
            <Topbar/>
            <div className='dashboardContainer'>
                <Sidebar/>
                <div className='others'>other pages</div>
            </div>
        </div>
        
        </>
    )
}

export default Dashboard
