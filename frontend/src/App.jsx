import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navegador from "./components/navegador";
import Home from "./pages/home";
import Tareas from "./pages/tareas";
import Login from "./pages/login";
import Register from "./pages/register";
import { useContext } from "react";
import { SessionContext } from "./contexts/SessionContext";


function App() {
  const { user } = useContext(SessionContext);

  console.log("APP", user);

  return (
    <>
      <header>
        <Navegador></Navegador>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/login"
            element={
              user ? <Navigate to="/misTareas"></Navigate> : <Login></Login>
            }
          ></Route>
          <Route
            path="/misTareas"
            element={<Tareas usuario={user}></Tareas>}
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
