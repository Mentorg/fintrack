import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { investmentDetailsSchema, investmentDetailsData } from "../data/investments";

const columns: GridColDef[] = [
  ...investmentDetailsSchema,
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