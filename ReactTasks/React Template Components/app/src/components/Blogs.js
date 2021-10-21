import React, { Component } from 'react'
import Blog from './Blog'

class Blogs extends Component {
    render() {
        const {blogDatas} = this.props
        return (
            <div>
              {
                    blogDatas.map(blogData => {
                        return (
                            <Blog 
                                key = {blogData.id}
                                blogTitle = {blogData.blogTitle}
                                blogDate = {blogData.blogDate}
                                blogAuther = {blogData.blogAuther}
                                blogDesc = {blogData.blogDesc}                               
                            />
                        )
                    })
                }
                </div>
        )
    }
}
export default Blogs