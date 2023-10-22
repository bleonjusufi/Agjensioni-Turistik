import './CSS/dashboard.css';
import { Space } from "antd";
import DashHeader from "../Components/dashHeader";
import DashSidebar from "../Components/dashSidebar";
import DashContent from "../Components/dashContent";
import DashFooter from "../Components/dashFooter";


function Dashboard() {
    return (
        <>
        <div className="dash-container">
            <DashHeader />
            <Space className='SideMenuAndPageContent'>
                <DashSidebar></DashSidebar>
                <DashContent></DashContent>
            </Space>
            <DashFooter/>
        </div>
        
        </>
    )
}

export default Dashboard
