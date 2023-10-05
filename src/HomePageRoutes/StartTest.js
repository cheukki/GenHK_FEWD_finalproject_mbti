import { Link } from "react-router-dom";
export default function StartTest() {
  return (
    <div className="StartTest">
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
      <h1>What is your Personality? Let's try MBTI Test!</h1>
      {/* <button id="start-btn">Start</button> */}
      <Link to={`/Test`}>Start</Link>
    </div>
  );
}
