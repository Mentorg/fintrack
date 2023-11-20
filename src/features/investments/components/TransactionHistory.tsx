import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { transactionHistoryData } from "../data/investments";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "transactionDate",
    headerName: "Transaction Date",
    type: "Date",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
    editable: true,
  },
  {
    field: "transactionType",
    headerName: "Transaction Type",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
    editable: true,
  },
  {
    field: "stockSymbol",
    headerName: "Stock Symbol",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
    editable: true,
  },
  {
    field: "stockName",
    headerName: "Stock Name",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
    editable: true,
  },
  {
    field: "pricePerShare",
    headerName: "Price per Share",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
    editable: true,
  },
  {
    field: "totalCost",
    headerName: "Total Cost",
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
    editable: true,
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
        rows={transactionHistoryData}
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

export default function TransactionHistory() {
  return (
    <Item title="Transaction History" content={<DataTable />} height={500} />
  );
}
