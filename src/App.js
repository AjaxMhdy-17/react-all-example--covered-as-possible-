import "./App.css";
import Index from "./DeveloperList/Index";
// import HookForms from './HookForms';
// import Index from "./RouterExample/Index";
import { BrowserRouter } from "react-router-dom";
// import Index from './authenticationLocalStorage/Index'
import CtxAndReducer from "./DeveloperList/CtxAndReducer/CtxAndReducer";

function App() {
  return (
    <BrowserRouter>
      <CtxAndReducer>
        <Index />
      </CtxAndReducer>
    </BrowserRouter>
  );
}

export default App;
