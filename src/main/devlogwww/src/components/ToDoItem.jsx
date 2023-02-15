import React from 'react';

const ToDoItem = ({todoItem, todoList, setTodoList}) => (
    <li className="todoapp__item">

        <input type="checkbox" className="todoapp__item-checkbox" />

        <span className="todoapp__item-ctx">{todoItem.text}</span>

        <button type="button" className="todoapp__item-edit-btn">
            수정
        </button>

        <button type="button" className="todoapp__item-delete-btn">
            삭제
        </button>
    </li>
);

export default ToDoItem;