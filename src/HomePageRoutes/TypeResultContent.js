import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
export default function TypeResultContent({ showingtype }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  return (
    <React.Fragment>
      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label="Features" />
        <Tab label="Strengths & Weaknesses" />
        <Tab label="Suitable Career" />
        <Tab label="Recommended List" />
      </Tabs>
      {/* TAB 1 Contents */}
      {currentTabIndex === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5"></Typography>
          <Typography variant="p">{showingtype.features}</Typography>
        </Box>
      )}
      {/* TAB 2 Contents */}
      {currentTabIndex === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5"></Typography>
          <Typography variant="p">{showingtype.strengthsWeaknesses}</Typography>
        </Box>
      )}
      {/* TAB 3 Contents */}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5"></Typography>
          <Typography variant="p">{showingtype.suitableCareer}</Typography>
        </Box>
      )}
      {/* TAB 4 Contents */}
      {currentTabIndex === 3 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5"></Typography>
          <Typography variant="p">{showingtype.recommendedList}</Typography>
        </Box>
      )}
    </React.Fragment>
  );
}
