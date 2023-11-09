import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import GlobalStyle from "./styles/Global.styled";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <GlobalStyle />
    </div>
  );
}

export default App;
