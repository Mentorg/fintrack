import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { savingsData } from "../data/budget";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    minWidth: 160,
    maxWidth: 190,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 110,
    maxWidth: 130,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 160,
    maxWidth: 190,
  },
  { field: "goal", headerName: "Goal", flex: 1, minWidth: 110, maxWidth: 130 },
  {
    field: "targetDate",
    headerName: "Target Date",
    flex: 1,
    minWidth: 130,
    maxWidth: 160,
  },
  { field: "progress", headerName: "Progress" },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    minWidth: 120,
    maxWidth: 100,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    minWidth: 130,
    maxWidth: 160,
  },
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
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={savingsData}
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

const Savings = () => {
  return <Item title="Savings" content={<DataTable />} height={500} />;
};

export default Savings;
