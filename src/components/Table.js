import React from 'react'

const Table = ({list , setList, setEditMode}) => {

    const removeItem = (idx) => {
        let tempItem = [...list];
        tempItem.splice(idx,1);
        setList([...tempItem]);

    };


    const editMode = (idx) => {
        setEditMode({
            mode: true,
            id: list[idx].id,
            name: list[idx].name
        })
    };

    const clearAll = () => {
        setList([]);
    }

  return (
    <>
        <div className='container bg-light py-4 rounded-bottom w-50'>
           
            <h2 className='mb-3 d-inline me-3 fs-1'>List</h2>
            <button  onClick={clearAll} style={{backgroundColor: 'tomato', color: 'white'}} className="btn mb-3 ms-5">Clear all</button>
         
          <table className="table table-striped table-hover w-50 m-auto">
            <thead>
                <tr>
                    <th scope="col">Id</th>    
                </tr>
            </thead>
            <tbody>
                {list.map((li,idx)=> {
                    return (
                        <tr key={li.id}>
                            <th scope="row">{idx + 1}</th>
                            <td className='fs-5 fw-bold'>{li.name}</td>
                            <td><button onClick={()=> {removeItem(idx)}} style={{backgroundColor:'#FF1E1E', color:'white'}} className='btn'><i class="fa-solid fa-trash"></i></button></td>
                            <td><button onClick={()=> editMode(idx)} style={{backgroundColor:'gold'}} className='btn'>Edit</button></td>
                        </tr>  

    
                    )
                })}

            </tbody>
          </table>
        </div>
    </>
  )
}

export default Table;