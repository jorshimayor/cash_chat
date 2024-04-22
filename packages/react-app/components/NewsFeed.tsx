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

const newsItems = [
  {
    title: "Yahoo Finance",
    subtitle: "Stock lower as investors weigh trade, impeachment",
    description:
      "Stocks end lower as impeachment inquiry and trade concerns rattle the market. Yahoo Finance's Myles Udland, Brian Cheung and Jared Bilkre discuss how these impact the market on The Final Round.",
    time: "9 hours ago",
  },
  {
    title: "Yahoo Finance",
    subtitle:
      "Foundstrat's Tom Lee on why no one should trade with Bitocoin right now",
    description:
      "Tom Lee of Fundstrat Global Advisors, joins Yahoo Finance's On the Move to discuss the lates Bitcoin downfall and market views.",
    time: "14 hours ago",
  },
  {
    title: "Reuters",
    subtitle:
      "EMERGING MARKETS-Latam FX down, Mexican peso extends slide after rate cut",
    description: "",
    time: "9 hours ago",
  },
];

const NewsFeed = () => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        padding: "30px",
        maxHeight: "370px",
        overflow: "auto",
      }}
    >
      <Typography
        sx={{
          color: "#311f83",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Newsfeed
      </Typography>
      <Grid container spacing={2}>
        {newsItems.map((item, index) => (
          <Grid item xs={12} key={index} sx={{ cursor: "pointer" }}>
            <CardContent
              sx={{
                "&:hover": {
                  backgroundColor: "#f1efff", // Change this color as needed
                },
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{ color: "#a49ad6", fontWeight: 400, fontSize: "12px" }}
                >
                  {item.title}
                </Typography>

                <Typography sx={{ color: "#a49ad6" }}>•</Typography>

                <Typography
                  sx={{ color: "#a49ad6", fontWeight: 400, fontSize: "12px" }}
                >
                  {item.time}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  mb: 0.8,
                  color: "#484650",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {item.subtitle}
              </Typography>
              <Typography
                sx={{ color: "#6e6c74", fontSize: "12px", fontWeight: 400 }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default NewsFeed;
