import { useTheme } from "@mui/material";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../../assets/theme";

export const BudgetComparisonChart = ({ data }: { data: BarDatum[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <ResponsiveBar
      data={data}
      keys={["budget", "actual"]}
      indexBy="category"
      margin={{ top: 0, right: 20, bottom: 40, left: 50 }}
      padding={0.3}
      groupMode="grouped"
      layout="vertical"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      valueFormat=" =-$0,~"
      colors={[ `${colors.blueAccent[300]}`, `${colors.blueAccent[500]}` ]}
      defs={[
        {
          id: "dots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
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
            maxWidth: "15rem",
          },
        },
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};