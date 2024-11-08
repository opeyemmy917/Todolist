import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({todolist,deleteit,handleEdit,}) => { 'p'
  return (
  <table>
    <thead>
        <tr>
            <th>S/n</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
            
        </tr>
    </thead>
    <tbody>
       {todolist && todolist.map((el, i)=>(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.gender}</td>
            <td onClick={()=>deleteit(el)}> <button>delete</button></td>
            <td><Link to={`/todo/${el.email}`}>see User</Link></td>
            <td onClick={()=>handleEdit(i)}><button>Edit</button></td>
            </tr>
          )) 
        }
    </tbody>
  </table>
  )
}

export default Table