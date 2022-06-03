import { Box, Typography } from "@mui/material"


export default function ResumeItem(props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>{props.title}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>{props.place}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }} color="gray">{props.date}</Typography>
        </Box>
    )
}
