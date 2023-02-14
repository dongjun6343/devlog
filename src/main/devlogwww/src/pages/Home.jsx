import React from 'react';
import InputBox from '../components/InputBox';
import ToDoItemList from '../components/ToDoItemList';

const Home = () => (
    <div className="homepage__container">
        <InputBox />
        <ToDoItemList />
        <ToDoItemList />
    </div>
);

export default Home;