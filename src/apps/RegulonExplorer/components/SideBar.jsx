import {Box, IconButton, Typography, Accordion, AccordionDetails, AccordionSummary, Tooltip} from '@mui/material'
import {UploadFile, ExpandMore, HelpOutline} from "@mui/icons-material"
import React from "react";

export default function SideBar(){

    return (
        <div>
            <Step icon={<UploadFile/>} title={"File Selection"} help={'Select or upload your RISet data source.'} open >
                Hola
            </Step>


        </div>
    )
}

const Step = ({children,icon, title, open=false, help=""})=>{
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