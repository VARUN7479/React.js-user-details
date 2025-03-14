import React, { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardHeader, Form, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

const Demo2 = () => {

    const [item, setItem] = useState("");// individual item
    const [itemList, setItemList] = useState(["Drink Water", "Have Food", "Have Medicine", "Wash Car"]);// items list
    //["Drink Water", "Have Food", "Have Medicine", "Wash Car"]
    const [idToBeEdited, setIdToBeEdited] = useState(-1);

    function handleClick(e) {
        e.preventDefault();// form reloading prevented here
        setItemList([...itemList, item]);// to add the input field value into the list
        setItem("");// to clear the input field
    }

    function handleDelete(indexToBeDeleted) {
        const updatedList = itemList.filter((item, index) => {
            if (index !== indexToBeDeleted) {
                return item;
            }
        })
        setItemList(updatedList);
    }

    function handleDone(taskIndexToBeDone) {

    }

    function handleEdit(indexToBeEdited) {
        setIdToBeEdited(indexToBeEdited);
    }

    function handleSave() {
        setIdToBeEdited(-1);
    }

    return (
        <div className='container w-50 mt-2'>
            <Card>
                <CardHeader>
                    <h1>To Do App</h1>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleClick}>
                        <div className='d-flex'>
                            <FormControl onChange={(e) => setItem(e.target.value)} name='item' value={item} placeholder='Enter a task to be added' />
                            <Button className='bi bi-plus' type='submit'></Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
            <div className='container'>
                {itemList.length > 0 ? <h3>Tasks</h3> : <h5>Empty List</h5>}
                {itemList.map((item, index) => {
                    return (
                        <ButtonGroup className="mb-2 col-12" key={index}>
                            <Button variant='success' className='bi bi-check2-circle col-1' onClick={() => handleDone(index)}></Button>
                            {
                                idToBeEdited === index ?
                                    <FormControl placeholder={item} type='text' className='btn btn-light col-11' />
                                    :
                                    <Button variant='light' className='col-11'>{item}</Button>
                            }
                            {
                                idToBeEdited === index ?
                                    <Button variant='info' className='bi bi-floppy col-1' onClick={handleSave}></Button>
                                    :
                                    <Button variant='warning' className='bi bi-pen col-1' onClick={() => handleEdit(index)}></Button>
                            }
                            <Button variant='danger' className='bi bi-trash col-1' onClick={(() => handleDelete(index))}></Button>
                        </ButtonGroup>
                    );
                })}
            </div>
        </div>
    )
}

export default Demo2;