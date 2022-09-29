import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import Edit from './components/Edit';

function App() {


  const [editMode,setEditMode] = useState({mode:false, id:'', name: '', idx: null})
  const [list, setList] = useState([]);
  

  return (
    <div className="App">
    {
      !editMode.mode ?
      <Form  setList={setList}/> :
      <Edit list={list} setList={setList} editMode={editMode} setEditMode={setEditMode}></Edit>


    }
    <Table list={list} setList={setList} setEditMode={setEditMode}/>

    </div>
  );
}

export default App;
