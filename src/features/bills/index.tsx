import { Box, Grid, Typography } from "@mui/material";
import BillsSummary from "./components/BillsSummary";
import BillPaymentTrends from "./components/BillPaymentTrends";

export default function Bills() {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2 }}>
          <Typography variant="h1">Bills</Typography>
          <Typography variant="h6">
            Stay on Top of Your Financial Obligations
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <BillsSummary />
          </Grid>
          <Grid item xs={12} md={12}>
            <BillPaymentTrends />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
