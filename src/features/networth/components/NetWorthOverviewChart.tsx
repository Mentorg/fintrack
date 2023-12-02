import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../../../assets/theme";

interface NetWorthOverviewChartProps {
  id: string;
  data: { x: string; y: number }[];
}

export const NetWorthOverviewChart = ({ data }: { data: NetWorthOverviewChartProps[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 10, bottom: 40, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: 10000,
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Months",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Amount",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      theme={{
        axis: {
          legend: {
            text: {
              fill: `${colors.primary[100]}`,
            },
          },
          ticks: {
            text: {
              fontSize: 11,
              fill: `${colors.primary[100]}`,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        tooltip: {
          container: {
            background: `${colors.primary[500]}`,
            color: `${colors.primary[100]}`,
            position: "fixed",
            maxWidth: "10rem",
          },
        },
      }}
      colors={colors.primary[100]}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaBaselineValue={70}
      areaOpacity={0.15}
      useMesh={true}
      legends={[]}
    />
  );
};