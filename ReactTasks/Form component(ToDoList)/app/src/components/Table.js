import React, { Component } from 'react'



class Table extends Component {

    render() {
        const { userData } = this.props       
        return (
            <div className="col-md-8 offset-2">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                     {
                        userData.map((user) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.surname}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                </tbody>
                            )
                        })

                    }

                </table>
            </div>
        )
    }
}

export default Table;