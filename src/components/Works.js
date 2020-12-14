import React,{useState} from 'react'
import Button from './Button1'
import List from './List'

const Works = () => {
    const [data, setData]= useState([{
                                    work:'sleeping',
                                }])
    
    const [work, setWork] = useState('')

   const AddItem=(e)=>{
    e.preventDefault();
       console.log("this is AddItem")
        const newobj={
            work,
        }
      setData([...data,newobj])
      setWork('')
    }
    
    return (
        <div>
            <form onSubmit={AddItem}>
            <input type='text' onChange={(e)=>setWork(e.target.value)} value={work}></input>
            <List data={data}/>
            <Button text="Add Work" />
            </form>
        </div>
    )
}

export default Works
