import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { debtOverviewData } from "../data/debt";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "creditor",
    headerName: "Creditor",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "debtType",
    headerName: "Debt Type",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "balance",
    headerName: "Balance",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
  },
  {
    field: "interestRate",
    headerName: "Interest",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
  },
  {
    field: "minimumPayment",
    headerName: "Min. Payment",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
  },
  {
    field: "remainingTerm",
    headerName: "Remaining Term",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    sortable: true,
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
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
    field: "paymentProgress",
    headerName: "Progress",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
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
        rows={debtOverviewData}
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

export default function DebtOverview() {
  return <Item title="Debt Overview" content={<DataTable />} height={500} />;
}
