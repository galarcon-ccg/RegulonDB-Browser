import { Button } from '@mui/material'
import Style from './style.module.css'
import DownloadIcon from '@mui/icons-material/Download';
import ReplayIcon from '@mui/icons-material/Replay';

export default function RiSetExplorer() {
    const processService = process.env.REACT_APP_PROSSES_SERVICE + '/gramaticalTool/process/'
    return (
        <div>
            <div className={Style.topbar} >
                <Button variant="outlined" endIcon={<ReplayIcon />} >Reset Filters</Button>
                <Button variant="outlined" endIcon={<DownloadIcon/>} >Export to</Button>
            </div>
            <div className={Style.container} >
                <div className={Style.sidebar}>
                    <h2>Filter Options</h2>
                    {/* Contenido de herramientas */}
                </div>
                <div className={Style.main}>
                    <h1>Contenido Principal</h1>
                    {/* Tu contenido principal aquí */}
                </div>
            </div>
        </div>
    )
}