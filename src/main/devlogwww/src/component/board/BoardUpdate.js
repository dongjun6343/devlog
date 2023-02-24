import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


function BoardUpdate(){

    const location = useLocation();
    const { board } = location.state;

    const [title, setTitle] = useState(board.title);
    const [content, setContent] = useState(board.content);

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const changeContent = (event) => {
        setContent(event.target.value);
    }

    const navigate = useNavigate();

    const updateBoard = async () => {

        const edit = {
            title: title,
            content: content
        }

        await axios.patch(`http://localhost:3000/api/v1/board/${board.id}`, edit)
        .then((res) => {
            console.log(res.data);
            alert("해당 게시글을 수정했습니다.");
            navigate("/boardlist");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th className="table-primary">작성자</th>
                        <td>
                            <input type="text" className="form-control" size="50px" readOnly />
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">제목</th>
                        <td>
                            <input type="text" className="form-control" value={title} onChange={changeTitle} size="50px" />
                        </td>
                    </tr>

                    <tr>
                        <th className="table-primary">내용</th>
                        <td>
                            <textarea className="form-control" value={content} onChange={changeContent} rows="10" ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="my-3 d-flex justify-content-center">
                <button className="btn btn-dark" onClick={updateBoard}><i className="fas fa-pen"></i> 수정</button>
            </div>
        </div>
    );


}

export default BoardUpdate;