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
import CurrencyChart from "./CurrencyChart";
import Table from "./Table";
import Converter from "./Converter";
import ForexChart from "./ForexChart";
import NewsFeed from "./NewsFeed";
import Calculator from "./Calculator";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  return (
    <Box sx={{ mr: "5px", ml: "5px" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12} md={4}>
          <Card
            sx={{ background: "#5840bb", borderRadius: "8px" }}
            onClick={() => router.push("/Chat")}
          >
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="column" spacing={0.5}>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "12px",
                      fontWeight: 400,
                      textDecoration: "underline",
                    }}
                  >
                    EUR/USD
                  </Typography>
                  <Typography
                    sx={{
                      color: "#70b03f",
                      fontSize: "12px",
                      fontWeight: 400,
                      textDecoration: "underline",
                    }}
                  >
                    +0.0004(+0.367%)
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={0.5}>
                  <Typography
                    sx={{
                      color: "#b8b9e6",
                      fontSize: "12px",
                      fontWeight: 100,
                    }}
                  >
                    &rarr; 1.11636 USD
                  </Typography>
                  <Typography
                    sx={{
                      color: "#b8b9e6",
                      fontSize: "12px",
                      fontWeight: 100,
                    }}
                  >
                    &larr; 1.11700 USD
                  </Typography>
                </Stack>
              </Stack>
              {/* <ForexChart /> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={4}>
          <Card sx={{ background: "#5840bb", borderRadius: "8px" }}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="column" spacing={0.5}>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "12px",
                      fontWeight: 400,
                      textDecoration: "underline",
                    }}
                  >
                    USD/JPY
                  </Typography>
                  <Typography
                    sx={{
                      color: "#bd5c8d",
                      fontSize: "12px",
                      fontWeight: 400,
                      textDecoration: "underline",
                    }}
                  >
                    -0.086(-0.0798%)
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={0.5}>
                  <Typography
                    sx={{
                      color: "#b8b9e6",
                      fontSize: "12px",
                      fontWeight: 100,
                    }}
                  >
                    &rarr; 1.11636 USD
                  </Typography>
                  <Typography
                    sx={{
                      color: "#b8b9e6",
                      fontSize: "12px",
                      fontWeight: 100,
                    }}
                  >
                    &larr; 1.11700 USD
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={4}>
          <Card sx={{ background: "#5840bb", borderRadius: "8px" }}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="column" spacing={0.5}>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "12px",
                      fontWeight: 400,
                      textDecoration: "underline",
                    }}
                  >
                    GPB/USD
                  </Typography>
                  <Typography
                    sx={{
                      color: "#70b03f",
                      fontSize: "12px",
                      fontWeight: 400,
                      textDecoration: "underline",
                    }}
                  >
                    +0.0004(+0.367%)
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={0.5}>
                  <Typography
                    sx={{
                      color: "#b8b9e6",
                      fontSize: "12px",
                      fontWeight: 100,
                    }}
                  >
                    &rarr; 1.11636 USD
                  </Typography>
                  <Typography
                    sx={{
                      color: "#b8b9e6",
                      fontSize: "12px",
                      fontWeight: 100,
                    }}
                  >
                    &larr; 1.11700 USD
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Card
            sx={{
              borderRadius: "20px",
              border: "2px solid #E9E9E9",
              background: "#FFF",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
              padding: "30px",
              height: "100%",
            }}
          >
            <CurrencyChart />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <NewsFeed />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Converter />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Calculator />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6}>
        <Card
          sx={{
            borderRadius: "20px",
            background: "#FFF",
            padding: "30px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "#311f83",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Exchange Rates
            </Typography>
            <Typography
              sx={{
                color: "#6b6971",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              USD
            </Typography>
          </Stack>
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Table />
          </div>
        </Card>
      </Grid> */}
      </Grid>
    </Box>
  );
};

export default HomePage;
