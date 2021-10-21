import React, { Component } from 'react'


class AllUsers extends Component {
    render() {
        const { userData } = this.props
        return (
            <div>
                <h2 className="text-center mt-5">Users Table</h2>
                <table class="table table-bordered table-dark mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>

                    {
                        userData.map(user => {
                            return (
                                <tbody>
                                    <tr> 
                                        <td>{user.name}</td>
                                        <td>{user.surname}</td>
                                        <td>{user.age}</td>
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
export default AllUsers