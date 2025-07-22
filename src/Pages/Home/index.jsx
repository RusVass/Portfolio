


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
                                    Versatile Front-End, Mobile & Web Developer with over a year of hands-on experience delivering high-performance applications using React and React Native CLI. Skilled at architecting scalable, maintainable code with Redux Toolkit, Formik, and Material UI, and integrating robust authentication flows via Firebase and Google Sign-In. Proven track record of translating complex business requirements into intuitive user experiences, rapidly diagnosing and fixing bugs, and collaborating across the full stack (Node.js/Express) to ship reliable solutions on schedule.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Tech Skills</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    React, Redux Toolkit, React Native, Formik, Material UI, Bootstrap, HTML, CSS/SCSS, Gulp, Node.js,
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
                                    2024 – Front-End (DAN.IT)<br/>
                                    2024 – TypeScript (Hillel IT School)<br/>
                                    2023 - JavaScript Automation (Hillel IT School)<br/>
                                    2025 – English (Cambridge Assessment)
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={`${styles.cellTitle} ${styles.fadeIn}`}>
                                    <strong>Experience</strong>
                                </TableCell>
                                <TableCell className={`${styles.cellText} ${styles.fadeIn}`}>
                                    <strong>TechWave Solutions</strong> – Front-End, Mobile & Web Developer (React / React Native) <br />
                                    • Developed cross-platform mobile applications using React Native CLI for both iOS and Android, focusing on performance and native user experience.<br />
                                    • Built responsive UIs for web apps using React and MUI (Material UI v5).<br />
                                    • Integrated Firebase Authentication and Google Sign-In, managing secure session storage via AsyncStorage.<br />
                                    • Built flexible and nested navigation flows using React Navigation v6 (stack, tab, drawer).<br />
                                    • Used Redux Toolkit for global state management with slices, middleware, and selectors.<br />
                                    • Styled with Material UI and SCSS<br />
                                    • Connected the app to REST APIs via Axios and Fetch, handling asynchronous data flows and error boundaries.<br />
                                    • Collaborated on backend logic using Node.js and Express.js, assisting in API design and implementation.<br />
                                    • Wrote unit tests using Jest, ensuring cross-platform reliability and stable application behavior.
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


