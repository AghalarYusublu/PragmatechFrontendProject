import React, { Component } from 'react'

class Blog extends Component {
    render() {
        const { blogTitle, blogDate, blogAuther, blogDesc } = this.props;

        return (
            <article className= "blog-post">
                <h2 class="blog-post-title">{blogTitle}</h2>
                <p class="blog-post-meta">{blogDate} <a href="#">{blogAuther}</a></p>
                <p>{blogDesc}</p>
           </article>

        )
    }
}
export default Blog
