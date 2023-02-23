import React, {useState} from 'react';
import InputBox from '../components/InputBox';
import ToDoItemList from '../components/ToDoItemList';

const Home = () => {
    // useState - todo 아이템을 담을 리스트와 setter 함수를 생성
    const [todoList, setTodoList] = useState([]);

    return (
        <div className="homepage__container">

            <InputBox todoList = {todoList} setTodoList={setTodoList}/>

            <ToDoItemList
                title = {'Todo List'}
                todoList = {todoList}
                setTodoList = {setTodoList}
                checkedList={false}
            />

            <ToDoItemList
                title={'완료한 목록'}
                todoList={todoList}
                setTodoList={setTodoList}
                checkedList={true}
            />

        </div>
    );
};


export default Home;