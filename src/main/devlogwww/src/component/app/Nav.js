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
                        <li className="nav-item dropdown">

                            <div className="nav-link dropdown-toggle" id="navbarDropdown"
                                 role="button" data-toggle="dropdown" aria-haspopup="true"
                                 aria-expanded="false">게시판</div>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/boardlist">글목록</Link>
                                <Link className="dropdown-item" to="/boardwrite">글추가</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;