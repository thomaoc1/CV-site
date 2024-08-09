import './PageStyle.css'
import SidePanel from "../SidePanel/SidePanel.tsx";
import ResumeContainer from "../Resume/ResumeContainer.tsx";
import { useState } from "react";
import {useSwipeable} from "react-swipeable";

function Page() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (isSidebarOpen) {
                setSidebarOpen(false);
            }
        },
        onSwipedRight: () => {
            if (!isSidebarOpen) {
                setSidebarOpen(true);
            }
        },
    })

    const onContainerClicked = () => {
        if (isSidebarOpen) {
            setSidebarOpen(false);
        }
    }

    return (
        <div className='page' {...handlers}>
            <div className='top-bar'>
                <button className='invisible-button' onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <img className={`side-menu-icon ${isSidebarOpen ? 'move' :''}`} src='icons/side-menu-icon.png' alt='side-menu'/>
                </button>
            </div>
            <div className='main-page-content'>
                <SidePanel isOpen={isSidebarOpen}/>
                <ResumeContainer isSidebarOpen={isSidebarOpen} onContainerClicked={onContainerClicked} />
            </div>
        </div>
    )
}

export default Page
