import * as React from "react";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

// Backend URL (change to your Flask/Django/Node server address)
const BACKEND_URL = "http://localhost:5000"; // Flask default port

function App() {
  React.useEffect(() => {
    // Example: Fetch recipes from backend
    fetch(`${BACKEND_URL}/recipes`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Recipes from backend:", data);
        // Later: Dispatch to Redux store
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
