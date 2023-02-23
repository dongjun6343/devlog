import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container">

                <div className="navbar-collapse collapse justify-content-between" id="navbar-content">
                    <ul className="navbar-nav mr-auto">

                        {/* 메인 화면 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home</Link>
                        </li>

                        {/* 게시판 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/boardlist">글목록</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/boardwrite">글추가</Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav ml-auto">
                        {/* 로그인 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">로그인</Link>
                        </li>

                        {/* 회원가입 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/join">회원가입</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Nav;