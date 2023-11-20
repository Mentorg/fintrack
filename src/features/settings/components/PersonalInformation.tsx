import { Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { tokens } from "../../../assets/theme";

const PersonalInformation = () => {
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
          <Typography variant="h5">Personal Information</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              First Name
            </Typography>
            <Typography variant="h5">John</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Email Address
            </Typography>
            <Typography variant="h5">johnsmith@gmail.com</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Bio
            </Typography>
            <Typography variant="h5">Lawyer</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Last Name
            </Typography>
            <Typography variant="h5">Smith</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Birthday
            </Typography>
            <Typography variant="h5">03.04.1985</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Phone Number
            </Typography>
            <Typography variant="h5">+808 54 99 65 25</Typography>
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

export default PersonalInformation;
