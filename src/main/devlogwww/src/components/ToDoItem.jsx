import React, { useEffect, useRef, useState } from 'react';
const ToDoItem = ({todoItem, todoList, setTodoList}) => {

    const [edited, setEdited] = useState(false); // 수정모드인지 플래그 값 확인

    const [newText, setNewTest] = useState(todoItem.text); // 새로운 아이템 내용

    const editInputRef = useRef(null);

    useEffect(() => {
        // edit 모드일때 포커싱을 한다.
        if (edited) {
            editInputRef.current.focus();
        }
    }, [edited]);

    const onChangeCheckbox = () => {

        const nextTodoList = todoList.map((item) => ({
            ...item,
            checked : item.id === todoItem.id ? !item.checked : item.checked,
        }));

        setTodoList(nextTodoList);
    };
    
    const onClickEditButton = () => {
        setEdited(true);
    }

    // 수정모드
    const onChangeEditInput = (e) => {
        setNewTest(e.target.value);
    };

    const onClickSubmitButton = () => {
        const nextTodoList = todoList.map((item) => ({
            ...item,
            text: item.id === todoItem.id ? newText : item.text, // 새로운 아이템 내용을 넣어줌
        }));
        setTodoList(nextTodoList); // 새로운 리스트를 넣어줌

        setEdited(false); // 수정모드를 다시 읽기모드로 변경
    };
    

    return (
        <li className="todoapp__item">
            <input type="checkbox"
                   className="todoapp__item-checkbox"
                   checked={todoItem.checked}
                   onChange={onChangeCheckbox}
            />

            {
                // 아이템 내용
                edited ? (
                    <input
                        type="text"
                        className="todoapp__item-edit-input"
                        value={newText}
                        ref={editInputRef}
                        onChange={onChangeEditInput}
                    />
                ) : (
                    <span
                        className={`todoapp__item-ctx ${
                            todoItem.checked ? 'todoapp__item-ctx-checked' : ''
                        }`}
                    >
            {todoItem.text}
          </span>
                )
            }
            
            {
                // 수정 버튼
                // 완료한 일인 경우에는 null을 반환하여 보이지 않도록 함
                !todoItem.checked ? (
                    edited ? (
                        <button
                            type="button"
                            className="todoapp__item-edit-btn"
                            onClick={onClickSubmitButton}
                        >
                            수정모드
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="todoapp__item-edit-btn"
                            onClick={onClickEditButton}
                        >
                            수정
                        </button>
                    )
                ) : null
            }

            <button type="button" className="todoapp__item-delete-btn">
                삭제
            </button>
        </li>

    )

};

export default ToDoItem;