import React, { useEffect, useState } from 'react'
import { FormControl } from 'react-bootstrap';
import { Button, Card, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const location = useLocation();
    const [userDetails, setUserDetails] = useState([]);
    const [updateUser, setUpdateUser] = useState({
        userName:"",
        userAge:"",
        userPlace:""
                    });
    const[userDetailsBackup,setUserDetailsBackup] = useState([])
    const[indexToBeEdited,setIndexToBeEdited] =useState(-1)
    const navigate = useNavigate();

    useEffect(() => {
        location?.state !== null ? setUserDetails(location.state.userDetails) : setUserDetails([]);
        location?.state !== null ? setUserDetailsBackup(location.state.userDetails) : setUserDetails([]);
    }, []);

    function handleBack() {
        navigate("/", {
            state : {
                userDetails : userDetails
            }
        })
    }

    function handleDelete(indexToBeDeleted) {
        const updatedUserDetails = userDetails.filter((item,index)=>{
            if (index !== indexToBeDeleted)
                return item
        })
        setUserDetails(updatedUserDetails)
        }
        
    

    function handleFormat() {
        setUserDetailsBackup(userDetails)
        setUserDetails([])
    }

    function handleRestore() {
        setUserDetails(userDetailsBackup)
        
    }

    function handleEdit(indexToBeEdited,userToBeEdited) {
        setIndexToBeEdited(indexToBeEdited)
        setUpdateUser(userToBeEdited)
        

    }

    function handleUpdate(e) {
    
        setUpdateUser({
            ...updateUser,[e.target.name]:e.target.value
            
        })
        
    }

    function handleSave() {
        const updatedUserDetails = userDetails.map((user,index)=>{
            if (index === indexToBeEdited) {
                return updateUser
            }
            else {
                return user
            }
        })
        setUserDetails(updatedUserDetails)
        setUserDetailsBackup(updatedUserDetails)
        setIndexToBeEdited(-1)
        
    }

    return (
        <div className='pt-2 px-3'>
            {/* <Button className='mb-1' onClick={handleBack}>Back</Button> */}
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button className='btn btn-warning bi bi-arrow-left' onClick={handleBack}></Button>
                        <h1>User Details</h1>
                    </div>
                    <div>
                        <Button className='bi bi-recycle me-1 btn btn-success' onClick={handleRestore} ></Button>
                        <Button className='btn btn-danger bi bi-folder-x' onClick={handleFormat}></Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive className='text-center'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Place</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.map((user, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{index + 1}</td>
                                        {
                                            indexToBeEdited === index  ?
                                            <>
                                            <td><FormControl type='text' value={updateUser.userName} name='userName' onChange={handleUpdate} required/></td>
                                            <td><FormControl type='number' value={updateUser.userAge} name='userAge' onChange={handleUpdate} required/></td>
                                            <td><FormControl type='text' value={updateUser.userPlace} name='userPlace' onChange={handleUpdate} required/></td>
                                            <td><Button className='bi bi-floppy' variant='info' onClick={handleSave}></Button></td>
                                            </>
                                            :
                                            <>
                                            <td>{user.userName}</td>
                                            <td>{user.userAge}</td>
                                            <td>{user.userPlace}</td>
                                            <td><Button className='bi bi-pen' variant='warning' onClick={()=> handleEdit(index,user)}></Button></td>
                                            </>

                                        }

                                            <td><Button variant='danger' className='bi bi-trash' onClick={()=> handleDelete(index)}></Button></td>
                                    </tr>
                                    );
                             })}
                        </tbody>
            </Table>
            </Card.Body>
            </Card>
        </div>
    )
}

export default UserDetails;