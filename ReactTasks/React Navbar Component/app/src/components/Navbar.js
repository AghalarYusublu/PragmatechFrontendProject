import React, { Component } from 'react'

class Navbar extends Component {


    render() {
        const { navArr } = this.props
        return (
            <div>
                {
                    navArr.map(arr => {
                        return (
                            <nav className={arr.navClass}>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                       {
                                           navArr.map(array=>{
                                               return(
                                                <a className="nav-item nav-link active" href={array.navUrl}>{array.navTitle} </a>
                                               )
                                           })
                                       }
                                    </div>
                                </div>
                            </nav>
                        )
                    })
                }
            </div>

        )
    }
}
export default Navbar