import SideBar from "./components/SideBar";
import "./css/App.css";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <SideBar />
        </header>
        <main>
          <h1>Main</h1>
        </main>
        <aside id="trends">
          <h2>aside</h2>
        </aside>
        <div id="messaging">
          <h2>Messaging</h2>
        </div>
      </div>
    </>
  );
}

export default App;
