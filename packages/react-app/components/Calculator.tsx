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
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import RemoveIcon from "@mui/icons-material/Remove";

const Converter = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    // event.preventDefault();
    console.log("Dropdown toggle called. Current state:", isDropdownOpen);
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Card sx={{ borderRadius: "20px", padding: "30px" }}>
      <Typography
        sx={{
          color: "#311f83",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Calculator
      </Typography>
      <form onSubmit={() => {}} className="w-full max-w-lg mr-10 mt-4">
        <div className="flex items-left  border-gray-700  flex-col ">
          <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
            <input
              className="bg-[#f1eeff] border border-gray-300 text-[#768597] text-sm rounded-full block w-full p-2.5 focus:outline-none"
              type="text"
              placeholder="amount"
              aria-label="amount"
              name="amount"
            />
            <div className="flex">
              <select
                id="states"
                className="bg-[#f1eeff] border border-gray-300 text-gray-900 text-sm rounded-full block w-28 p-2.5"
              >
                <option selected>USD</option>
                <option>EUR</option>
                <option>JPY</option>
              </select>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Card>
              <AddIcon />
            </Card>
            <Card>
              <RemoveIcon />
            </Card>
            <Card>
              <DragHandleIcon />
            </Card>
          </Stack>
          <Stack direction="row" spacing={0.5} sx={{ mb: 2, mt: 2 }}>
            <input
              className="bg-[#f1eeff] border border-gray-300 text-[#768597] text-sm rounded-full block w-full p-2.5 focus:outline-none"
              type="text"
              placeholder="amount"
              aria-label="amount"
              name="amount"
            />
            <div className="flex">
              <select
                id="states"
                className="bg-[#f1eeff] border border-gray-300 text-gray-900 text-sm rounded-full block w-28 p-2.5"
              >
                <option>EUR</option>
                <option selected>USD</option>

                <option>JPY</option>
              </select>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Card>
              <AddIcon />
            </Card>
            <Card>
              <RemoveIcon />
            </Card>
            <Card>
              <DragHandleIcon />
            </Card>
          </Stack>
          <Stack direction="row" spacing={0.5} sx={{ mb: 2, mt: 2 }}>
            <input
              className="bg-[#f1eeff] border border-gray-300 text-[#768597] text-sm rounded-full block w-full p-2.5 focus:outline-none"
              type="text"
              placeholder="amount"
              aria-label="amount"
              name="amount"
            />
            <div className="flex">
              <select
                id="states"
                className="bg-[#f1eeff] border border-gray-300 text-gray-900 text-sm rounded-full block w-28 p-2.5"
              >
                <option>JPY</option>
                <option>EUR</option>
                <option selected>USD</option>
              </select>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Card>
              <AddIcon />
            </Card>
            <Card>
              <RemoveIcon />
            </Card>
            <Card>
              <DragHandleIcon />
            </Card>
          </Stack>
        </div>
      </form>
    </Card>
  );
};
export default Converter;
