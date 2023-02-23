import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoItemList = ({title, todoList, setTodoList , checkedList}) => (

    <div className="todoapp__list">
        <p className="todoapp__list-tit">{title}</p>

        <ul className="todoapp__list-ul">
            {todoList &&
                todoList.map((todoItem) => {
                    // checkedList 값에 따라 출력
                    if (checkedList !== todoItem.checked) return null;

                    return (
                        // map을 이용하여 ToDoItem을 출력
                        <ToDoItem
                            key={todoItem.id}
                            todoItem={todoItem}
                            todoList={todoList}
                            setTodoList={setTodoList}
                        />
                    );
                })}
        </ul>
    </div>
);

export default ToDoItemList;