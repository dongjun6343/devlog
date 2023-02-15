import React from 'react';

const ToDoItem = ({todoItem, todoList, setTodoList}) => {

    const onChangeCheckbox = () => {

        const nextTodoList = todoList.map((item) => ({
            ...item,
            checked : item.id === todoItem.id ? !item.checked : item.checked,
        }));

        setTodoList(nextTodoList);
    };

    return (

        <li className="todoapp__item">
            <input type="checkbox"
                   className="todoapp__item-checkbox"
                   checked={todoItem.checked}
                   onChange={onChangeCheckbox}
            />

            <span className={`todoapp__item-ctx ${
                todoItem.checked ? 'todoapp__item-ctx-checked' : ''
            }`}
            >

                {todoItem.text}

            </span>
            {
                // 수정 버튼
                // 완료한 일인 경우에는 null을 반환하여 보이지 않도록 한다.
                !todoItem.checked ? (
                    <button type="button" className="todoapp__item-edit-btn">
                        수정
                    </button>
                ) : null
            }

            <button type="button" className="todoapp__item-delete-btn">
                삭제
            </button>
        </li>

    )

};

export default ToDoItem;