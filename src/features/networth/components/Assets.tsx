import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Item from "../../../components/Item";
import ContextMenu from "../../../components/ContextMenu";
import CustomToolbar from "../../../components/CustomToolbar";
import { assetsData } from "../data/networth";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "assetName",
    headerName: "Name",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "assetType",
    headerName: "Type",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "currentValue",
    headerName: "Current Value",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "currency",
    headerName: "Currency",
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "acquisitionDate",
    headerName: "Acquisition Date",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "apprOrDepr",
    headerName: "Appreciation/Depreciation",
    flex: 1,
    minWidth: 210,
    maxWidth: 100,
  },
  {
    field: "description",
    headerName: "Remaining Term",
    flex: 1,
    minWidth: 160,
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
        rows={assetsData}
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

export default function Assets() {
  return <Item title="Assets" content={<DataTable />} height={500} />;
}
