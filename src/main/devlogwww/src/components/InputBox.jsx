import React, {useRef, useState} from 'react';


// ({ todoList, setTodoList })  부모 컴포넌트(Home.jsx) - props으로 todoList와 setTodoList를 받아온다.
const InputBox = ({ todoList, setTodoList}) => {

    // 빈문자열 text와 setText()를 생성한다.
    const [text, setText] = useState('');

    // Hook으로 ref 생성
    const inputRef = useRef(null);

    // input값이 변할때 e.target에 있는 <input ... /> 으로부터 value 값을 가져오는 메소드
    const onChangeInput = (e) => {
        setText(e.target.value);
    };

    const onClickAddButton = () => {
        // todoItemList에 값 추가.
        const nextTodoList = todoList.concat({
            id : todoList.length,
            text,
            checked: false, // false : 완료하지 않은 목록
        });

        setTodoList(nextTodoList);

        setText(''); // 초기화.
        inputRef.current.focus();
    }

    return (
        <div className="todoapp__inputbox">
            <input
                type="text"
                name="todoItem"
                value={text}
                ref={inputRef} // 생성한 ref 할당
                placeholder="오늘 할 일을 입력하세요. "
                className="todoapp__inputbox-inp"
                onChange={onChangeInput} // input이 변하는 이벤트가 발생했을때, onChangeInput() 실행
            />
            <button
                type="submit"
                className="todoapp__inputbox-add-btn"
                onClick={onClickAddButton} >
                추가
            </button>
        </div>
    );
};

export default InputBox;