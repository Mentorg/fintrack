import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { InvestmentPerformanceChart } from "./InvestmentPerformanceChart";
import { investmentPerformanceData } from "../data/investments";

export default function InvestmentPerformance() {
  return (
    <Item
      title="Investment Performance"
      content={
        <CardContent style={{ height: "400px", padding: 0 }} className="Mui-Chart">
          <InvestmentPerformanceChart data={investmentPerformanceData} />
        </CardContent>
      }
      height={500}
    />
  );
}
