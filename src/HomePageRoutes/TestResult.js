import { Link } from "react-router-dom";
import MbtiResult from "./Result/MbitResult";
export default function TestResult() {
  return (
    <div className="TestResult">
      <MbtiResult />
      <Link to={`/YourResult`}>Show More</Link>
    </div>
  );
}
