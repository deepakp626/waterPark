import  React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { allUsers } from '../api/urls.ts'
import axios, { all } from 'axios'
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const UserList = () => {
  const [userList,SetUserList] = useState<Array<{}>>([])
  // console.log(rows.length)
  const loadData = async () => {
    try {
       const res = await axios({
        method:"GET",
        url:allUsers
       })
       res.data.usersList.forEach((item)=>{
         SetUserList((prev) => [
           ...prev,
           {
            id: item._id,
            firstName: item.name,
            children: item.children
           }
         ])
        // SetUserList.push(item)
       })
       console.log(res)
    } catch (error) {
      console.log("userList", error)
    }
  }
  console.log(userList)
  useEffect(() => {
     loadData()
  }, [])

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize:5},
            },
          }}
          pageSizeOptions={[5, 10,20,50,userList.length]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default UserList