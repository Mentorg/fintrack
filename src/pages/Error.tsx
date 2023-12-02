import { Box, Typography } from "@mui/material";

export default function Error() {

  return (
    <Box className="error-page" sx={{ padding: "1rem" }}>
      <Box>
        <Typography variant="h1" fontWeight={600} textAlign="center">404</Typography>
      </Box>
      <Typography variant="h4" mt={4} textAlign="center">Sorry, but that's not a valid link!</Typography>
      <Typography variant="h6" fontWeight={400} textAlign="center">
        It may have been removed, had its name changed, or the address may be incorrect.
      </Typography>
    </Box>
  )
}