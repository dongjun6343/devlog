import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function BoardList() {

        const [boardList, setBoardList] = useState([]);

    	const getBoardList = async (choice, search, page) => {

    		await axios.get(`http://localhost:3000/api/v1/board`, { params: { "choice": choice, "search": search, "page": page } })
    			.then((res) => {
    				console.log(res.data);
    				setBoardList(res.data);
    			})
    			.catch((err) => {
    				console.log(err);
    			});
    	}

    	useEffect(() => {
    		getBoardList("", "", 1);
    	}, []);


    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="col-1">번호</th>
                        <th className="col-8">제목</th>
                        <th className="col-3">작성자</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        boardList.map(function (board) {
                            return (

                                <TableRow obj={board} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

/* 글 목록 테이블 행 컴포넌트 */
function TableRow(props) {
	const board = props.obj;

	return (
			<tr>
			    <td>{board.id}</td>
                <td >
                    <Link to={{ pathname: `/boarddetail/${board.id}` }}>
                        <span className="underline board-title" >{board.title} </span>
                    </Link>
                </td>
                <td>{board.content}</td>
			</tr>
	);
}

export default BoardList;