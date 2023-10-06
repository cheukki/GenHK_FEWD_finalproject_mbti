import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@material-ui/styles";

const MyButton = styled(Button)({
  background: "#4F709C",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px grey",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export default function Test() {
  return (
    <div className="Test">
      <h1>You have done the test!</h1>
      <Link to={`/TestResult`}>
        <MyButton
            size="large"
          endIcon={<ArrowForwardIcon />}>
          Submit and Check Result
        </MyButton>
      </Link>
    </div>
  );
}
