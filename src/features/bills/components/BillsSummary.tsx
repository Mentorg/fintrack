import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import NotificationButton from "./ui/NotificationButton";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { billsSummaryData } from "../data/bills";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "billName",
    headerName: "Bill Name",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "vendor",
    headerName: "Vendor",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
  },
  {
    field: "paymentDate",
    headerName: "Payment Date",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    description: "The date by which the bill payment is due.",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "amount",
    headerName: "Amount",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    sortable: true,
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "notification",
    headerName: "Notification",
    type: "boolean",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
    renderCell: () => {
      return (
        <Box>
          <NotificationButton />
        </Box>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "notes",
    headerName: "Notes",
    sortable: false,
    flex: 1,
    minWidth: 160,
    maxWidth: 190,
  },
  {
    field: "recordPayment",
    headerName: "Record Payment",
    sortable: false,
    flex: 1,
    minWidth: 220,
    maxWidth: 220,
    renderCell: (params) => {
      return (
        <Box>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            tabIndex={params.hasFocus ? 0 : -1}
          >
            Make a payment record
          </Button>
        </Box>
      );
    },
  },
  {
    field: "autoPay",
    headerName: "Auto Pay",
    sortable: false,
    description:
      "Indicate whether the bill is set up for automatic payment or requires manual payment.",
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
    renderCell: () => {
      return (
        <Box>
          <NotificationButton />
        </Box>
      );
    },
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
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={billsSummaryData}
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

const BillsSummary = () => {
  return <Item title="Bills Summary" content={<DataTable />} height={500} />;
};

export default BillsSummary;
