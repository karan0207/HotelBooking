import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { SearchContextProvider } from "./Context/SearchContext";

const container = document.getElementById("root");

// Create a root.
const root1 = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root1.render(
  <Router>
    {/* <SearchContextProvider> */}
      <App />
    {/* </SearchContextProvider> */}
  </Router>
);
