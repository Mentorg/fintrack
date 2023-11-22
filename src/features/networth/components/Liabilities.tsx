import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { liabilitiesSchema, liabilitiesData } from "../data/networth";

const columns: GridColDef[] = [
  ...liabilitiesSchema,
  {
    field: "options",
    headerName: "",
    sortable: false,
    flex: 1,
    minWidth: 90,
    maxWidth: 90,
    renderCell: () => {
      return (
        <Box>
          <ContextMenu />
        </Box>
      );
    },
  },
];

function DataTable() {
  return (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={liabilitiesData}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: CustomToolbar }}
        slotProps={{
          filterPanel: {
            sx: {
              maxWidth: "100vw",
            },
          },
          toolbar: {
            showQuickFilter: true,
          },
        }}
        editMode="row"
        initialState={{
          columns: {
            columnVisibilityModel: {
              remainingTerm: false,
            },
          },
          filter: {
            filterModel: {
              items: [],
              quickFilterExcludeHiddenColumns: true,
            },
          },
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}

export default function Liabilities() {
  return <Item title="Liabilities" content={<DataTable />} height={500} />;
}
