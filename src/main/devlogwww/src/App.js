import { BrowserRouter } from "react-router-dom";

import Header from "./component/app/Header"
import Nav from "./component/app/Nav"
import Main from "./component/app/Main"
import Footer from "./component/app/Footer"
import "./css/style.css"

function App() {

  return (
      <div>
        <BrowserRouter>

          <Header />
              <Nav />
              <Main />
          <Footer />

        </BrowserRouter>
      </div>
  );
}

export default App;