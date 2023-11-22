import { Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { tokens } from "../../../assets/theme";

const PersonalInformation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box className="settingWrapper">
        <Box>
          <Typography variant="h5">Personal Information</Typography>
        </Box>
        <Box className="settingLayout threeRows">
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              First Name
            </Typography>
            <Typography variant="h5">John</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Email Address
            </Typography>
            <Typography variant="h5">johnsmith@gmail.com</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Bio
            </Typography>
            <Typography variant="h5">Lawyer</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Last Name
            </Typography>
            <Typography variant="h5">Smith</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Birthday
            </Typography>
            <Typography variant="h5">03.04.1985</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Phone Number
            </Typography>
            <Typography variant="h5">+808 54 99 65 25</Typography>
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

export default PersonalInformation;
