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

const groupedLogos = {
  Frontend: [
    { icon: <img src={HTML} alt="HTML" />, label: "HTML" },
    { icon: <img src={CSS} alt="CSS" />, label: "CSS" },
    { icon: <img src={JS} alt="JavaScript" />, label: "JavaScript" },
    { icon: <img src={SCSS} alt="SCSS" />, label: "SCSS" },
    { icon: <img src={REACT} alt="React" />, label: "React" },
    { icon: <img src={REDUX} alt="Redux Toolkit" />, label: "Redux Toolkit" },
    { icon: <SiBootstrap size={40} color="#fff" />, label: "Bootstrap" },
    { icon: <img src={MUI} alt="Material UI" />, label: "Material UI" },
  ],
  Backend: [
    { icon: <SiNodedotjs size={40} color="#fff" />, label: "Node.js" },
    { icon: <SiExpress size={40} color="#fff" />, label: "Express.js" },
    { icon: <SiMongodb size={40} color="#fff" />, label: "MongoDB" },
    { icon: <SiAxios size={40} color="#fff" />, label: "Axios" },
  ],
  DevTools: [
    { icon: <img src={GIT} alt="Git" />, label: "Git" },
    { icon: <img src={GULP} alt="Gulp" />, label: "Gulp" },
    { icon: <img src={NPM} alt="NPM" />, label: "NPM" },
    { icon: <SiJira size={40} color="#fff" />, label: "Jira" },
    { icon: <SiPostman size={40} color="#fff" />, label: "Postman" },
    { icon: <SiFigma size={40} color="#fff" />, label: "Figma" },
    { icon: <SiJenkins size={40} color="#fff" />, label: "Jenkins" },
    { icon: <SiVercel size={40} color="#fff" />, label: "Vercel" },
  ]
};

function About() {
  return (
      <div className={styles.About}>
        <Typography variant="h2" sx={{ color: '#98C1D9' }}>My knowledges</Typography>

        {Object.entries(groupedLogos).map(([category, logos]) => (
            <Box key={category} className={styles.categorySection}>
              <Typography variant="h4" className={styles.categoryTitle}>{category}</Typography>
              <Box className={styles.container}>
                {logos.map((item, index) => (
                    <Box key={index} className={styles.logo}>
                      {item.icon}
                      <Typography className={styles.logoText}>{item.label}</Typography>
                    </Box>
                ))}
              </Box>
            </Box>
        ))}
      </div>
  );
}

export default About;
