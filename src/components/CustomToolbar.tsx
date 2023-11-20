import { useTheme } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { tokens } from "../assets/theme";

export default function CustomToolbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <GridToolbarContainer sx={{ marginBottom: "1rem" }}>
      <GridToolbarColumnsButton style={{ color: colors.primary[100] }} />
      <GridToolbarFilterButton style={{ color: colors.primary[100] }} />
      <GridToolbarDensitySelector style={{ color: colors.primary[100] }} />
      <GridToolbarExport style={{ color: colors.primary[100] }} />
      <GridToolbarQuickFilter style={{ color: colors.primary[100] }} />
    </GridToolbarContainer>
  );
}
