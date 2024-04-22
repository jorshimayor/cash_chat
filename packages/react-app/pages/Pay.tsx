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

const Pay = () => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        padding: "30px",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#311f83",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Pay
      </Typography>
      <form onSubmit={() => {}} className="w-full max-w-lg mr-10 mt-4">
        <div className="flex items-left  border-gray-700  flex-col ">
          <label className="block uppercase tracking-wide text-[#6c6a72] text-xs font-bold mb-4">
            Name
          </label>
          <input
            className="bg-[#f1eeff] border border-gray-300 text-[#768597] text-sm rounded-full block w-full p-2.5 focus:outline-none"
            type="text"
            placeholder="name"
            aria-label="name"
            name="name"
          />
        </div>
        <div className="flex items-left  border-gray-700 mt-4 flex-col">
          <label className="block uppercase tracking-wide text-[#6c6a72] text-xs font-bold mb-4">
            Amount
          </label>
          <input
            className="bg-[#f1eeff] border border-gray-300 text-[#768597] text-sm rounded-full   block w-full p-2.5  focus:outline-none"
            type="text"
            placeholder="amount"
            aria-label="amount"
            name="amount"
          />
        </div>
        <Stack
          direction="column"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, background: "#311f83" }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default Pay;
