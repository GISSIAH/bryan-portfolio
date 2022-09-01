import { Box, Typography, Grid, Button } from "@mui/material";
import Head from "next/head";
import styles from "../styles/resume.module.css";
import ResumeItem from "../components/resume/resumeItem";
import { FaDownload } from "react-icons/fa";
export default function resume() {
  return (
    <div>
      <Head>
        <title>{`Bryan Malunje's Portfolio`}</title>
        <meta name="description" content="Malawian software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, marginTop: 5 }}>
          Resume
        </Typography>
        <div className={styles.desc}>
          <Typography
            variant="body1"
            color="gray"
            sx={{ fontWeight: 400 }}
          >{`I started my software developing journey 2 years ago when I was writing my final year project in college. I started learning python then I stumbled upon JavaScript which got me interest in building web applications.`}</Typography>
        </div>

        <div className={styles.education}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              marginBottom: 3,
              background: "black",
              color: "white",
            }}
          >
            Education
          </Typography>
          <ResumeItem
            title="Bsc Geo-Information Systems"
            place="Malawi University of Science & Technology"
            date="2016 - 2021"
          />
        </div>

        <div className={styles.work}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              marginBottom: 1,
              background: "black",
              color: "white",
            }}
          >
            Work Experience
          </Typography>
          <ResumeItem
            title="Geo-Information Systems Intern"
            place="L.Gravam Consulting"
            date="2019 - 2020"
          />
          <ResumeItem
            title="Software Developer Intern"
            place="Malawi University of Science & Technology"
            date="2020 - 2021"
          />
          <ResumeItem
            title="Software Engineer"
            place="National Integrated Technologies Limited"
            date="August 2022 to current"
          />
        </div>
        <div className={styles.skills}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              marginBottom: 1,
              background: "black",
              color: "white",
            }}
          >
            Skills
          </Typography>
          <Grid container>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Javascript
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                C#
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Kotlin
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Python
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Node Js
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                React Js
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Next Js
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                PostgreSQL
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Mongo DB
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                REST APIs
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Automated Testing
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Tailwind CSS
              </Typography>
            </Grid>
            <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Git
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}
