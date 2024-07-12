import React, { useState, useEffect } from 'react';
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
  const [clickedRow, setClickedRow] = useState(null);
  const [clickedPage, setClickedPage] = useState(null);
  const [xmlContent, setXmlContent] = useState('');

  const loadXmlFile = async (pageNumber) => {
    try {
      const response = await fetch(`/doc${clickedRow.row.id}/page${pageNumber}.xml`);
      const text = await response.text();
      setXmlContent(text);
    } catch (error) {
      console.error('Failed to load XML file', error);
      setXmlContent('Failed to load content');
    }
  };

  const handleRowClick = (params) => {
    setClickedRow(params);
  };

  const handlePageClick = (event) => {
    const pageNumber = event.target.getAttribute('data-page');
    setClickedPage(pageNumber);
    loadXmlFile(pageNumber);
    console.log(clickedRow.row.id, pageNumber);
  };

  return (
    <div className='container'>
      <div id="progress-bar" />
      <Box sx={{ height: 400, width: '100%', paddingTop: "50px" }}>
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
      {clickedRow ? <div>
        <div>
          <p>Title: {clickedRow ? clickedRow.row.bookTitle : 'N/A'}</p>
          <p>Author: {clickedRow ? clickedRow.row.author : 'N/A'}</p>
          <p>Calligraphy: {clickedRow ? clickedRow.row.calligraphy : 'N/A'}</p>
          <div>
            <ul className='page-list'>
              {clickedRow && clickedRow.row.pages ? (
                Array.from({ length: clickedRow.row.pages }, (_, i) => i + 1).map((pageNumber) => (
                  <li onClick={handlePageClick} key={pageNumber} data-page={pageNumber}>{pageNumber}</li>
                ))
              ) : (
                <li onClick={handlePageClick} key={1} data-page={1}>{1}</li>
              )}
            </ul>
          </div>

        </div>
        <div className='synopsis horizontal'>
          <div className='left'><img src={`/doc1/page${clickedPage}.jpg`} alt="Manuscript" /></div>
          <div className='right'><pre>{xmlContent}</pre></div>
        </div>
      </div> : null}


    </div>
  );
}

export default Search;
