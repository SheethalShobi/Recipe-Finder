import * as React from "react";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


const BACKEND_URL = "http://localhost:5000"; 

function App() {
  React.useEffect(() => {
    
    fetch(`${BACKEND_URL}/recipes`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Recipes from backend:", data);
       
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
