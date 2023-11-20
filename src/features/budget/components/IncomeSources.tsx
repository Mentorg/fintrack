import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { incomeSourcesData } from "../data/budget";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    type: "number",
    flex: 1,
    minWidth: 80,
    maxWidth: 80,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "sourceName",
    headerName: "Source name",
    type: "string",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount ($)",
    type: "number",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    type: "string",
    sortable: true,
    flex: 0.3,
    minWidth: 160,
    maxWidth: 150,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    type: "string",
    flex: 1,
    minWidth: 120,
    maxWidth: 90,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "status",
    headerName: "Status",
    type: "boolean",
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "received",
    headerName: "Received",
    type: "string",
    flex: 1,
    minWidth: 120,
    maxWidth: 100,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "description",
    headerName: "Description",
    type: "string",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "nextPayment",
    headerName: "Next Payment",
    type: "string",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "taxRate",
    headerName: "Tax Rate (%)",
    type: "number",
    flex: 1,
    minWidth: 120,
    maxWidth: 100,
    align: "left",
    headerAlign: "left",
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
