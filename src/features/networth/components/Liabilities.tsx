import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { liabilitiesData } from "../data/networth";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 160, maxWidth: 160 },
  { field: "type", headerName: "Type", flex: 1, minWidth: 120, maxWidth: 120 },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
  },
  {
    field: "interestRate",
    headerName: "Interest Rate",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "minimumPayment",
    headerName: "Minimum Payment",
    flex: 1,
    minWidth: 170,
    maxWidth: 170,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    flex: 1,
    minWidth: 150,
    maxWidth: 150,
  },
  {
    field: "loanTerm",
    headerName: "Loan Term",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
    maxWidth: 160,
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
