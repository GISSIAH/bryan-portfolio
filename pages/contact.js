import { Box, Typography } from "@mui/material"
import Head from "next/head"
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md"
import { AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai"
import { RiMapPinFill } from "react-icons/ri"
export default function contact() {
    return (
        <div>
            <Head>
                <title>{`Bryan Malunje Contact`}</title>
                <meta name="description" content="Contact information for Bryan Malunje a malawian software developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, marginTop: 5 }}>Contact</Typography>

                <Typography variant="body1" color="gray" sx={{ fontWeight: 400 }}>If you have any questions or would like to connect please reach me here.</Typography>

                <Box sx={{ display: 'flex', flexWrap: "wrap", gap: 4, marginTop: 12, justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 2, }}>
                        <MdOutlineEmail size={30} /> <Typography variant="body1" sx={{ fontWeight: 500 }}>malunjebryan@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <MdOutlinePhone size={30} /> <Typography variant="body1" sx={{ fontWeight: 500 }}>+265884568525</Typography>
                    </Box>
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 600, marginTop: 8, }}>Socials</Typography>

                <Box sx={{ display: 'flex', flexWrap: "wrap", gap: 4, marginTop: 3, justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 2, }}>
                        <AiOutlineTwitter size={30} /> <Typography variant="body1" sx={{ fontWeight: 500 }}>@attic_bryan</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, }}>
                        <AiOutlineLinkedin size={30} /><Typography variant="body1" sx={{ fontWeight: 500 }}>@Bryan Malunje</Typography>
                    </Box>
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 600, marginTop: 8, }}>Location</Typography>

                <Box sx={{ display: 'flex', gap: 2, marginTop:3}}>
                    <RiMapPinFill size={30}/> <Typography variant="body1" sx={{ fontWeight: 500 }}>Lilongwe, Malawi</Typography>
                </Box>
        </Box>
        </div>
    )
}
