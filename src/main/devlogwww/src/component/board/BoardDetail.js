import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function BoardDetail(){

    const [board, setBoard] = useState({});

    // 파라미터 가져오기.
    const { id } = useParams();

    const getBoardDetail = async () => {

        await axios.get(`http://localhost:3000/api/v1/board/${id}`)
        .then((res) => {
            console.log(res.data);
            setBoard(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }


    useEffect(() => {
        // console.log('마운트 될 때만 실행된다.');
        // 마운트(Mount)는 DOM 객체가 생성되고 브라우저에 나타나는 것
        getBoardDetail();
    }, []);

    //update
    const updateBoard = {
        id : board.id,
        title : board.title,
        content : board.content
    }


    return (
        <div>
            <table className="table table-striped">
				<tbody>
					<tr>
						<th className="col-3">번호</th>
						<td>
							<span>{board.id}</span>
						</td>
					</tr>

					<tr>
						<th>제목</th>
						<td>
							<span>{board.title}</span>
						</td>
					</tr>

					<tr>
						<th>작성일</th>
						<td>
						</td>
					</tr>

					<tr>
						<th>조회수</th>
						<td>
						</td>
					</tr>

					<tr>
						<th>내용</th>
						<td>
							<div>
								{board.content}
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="my-3 d-flex justify-content-center">
				<Link className="btn btn-outline-secondary" to="/boardlist"><i className="fas fa-list"></i> 목록</Link>
				<Link className="btn btn-outline-secondary" to="/boardupdate" state={{ board: updateBoard }}><i className="fas fa-edit"></i> 수정</Link>
			</div>
        </div>
    );

}

export default BoardDetail;