import React, { useState } from 'react'
import { Button, ButtonGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";

function ToDoList() {
    const [item, setItem] = useState('')
    const [items, setItems] = useState([])
    const [idToBeEdited, setIdToBeEdited] = useState(-1);
    const[editedItem,setEditedItem] = useState("")
    const [doneTaskIds,setDoneTaskIds] =useState([])

    function handleAdd(e) {
        if (item !=="") {
        e.preventDefault(); 
        setItems([...items, item])
        setItem("")

    }
}

    function handleDelete(indexToBeDeleted) {
        const updatedItemList = items.filter((item, index) => {
            if (index !== indexToBeDeleted) {
                return item;
            }
        
        })
        const updatedDoneTaskIds = doneTaskIds.map((taskId) =>{
            if(taskId>indexToBeDeleted) {
               return taskId -1;
            }
            else {
                return taskId;
            }
        })
        setItems(updatedItemList)
        setDoneTaskIds(updatedDoneTaskIds)

    }

    function handleEdit(indexToBeEdited) {
        setIdToBeEdited(indexToBeEdited)

    }

    function handleSave() {
        const updatedItems = items.map((item,index) =>{
            if (index === idToBeEdited) {
                if(editedItem.length>0){
                    return editedItem;
                }
                else {
                    return item;
                }
            }
            else {
                return item;
            }
        });
        setEditedItem("")
        setItems(updatedItems)
        setIdToBeEdited(-1)
    }

    function handleDone(indexToBeDone) {
        if (doneTaskIds.includes(indexToBeDone)) {
            const updatedIds = doneTaskIds.filter((taskId) => taskId !== indexToBeDone);
            setDoneTaskIds(updatedIds);
        } else {
            setDoneTaskIds([...doneTaskIds, indexToBeDone]);
        }
    }

    return (
        <div className='container w-50'>
            <h1 className='text-center'>To Do List</h1>
            <div>
                <ListGroup>
                    <ListGroupItem className='d-flex'>
                        <FormControl type="text" placeholder='Enter the task' onChange={(e) => setItem(e.target.value)} value={item} />
                        <Button onClick={handleAdd} className='bi bi-plus-lg'></Button>
                    </ListGroupItem>
                </ListGroup>
            </div>
            <ListGroup>
                {items.map((item, index) => {
                    return (
                        <div>
                            <ButtonGroup className='mb-2 col-12'>
                                <Button variant='success' className='bi bi-check2-circle col-1' onClick={() => handleDone(index)}></Button>

                                { idToBeEdited === index ?
                                   <FormControl type="text" placeholder={item} onChange={(e) => setEditedItem(e.target.value)} value={editedItem} className='btn btn-light col-11'/>
                                :
                                    doneTaskIds.includes(index) ?
                                        <Button variant='light' className='text-success fw-bold col-11'>{item}</Button>
                                    :
                                        <Button variant='light' className='col-11'>{item}</Button>
                                }
                                { idToBeEdited === index ?
                                     <Button variant='info' className='bi bi-floppy col-1' onClick={handleSave}></Button>
                                :
                                     <Button variant='warning' className='bi bi-pencil col-1' onClick={()=>handleEdit(index)}></Button>
                                }
                                <Button variant='danger' className='bi bi-trash col-1' onClick={()=>handleDelete(index)} ></Button>
                            </ButtonGroup>
                        </div>
                    );
                })}
            </ListGroup>


        </div>
    )
}

export default ToDoList
