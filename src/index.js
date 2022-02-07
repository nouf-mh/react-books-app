import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// import SearchPage from "./SearchPage";

ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
     document.getElementById('root')
   );
