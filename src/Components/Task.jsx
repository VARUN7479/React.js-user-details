import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Form, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

const Demo2 = () => {

    const [item, setItem] = useState("");// individual item

    const [items, setItems] = useState([]);// items list

    function handleClick(e) {
        e.preventDefault();// form reloading prevented here

        setItems([...items, item]);// to add the input field value into the list

        setItem("");// to clear the input field
    }
    return (
        <div className='container w-50'>
            <Card>
                <CardHeader>
                    <h3>To Do App</h3>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleClick}>
                        <div className='d-flex'>
                            <FormControl onChange={(e) => setItem(e.target.value)} name='item' value={item} />
                            <Button  type='submit'>Add</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
            <ListGroup>
                {items.map((item, index) => {
                    return (
                        <ListGroupItem key={index}>{item}</ListGroupItem>
                    );
                })}
            </ListGroup>
        </div>
    )
}

export default Demo2;