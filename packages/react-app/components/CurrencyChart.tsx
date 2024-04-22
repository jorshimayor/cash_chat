import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Sep 21",
    "Sep 22",
    "Sep 23",
    "Sep 24",
    "Sep 25",
    "Sep 26",
    "Sep 27",
  ],
  datasets: [
    {
      label: "NGN to cUSD",
      data: [1.1, 1.2, 1.15, 1.17, 1.16, 1.15, 1.14],
      borderColor: "#5840bb",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Currency Exchange Rate Over Time",
    },
  },
};

function CurrencyChart() {
  return (
    <Box sx={{ height: { xs: "100%" } }}>
      <Line data={data} options={options} />
    </Box>
  );
}

export default CurrencyChart;
