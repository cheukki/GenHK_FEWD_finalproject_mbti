// import { useState } from "react";
import data from "./data.json";
import { useParams } from "react-router-dom";
import React from "react";
import TypeResultContent from "./TypeResultContent";
import GetPic from "./Result/GetPic";
import Stack from "@mui/material/Stack";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ImportContacts } from "@mui/icons-material";

export default function TypeResult(props) {
  const params = useParams();

  const clickedtype = data.typeList.find(({ type }) => type === params.id);
  // function TypePic(showingtype) {
  //   return (
  //     <div className="type">
  //       <img src={showingtype.src} alt={showingtype.type} />
  //       <p>{showingtype.type}</p>
  //     </div>
  //   );
  // }

  // function TypeBar(showingtype) {
  //   return (
  //     <div className="typeBar">
  //       <p>{showingtype.type}</p>
  //       typebar
  //     </div>
  //   );
  // }

  return (
    <div
      className="TypeResult"
      style={{ display: "flex", gap: "10px", width: "100%" }}
    >
      <div className="typeResult-left" style={{ width: "30%", gap: "10px" }}>
        <div className="type">
          <img src={GetPic(clickedtype.type)} alt={clickedtype.type} />
        </div>
        <div className="typeBar">typebar</div>
      </div>
      <div className="typeResult-right">
        <TypeResultContent showingtype={clickedtype} />
      </div>
    </div>
  );
}

// {/* <React.Fragment>
// <Tabs value={currentTabIndex} onChange={handleTabChange}>
//   <Tab label="Features" />
//   <Tab label="Strengths & Weaknesses" />
//   <Tab label="Suitable Career" />
//   <Tab label="Recommended List" />
// </Tabs>
// TAB 1 Contents
// {currentTabIndex === 0 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">{clickedtype.features}</Typography>
//   </Box>
// )}
// TAB 2 Contents
// {currentTabIndex === 1 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">
//       {clickedtype.strengthsWeaknesses}
//     </Typography>
//   </Box>
// )}
// TAB 3 Contents
// {currentTabIndex === 2 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">{clickedtype.suitableCareer}</Typography>
//   </Box>
// )}
// TAB 4 Contents
// {currentTabIndex === 3 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">{clickedtype.recommendedList}</Typography>
//   </Box>
// )}
// </React.Fragment> */}

// export default function TypeResult(props) {
//   const params = useParams();
//   const clickedtype = data.typeList.find(({ type }) => type === params.id);
//   const [showingContent, setShowingContent] = useState("features");

//   function featuresBtnClick() {
//     setShowingContent("features");
//   }

//   function strengthsWeaknessesBtnClick() {
//     setShowingContent("strengthsWeaknesses");
//   }

//   function suitableCareerBtnClick() {
//     setShowingContent("suitableCareer");
//   }

//   function recommendedListBtnClick() {
//     setShowingContent("recommendedList");
//   }

//   return (
//     <div
//       className="TypeResult"
//       style={{ display: "flex", gap: "10px", width: "100%" }}
//     >
//       <div className="typeResult-left" style={{ width: "30%", gap: "10px" }}>
//         <div className="type">
//           <img src={showingtype.src} alt={showingtype.type} />
//         </div>
//         <div className="typeBar">typebar</div>
//       </div>
//       <div className="typeResult-right" style={{ width: "70%", gap: "10px" }}>
//         <button id="features-btn" onClick={() => featuresBtnClick()}>
//           Features
//         </button>
//         <button
//           id="strengthsWeaknesses-btn"
//           onClick={() => strengthsWeaknessesBtnClick()}
//         >
//           Strengths & Weaknesses
//         </button>
//         <button
//           id="suitableCareer-btn"
//           onClick={() => suitableCareerBtnClick()}
//         >
//           Suitable Career
//         </button>
//         <button
//           id="recommendedList-btn"
//           onClick={() => recommendedListBtnClick()}
//         >
//           Recommended List
//         </button>

//         <div className="content">
//           {clickedtype && clickedtype[showingContent]}
//         </div>
//       </div>
//     </div>
//   );
// }
