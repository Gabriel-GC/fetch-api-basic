import { Component } from "react";

import "./styles.css";

import { LoadPosts } from "../../utils/load-posts";
import { Posts } from "../../Posts";
import { Button } from "../../Button";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await LoadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };
  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <Button text="Load more posts" onClick={this.loadMorePosts} />
      </section>
    );
  }
}
