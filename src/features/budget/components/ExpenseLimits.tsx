import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import Item from "../../../components/Item";
import BasicModal from "../../../components/Modal";
import { tokens } from "../../../assets/theme";
import { expenseLimitsData } from "../data/budget";

const StackItem = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    alignItems: "center",
    backgroundColor: colors.primary[500],
    borderRadius: "1rem",
    cursor: "pointer",
    display: "flex",
    gap: "1rem",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(clamp(250px, 16vw, 860px), 1fr))",
    padding: "1rem",
    transition: ".2s",
    width: "100%",
  };

  const dataList = expenseLimitsData.map((obj, index) => (
    <Box sx={styles} key={index}>
      <Avatar
        sx={{
          backgroundColor: `${colors.blueAccent[300]}`,
          "& :hover, & .MuiAvatar-root svg:hover": {
            backgroundColor: `${colors.blueAccent[300]} !important`,
          },
        }}
      >
        <WalletOutlinedIcon />
      </Avatar>
      <Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {obj.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" sx={{ color: colors.grey[300] }}>
            {obj.currentValue} /
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            &nbsp;{obj.limit}
          </Typography>
        </Box>
      </Box>
    </Box>
  ));

  return (
    <>
      <BasicModal
        content={
          <Box>
            <Avatar
              sx={{
                backgroundColor: `${colors.blueAccent[300]}`,
                "& :hover, & .MuiAvatar-root svg:hover": {
                  backgroundColor: `${colors.blueAccent[300]} !important`,
                },
              }}
            >
              <AddOutlinedIcon />
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Set New Limit
              </Typography>
            </Box>
          </Box>
        }
      />
      {dataList}
    </>
  );
};

const ExpenseLimits = () => {
  return (
    <Item
      title="Expense Limits"
      content={
        <Stack
          sx={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
            paddingRight: "1rem",
          }}
        >
          <StackItem />
        </Stack>
      }
      height={500}
    />
  );
};

export default ExpenseLimits;
