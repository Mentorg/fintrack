import { Box, Typography, TextField } from "@mui/material";

const PasswordReset = () => {
  return (
    <>
      <Box className="settingWrapper">
        <Box>
          <Typography variant="h5">Change Password</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 2,
            justifyContent: "space-between",
            mt: 2,
            width: "100%"
          }}
        >
          <TextField label="Old Password" variant="outlined" className="textfield" />
          <TextField label="New Password" variant="outlined" className="textfield" />
          <TextField label="Confirm New Password" variant="outlined" className="textfield" />
        </Box>
      </Box>
    </>
  );
};

export default PasswordReset;
