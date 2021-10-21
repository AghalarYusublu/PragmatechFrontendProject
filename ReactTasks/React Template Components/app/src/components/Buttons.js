import React, { Component } from 'react'
class Buttons extends Component {
    render() {
        const{btnValue,btnValue2}=this.props
        return (
            <nav class="blog-pagination" aria-label="Pagination">
                <a class="btn btn-outline-primary" href="#">{btnValue}</a>
                <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">{btnValue2}</a>
            </nav>
        )
    }
}

export default Buttons