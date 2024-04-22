import React from "react";
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

const FirstPage = () => {
  return (
    <Grid container spacing={2} sx={{ pr: { xs: "1rem" }, pl: { xs: "1rem" } }}>
      <Grid item xs={7} sm={7} md={7}>
        <Card
          sx={{
            borderRadius: "20px",
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0d99ff",
            // width: "100%",
            height: "100%",
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#FFF" }}>
            BORROW FROM YOUR FRIEND
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={5} sm={5} md={5}>
        <Card
          sx={{
            borderRadius: "20px",
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0d99ff",
            // width: "100%",
            height: "100%",
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#FFF" }}>
            PAY YOUR MERCHANT (VERIFIED)
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={2} sm={4} md={6}></Grid>
    </Grid>
  );
};

export default FirstPage;
