import { Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { tokens } from "../../../assets/theme";
import "../SettingsStyles.css";

const AccountPreferences = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box className="settingWrapper">
        <Box>
          <Typography variant="h5">Account Preferences</Typography>
        </Box>
        <Box className="settingLayout">
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Language
            </Typography>
            <Typography variant="h5">English</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Currency
            </Typography>
            <Typography variant="h5">USD</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Date and Time Format
            </Typography>
            <Typography variant="h5">D/M/Y</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Timezone
            </Typography>
            <Typography variant="h5">UTC+0</Typography>
          </Box>
          <Box className="settingItem btn">
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
