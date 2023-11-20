import { Box, Grid, Typography } from "@mui/material";
import TrendAnalysis from "./components/TrendAnalysis";
import SpendingBreakdown from "./components/SpendingBreakdown";
import BudgetComparison from "./components/BudgetComparison";
import FinancialOverview from "./components/FinancialOverview";

const Reports = () => {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2 }}>
          <Typography variant="h1">Reports & Analysis</Typography>
          <Typography variant="h6">Gain insights into your financial health</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TrendAnalysis />
          </Grid>
          <Grid item xs={12} md={6}>
            <FinancialOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <SpendingBreakdown />
          </Grid>
          <Grid item xs={12} md={6}>
            <BudgetComparison />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Reports;