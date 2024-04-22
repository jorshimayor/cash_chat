import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputBase,
  Paper,
  Stack,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const Converter = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    // event.preventDefault();
    console.log("Dropdown toggle called. Current state:", isDropdownOpen);
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Card sx={{ borderRadius: "20px", padding: "30px", height: "100%" }}>
      <Typography
        sx={{
          color: "#311f83",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Converter
      </Typography>
      <form onSubmit={() => {}} className="w-full max-w-lg mr-10 mt-4">
        <div className="flex items-left  border-gray-700  flex-col ">
          <label className="block uppercase tracking-wide text-[#6c6a72] text-xs font-bold mb-4">
            From
          </label>
          <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
            <div className="flex">
              <select
                id="states"
                className="bg-[#f1eeff] border border-gray-300 text-gray-900 text-sm rounded-full block w-28 p-2.5"
              >
                <option selected>cUSD</option>
                <option>NGN</option>
                <option>ETB</option>
              </select>
            </div>
            <Stack direction="column" spacing={-2}>
              <Typography>&rarr;</Typography>
              <Typography>&larr;</Typography>
            </Stack>
            <div className="flex">
              <select
                id="states"
                className="bg-[#f1eeff] border border-gray-300 text-gray-900 text-sm rounded-full block w-28 p-2.5"
              >
                <option selected>NGN</option>
                <option>cUSD</option>
                <option>ETB</option>
              </select>
            </div>
          </Stack>

          <label className="block uppercase tracking-wide text-[#6c6a72] text-xs font-bold mb-4">
            Amount
          </label>
          <input
            className="bg-[#f1eeff] border border-gray-300 text-[#768597] text-sm rounded-full block w-full p-2.5 focus:outline-none"
            type="text"
            placeholder="amount"
            aria-label="amount"
            name="amount"
          />
        </div>
        <div className="flex items-left  border-gray-700 mt-4 flex-col">
          <label className="block uppercase tracking-wide text-[#6c6a72] text-xs font-bold mb-4">
            Converted to
          </label>
          <input
            className="bg-[#f1eeff] border border-gray-300 text-[#768597] text-sm rounded-full   block w-full p-2.5  focus:outline-none"
            type="text"
            placeholder="converted to"
            aria-label="converted to"
            name="converted_to"
          />
        </div>
      </form>
    </Card>
  );
};
export default Converter;
