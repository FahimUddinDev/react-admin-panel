import React from "react";
import { Box } from "@mui/material";
import BarChart from "../../component/barChart";
import Header from "../../component/Header";
const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
