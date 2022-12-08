import Header from "../../component/Header";
import { Box } from "@mui/material";
import PieChart from "../../component/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
