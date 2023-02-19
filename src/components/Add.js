import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState ,} from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import uuid from 'react-uuid';


function Add() {

const [id,setId]=useState('')
const [empname,setEmpname]=useState('')
const [age,setAge]=useState('')
const [designation,setDesignation]=useState('')
const [salary,setSalary]=useState('')

const history=useNavigate()

const handleAdd=(e)=>{
  e.preventDefault();//prevent refreshing

let ids=uuid();
console.log(ids);

let uniqueId=ids.slice(0,8)
console.log(uniqueId);



Employee.push({
 id:uniqueId,
 empName:empname,
 age:age,
 designation:designation,
 salary:salary
})
history('/')
}
  return (
    <>
    <h2 className='text-primary text-center m-4'> Add Employee Management System</h2>
    <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources professionals often use an employee management system , including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p> 

<Row>
    <Col md={5}>
      <img src='https://i.pinimg.com/originals/44/91/1d/44911d955df77a82e556b723de24d690.png' className='w-100'/>
    </Col>

    <Col md={6}>
    <Form className='border border-3 p-5'>

  <Form.Group className="mb-3">
   <Form.Label>ID</Form.Label>
   <Form.Control type="text" placeholder="Enter Your Id"
  //  value={id}
   onChange={(e)=>setId(e.target.value)}
   required
    />
 </Form.Group>

<Form.Group className="mb-3">
   <Form.Label>Name</Form.Label>
   <Form.Control type="text" placeholder="Enter Your Name"
  //  value={empname}
   onChange={(e)=>setEmpname(e.target.value)}
   required
   />

   
 </Form.Group>
 
 <Form.Group className="mb-3">
   <Form.Label>Age</Form.Label>
   <Form.Control type="text" placeholder="Enter Your Age"
  //  value={age} 
   onChange={(e)=>setAge(e.target.value)}
   required
   />
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>Designation</Form.Label>
   <Form.Control type="text" placeholder="Enter Your Designation"
  //  value={designation}
   onChange={(e)=>setDesignation(e.target.value)}
   required
    />
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>Salary</Form.Label>
   <Form.Control type="text" placeholder="Enter Your Salary" 
  //  value={salary}
   onChange={(e)=>setSalary(e.target.value)}
     required
   />

 </Form.Group>

 <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
   Add
 </Button>
</Form>
   </Col>
</Row>
</>
  )
}

export default Add