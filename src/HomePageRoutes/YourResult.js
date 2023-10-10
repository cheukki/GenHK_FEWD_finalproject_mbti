import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MbtiResult from "./Result/MbitResult";
import TypeResultContent from "./TypeResultContent";
import { CheckType } from "./Result/CheckType";
import data from "./data.json";
import "./YourResult.css";

export default function YourResult() {
  const testedtypeobj = data.typeList.find(({ type }) => type === CheckType());
  return (
    <div className="big">
      <h1>16 Personality Types</h1>
      <div className="YourResult">
        <div>
          <ButtonGroup
            variant="string"
            size="small"
            aria-label="small button group"
          >
            <Link to={`/`}>
              <Button>Home</Button>
            </Link>
            <Link to={`/YourResult`}>
              <Button>Your Result</Button>
            </Link>
            <Link to={`/PersonalityTypes`}>
              <Button>Personality Types</Button>
            </Link>
          </ButtonGroup>
        </div>
        <div className="result">
          <div className="left" style={{ padding: 0 }}>
            <MbtiResult />
          </div>
          <div className="right">
            <TypeResultContent showingtype={testedtypeobj} />
          </div>
        </div>
      </div>
    </div>
  );
}
