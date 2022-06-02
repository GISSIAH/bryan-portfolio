import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/navbar.module.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaBars } from "react-icons/fa"
import { CgClose } from "react-icons/cg"
import { useState } from "react";
export default function Navbar() {
    const [barClicked,setBarClicked] = useState(false)
    return (
        <nav>
            <div className={styles.desktopNav}>

                <div>
                    <Link  href="/"><Typography variant="h5" sx={{fontWeight:700,letterSpacing:2}}>BRYAN</Typography></Link>
                </div>
                <div className={styles.siteLinks}>
                    <Link href="/"><Typography  variant="body1" sx={{fontWeight:500}}>Work</Typography></Link>
                    <Link href="/"><Typography variant="body1" sx={{fontWeight:500}}>Resume</Typography></Link>
                    <Link href="/"><Typography variant="body1" sx={{fontWeight:500}}>Contact</Typography></Link>
                </div>
                <div>
                    <Link href="/">
                        <AiFillGithub size={30} />
                    </Link>
                    <Link href="/">
                        <AiFillLinkedin size={30} />
                    </Link>
                </div>

            </div>
            <div className={styles.mobileNav}>
                <div className={styles.mobileTopNav}>
                    <Link href="/"><Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 2 }}>BRYAN</Typography></Link>
                    <IconButton color="primary" onClick={()=>{
                        setBarClicked(!barClicked)
                    }}>
                        {barClicked ? 
                            <CgClose size={30} />
                            :
                            <FaBars size={30} />
                        }
                        
                    </IconButton>
                </div>
                <div className={barClicked ? styles.mobileSiteLinks : styles.mobileSiteLinksHidden}>
                    <Link href="/"><Typography variant="body1" sx={{ fontWeight: 500 }}>Work</Typography></Link>
                    <Link href="/"><Typography variant="body1" sx={{ fontWeight: 500 }}>Resume</Typography></Link>
                    <Link href="/"><Typography variant="body1" sx={{ fontWeight: 500 }}>Contact</Typography></Link>
                    <Link href="/">
                        <AiFillGithub size={30} />
                    </Link>
                    <Link href="/">
                        <AiFillLinkedin size={30} />
                    </Link>
                
                </div>
                
            </div>
        </nav>
    )
}
