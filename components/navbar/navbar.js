import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/navbar.module.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [barClicked, setBarClicked] = useState(false)
    return (
        <nav>
            <div className={styles.desktopNav}>

                <div>
                    <Link href="/"><Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 2 }}>BRYAN</Typography></Link>
                </div>
                <div className={styles.siteLinks}>
                    <Link href="/"><a style={{textDecoration:'none', color:'black'}}><Typography variant="body1" sx={{ fontWeight: 500 }}>Home</Typography></a></Link>
                    <Link href="/resume"><a style={{ textDecoration: 'none', color:'black' }}><Typography variant="body1" sx={{ fontWeight: 500 }}>Resume</Typography></a></Link>
                    <Link href="/contact"><a style={{ textDecoration: 'none' , color:'black'}}><Typography variant="body1" sx={{ fontWeight: 500 }}>Contact</Typography></a></Link>
                </div>
                <Box sx={{display:'flex',gap:2}}>
                    <Link href="https://github.com/GISSIAH">
                        <a style={{color:"black"}}>
                        <AiFillGithub size={30} />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/bryan-malunje-0177b819a/">
                        <a style={{ color: "black" }}>
                        <AiFillLinkedin size={30} />
                        </a>
                    </Link>
                </Box>

            </div>
            <div className={styles.mobileNav}>
                <div className={styles.mobileTopNav}>
                    <Link href="/"><Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 2 }}>BRYAN</Typography></Link>
                    <IconButton color="primary" onClick={() => {
                        setBarClicked(!barClicked)
                    }}>
                        {barClicked ?
                            <CgClose size={25} />
                            :
                            <FaBars size={25} />
                        }

                    </IconButton>
                </div>
                <motion.div
                    animate={{ x: 0, y: 20, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 100 },
                        default: { duration: 3 },
                    }}
                    className={barClicked ? styles.mobileSiteLinks : styles.mobileSiteLinksHidden}>
                    <Link href="/"><Typography variant="body1" sx={{ fontWeight: 500 }}>Home</Typography></Link>
                    <Link href="/resume"><Typography variant="body1" sx={{ fontWeight: 500 }}>Resume</Typography></Link>
                    <Link href="/"><Typography variant="body1" sx={{ fontWeight: 500 }}>Contact</Typography></Link>
                    <Link href="https://github.com/GISSIAH">
                        <AiFillGithub size={30} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bryan-malunje-0177b819a/">
                        <AiFillLinkedin size={30} />
                    </Link>

                </motion.div>

            </div>
        </nav>
    )
}
