import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import jsondata from "../component/data.json"

const columns = [
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'department', headerName: 'Department', width: 120 },
    { field: 'company', headerName: 'Company', width: 120 },
    { field: 'weekEnding', headerName: 'WeekEnding', width: 100 },
    { field: 'totalHour', headerName: 'TotalHour', width: 80 },
    { field: 'submittedAt', headerName: 'SubmittedAt', width: 180 },
    { field: 'status', headerName: 'Status', width: 90 },
    
  ];

let rows;


export default function Alltimesheet(any) {
  rows=any.prop
  return (
    <div className='alltimesheet'>
    <h2>All TimeSheets</h2>
    <div style={{ height: 371, width: '100%' }} className='tab'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
    </div>
  );
}