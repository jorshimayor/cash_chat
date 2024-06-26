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
import Image from "next/image";

const HomePage = () => {
  const router = useRouter();
  return (
    <Box sx={{ mr: "5px", ml: "5px" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12} md={3}>
          <Card
            sx={{
              background: "#5840bb",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/Borrow")}
          >
            <CardContent>
              <Stack
                direction="column"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      className="rounded-full"
                      src="/borrow.webp"
                      width="60"
                      height="60"
                      alt="Celo Logo"
                    />
                    <Typography
                      sx={{ color: "#FFF", fontWeight: 600, fontSize: "14px" }}
                    >
                      BORROW A QUICK FUND
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              {/* <ForexChart /> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={3}>
          <Card
            sx={{ background: "#5840bb", borderRadius: "8px" }}
            onClick={() => router.push("/Merchant")}
          >
            <CardContent>
              <Stack
                direction="column"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    className="rounded-full"
                    src="/pay-merchant.webp"
                    width="60"
                    height="60"
                    alt="Celo Logo"
                  />
                  <Typography
                    sx={{ color: "#FFF", fontWeight: 600, fontSize: "14px" }}
                  >
                    PAY YOUR VERIFIED MERCHANT
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={3}>
          <Card
            sx={{
              background: "#5840bb",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/Invoice")}
          >
            <CardContent>
              <Stack
                direction="column"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    className="rounded-full"
                    src="/send-invoice.webp"
                    width="60"
                    height="60"
                    alt="Celo Logo"
                  />
                  <Typography
                    sx={{ color: "#FFF", fontWeight: 600, fontSize: "14px" }}
                  >
                    SEND AN INVOICE
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={3}>
          <Card sx={{ background: "#5840bb", borderRadius: "8px" }}>
            <CardContent>
              <Stack
                direction="column"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    className="rounded-full"
                    src="/pay-friend-with-link.webp"
                    width="60"
                    height="60"
                    alt="Celo Logo"
                  />
                  <Typography
                    sx={{ color: "#FFF", fontWeight: 600, fontSize: "14px" }}
                  >
                    PAY YOUR FRIEND VIA LINKS
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
