import { Link } from "react-router-dom";
import MbtiResult from "./Result/MbitResult";
import TypeResultContent from "./TypeResultContent";
import { showResults } from "./Result/CheckType";
import data from "./data.json";
// import { type } from "@testing-library/user-event/dist/type";

export default function YourResult() {
  const testedtypeobj = data.typeList.find(
    ({ type }) => type === showResults()
  );
  return (
    <div className="YourResult">
      <h1>16 Personality Types</h1>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <Link to={`/`}>Start Test</Link>
          </li>
          <li>
            <Link to={`/YourResult`}>Your Result</Link>
          </li>
          <li>
            <Link to={`/PersonalityTypes`}>Personality Types</Link>
          </li>
        </ul>
      </nav>
      <div style={{ display: "flex", gap: "10px", width: "100%" }}>
        <div style={{ width: "50%", gap: "10px" }}>
          <MbtiResult />
        </div>
        <div style={{ width: "50%", gap: "10px" }}>
          <TypeResultContent showingtype={testedtypeobj} />
        </div>
      </div>
    </div>
  );
}
