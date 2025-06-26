import { LinearProgress } from '@mui/material'
import Style from './style.module.css'
import {useState} from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

export default function RiSetExplorer() {
    const [loading, setLoading] = useState(false)
    const processService = process.env.REACT_APP_PROSSES_SERVICE + '/gramaticalTool/process/'
    return (
        <div>
            {loading ? <LinearProgress /> : <div style={{height: "4px", backgroundColor: "#f4f5f5"}} /> }
            <TopBar />
            <div className={Style.container} >
                <div className={Style.sidebar}>
                    <SideBar />
                </div>
                <div className={Style.main}>
                </div>
            </div>
        </div>
    )
}