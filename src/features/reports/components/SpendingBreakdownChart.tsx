import { useTheme } from "@mui/material";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../../assets/theme";

export const SpendingBreakdownChart = ({ data }: { data: BarDatum[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      keys={["rent", "utilities", "internet", "phone", "other"]}
      indexBy="day"
      margin={{ top: 0, right: 20, bottom: 40, left: 50 }}
      padding={0.3}
      groupMode="stacked"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      valueFormat=" =-$0,~"
      colors={{ scheme: "purple_orange" }}
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
        legend: "Weeks",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Amount spent",
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
            maxWidth: "10rem"
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