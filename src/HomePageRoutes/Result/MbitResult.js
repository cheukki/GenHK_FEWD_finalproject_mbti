import ProgressBar from "react-bootstrap/ProgressBar";
import "@fontsource/roboto/400.css";
import "./MbtiResult.css";
import scoredata from "./scoredata.json";
import ESFJ from "./image/ESFJ.png";
import ESFP from "./image/ESFP.png";
import ESTJ from "./image/ESTJ.png";
import ESTP from "./image/ESTP.png";
import ENFJ from "./image/ENFJ.png";
import ENFP from "./image/ENFP.png";
import ENTJ from "./image/ENTJ.png";
import ENTP from "./image/ENTP.png";
import INFJ from "./image/INFJ.png";
import INFP from "./image/INFP.png";
import INTJ from "./image/INTJ.png";
import INTP from "./image/INTP.png";
import ISFJ from "./image/ISFJ.png";
import ISFP from "./image/ISFP.png";
import ISTJ from "./image/ISTJ.png";
import ISTP from "./image/ISTP.png";
import "bootstrap/dist/css/bootstrap.css";
import Stack from "@mui/material/Stack";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//let e, i, s, n, t, f, j, p;

// let score = { e: 6, i: 5, s: 8, n: 6, t: 6, f: 8, j: 5, p: 6 };

 let type = "";

 function getpic() {
   if (type === "ESFJ") {
     return ENFJ;
   } else if (type === "ENFP") {
     return ENFP;
   } else if (type === "ENTJ") {
     return ENTJ;
   } else if (type === "ENTP") {
     return ENTP;
   } else if (type === "ESFJ") {
     return ESFJ;
   } else if (type === "ESFP") {
     return ESFP;
   } else if (type === "ESTJ") {
     return ESTJ;
   } else if (type === "ESTP") {
     return ESTP;
   } else if (type === "INFJ") {
     return INFJ;
   } else if (type === "INFP") {
     return INFP;
   } else if (type === "INTJ") {
     return INTJ;
   } else if (type === "INTP") {
     return INTP;
   } else if (type === "ISFJ") {
     return ISFJ;
   } else if (type === "ISFP") {
     return ISFP;
   } else if (type === "ISTJ") {
     return ISTJ;
   } else if (type === "ISTP") {
     return ISTP;
   }
 }

 function showResults() {
   if (type.length > 3) {
     return;
   }
   type += scoredata.score.e >= scoredata.score.i ? "E" : "I";
   type += scoredata.score.s >= scoredata.score.n ? "S" : "N";
   type += scoredata.score.t >= scoredata.score.f ? "T" : "F";
   type += scoredata.score.j >= scoredata.score.p ? "J" : "P";
   console.log(type);
 }

function calce() {
  return Math.round((scoredata.score.e / 11) * 100);
}

function calci() {
  return Math.round((scoredata.score.i / 11) * 100);
}

function calcn() {
  return Math.round((scoredata.score.n / 14) * 100);
}

function calcs() {
  return Math.round((scoredata.score.s / 14) * 100);
}

function calct() {
  return Math.round((scoredata.score.t / 14) * 100);
}

function calcf() {
  return Math.round((scoredata.score.f / 14) * 100);
}

function calcj() {
  return Math.round((scoredata.score.j / 11) * 100);
}

function calcp() {
  return Math.round((scoredata.score.p / 11) * 100);
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#1A2027"
      : "#fff sx={{backgroundColor: 'primary.dark'}}",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#76ff03",
    },
  },
});

export default function TestResult() {
  showResults();
  return (
    <div className="MbtiResult">
      <Box sx={{ flexGrow: 1 }}>
        <div className="main">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item
                sx={{ backgroundColor: "#E5D283", border: "1px solid grey" }}
              >
                <p className="title">Your result is:</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{ backgroundColor: "#E5D283", border: "1px solid grey" }}
              >
                <img src={getpic()} alt="ENFJ" />
                <p>{type}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{ backgroundColor: "#E5D283", border: "1px solid grey" }}
              >
                <ProgressBar className="top">
                  <ProgressBar
                    className="e"
                    now={calce()}
                    label={`${calce()}%`}
                  />
                  <ProgressBar
                    variant="danger"
                    now={calci()}
                    label={`${calci()}%`}
                  />
                </ProgressBar>
                <div className="type">
                  <h6>Extrovert</h6>
                  <h6>Introvert</h6>
                </div>
                <ProgressBar>
                  <ProgressBar
                    className="n"
                    now={calcs()}
                    label={`${calcs()}%`}
                  />
                  <ProgressBar
                    variant="success"
                    now={calcn()}
                    label={`${calcn()}%`}
                  />
                </ProgressBar>
                <div className="type">
                  <h6>Intuition</h6>
                  <h6>Sensing</h6>
                </div>
                <ProgressBar>
                  <ProgressBar
                    className="f"
                    now={calct()}
                    label={`${calct()}%`}
                  />
                  <ProgressBar
                    variant="warning"
                    now={calcf()}
                    label={`${calcf()}%`}
                  />
                </ProgressBar>
                <div className="type">
                  <h6>Feeling</h6>
                  <h6>Thinking</h6>
                </div>
                <ProgressBar className="bottom">
                  <ProgressBar
                    className="j"
                    now={calcj()}
                    label={`${calcj()}%`}
                  />
                  <ProgressBar
                    variant="info"
                    now={calcp()}
                    label={`${calcp()}%`}
                  />
                </ProgressBar>
                <div className="typebottom">
                  <h6>Judging</h6>
                  <h6>Perceiving</h6>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2}>
                <ThemeProvider theme={theme}>
                </ThemeProvider>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}
