import { Box, useTheme } from "@mui/material";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../../assets/theme";
import { portfolioOverviewData } from "../data/investments";

const MyResponsiveBar = ({ data }: { data: BarDatum[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      keys={["currentValue"]}
      indexBy="investment"
      margin={{ top: 0, right: 0, bottom: 40, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      valueFormat=" =-$0,~"
      colors={`${colors.blueAccent[400]}`}
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
        legend: "Category",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -40,
        legend: "Amount",
        legendPosition: "middle",
        legendOffset: -50,
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
            maxWidth: "20rem",
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

export default function PortfolioOverviewChart() {
  return (
    <Box style={{ height: "400px" }}>
      <MyResponsiveBar data={portfolioOverviewData} />
    </Box>
  );
}
