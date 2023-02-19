import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';

function Edit() {

const [id,setId]=useState('')
const [empname,setEmpname]=useState('')
const [age,setAge]=useState('')
const [designation,setDesignation]=useState('')
const [salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(localStorage.getItem('ID'))
    setEmpname(localStorage.getItem('NAME'))
    setAge(localStorage.getItem('AGE'))
    setDesignation(localStorage.getItem('DESIGNATION'))
    setSalary(localStorage.getItem('SALARY'))

},[])
console.log(id);
console.log(empname);


var index = Employee.map(item=>item.id).indexOf(id);
console.log(index);

 let history=useNavigate()
 const handleUpdate=(e)=>{
  e.preventDefault();//avoid refreshing
  console.log(e);//event
  let emp=Employee[index]
  console.log(emp);//fulll details of employee
  emp.id=id;
  emp.empname=empname;
  emp.age=age;
  emp.designation=designation;
  emp.salary=salary;
  console.log(emp);//updated details of employee

  history('/')
}

  return (
      <>
         <h2 className='text-primary text-center m-4'>Employee Management System</h2>
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
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required
         />
      </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name"
        value={empname}
        onChange={(e)=>setEmpname(e.target.value)}
        required
        />

        
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age"
        value={age} 
        onChange={(e)=>setAge(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation"
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required
         />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Salary" 
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
          required
        />

      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
        </Col>
    </Row>
    </>
  )
}

export default Edit