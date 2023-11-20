import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { portfolioOverviewData } from "../data/investments";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  { field: "assetName", headerName: "Asset Name", flex: 1, minWidth: 160, maxWidth: 160 },
  { field: "assetType", headerName: "Asset Type", flex: 1, minWidth: 130, maxWidth: 130 },
  { field: "currentPrice", headerName: "Current Price", flex: 1, minWidth: 140, maxWidth: 140 },
  { field: "quantity", headerName: "Quantity", flex: 1, minWidth: 110, maxWidth: 110 },
  { field: "costBasis", headerName: "Cost Basis", flex: 1, minWidth: 120, maxWidth: 120 },
  { field: "currentValue", headerName: "Current Value", flex: 1, minWidth: 140, maxWidth: 140 },
  { field: "gainOrLoss", headerName: "Unrealized Gain/Loss", flex: 1, minWidth: 180, maxWidth: 180 },
  { field: "annualReturn", headerName: "Annual Return", flex: 1, minWidth: 140, maxWidth: 140 },
  { field: "allocation", headerName: "Allocation", flex: 1, minWidth: 120, maxWidth: 120 },
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
      )
    }
  },
];

function DataTable() {
  return (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={portfolioOverviewData}
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
            }
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

export default function PortfolioOverviewTable () {
  return <DataTable />
}