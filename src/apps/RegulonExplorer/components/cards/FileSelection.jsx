import {Stack, Button, CircularProgress, Typography, Alert, Box} from "@mui/material"
import {UploadFile} from "@mui/icons-material"
import {useState} from "react";

export default function FileSelection(){
    const [file, setFile] = useState(null)
    const isLoading = false
    const error = null
    const isProcessData = false
    const handleFileChange = ()=>{}
    const handleProcessFile = ()=>{}

    return (
        <Box >
            <Stack direction="row" spacing={1} alignItems="center">
                <Button
                    variant="outlined"
                    component="label"
                    size="small"
                    startIcon={<UploadFile />}
                    disabled={isLoading} // Usa prop
                >
                    Load File
                    <input type="file" hidden onChange={handleFileChange} disabled={isLoading}/> {/* Usa prop */}
                </Button>
                <Button
                    variant="contained"
                    onClick={handleProcessFile} // Usa prop
                    disabled={!file || isLoading} // Usa props
                    size="small"
                >
                    {isLoading ? <CircularProgress size={24} /> : 'Process File'} {/* Usa prop */}
                </Button>
            </Stack>
            {/* Usa props para mostrar info */}
            {(file && !isLoading) && (
                <Typography variant="caption" sx={{ wordBreak: 'break-all', textAlign: 'center' }}>
                    Loaded: {file.name}
                </Typography>
            )}
            {error && <Alert severity="error" sx={{ width: '100%', mt: 1 }}>{error}</Alert>}
            {isProcessData && !error && <Alert severity="success" sx={{ width: '100%', mt: 1 }}>Archivo procesado.</Alert>}
        </Box>
    )
}