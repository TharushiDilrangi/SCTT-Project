import React, {useState,useEffect} from 'react'
import StudentService from '../service/StudentService';
import {Link, useNavigate,useParams} from 'react-router-dom';

const AddStudentComponent = () => {
    const[firstName, setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[degree,setDegree]=useState('');
    const[address,setAddress]=useState('');
    // const[id,setID]=useState('');
    const[bday,setBday]=useState('');
    const[Courses,setCourse]=useState('')
    const navigate= useNavigate();
    const { id } = useParams();

    const studentData={firstName,lastName,address,bday,degree,Courses};
    // console.log(studentData);

    function saveStudent(e){
        e.preventDefault();

        if(studentData.firstName!==""  && studentData.lastName!==""
        && studentData.degree!=="" && studentData.address!==""
         && studentData.id!=="" && studentData.bday!==""){

            if (id) {
                StudentService.updateStudent(id, studentData)
                    .then(navigate("/student"))
                    .catch(e => console.log(e));
            }
            else{
            StudentService.saveStudent(studentData)
            .then(navigate("/student"))
            .catch(e=>console.log(e));
         }
        }
         else{
            alert("Please enter all data");
         }

   
    }
    function tile() {
        if (id) {
            return "Update Student";
        } else {
            return "Add Student";
        }
    }
    useEffect(() => {
        if (id) {
            StudentService.getStudentById(id)
                .then(res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setDegree(res.data.degree);
                    setAddress(res.data.address);
                    setBday(res.data.bday);
                    setCourse(res.data.Courses);
                })
                .catch(e => console.log(e));
        }
    }, []);

  return (
    <div>
        <div className='container-mt-5'>
            <div className='row'>
                <div className='card col-md-6-offset-md-3'>
                    <h2 className='studentRegistration' >Student Registration Form</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                type="text" placeholder='First Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                type="text" placeholder='Last Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                type="text" placeholder='Address' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={bday}
                                onChange={(e)=>setBday(e.target.value)}
                                type="text" placeholder='Date of Birth' />
                            </div>
                            {/* <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={id}
                                onChange={(e)=>setID(e.target.value)}
                                type="text" placeholder='ID Number' />
                            </div> */}
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                value={degree}
                                onChange={(e)=>setDegree(e.target.value)} 
                                type="text" placeholder='Degree Program' />
                            </div>
                           
                            <center><button onClick={(e)=>saveStudent(e)} className='btn btn-success'>REGISTER</button> {" "}
                            <Link to={"/student"} className='btn btn-danger' href="">Cancel</Link></center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudentComponent