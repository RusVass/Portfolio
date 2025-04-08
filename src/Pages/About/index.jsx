
import styles from "./About.module.scss";
import { Typography, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import HTML from "./Logos/HTML.svg";
import CSS from "./Logos/CSS.svg";
import JS from "./Logos/JS.svg";
import GIT from "./Logos/GIT.svg";
import GULP from "./Logos/GULP.svg";
import MUI from "./Logos/MUI.svg";
import NPM from "./Logos/NPM.svg";
import SCSS from "./Logos/SCSS.svg";
import REACT from "./Logos/REACT.svg";
import REDUX from "./Logos/REDUX.svg";
import {
  SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiJira,
  SiPostman, SiFigma, SiJenkins, SiVercel, SiAxios
} from 'react-icons/si';

function About() {
  const boxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    backgroundColor: "rgba(83, 58, 123, 0.5)",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "15px",
  };

  const logoStyle = {
    color: "#98C1D9",
    fontSize: "16px",
    textAlign: "center",
    marginTop: "5px",
  };

  const logos = [
    { icon: <img src={HTML} alt="HTML" />, label: "HTML" },
    { icon: <img src={CSS} alt="CSS" />, label: "CSS" },
    { icon: <img src={JS} alt="JavaScript" />, label: "JavaScript" },
    { icon: <img src={SCSS} alt="SCSS" />, label: "SCSS" },
    { icon: <img src={REACT} alt="React" />, label: "React" },
    { icon: <img src={REDUX} alt="Redux Toolkit" />, label: "Redux Toolkit" },
    { icon: <img src={GIT} alt="Git" />, label: "Git" },
    { icon: <img src={GULP} alt="Gulp" />, label: "Gulp" },
    { icon: <img src={MUI} alt="Material UI" />, label: "Material UI" },
    { icon: <img src={NPM} alt="NPM" />, label: "NPM" },
    { icon: <SiBootstrap size={40} color="#fff" />, label: "Bootstrap" },
    { icon: <SiNodedotjs size={40} color="#fff" />, label: "Node.js" },
    { icon: <SiExpress size={40} color="#fff" />, label: "Express.js" },
    { icon: <SiMongodb size={40} color="#fff" />, label: "MongoDB" },
    { icon: <SiJira size={40} color="#fff" />, label: "Jira" },
    { icon: <SiPostman size={40} color="#fff" />, label: "Postman" },
    { icon: <SiFigma size={40} color="#fff" />, label: "Figma" },
    { icon: <SiJenkins size={40} color="#fff" />, label: "Jenkins" },
    { icon: <SiVercel size={40} color="#fff" />, label: "Vercel" },
    { icon: <SiAxios size={40} color="#fff" />, label: "Axios" },
  ];

  return (
      <div className={styles.About}>
        <Typography variant="h2" sx={{ color: '#6969B3' }}>My knowledges</Typography>
        <Box sx={{
          flexGrow: 1,
          border: "2px solid #6969B3",
          width: "fit-content",
          borderRadius: "10px",
          boxSizing: "border-box",
          padding: "15px",
        }}>
          <Grid2 container spacing={2} sx={{ width: "fit-content" }}>
            <Grid2 lg={12}>
              <Box sx={boxStyle}>
                {logos.map((item, index) => (
                    <Box key={index} sx={{ textAlign: 'center' }}>
                      {item.icon}
                      <Typography variant="body1" sx={logoStyle}>{item.label}</Typography>
                    </Box>
                ))}
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </div>
  );
}

export default About;

















// import React from "react";
// import styles from "./About.module.scss";
// import { Typography, Box } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import HTML from "./Logos/HTML.svg";
// import CSS from "./Logos/CSS.svg";
// import JS from "./Logos/JS.svg";
// import GIT from "./Logos/GIT.svg";
// import GULP from "./Logos/GULP.svg";
// import MUI from "./Logos/MUI.svg";
// import NPM from "./Logos/NPM.svg";
// //import PYTHON from "./Logos/PYTHON.svg";
// import SCSS from "./Logos/SCSS.svg";
// import REACT from "./Logos/REACT.svg";
// import REDUX from "./Logos/REDUX.svg";
// //import CPP from "./Logos/CPP.svg";
//
// function About() {
//   const boxStyle = {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "stretch",
//     justifyContent: "space-around",
//     backgroundColor: "rgba(83, 58, 123, 0.5)",
//     borderRadius: "10px",
//     boxSizing: "border-box",
//     padding: "15px",
//     height: "170px",
//   };
//   const logoStyle = {
//     color: "#98C1D9",
//     fontSize: "24px",
//   };
//   return (
//     <div className={styles.About}>
//       <Typography variant="h2" sx={{color: '#6969B3'}}>My knowledges</Typography>
//       <Box
//         sx={{
//           flexGrow: 1,
//           border: "2px solid #6969B3",
//           width: "fit-content",
//           borderRadius: "10px",
//           boxSizing: "border-box",
//           padding: "15px",
//         }}
//       >
//         <Grid2 container spacing={2} sx={{ width: "fit-content" }}>
//           <Grid2 lg={9}>
//             <Box sx={boxStyle}>
//               <Box>
//                 <img src={HTML} alt="HTML" />
//                 <Typography variant="body1" sx={logoStyle}>
//                   HTML 5
//                 </Typography>
//               </Box>
//               <Box>
//                 <img src={CSS} alt="CSS" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   CSS 3
//                 </Typography>
//               </Box>
//               <Box>
//                 <img src={JS} alt="JS" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   JS
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid2>
//           <Grid2 lg={3}>
//             <Box sx={boxStyle}>
//               <Box>
//                 <img src={REACT} alt="React" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   React
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid2>
//           <Grid2 lg={13}>
//             <Box sx={boxStyle}>
//               <Box>
//                 <img src={NPM} alt="NPM" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   NPM
//                 </Typography>
//               </Box>
//               <Box>
//                 <img src={REDUX} alt="Redux" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   Redux
//                 </Typography>
//               </Box>
//               <Box>
//                 <img src={SCSS} alt="SCSS" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   SCSS
//                 </Typography>
//               </Box>
//               <Box>
//                 <img src={MUI} alt="MUI" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   MUI
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid2>
//           <Grid2 lg={12}>
//             <Box sx={boxStyle}>
//               <Box>
//                 <img src={GIT} alt="Git" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   Git
//                 </Typography>
//               </Box>
//               <Box>
//                 <img src={GULP} alt="GULP" />
//                 <Typography
//                   variant="body1"
//                   sx={logoStyle}
//                 >
//                   GULP
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid2>
//           <Grid2 lg={12}>
//             <Box sx={boxStyle}>
//               {/*<Box>*/}
//               {/*  /!*<img src={CPP} alt="C++" />*!/*/}
//               {/*  <Typography*/}
//               {/*    variant="body1"*/}
//               {/*    sx={logoStyle}*/}
//               {/*  >*/}
//               {/*    C++*/}
//               {/*  </Typography>*/}
//               {/*</Box>*/}
//
//               {/*<Box>*/}
//               {/*  /!*<img src={PYTHON} alt="Python" />*!/*/}
//               {/*  <Typography*/}
//               {/*    variant="body1"*/}
//               {/*    sx={logoStyle}*/}
//               {/*  >*/}
//               {/*    /!*Python*!/*/}
//               {/*  </Typography>*/}
//               {/*</Box>*/}
//             </Box>
//           </Grid2>
//         </Grid2>
//       </Box>
//     </div>
//   );
// }
//
// export default About;
