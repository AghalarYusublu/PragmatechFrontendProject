import React, { Component } from 'react'


class Banner extends Component {
    state={
        title:"Title of a longer featured blog post",
        desc:"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
        readLink:"Continue reading..."
    }
    render() {
        const {title,desc,readLink}=this.state
        return (
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">{title}</h1>
              <p className="lead my-3">{desc}</p>
              <p className="lead mb-0"><a href="#" class="text-white fw-bold">{readLink}</a></p>
            </div>
          </div>
        )
    }
}
export default Banner