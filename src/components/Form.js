import React, {useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';


const Form = ({setList}) => {

  const [name,setName] = useState('');
  const inputName = useRef('');
  


  const addItems = (event) => {
    event.preventDefault();
    
    let newItem = {
      id: uuidv4(),
      name: name
    }
    

    if(name === '') {
         alert('Input field cannot be empty!')
        } else {
          setList(prev => {
            return [...prev, newItem]
          });
        }


    setName('');

    // event.target.name.focus();
    inputName.current.focus();

  }

  return (
    <>
      <h1 className='mt-5 display-3 fw-bold'>To do list</h1>
      <div className='container mt-5 bg-light py-4 rounded-top w-50'>
          <form onSubmit={addItems}>
            <div className="col-auto">
              <label className='mb-3 fw-bold fs-4'>Enter new task</label>
              <input ref={inputName} value={name} onChange={(event)=> setName(event.target.value)} type="text" className="form-control w-25 m-auto"  placeholder="eg: exercise"/>
              <button type='submit' className="btn btn-primary my-3">Add to list</button>
            </div>
          </form>
          <hr></hr>
      </div>
    </>
  )
}

export default Form;