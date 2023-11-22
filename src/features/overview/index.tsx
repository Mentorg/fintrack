import { Box, Grid, Typography, useTheme } from "@mui/material";
import {
  AttachMoney,
  ShoppingCartCheckout,
  Balance,
  Savings,
  Work,
} from "@mui/icons-material";
import BudgetAllocation from "../budget/components/BudgetAllocation";
import TransactionHistory from "../investments/components/TransactionHistory";
import FinancialOverview from "../reports/components/FinancialOverview";
import DebtOverview from "../debt/components/DebtOverview";
import PersonalFinancesCard from "./components/PersonalFinanceCard";
import SpendingBreakdown from "../reports/components/SpendingBreakdown";
import { tokens } from "../../assets/theme";

export default function Overview() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2, width: "100%" }}>
          <Typography variant="h1">Overview</Typography>
          <Typography variant="h6">
            A snapshot of your financial health
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} md>
            <PersonalFinancesCard
              title="Income"
              value={220350}
              icon={<Work sx={{ color: colors.greenAccent[600] }} />}
              chartType={[1, 4, 2, 5, 7, 2, 4, 6]}
            />
          </Grid>
          <Grid item xs={12} md>
            <PersonalFinancesCard
              title="Expenses"
              value={90550}
              icon={
                <ShoppingCartCheckout sx={{ color: colors.greenAccent[600] }} />
              }
              chartType={[3, -10, -2, 5, 7, -2, 4, 6]}
            />
          </Grid>
          <Grid item xs={12} md>
            <PersonalFinancesCard
              title="Balance"
              value={470560}
              icon={<Balance sx={{ color: colors.greenAccent[600] }} />}
              chartType={[1, 3, 4, 5, 5, 6, 6, 8]}
            />
          </Grid>
          <Grid item xs={12} md>
            <PersonalFinancesCard
              title="Savings"
              value={86723}
              icon={<Savings sx={{ color: colors.greenAccent[600] }} />}
              chartType={[3, -10, -2, 3, 4, -2, 4, 6]}
            />
          </Grid>
          <Grid item xs={12} md>
            <PersonalFinancesCard
              title="Investments"
              value={115550}
              icon={<AttachMoney sx={{ color: colors.greenAccent[600] }} />}
              chartType={[1, 4, 2, 5, 7, 2, 4, 6]}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <FinancialOverview />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <DebtOverview />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TransactionHistory />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SpendingBreakdown />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <BudgetAllocation />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
