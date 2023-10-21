import PostComponent from "./PostComponent";
const Feed = () => {
  return (
    <>
      <FeedMenu />
      <div id="posts">
        <PostComponent />
      </div>
    </>
  );
};

const FeedMenu = () => {
  return (
    <div id="feed-menu">
      <a href="/">
        <h2>Home</h2>
      </a>
      <nav>
        <a href="#">
          <span className="feed-menu-active">For you</span>
        </a>
        <a href="#">
          <span>Following</span>
        </a>
      </nav>
    </div>
  );
};

export default Feed;