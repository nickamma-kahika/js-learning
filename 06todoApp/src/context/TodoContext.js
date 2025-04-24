import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo:'Learn React',
            completed : false
        }
    ],
    addTodo : (todo)=>{},
    removeTodo : (id)=>{},
    updateTodo : (todo,id)=>{},
    toggelComplete : (id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}