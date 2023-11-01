import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import Trends from "./components/SideBarTrendsComponent";
import Footer from "./components/FooterComponent";
import "./css/App.css";

function App() {
  return (
    <>
      <div id="wrapper" className="container">
        <header>
          <SideBar />
        </header>
        <main>
          <Feed />
        </main>
        <aside id="trends">
          <Trends />
          <Footer />
        </aside>
        <div id="messaging">
          <h2>Messaging</h2>
        </div>
      </div>
    </>
  );
}

export default App;
