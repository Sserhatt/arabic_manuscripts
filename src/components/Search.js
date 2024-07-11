import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// import JSON from file
import manuscripts from '../data/arg_theory.js';

const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'library', headerName: 'Library', width: 200 },
  { field: 'bookTitle', headerName: 'Book Title', width: 250 },
  { field: 'englishTranslation', headerName: 'English Translation', width: 250 },
  { field: 'author', headerName: 'Author', width: 250 },
  { field: 'dateOfBirth', headerName: 'Date of Birth', width: 100, },
  { field: 'dateOfDeath', headerName: 'Date of Death', width: 100, },
  { field: 'dateOfCreation', headerName: 'Date of Creation', width: 100 },
  { field: 'manuscriptType', headerName: 'Manuscript Type', width: 100 },
  { field: 'inventoryNumber', headerName: 'Inventory Number', width: 100 },
  { field: 'numberOfPages', headerName: 'Number of Pages', width: 100 },
  { field: 'calligraphy', headerName: 'Calligraphy', width: 100 },
];

function Search() {
  const handleRowClick = (params) => {
    // params has information about the row clicked
    console.log(params);
  };

  return (
    <div>
      <div id="progress-bar" />
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={manuscripts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={handleRowClick} // Adding the event listener here
        />
      </Box>
    </div>
  );
}


export default Search;
