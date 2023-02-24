import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function BoardWrite() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 입력
    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const changeContent = (event) => {
        setContent(event.target.value);
    }

    const createBoard = async() => {

        const req = {
            title: title,
            content: content
        }

        await axios.post("http://localhost:3000/api/v1/board", req)
        .then((res) => {
            console.log(res.data);
            alert(" 게시글을 등록했습니다. ");
            // 등록완료 시 글목록
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
                            <textarea className="form-control" value={content} onChange={changeContent} rows="20"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="my-5 d-flex justify-content-center">
                <button className="btn btn-outline-secondary" onClick={createBoard}><i className="fas fa-pen"></i> 등록</button>
            </div>
        </div>
    );
}

export default BoardWrite;