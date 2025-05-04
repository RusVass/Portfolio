


import styles from "./Home.module.scss";
import { Typography, Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import "@fontsource/roboto/400.css";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <img src="/stickerMe.webp" alt="My avatar" className={`${styles.img} ${styles.imgAnimation}`} />

                <div className={styles.content}>
                    <Typography variant="h4" className={`${styles.title} ${styles.titleAnimation}`}>
                        Ruslan Vasiliev – Front-End Developer
                    </Typography>

                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Summary</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    Front-end Developer with 1 year of experience building responsive, high-performance
                                    web apps using React, Redux Toolkit, Formik, and Material UI.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Tech Skills</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    React, Redux Toolkit, Formik, Material UI, Bootstrap, HTML, CSS/SCSS, Gulp, Node.js,
                                    Express.js, MongoDB, CI/CD, Git, Yup.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Tools</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    WebStorm, Jira, Git, Postman, DevTools, Jenkins, Axios, Figma, Vercel.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Languages</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    Ukrainian – Native<br />
                                    English – Upper-Intermediate
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Courses</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    2024 – Front-End (DAN.IT)<br />
                                    2024 – TypeScript (Hillel IT School)<br />
                                    2024 – English (Cambridge Assessment)
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Experience</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    <strong>TechWave Solutions</strong> – Front-End Developer (04/2025 – Present)<br />
                                    • Built UI with React and Redux Toolkit<br />
                                    • Styled with Material UI and SCSS<br />
                                    • Worked with APIs using Axios/FETCH<br />
                                    • Backend participation with Node.js, Express.js<br />
                                    • Tested with Jest
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Link</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    <Link href="https://gitlab.com/VassRus/portfolio" target="_blank" rel="noopener" underline="hover">
                                        GitLub
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Home;


