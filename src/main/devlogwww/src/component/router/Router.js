import { Routes, Route } from "react-router-dom";

import Home from "../app/Home"
import BoardList from "../board/BoardList"
import BoardDetail from "../board/BoardDetail"


function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/boardlist" element={<BoardList />}></Route>
            <Route path="/boarddetail/:id" element={<BoardDetail />}></Route>
        </Routes>
    );
}

export default Router;