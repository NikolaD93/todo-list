import React, { useState, useEffect } from 'react';


const Edit = ({list, editMode, setEditMode}) => {

  const [name,setName] = useState('');
  

  useEffect(() => {
    setName(editMode.name);
  },[editMode])
  


  const edit = () => {
    let tempList = [...list];

    tempList.forEach((li, idx) => {
        if(editMode.id === li.id) {
            tempList[idx].name = name;
        }
    });
    setEditMode({mode:false, id:'', name: '', idx: null});
    setName('');
    
  }

const exitEditMode = () => {
    setEditMode({mode:false, id:'', name: '', idx: null});
    setName('');
}


  return (
    <>
        <h1 className='mt-5 display-3 fw-bold'>To do list</h1>
       <div  className='container mt-5 bg-light py-4 rounded-top w-50'>
            <div className="col-auto">
              <label className='mb-3 fw-bold fs-4'>Edit</label>
              <input  value={name} onChange={(event)=> setName(event.target.value)} type="text" className="form-control w-25 m-auto"  placeholder="eg: exercise"/>
              <button onClick={edit} style={{backgroundColor: 'green', color:'white'}}  className="btn mx-3"><i class="fa-solid fa-check"></i></button>
              <button onClick={exitEditMode}  className="btn btn-danger my-3"><i class="fa-solid fa-xmark"></i></button>
            </div>
          <hr></hr>
      </div>
    </>
  )
}

export default Edit;