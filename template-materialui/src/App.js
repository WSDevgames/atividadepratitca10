import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import index from "./pages/Login/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Senha />

    </div>
  );
}

export default App;
