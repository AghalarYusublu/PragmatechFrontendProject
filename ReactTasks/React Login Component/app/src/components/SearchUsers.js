import React, { Component } from 'react'

class SearchUsers extends Component {
    state = {
        search: ""
    }
    searchUsers = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { userData } = this.props
        const { search } = this.state

        return (
            <div>
                <div className="form-group mt-5">
                    <h2 className="text-center mt-5">Search Table</h2>
                    <form>
                        <input type="text" name="search" className="form-control mb-3" placeholder="Search user..." onChange={this.searchUsers} />
                    </form>
                </div>
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
                        userData.filter((user) => {
                            if (search == "") {
                                return user
                            } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
                                return user
                            }
                        }).map(user => {
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
export default SearchUsers