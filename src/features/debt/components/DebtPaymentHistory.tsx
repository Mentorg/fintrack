import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { paymentHistoryData } from "../data/debt";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  { field: "date", headerName: "Date", flex: 1, minWidth: 120, maxWidth: 120 },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 150,
    maxWidth: 150,
  },
  { field: "type", headerName: "Type", flex: 1, minWidth: 120, maxWidth: 120 },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    minWidth: 130,
    maxWidth: 160,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    sortable: true,
    flex: 1,
    minWidth: 160,
    maxWidth: 130,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
  },
  {
    field: "reference",
    headerName: "Reference Number",
    flex: 1,
    minWidth: 170,
    maxWidth: 170,
  },
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
        rows={paymentHistoryData}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: CustomToolbar }}
        slotProps={{
          filterPanel: {
            sx: {
              maxWidth: "100vw"
            }
          },
          toolbar: {
            showQuickFilter: true,
          },
        }}
        editMode="row"
        initialState={{
          columns: {
            columnVisibilityModel: {
              status: false,
              category: false,
              paymentMethod: false,
              reference: false,
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

export default function DebtPaymentHistory() {
  return <Item title="Debt Payment History" content={<DataTable />} height={500} />;
}
