import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { BudgetComparisonChart } from "./BudgetComparisonChart";
import { budgetComparisonData } from "../data/reports";

const BudgetComparison = () => {
  return (
    <Item
      title="Budget Comparison"
      content={
        <CardContent
          style={{ height: "400px", padding: 0 }}
          className="Mui-Chart"
        >
          <BudgetComparisonChart data={budgetComparisonData} />
        </CardContent>
      }
      height={500}
    />
  );
};

export default BudgetComparison;
