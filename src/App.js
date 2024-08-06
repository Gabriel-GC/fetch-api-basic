import { Component } from "react";
import "./App.css";
import { PostCard } from "./components/PostCard";
import { LoadPosts } from "./components/utils/load-posts";
import { Posts } from "./components/Posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await LoadPosts();
    this.setState({ posts: postsAndPhotos });
  };
  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}
export default App;
