import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MbtiResult from "./Result/MbitResult";
import TypeResultContent from "./TypeResultContent";
import { CheckType } from "./Result/CheckType";
import data from "./data.json";
import "./YourResult.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { scoreobj } from "./Test/Scoreobj" 
/* import { scoreArr } from "./Test/Scorearr"; */
// import { type } from "@testing-library/user-event/dist/type";

// const asd = function asd() {
//   if (scoreobj === null) {
//     return false
//   } else {
//     return true;
//   }
// }
export default function YourResult() {
  console.log(scoreobj)
  let asd = true;
  if (scoreobj === null) {
    asd =  false;
  }
  const testedtypeobj = data.typeList.find(({ type }) => type === CheckType());
  return (
    <div className="big">
      <h1>16 Personality Types</h1>
      <div className="YourResult">
        <div>
          <ButtonGroup
            variant="string"
            aria-label="text button group"
            size="large"
          >
            <Link to={`/`}>
              <Button startIcon={<HomeOutlinedIcon />}>Home</Button>
            </Link>
            <Link to={`/YourResult`}>
              <Button startIcon={<AssessmentOutlinedIcon />}>
                Your Result
              </Button>
            </Link>
            <Link to={`/PersonalityTypes`}>
              <Button startIcon={<ListAltOutlinedIcon />}>
                Personality Types
              </Button>
            </Link>
          </ButtonGroup>
        </div>
        {/* {
          asd ? (
            <div className="result">
              <div className="left" style={{ padding: 0 }}>
                <MbtiResult />
              </div>
              <div className="right">
                <TypeResultContent showingtype={testedtypeobj} />
              </div>
            </div>
          ) : (
            <Link to={`/`}>
              <Button startIcon={<HomeOutlinedIcon />}>Do The Test Now!</Button>
            </Link>
          )
        } */}
      </div>
    </div>
  );
}
