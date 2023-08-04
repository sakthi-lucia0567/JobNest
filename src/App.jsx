import "./App.css";
import Board from "./components/Dashboard/Board";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="text-light-text bg-light-background">
        <Header />
        <Board />
      </div>
    </>
  );
}

export default App;
