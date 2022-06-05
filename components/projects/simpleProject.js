import styles from "../../styles/projects.module.css"
import { Box, Button, Chip, Typography } from "@mui/material"
import Image from "next/image";
export default function SimpleProject(props) {
    return (
        <Box sx={{ padding: 0 }}>

            <img src={props.img} className={styles.projectImage} alt={props.img} />
            <Typography variant="h4" sx={{ fontWeight: 600, textAlign: 'left' }}>{props.title}</Typography>
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
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
                <Typography varinat="body1" color="gray" sx={{ fontWeight: 400,textAlign:'left' }}>{props.desc}</Typography>
            </div>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" href={props.preview}>Preview</Button>
                <Button variant="text" href={props.git}>Github Repo</Button>
            </Box>
        </Box>

    )
}
