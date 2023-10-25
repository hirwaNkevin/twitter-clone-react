import Post from "./PostComponent";
import QuickPost from "./QuickPostComponent";
import LoadedPosts from "./LoadedPostsComponent";
const Feed = () => {
  return (
    <>
      <div id="feed">
        <FeedMenu />
        <QuickPost />
        <LoadedPosts />
        <div id="posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
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
