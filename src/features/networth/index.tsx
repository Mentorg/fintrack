import { Box, Grid, Typography } from "@mui/material";
import NetWorthOverview from "./components/NetWorthOverview";
import Assets from "./components/Assets";
import Liabilities from "./components/Liabilities";
import AssetsVsLiabilities from "./components/AssetsVsLiabilities";

export default function NetWorth() {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2, width: "100%" }}>
          <Typography variant="h1">Net Worth</Typography>
          <Typography variant="h6">Measure your financial success and set new targets</Typography>
        </Box>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <NetWorthOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <Assets />
          </Grid>
          <Grid item xs={12} md={6}>
            <Liabilities />
          </Grid>
          <Grid item xs={12} md={6}>
            <AssetsVsLiabilities />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
