import { ReactNode } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts";
import { tokens } from "../../../assets/theme";

type PersonalFinancesCardProps = {
  title: string;
  value: number;
  icon: ReactNode;
  chartType: number[];
};

export default function PersonalFinancesCard({
  title,
  value,
  icon,
  chartType,
}: PersonalFinancesCardProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: colors.primary[400],
        borderRadius: "4px",
        boxShadow: 4,
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "max(30%, 50%)" }}>
        {icon}
        <Typography variant="h3">${value}</Typography>
        <Typography variant="h6" color={colors.grey[400]}>{title}</Typography>
      </Box>
      <Box>
        <SparkLineChart
          height={50}
          width={100}
          data={[...chartType]}
          showTooltip
          showHighlight
          plotType="bar"
        />
      </Box>
    </Box>
  );
}
