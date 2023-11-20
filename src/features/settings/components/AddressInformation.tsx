import { Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { tokens } from "../../../assets/theme";

const AddressInformation = () => {
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
          <Typography variant="h5">Address</Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Country
            </Typography>
            <Typography variant="h5">USA</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Postal Code
            </Typography>
            <Typography variant="h5">ERT 2345</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              City/State
            </Typography>
            <Typography variant="h5">New York</Typography>
          </Box>
          <Box sx={{ justifySelf: "left", marginBlock: 0.5 }}>
            <Typography color={colors.grey[300]} variant="h6">
              Tax ID
            </Typography>
            <Typography variant="h5">S651A6S6DADS</Typography>
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

export default AddressInformation;
