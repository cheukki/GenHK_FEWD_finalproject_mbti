import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@material-ui/styles";
import { useEffect, useState, useReducer } from "react";
import { scoreArr } from "./Test/Scorearr";
import { questions } from "./Test/Qustionarr";
import { scoreobj } from "./Test/Scoreobj";

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
  const initScore = () => {
    return {
      currentQ: 0,
      E: [],
      I: [],
      S: [],
      N: [],
      T: [],
      F: [],
      J: [],
      P: [],
    };
  };

  const [state, dispatch] = useReducer(scoreArr, null, initScore);
  const { currentQ, E, I, S, N, T, F, J, P } = state;
  const optionType0 = questions[currentQ].options[0].type;
  const optionType1 = questions[currentQ].options[1].type;

  const getInitScore = () => {
    const score = localStorage.setItem("scoreState");
    return score ? JSON.parse(score) : initScore;
  };
  useEffect(() => {
    localStorage.setItem("scoreState", JSON.stringify(state));
  }, [state]);
  const handleOption = (optionType) => {
    dispatch({ type: optionType });
    console.log(optionType);
  };

  const nextQ = () => {
    dispatch({ type: "next" });
  };
  const backQ = () => {
    dispatch({ type: "back" });
  };
  const resultCal = () => {
    const result = {};
    console.log(state);
    for (const key in state) {
      result[key] = state[key].length;
    }
    delete result.currentQ;
    console.log(result);
    localStorage.setItem("result", JSON.stringify(result));
    return scoreobj;
  };

  return (
    <div className="Test">
      <div className="qText">{questions[currentQ].qText}</div>
      <div className="option">
        <button
          onClick={() => {
            handleOption(optionType0);
            questions.length !== currentQ + 1 && nextQ();
          }}
        >
          {questions[currentQ].options[0].option}
        </button>
        <button
          onClick={() => {
            handleOption(optionType1);
            questions.length !== currentQ + 1 && nextQ();
          }}
        >
          {questions[currentQ].options[1].option}
        </button>
      </div>
      <div className="bottom">
        {currentQ !== 0 && <button onClick={backQ}>Back</button>}
        {questions.length === currentQ + 1 ? (
          <div>
            <h1>You have done the test!</h1>
            <Link to={`/TestResult`} onClick={resultCal}>
              <MyButton size="large" endIcon={<ArrowForwardIcon />}>
                Submit and Check Result
              </MyButton>
            </Link>
          </div>
        ) : (
          <button onClick={nextQ}>Next</button>
        )}
      </div>
    </div>
  );
}
