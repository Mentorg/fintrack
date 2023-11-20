import { ReactNode, SyntheticEvent, useState } from "react";
import { Box, CardContent, Tabs, Tab, Typography, useTheme } from "@mui/material";
import { TableChart, StackedBarChart } from "@mui/icons-material";
import Item from "../../../components/Item";
import PortfolioOverviewTable from "./PortfolioOverviewTable";
import PortfolioOverviewChart from "./PortfolioOverviewChart";
import { tokens } from "../../../assets/theme";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PortfolioOverview() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Item
      title="Portfolio Overview"
      content={
        <CardContent style={{ height: "500px", padding: 0 }} className="Mui-Chart">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            sx={{
              "& button.Mui-selected": { color: colors.blueAccent[400] },
              "& span.MuiTabs-indicator": { backgroundColor: colors.blueAccent[400] },
             }}
          >
            <Tab
              icon={<StackedBarChart />}
              {...a11yProps(1)}
              label="Chart"
              aria-label="chart"
            />
            <Tab
              icon={<TableChart />}
              {...a11yProps(0)}
              label="Table"
              aria-label="table"
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <PortfolioOverviewChart />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <PortfolioOverviewTable />
          </CustomTabPanel>
        </CardContent>
      }
      height={600}
    />
  );
}
