import React from "react";
import {FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";

export default function PredefinedRegionTypes(){
    const handleChange = ()=>{}
    return(
        <Stack spacing={2}>
            <FormControl fullWidth size="small">
                <InputLabel id="preset-type-label">Select type</InputLabel>
                <Select
                    variant="standard"
                    labelId="preset-type-label"
                    label="Select type"
                    onChange={handleChange()}
                >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="T1">Type 1</MenuItem>
                    <MenuItem value="T2">Type 2</MenuItem>
                    <MenuItem value="T3">Type 3</MenuItem>
                    <MenuItem value="T4">Type 4</MenuItem>
                    <MenuItem value="T5">Type 5</MenuItem>
                    <MenuItem value="T6">Type 6</MenuItem>
                    <MenuItem value="T7">Type 7</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    )
}