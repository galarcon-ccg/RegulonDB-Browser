import React from "react";
import {Box, IconButton, Typography, Accordion, AccordionDetails, AccordionSummary, Tooltip} from '@mui/material'
import {UploadFile, ExpandMore, HelpOutline, FilterList, Settings} from "@mui/icons-material"
import FileSelection from "./cards/FileSelection";
import PredefinedRegionTypes from "./cards/PredefinedRegionTypes";

export default function SideBar(){

    return (
        <div>
            <Card icon={<UploadFile/>} title={"File Selection"} help={'Select or upload your RISet data source.'} open >
                <FileSelection />
            </Card>
            <Card icon={<FilterList sx={{color: 'info.main'}}/>} title={"Predefined Region Types"} help={'Select a predefined configuration for the different types of region, this selection adds defined values to the filters.'} >
                <PredefinedRegionTypes />
            </Card>
            <Card icon={<Settings color="success" />} title={"Filter by elements"} help={""} >

            </Card>
        </div>
    )
}

const Card = ({children,icon, title, open=false, help=""})=>{
    return (
            <Accordion defaultExpanded={open}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >
                    <Box display="flex" alignItems="center">
                        {icon}
                        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'medium', ml: 1 }}>
                            {title}
                        </Typography>
                    </Box>
                    <Tooltip title={help}>
                        <IconButton size="small">
                            <HelpOutline fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        {children}
                    </Box>
                </AccordionDetails>
            </Accordion>
    )
}