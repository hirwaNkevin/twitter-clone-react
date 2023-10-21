const Feed = () => {
  return (
    <>
      <FeedMenu />
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
        <a href="#">For you</a>
        <a href="#">Following</a>
      </nav>
    </div>
  );
};

export default Feed;
