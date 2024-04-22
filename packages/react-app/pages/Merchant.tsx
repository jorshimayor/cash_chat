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

const Merchant = () => {
  return <Chat context="merchant" />;
};

export default Merchant;
