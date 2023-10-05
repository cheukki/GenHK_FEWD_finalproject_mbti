import { Link } from "react-router-dom";
import TestResult from "./TestResult";
import TypeResultContent from "./TypeResultContent";
// import { type } from "@testing-library/user-event/dist/type";
import data from "./data.json";

export default function YourResult() {
  // const testedtype = <TestResult {...type} />;
  // const testedtypeobj = data.typeList.find(
  //   ({ type }) => type === testedtypeobj
  // );
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
        <div style={{ width: "30%", gap: "10px" }}>
          <TestResult />
        </div>
        <div style={{ width: "70%", gap: "10px" }}>
          {/* <TypeResultContent showingtype={testedtypeobj} /> */}
        </div>
      </div>
    </div>
  );
}
