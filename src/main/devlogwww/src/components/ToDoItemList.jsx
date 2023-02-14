import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoItemList = () => (
    // 수정
    <div className="todoapp__list">
        <p className="todoapp__list-tit">제목</p>
        <ul className="todoapp__list-ul">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </ul>
    </div>
);

export default ToDoItemList;