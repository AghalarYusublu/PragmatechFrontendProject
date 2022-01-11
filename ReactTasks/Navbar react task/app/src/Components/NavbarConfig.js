import React, { Component } from 'react'
import Navbar from './Navbar';
let shadow;
class NavbarConfig extends Component {
    state = {
        nav: [
            {
                id: 1,
                title: 'Home',
                url: '#'
            },
            {
                id: 2,
                title: 'About',
                url: '#'
            },
            {
                id: 3,
                title: 'Work',
                url: '#'
            },
            {
                id: 4,
                title: 'Team',
                url: '#'
            },
            {
                id: 5,
                title: 'Contact',
                url: '#'
            }
        ]
    }
    dragstart = (event) => {
        shadow = event.target;
    }

    dragover = (e) => {
        let children = Array.from(e.target.parentNode.parentNode.children);
        if (children.indexOf(e.target.parentNode) > children.indexOf(shadow))
            e.target.parentNode.after(shadow);
        else e.target.parentNode.before(shadow);
    }

    inputChange = (nav, e) => {
        nav.map((data) => {
            let newObj = [
                {
                    id:data.id,
                    newOrder:e.target
                }
            ]
        })

    }
    render() {
        const { nav } = this.state;
        return (
            <div className="col-md-8 offset-2 mt-3">
                <Navbar datas={this.state.nav} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            nav.map((data) => {
                                return (
                                    <tr key={data.id} className="rowItem" draggable="true" onDragStart={this.dragstart} onDragOver={this.dragover}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.title}</td>
                                        <td>{data.url}</td>
                                        <td>
                                            <input type="number" name="number" id="number" className="form-control" onChange={this.inputChange.bind(this.nav)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default NavbarConfig