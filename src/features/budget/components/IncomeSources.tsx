import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { incomeSourcesSchema, incomeSourcesData } from "../data/budget";

const columns: GridColDef[] = [
  ...incomeSourcesSchema,
  {
    field: "options",
    headerName: "",
    sortable: false,
    flex: 1,
    minWidth: 60,
    maxWidth: 60,
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
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={incomeSourcesData}
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
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}

const IncomeSources = () => {
  return <Item title="Income Sources" content={<DataTable />} height={500} />;
};

export default IncomeSources;
