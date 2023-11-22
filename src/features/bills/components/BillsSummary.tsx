import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import NotificationButton from "./ui/NotificationButton";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { billsSummarySchema, billsSummaryData } from "../data/bills";

const columns: GridColDef[] = [
  ...billsSummarySchema,
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
