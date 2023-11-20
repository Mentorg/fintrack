import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { TrendAnalysisChart } from "./TrendAnalysisChart";
import { trendAnalysisData } from "../data/reports";

const TrendAnalysis = () => {
  return (
    <Item
      title="Trend Analysis"
      content={
        <CardContent
          style={{ height: "400px", padding: 0 }}
          className="Mui-Chart"
        >
          <TrendAnalysisChart data={trendAnalysisData} />
        </CardContent>
      }
      height={500}
    />
  );
};

export default TrendAnalysis;
