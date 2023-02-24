import { Routes, Route } from "react-router-dom";

import Home from "../app/Home"
import BoardList from "../board/BoardList"
import BoardDetail from "../board/BoardDetail"
import BoardWrite from "../board/BoardWrite"
import BoardUpdate from "../board/BoardUpdate"


function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/boardlist" element={<BoardList />}></Route>
            <Route path="/boarddetail/:id" element={<BoardDetail />}></Route>
            <Route path="/boardwrite" element={<BoardWrite />}></Route>
            <Route path="/boardupdate" element={<BoardUpdate />}></Route>
        </Routes>
    );
}

export default Router;