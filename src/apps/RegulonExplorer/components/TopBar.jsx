import React from "react"
import Style from "../style.module.css"
import {Button, IconButton} from "@mui/material"
import {Replay, Download, Menu} from "@mui/icons-material"
import Tooltip from "@mui/material/Tooltip";


export default function TopBar(){

    return (
        <div className={Style.topbar} >
            <div style={{marginLeft: "5px"}}>
                <Tooltip title={"Show/Hide Menu"} >
                    <Button  variant="outlined"  >
                        <Menu />
                    </Button>
                </Tooltip>
            </div>
            <div>
                <Button variant="outlined" endIcon={<Replay />} >Reset Filters</Button>
                <Button variant="outlined" endIcon={<Download />} >Export to</Button>
            </div>
        </div>
    )
}