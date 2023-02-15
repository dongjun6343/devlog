import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoItemList = ({title, todoList, setTodoList}) => (

    <div className="todoapp__list">
        <p className="todoapp__list-tit">{title}</p>
        <ul className="todoapp__list-ul">
            {todoList && todoList.map((toDoItem =>
                <ToDoItem
                    Key = {toDoItem.id}
                    todoItem = {toDoItem}
                    todoList = {todoList}
                    setTodoList = {setTodoList}
                />
            ))}
        </ul>
    </div>
);

export default ToDoItemList;