import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div className="Test">
      <Link to={`/TestResult`}>Submit and Check Result</Link>
    </div>
  );
}
