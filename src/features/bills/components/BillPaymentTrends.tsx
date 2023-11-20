import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { BillPaymentTrendsChart } from "./BillPaymentTrendsChart";
import { billPaymentTrendsData } from "../data/bills";

const BillPaymentTrends = () => {
  return (
    <Item
      title="Bill Payment Trends"
      content={
        <CardContent
          style={{ height: "400px", padding: 0 }}
          className="Mui-Chart"
        >
          <BillPaymentTrendsChart data={billPaymentTrendsData} />
        </CardContent>
      }
      height={500}
    />
  );
};

export default BillPaymentTrends;
