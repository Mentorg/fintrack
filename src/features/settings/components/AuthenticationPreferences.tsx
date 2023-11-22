import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const AuthenticationPreferences = () => {
  return (
    <>
      <Box className="settingWrapper">
        <Box>
          <Typography variant="h5">Two-factor Authentication</Typography>
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="success" />}
            labelPlacement="end"
            label={
              <Typography variant="h5">
                SMS Authentication: This option allows you to receive a
                verification code via SMS to your registered phone number. You
                can enter this code to complete the authentication process.
              </Typography>
            }
            sx={{ m: 0, marginBlock: 1 }}
          />
          <FormControlLabel
            control={<Checkbox color="success" />}
            labelPlacement="end"
            label={
              <Typography variant="h5">
                Email Authentication: You can receive a verification code via
                email. They will need to enter this code to authenticate
                themselves successfully.
              </Typography>
            }
            sx={{ m: 0, marginBlock: 1 }}
          />
        </FormGroup>
      </Box>
    </>
  );
};

export default AuthenticationPreferences;
