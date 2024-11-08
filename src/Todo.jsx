import React, { useEffect, useState } from 'react'
import Form from './components/Form';
import Table from './components/Table';
import { FaJ } from 'react-icons/fa6';
const Todo = () => {
   const [inpval, setinpval] = useState();
   const [allTodo, setallTodo] = useState([])

   let initialArr=["Apple","Mango","Orange"]
   let anotherArr=[...initialArr,"Lemon", "Pawpaw"];
   const addTodo=()=>{
    setallTodo([...allTodo,inpval]);
    console.log(allTodo);
    
   }
   const dosomething=(i)=>{
    setallTodo(allTodo.filter((el)=>(el) !==i));
    // alert(`you are displaying ${allTodo[i]}`)
   }

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [gender, setGender] = useState('');
     const [error, setError] = useState('');
     const [todolist, setTodolist] = useState(JSON.parse(localStorage.getItem("react-user")));
     const [edit, setEdit] = useState(null)
     const [count,setCount]=useState(0);
     const [mode, setMode] = useState(false)

    

     const addtodolist=()=>{
    if (!name || !email  || !gender) {
      setError("input feild is empty")
      console.log(error);
      return;
      
      
    }
      setError('');
     
     
    const data = {

      name:name,
      email:email,
      gender:gender
    }
  const updatedtodos=[...todolist,data];
  if (edit !== null) {
    updatedtodos[edit] = data;
    // setEdit(null); // Reset the edit state
  } else {
    
    updatedtodos.push(data);
  }



    setTodolist(updatedtodos)
    console.log(todolist);
    localStorage.setItem("react-user",JSON.stringify(todolist));
    setName('');
    setEmail('');
    setGender('');


     };
     
    
 
  
     const handleEdit = (i) => {
      const item = todolist[i];
      setName(item.name);
      setEmail(item.email);
      setGender(item.gender);
      setEdit(i); 
    };

     const deleteit = (i)=>{
          setTodolist(todolist.filter((el)=>(el) !==i));
     }
   useEffect(() => {
        setCount(count+1)
        let fetchTodo=JSON.parse(localStorage.getItem("react-user"))
        if (fetchTodo) {
          setTodolist(fetchTodo)
        }
   }, [])
   

    const [counter, setCounter] = useState(0)
    const hincreament=()=>{
      if (counter < 10) {
        setCounter(counter+1)
      }

    }
     const  hdecreament=()=>{
      if (counter > 0) {
        setCounter(counter-1)
      }
     }
  


  return (
   <>
   <div>
    <h1>Counts:{counter}</h1>
    <button onClick={hincreament}>Increament</button>
    <button onClick={hdecreament}>Decreament</button>
   </div>


    {/* <div className={`w-50 mx-auto p-3 rounded shadow ${mode? 'bg-white text-dark':'bg-dark text-white'}`} >
      
      </div> */}
      <Form
      addtodolist={addtodolist}
      setEmail={setEmail}
      setGender={setGender}
      setName={setName}
      setMode={setMode}
      mode={mode}
      count={count}
      />
      <Table
       todolist={todolist}
       deleteit={deleteit}
       handleEdit={handleEdit}
      />
       
       
      
      
      




   <input onChange={(e)=>setinpval(e.target.value)} type='text'/>
   <button onClick={addTodo}>AddTodo</button>
   {
    allTodo.map((el,index)=>(
<div>{index}.{el}<button onClick={()=>dosomething(el)}>delete</button> </div>
    ))
   }
   </>
  )
}

export default Todo