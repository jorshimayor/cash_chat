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
import Chat from "./Chat";

const Invoice = () => {
  return <Chat context="invoice" />;
};

export default Invoice;
