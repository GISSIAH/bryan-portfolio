import { Grid, Typography, Box, Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import SimpleProject from '../components/projects/simpleProject'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Bryan Malunje's Portfolio`}</title>
        <meta name="description" content="Malawian software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container maxWidth={true}
        marginTop={8}
        spacing={0}
        gap={2}
        alignItems="center"
        justifyContent="center">
        <Grid item >
          <Image alt="bryan" src="https://res.cloudinary.com/attic-gis/image/upload/v1654206006/IMG_20220602_233259-min_yr4zct.jpg" width={380} height={450} />
        </Grid>
        <Grid item >
          <div className={styles.heroText}>
            <Typography variant='h3' sx={{ fontWeight: 700 }} >{`Hi, I'm Bryan and I'm`}</Typography>
            <Typography variant='h3' sx={{ fontWeight: 700 }} >{`a Junior Javascript Developer`}</Typography>
          </div>

          <div className={styles.description}>
            <Typography color="gray" variant="body1" sx={{ fontWeight: 400 }}>{`I'm a Junior Javascript developer based in Lilongwe, Malawi. I have 1 year of professional experience and i specialize in creating web apps. I am open for new opportunities and interesting projects.`}</Typography>
          </div>
          <div className={styles.actionButtons}>
            <Button variant="contained">Contact me</Button>
            <Button variant="outlined">Check my work</Button>
          </div>
        </Grid>

      </Grid>

      <div className={styles.workSection}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>Work</Typography>
        <Typography variant='body1' color="gray">Check all my public projects</Typography>
        <Typography variant='body1' color="gray">If you have questions, please feel free to contact me.</Typography>


        <div className={styles.projectContainer}>
          <SimpleProject title="Zamalo" chips={[{ name: "Node Js" }, { name: "React" }, { name: "Mongo Db" }]} desc="A real estate marketing platform to advertize houses, plots and warehouses for rent or sale" />
          <SimpleProject title="Zamalo" chips={[{ name: "Node Js" }, { name: "React" }, { name: "Mongo Db" }]} desc="A real estate marketing platform to advertize houses, plots and warehouses for rent or sale" />
          <SimpleProject title="Zamalo" chips={[{ name: "Node Js" }, { name: "React" }, { name: "Mongo Db" }]} desc="A real estate marketing platform to advertize houses, plots and warehouses for rent or sale" />
        </div>

      </div>




    </div>
  )
}
