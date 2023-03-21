import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import StudentService from '../service/StudentService';



const ListStudent = () => {
const [studentArray,setStudentArray]=useState([]);
    useEffect(()=>{
        getAllStudents();
    },[]);

    function getAllStudents(){
        StudentService.getAllStudents()
        .then(res=>{setStudentArray(res.data);
            console.log(res)})
        .catch(e=>console.log(e));
    }
    function deleteStudent(e, id) {
        e.preventDefault()
        StudentService.deleteStudent(id).then(getAllStudents()).catch(e => console.log(e));
    }

   
  return (
    <div className='container'>
        <input className ='search' type='text' placeholder='Enter Student ID'/>     
       <p/><p/>
        <h2 className='text-center mb-4'>List Student</h2>
        <table className='table table-bordered table striped'>
            <thead>
                <th><center>Student ID</center></th>
                <th><center>Name</center></th>
                <th><center>Degree Program</center></th>
                {/* <th>Courses</th> */}
                <th><center>Address</center></th>
                <th><center>Date of Birth</center></th>
                {/* <th><center>Courses</center></th> */}
                <th><center>Action</center></th>
                
            </thead>
            <tbody>
                {studentArray.map(student=>
                    <tr id={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName+" "+student.lastName}</td>
                        <td>{student.degree}</td>
                        <td>{student.address}</td>
                        <td>{student.bday}</td>
                        {/* <td>{student.Courses}</td> */}
                        <td>
                            {/* change this for the update */}
                       <center> <Link to={`/add-student/${student.id}`} className='btn btn-info' href="">Update</Link> {" "}
                        <a onClick={(e) => deleteStudent(e, student.id)} className='btn btn-danger'>Delete</a></center>
                        </td>
                    </tr>)}
            </tbody>
        </table>
        <center><Link to={"/add-student"}className='btn btn-primary mb-2 mt-3' href="">Add Student</Link></center>
    </div>
  )
}

export default ListStudent