import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../../../assets/theme";

interface TrendAnalysisChartProps {
  id: string;
  color: string;
  data: { x: string, y: number }[];
}

export const TrendAnalysisChart = ({ data }: { data: TrendAnalysisChartProps[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 10, bottom: 100, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
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
        legend: "Amount spent",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
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
      colors={{ scheme: "set1" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-left",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 80,
          itemWidth: 94,
          itemHeight: 15,
          itemsSpacing: 6,
          symbolSize: 19,
          symbolShape: "circle",
          itemDirection: "left-to-right",
          itemTextColor: `${colors.primary[100]}`,
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};