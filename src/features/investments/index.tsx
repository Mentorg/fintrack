import { Box, Grid, Typography } from "@mui/material";
import PortfolioOverview from "./components/PortfolioOverview";
import InvestmentDetails from "./components/InvestmentDetails";
import InvestmentPerformance from "./components/InvestmentPerformance";
import TransactionHistory from "./components/TransactionHistory";

export default function Investments() {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2, width: "100%" }}>
          <Typography variant="h1">Investments</Typography>
          <Typography variant="h6">Maximize your investment potential with personalized advice</Typography>
        </Box>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <PortfolioOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <InvestmentDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            <InvestmentPerformance />
          </Grid>
          <Grid item xs={12} md={6}>
            <TransactionHistory />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
