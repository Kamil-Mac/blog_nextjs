import PostGrid from "../posts/post-grid";
import styles from "./featured-posts.module.css";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featiured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
