import styles from "./Home.module.scss";
import { Typography, Box, Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import "@fontsource/roboto/400.css";

function Home() {
    return (
        <div className={styles.home}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexDirection="row-reverse"
            >
                <img src="../../../public/sticker.webp" alt="My avatar" className={styles.img} />

                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    sx={{
                        position: "fixed",
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "40%",
                        color: "#ffffff", // устанавливаем белый цвет всему содержимому
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ffffff",  fontSize: "32px" , marginLeft: -97, marginBottom: 5 }}>
                        Ruslan Vasiliev – Front-End Developer
                    </Typography>

                    <Table sx={{ minWidth: 650 }}>
                        <TableBody>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Summary</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    Front-end Developer with 1 year of experience building responsive, high-performance web apps using React, Redux Toolkit, Formik, and Material UI.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Tech Skills</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    React, Redux Toolkit, Formik, Material UI, Bootstrap, HTML, CSS/SCSS, Gulp, Node.js, Express.js, MongoDB, CI/CD, Git, Yup.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Tools</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    WebStorm, Jira, Git, Postman, DevTools, Jenkins, Axios, Figma, Vercel.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Languages</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    Ukrainian – Native<br />
                                    English – Intermediate
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Courses</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    2024 – Front-End (DAN.IT)<br />
                                    2024 – TypeScript (Hillel IT School)<br />
                                    2024 – English (Cambridge Assessment)
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Experience</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>TechWave Solutions</strong> – Front-End Developer (04/2025 – Present)<br />
                                    • Built UI with React and Redux Toolkit<br />
                                    • Styled with Material UI and SCSS<br />
                                    • Worked with APIs using Axios/FETCH<br />
                                    • Backend participation with Node.js, Express.js<br />
                                    • Tested with Jest
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Link</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <Link href="https://gitlab.com/VassRus/portfolio" sx={{ fontSize: "18px" }} target="_blank" rel="noopener" underline="hover" >GitHub</Link><br />
                                    {/*<Link href="https://linkedin.com/in/your-profile"  sx={{  fontSize: "18px" }}target="_blank" rel="noopener" underline="hover" >LinkedIn</Link>*/}
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </div>
    );
}

export default Home;



/*import styles from "./Home.module.scss";
import { Typography, Box, Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import "@fontsource/roboto/400.css";

function Home() {
    return (
        <div className={styles.home}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexDirection="row-reverse"
            >
                <img src="/public/sticker.webp" alt="My avatar" className={styles.img} />

                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    sx={{
                        position: "fixed",
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "50%",
                        color: "#ffffff", // здесь устанавливаем белый цвет всему содержимому
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ffffff", mb: 1, marginLeft: -93,  fontSize: "32px" }}>
                        Ruslan Vasiliev – Front-End Developer
                    </Typography>

                    <Table sx={{ minWidth: 650 }}>
                        <TableBody>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    <strong>Summary</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    Front-end Developer with 1 year of experience building responsive, high-performance web apps using React, Redux Toolkit, Formik, and Material UI.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    <strong>Tech Skills</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    React, Redux Toolkit, Formik, Material UI, Bootstrap, HTML, CSS/SCSS, Gulp, Node.js, Express.js, MongoDB, CI/CD, Git, Yup.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    <strong>Tools</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    WebStorm, Jira, Git, Postman, DevTools, Jenkins, Axios, Figma, Vercel.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    <strong>Languages</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    Ukrainian – Native<br />
                                    English – Intermediate
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    <strong>Courses</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "24px" }}>
                                    2024 – Front-End (DAN.IT)<br />
                                    2024 – TypeScript (Hillel IT School)<br />
                                    2024 – English (Cambridge Assessment)
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Experience</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>TechWave Solutions</strong> – Front-End Developer (04/2025 – Present)<br />
                                    • Built UI with React and Redux Toolkit<br />
                                    • Styled with Material UI and SCSS<br />
                                    • Worked with APIs using Axios/FETCH<br />
                                    • Backend participation with Node.js, Express.js<br />
                                    • Tested with Jest
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <strong>Links</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                                    <Link href="https://gitlab.com/VassRus/my-vue-app-practice" target="_blank" rel="noopener" underline="hover" >GitHub</Link><br />
                                    <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener" underline="hover" >LinkedIn</Link>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </div>
    );
}

export default Home;*/




/*
import styles from "./Home.module.scss";
import { Typography, Box, Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import "@fontsource/roboto/400.css";

function Home() {
    return (
        <div className={styles.home}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexDirection="row-reverse"
            >
                <img src="/public/sticker.webp" alt="My avatar" className={styles.img} />

                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    sx={{
                        position: "fixed",
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "50%",
                        color: "#ffffff", // здесь устанавливаем белый цвет всему содержимому
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ffffff", mb: 2 }}>
                        Ruslan Vasiliev – Front-End Developer
                    </Typography>

                    <Table sx={{ minWidth: 650 }}>
                        <TableBody>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>Summary</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    Front-end Developer with 1 year of experience building responsive, high-performance web apps using React, Redux Toolkit, Formik, and Material UI.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>Tech Skills</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    React, Redux Toolkit, Formik, Material UI, Bootstrap, HTML, CSS/SCSS, Gulp, Node.js, Express.js, MongoDB, CI/CD, Git, Yup.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>Tools</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    WebStorm, Jira, Git, Postman, DevTools, Jenkins, Axios, Figma, Vercel.
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>Languages</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    Ukrainian – Native<br />
                                    English – Intermediate
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>Courses</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    2024 – Front-End (DAN.IT)<br />
                                    2024 – TypeScript (Hillel IT School)<br />
                                    2024 – English (Cambridge Assessment)
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>Experience</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>TechWave Solutions</strong> – Front-End Developer (04/2025 – Present)<br />
                                    • Built UI with React and Redux Toolkit<br />
                                    • Styled with Material UI and SCSS<br />
                                    • Worked with APIs using Axios/FETCH<br />
                                    • Backend participation with Node.js, Express.js<br />
                                    • Tested with Jest
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <strong>Links</strong>
                                </TableCell>
                                <TableCell sx={{ color: "#ffffff" }}>
                                    <Link href="https://gitlab.com/VassRus/my-vue-app-practice" target="_blank" rel="noopener" underline="hover" >GitHub</Link><br />
                                    <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener" underline="hover" >LinkedIn</Link>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </div>
    );
}

export default Home;
*/










// import styles from "./Home.module.scss";
// import { Typography, Box, Link } from "@mui/material";
// import "@fontsource/roboto/400.css";
//
// function Home() {
//     return (
//         <div className={styles.home}>
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="space-evenly"
//                 flexDirection="row-reverse"
//             >
//                 <img src="/sticker.webp" alt="My avatar" className={styles.img} />
//
//                 <Box
//                     display="flex"
//                     alignItems="center"
//                     flexDirection="column"
//                     gap={4}
//                     sx={{
//                         position: "fixed",
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                         right: "50%",
//                     }}
//                 >
//                     <Typography variant="h4" sx={{ fontWeight: "bold", color: "#d5d5e0" }}>
//                         Ruslan Vasiliev – Front-End Developer
//                     </Typography>
//
//                     <Box textAlign="left" sx={{ color: "#98C1D9", fontSize: 18 }}>
//                         <Typography variant="body1" gutterBottom>
//                             <strong>SUMMARY:</strong><br />
//                             Front-end Developer with 1 year of experience building responsive, high-performance web apps using React, Redux Toolkit, Formik, and Material UI.
//                         </Typography>
//
//                         <Typography variant="body1" gutterBottom>
//                             <strong>TECH SKILLS:</strong><br />
//                             React, Redux Toolkit, Formik, Material UI, Bootstrap, HTML, CSS/SCSS, Gulp, Node.js, Express.js, MongoDB, CI/CD, Git, Yup.
//                         </Typography>
//
//                         <Typography variant="body1" gutterBottom>
//                             <strong>TOOLS:</strong><br />
//                             WebStorm, Jira, Git, Postman, DevTools, Jenkins, Axios, Figma, Vercel.
//                         </Typography>
//
//                         <Typography variant="body1" gutterBottom>
//                             <strong>LANGUAGES:</strong><br />
//                             Ukrainian – Native<br />
//                             English – Intermediate
//                         </Typography>
//
//                         <Typography variant="body1" gutterBottom>
//                             <strong>COURSES:</strong><br />
//                             2024 – Front-End (DAN.IT)<br />
//                             2024 – TypeScript (Hillel IT School)<br />
//                             2024 – English (Cambridge Assessment)
//                         </Typography>
//
//                         <Typography variant="body1" gutterBottom>
//                             <strong>EXPERIENCE:</strong><br />
//                             <strong>TechWave Solutions</strong> – Front-End Developer (04/2025 – Present)<br />
//                             - Built UI with React and Redux Toolkit<br />
//                             - Styled with Material UI and SCSS<br />
//                             - Worked with APIs using Axios/FETCH<br />
//                             - Backend participation with Node.js, Express.js<br />
//                             - Tested with Jest<br />
//                         </Typography>
//
//                         <Typography variant="body1" gutterBottom>
//                             <strong>Links:</strong><br />
//                             <Link href="https://gitlab.com/VassRus/my-vue-app-practice" target="_blank" rel="noopener" underline="hover">GitHub</Link><br />
//                             <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener" underline="hover">LinkedIn</Link>
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Box>
//         </div>
//     );
// }
//
// export default Home;





// import styles from "./Home.module.scss";
// import { Typography, Box } from "@mui/material";
// import "@fontsource/roboto/400.css";
//
// function Home() {
//   return (
//     <div className={styles.home}>
//
//       <Box
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent={"space-evenly"}
//         flexDirection={"row-reverse"}
//       >
//         <img src="../../../public/sticker.webp" alt="Me_photo" className={styles.img} />
//         <Box
//           display={"flex"}
//           alignItems={"center"}
//           flexDirection={"column"}
//           gap={5}
//           width={"fit-content"}
//           sx={{
//             position: "fixed",
//             top: "50%",
//             transform: "translateY(-50%)",
//             right: "20%",
//             marginLeft: "5%",
//
//           }}
//         >
//           <Typography variant="h3" sx={{ color: "#d5d5e0", width: "fit-content" }}>
//               <Box mb={2}>
//                   <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                       Ruslan Vasiliev: Front-End Developer
//                   </Typography>
//                   <Box mt={1}>
//                       <Typography variant="body1">
//                           <strong>Mobile:</strong> +38 067 679 51 56
//                       </Typography>
//                       <Typography variant="body1">
//                           <strong>Email:</strong> it.vasiliev@gmail.com
//                       </Typography>
//                       <Typography variant="body1">
//                           <strong>Residence:</strong> Kiev, Ukraine
//                       </Typography>
//                       <Typography variant="body1">
//                           <strong>Telegram:</strong> @RuslanVasiliev
//                       </Typography>
//                   </Box>
//               </Box>
//
//               <Typography
//                   variant="body1"
//                   sx={{ color: "#98C1D9", fontSize: "24px", fontWeight: 400, width: "70%" }}
//               >
//                   <Box mb={2}>
//                       <strong>SUMMARY:</strong>
//                       <p>
//                           Front-end Developer with one year of experience. Proficient in React, Redux Toolkit, Formik, Yup, Material UI, and Bootstrap with a strong foundation in ES6+. Hands-on experience with Jira, HTML, CSS, SCSS, Gulp, Webpack, and Rollup.
//                       </p>
//                       <p>
//                           Knowledgeable in Node.js, Express.js, and MongoDB. Experienced in Continuous Integration/Continuous Delivery, Vercel, and version control with Git (GitHub, GitLab). Competent in testing with Jest and familiar with Agile (Scrum) methodology.
//                       </p>
//                   </Box>
//
//                   <Box mb={2}>
//                       <strong>TECHNICAL SKILLS:</strong>
//                       <p>
//                           Tech Skills: React, Redux Toolkit, Formik, Material UI, Bootstrap, HTML, CSS, SCSS, Gulp, Node.js, Express.js, MongoDB, CI/CD, Git (GitHub, GitLab), Yup.
//                       </p>
//                       <p>
//                           Tools: JetBrains WebStorm, Jira, Git, Postman, DevTools, GitHub, GitLab, Jenkins, AJAX, FETCH, AXIOS, Figma, Vercel.
//                       </p>
//                       <p>
//                           Programming Languages: JavaScript, basic TypeScript.
//                       </p>
//                   </Box>
//
//                   <Box mb={2}>
//                       <strong>TRAININGS AND COURSES:</strong>
//                       <p>
//                           Jul 2024: DAN.IT (Front-End Development)
//                           <br />Aug 2024: Hillel IT School (TypeScript)
//                           <br />Feb 2024: Hillel IT School (JavaScript Automation)
//                           <br />Sep 2024: English Courses (Cambridge Assessment English)
//                           <br />Nov 2023: Hillel IT School (Java Automation)
//                           <br />Jul 2021: QA Start Up IT Training Center
//                       </p>
//                   </Box>
//
//                   <Box mb={2}>
//                       <strong>LANGUAGES:</strong>
//                       <p>
//                           Ukrainian: Native
//                           <br />English: Intermediate
//                       </p>
//                   </Box>
//                   <Box mb={2}>
//                       <strong>EXPERIENCE:</strong>
//                       <Box mt={1}>
//                           <p><strong>TechWave Solutions (Freelance)</strong></p>
//                           <p>Position: Front-End Developer</p>
//                           <p>Duration: 04/2025 – Present</p>
//                           <p>Responsibilities:</p>
//                           <ul style={{ marginTop: 0 }}>
//                               <li>Developed and maintained user interfaces for web applications using React and Redux Toolkit.</li>
//                               <li>Implemented responsive design using Material UI and SCSS.</li>
//                               <li>Configured and optimized builds using Gulp.</li>
//                               <li>Integrated APIs through FETCH and AXIOS.</li>
//                               <li>Participated in database design and created APIs using Node.js and Express.js.</li>
//                               <li>Conducted code testing with Jest to ensure high product quality.</li>
//                           </ul>
//                       </Box>
//
//                       <Box mt={3}>
//                           <p><strong>QA Start Up Software Testing Provider</strong></p>
//                           <p>Position: Software Testing Engineer</p>
//                           <p>Duration: 02/2023 – 06/2024</p>
//                       </Box>
//                   </Box>
//               </Typography>
//
//           </Typography>
//
//         </Box>
//       </Box>
//     </div>
//   );
// }
//
// export default Home;
