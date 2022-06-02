import styles from "../../styles/projects.module.css"
import { Box, Button, Chip, Typography } from "@mui/material"
export default function SimpleProject(props) {
    return (
        <Box>
            <div>image</div>
            <Typography varinat="h5" sx={{ fontWeight: 600 }}>{props.title}</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                {props.chips.map(element => {
                    console.log(element);
                    return (
                        <>
                            <Chip label={element.name} variant="contained" />
                        </>

                    )
                })}
            </Box>
            <div className={styles.simpleProjectDesc}>
                <Typography varinat="body1" color="gray" sx={{ fontWeight: 400 }}>{props.desc}</Typography>
            </div>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained">Preview</Button>
                <Button variant="text">Github Repo</Button>
            </Box>
        </Box>

    )
}
