import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import Trends from "./components/SideBarTrendsComponent";
import Footer from "./components/FooterComponent";
import Messaging from "./components/MessagingComponent";
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
          <Messaging />
        </div>
      </div>
    </>
  );
}

export default App;
