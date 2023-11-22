import { Box, Grid, Typography } from "@mui/material";
import DebtOverview from "./components/DebtOverview";
import DebtPaymentHistory from "./components/DebtPaymentHistory";
import DebtToIncomeRatio from "./components/DebtToIncomeRatio";
import DebtBurdenRatio from "./components/DebtBurdenRatio";

export default function DebtManagement() {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2, width: "100%" }}>
          <Typography variant="h1">Debt Management</Typography>
          <Typography variant="h6">Efficiently manage and conquer your debts over time</Typography>
        </Box>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} md={6} lg={8}>
            <DebtOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DebtPaymentHistory />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <DebtToIncomeRatio />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <DebtBurdenRatio />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
