import React, { Component} from 'react'
import AllUsers from './AllUsers'
import GmailUsers from './GmailUsers'
import SearchUsers from './SearchUsers'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    addData = (event) => {
        event.preventDefault()
        const newUsers = this.state.users
        newUsers.push({
            name: event.target['name'].value,
            surname: event.target['surname'].value,
            age: event.target['age'].value,
            email: event.target['email'].value
        })
        this.setState({
            users: newUsers
        })
    }

    render() {
        
        return (
            <div className="row offset-3">
                <div className="col-lg-8">
                    <h2 className="text-center mt-4">Login</h2>
                    <div className="form-group mt-5">
                        <form onSubmit={this.addData}>
                            <input type="text" name="name" className="form-control mb-3" placeholder="Name" />
                            <input type="text" name="surname" className="form-control mb-3" placeholder="Surname" />
                            <input type="text" name="age" className="form-control mb-3" placeholder="Age" />
                            <input type="text" name="email" className="form-control mb-3" placeholder="Email" />
                            <input type="submit" className="btn btn-primary w-100" value="Submit" />
                        </form>
                    </div>
                    <AllUsers
                        userData={this.state.users}
                    />
                    <GmailUsers
                        userData={this.state.users}
                    />                   
                    <SearchUsers
                        userData={this.state.users}
                    />
                </div>
            </div>
        )
    }
}
export default Login