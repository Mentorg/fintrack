import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { investmentDetailsData } from "../data/investments";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  { field: "investmentName", headerName: "Name", flex: 1, minWidth: 160, maxWidth: 160 },
  { field: "investmentType", headerName: "Type", flex: 1, minWidth: 120, maxWidth: 120 },
  { field: "investmentSymbol", headerName: "Symbol", flex: 1, minWidth: 110, maxWidth: 110 },
  { field: "purchaseDate", headerName: "Purchase Date", flex: 1, minWidth: 120, maxWidth: 120 },
  { field: "sharesOrAmount", headerName: "Shares/Amount", flex: 1, minWidth: 110, maxWidth: 110 },
  { field: "purchasePrice", headerName: "Purchase Price", flex: 1, minWidth: 140, maxWidth: 140 },
  { field: "currentValue", headerName: "Current Value", flex: 1, minWidth: 100, maxWidth: 100 },
  { field: "gainOrLoss", headerName: "Gain/Loss", flex: 1, minWidth: 160, maxWidth: 160 },
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
    <Box style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={investmentDetailsData}
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

export default function InvestmentDetails () {
  return <Item title="Investment Details" content={<DataTable />} height={600} />
}