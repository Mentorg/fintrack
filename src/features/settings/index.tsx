import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import BasicInformation from "./components/BasicInformation";
import { tokens } from "../../assets/theme";
import AddressInformation from "./components/AddressInformation";
import PersonalInformation from "./components/PersonalInformation";
import AccountPreferences from "./components/AccountPreferences";
import AuthenticationPreferences from "./components/AuthenticationPreferences";
import PasswordReset from "./components/PasswordReset";

export default function Settings() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ paddingBlock: 2, width: "100%" }}>
          <Typography variant="h1">Settings</Typography>
          <Typography variant="h6">Manage your app's settings</Typography>
        </Box>
        <Box sx={{ backgroundColor: colors.primary[400], padding: 4 }}>
          <Box sx={{ paddingBlock: 2, width: "100%" }}>
            <Typography variant="h3">My Profile</Typography>
            <Typography variant="h6">Update your profile here.</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <BasicInformation />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AccountPreferences />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <PersonalInformation />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AddressInformation />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AuthenticationPreferences />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <PasswordReset />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
            <Button variant="contained" color="success">
              <Typography variant="h5">Save</Typography>
            </Button>
            <Button variant="outlined" color="info">
              <Typography variant="h5">Cancel</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
