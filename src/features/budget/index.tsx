import { Box, Grid, Typography } from "@mui/material";
import BudgetAllocation from "./components/BudgetAllocation";
import IncomeSources from "./components/IncomeSources";
import ExpenseLimits from "./components/ExpenseLimits";
import Savings from "./components/Savings";

export default function Budget() {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2 }}>
          <Typography variant="h1">Budget</Typography>
          <Typography variant="h6">Track and control your spending</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <IncomeSources />
          </Grid>
          <Grid item xs={12} md={4}>
            <BudgetAllocation />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExpenseLimits />
          </Grid>
          <Grid item xs={12} md={6}>
            <Savings />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
