import React, { useEffect,useState } from 'react'
import { Button, Card, Form, FormControl, Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';

function UserForm() {
    
    const location = useLocation()
    const [userDetails, setUserDetails] = useState([]);
    const [user, setUser] = useState({
        userName:"",
        userAge:"",
        userPlace:""
    });
    const[show,setShow]= useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        location?.state !== null ? setUserDetails(location.state.userDetails) : setUserDetails([]);
        }, []);

        function handleSubmit(e) {
            e.preventDefault();
            if (user.userName.length > 0 && user.userPlace.length > 2 && user.userAge.length > 0 && user.userAge > 0) {
                setUserDetails([...userDetails, user]);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                    setUser({
                        userName: "",
                        userAge: "",
                        userPlace: ""
                    });
                }, 100);
            } else {
                alert("Enter valid details!!");
            }
        }

    function handleChange(event) {

        setUser({
            ...user, [event.target.name]: event.target.value

        });
    }

    function viewDetails() {
        navigate("/v", {
            state: {
                userDetails: userDetails

            }
        });
    }

    return (
        <div className='container w-75'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                    <h1>Register Here</h1>
                    {show && <Spinner variant='success' />}
                    </div>
                    <Button variant='info' className='bi bi-table' onClick={viewDetails}></Button>
                </Card.Header>
                <Form  onSubmit={handleSubmit} method='POST'>
                    <Card.Body className='userInput'>
                        <FormControl className='mb-1' onChange={handleChange}
                            placeholder='Enter your name' value={user.userName} type='text' name='userName' required />
                        <FormControl className='mb-1' onChange={handleChange}
                            placeholder='Enter your age' value={user.userAge} type='number' name='userAge' required />
                        <FormControl className='mb-1' onChange={handleChange}
                            placeholder='Enter your place' value={user.userPlace} type='text' name='userPlace' required/>
                    </Card.Body>
                    <Card.Footer>
                        <Button type='submit'>Sign Up</Button>
                    </Card.Footer>
                </Form>
            </Card>
        </div>
    )
}

export default UserForm