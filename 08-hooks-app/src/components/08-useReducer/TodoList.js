import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( { todoList, handleDelete, handleToggle } ) => {
  return (
    <ul className='list-group list-group-flush'>
        {
            todoList.map( (todo, i) => (
                <TodoListItem
                    key={ todo.id }
                    todo={todo}
                    i={i}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))
        }
    </ul>
  )
}
