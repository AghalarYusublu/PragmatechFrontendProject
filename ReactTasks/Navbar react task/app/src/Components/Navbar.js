import logo from '../logo.svg';
import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        const { datas } = this.props
        return (
            <div className="mb-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" width="44" height="34" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {
                                    datas.map((data) => {
                                        return (
                                            <li className="nav-item" key={data.id}>
                                                <a className="nav-link active" aria-current="page" href={data.url}>{data.title}</a>
                                            </li>
                                        )
                                    })
                                }
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;