import { Link } from "react-router-dom";
import data from "./data.json";

export default function PersonalityTypes() {
  return (
    <div className="PersonalityTypes">
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
      <div className="result-img"></div>
      <div className="result-score"></div>
      <div className="sidebar">
        <ul
          style={{
            listStyle: "none",
            border: "1px solid",
          }}
        >
          {data.typeList.map((typeobj) => (
            <li key={typeobj.type} style={{ width: "12.5%", float: "left" }}>
              <Link to={`/PersonalityTypes/${typeobj.type}`}>
                {typeobj.type}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
