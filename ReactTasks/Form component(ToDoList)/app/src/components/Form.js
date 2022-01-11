import React, { Component } from 'react'
import Table from './Table'

class Form extends Component {
    constructor(props) {
        super(props)
       this.state = {
            name: "",
            surname: "",
            email: ""
        }
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    postData = (e) => {
        e.preventDefault()
        const { name, surname, email } = this.state
        this.setState({
            name,
            surname,
            email
        })
    }

    render() {
        const { name, surname, email } = this.state
  
        return (
            <div className="col-md-8 offset-2">
                <div className="form mb-4 my-3">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="name" id="id" className="form-control" placeholder="Name.." value={name} onChange={this.changeInput} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="Surname">Surname</label>
                            <input type="text" name="surname" id="surname" className="form-control" placeholder="Surname.." value={surname} onChange={this.changeInput} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email.." value={email} onChange={this.changeInput} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add User" className="btn btn-success form-control mt-2" />
                        </div>
                    </form>
                </div>
                <Table
                    userData={this.state}
                />
            </div>
        )
    }
}

export default Form;