import React from 'react'

const Todolist = ({todos,setTodos,editTodo,setEditTodo}) => {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{...item,completed:!item.completed};
                }
                return item;
            }

            )
        )
    }
    
  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div>
        {todos.map((todo)=>(
<li className='list-item' key={todo.id}>
    <input type='text' value={todo.title} className={`list ${todo.completed? "complete": ""}`} onChange={(event)=>event.preventDefault()} />
    <div>
        <button className='button-complete task-button'onClick={()=>handleComplete(todo)}>
        ✅
        </button>

        <button className='button-edit task-button'onClick={()=>handleEdit(todo)}    >
        ✏️
        </button>

        <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>
        ❌
        </button>
    </div>
</li>
        )
        )}
        </div>
  )
}

export default Todolist