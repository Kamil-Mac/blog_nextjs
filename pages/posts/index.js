import AllPosts from "../../component/posts/all-posts";

const DUMMY = [
  {
    title: "1",
    image:
      "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    slug: "getting-stated",
    excerpt: "Lorem Ipsum",
    date: "2021-02-02",
  },
  {
    title: "2",
    image:
      "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    slug: "getting-stated",
    excerpt: "Lorem Ipsum",
    date: "2021-02-02",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY} />;
};

export default AllPostsPage;
