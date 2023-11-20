import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import userImage from "../../../assets/user.png";
import { tokens } from "../../../assets/theme";

const BasicInformation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          gap: "clamp(0.5em, 5%, 3em)",
          paddingBlock: "clamp(0.5em, 5%, 2em)",
        }}
      >
        <Box>
          <Avatar
            alt="User Picture"
            src={userImage}
            sx={{ height: 90, width: 90 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">John Smith</Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            Lawyer
          </Typography>
          <Typography variant="h6" color={colors.grey[100]}>
            New York, USA
          </Typography>
        </Box>
        <Box sx={{ ml: "auto" }}>
          <Button color="success" endIcon={<Edit />} variant="outlined">
            <Typography variant="h6">Edit</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BasicInformation;
