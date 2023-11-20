import { Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { tokens } from "../../../assets/theme";

const AccountPreferences = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "clamp(0.5em, 5%, 3em)",
          flexDirection: "column",
          paddingBlock: "clamp(0.5em, 5%, 2em)",
        }}
      >
        <Box>
          <Typography variant="h5">Account Preferences</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridAutoColumns: "column",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Language
            </Typography>
            <Typography variant="h5">English</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Currency
            </Typography>
            <Typography variant="h5">USD</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginLeft: "auto" }}>
            <Button color="success" endIcon={<Edit />} variant="outlined">
              <Typography variant="h6">Edit</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountPreferences;
