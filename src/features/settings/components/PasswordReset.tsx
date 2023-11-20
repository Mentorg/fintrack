import { Box, Typography, TextField } from "@mui/material";

const PasswordReset = () => {
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
          }}
        >
          <TextField label="Old Password" variant="outlined" />
          <TextField label="New Password" variant="outlined" />
          <TextField label="Confirm New Password" variant="outlined" />
        </Box>
      </Box>
    </>
  );
};

export default PasswordReset;
