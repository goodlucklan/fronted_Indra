import API from '../Api'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: ''
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        API.getPost('http://localhost:4000/login', {
            usuario: this.state.email,
            pass: this.state.password
        }).then(async data => {

            Swal.fire({
                title: 'Bienvenido',
                text: "Ha ingresado correctamente sus credenciales",
                icon: 'success',
                confirmButtonColor: '#000000',
                didOpen: async () => {
                    await this.setState({ token: data.data.token });
                    this.props.handleAuthToken(data.data.token)
                }
            })
        })
            .catch(err => console.error(err));
    }
    handleInput = (e) => {
        const target = e.target;
        const value = e.target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        if (this.state.token) {
            return (
                <Redirect to="/Home" children={this.state.token} />
            )
        }
        return (
            <React.Fragment>
                <div className="split left">
                    <div className="centered">
                        <img src={require('../img/anzulogo.png')} alt="Anzu" />
                        <h2>Welcome</h2>
                        <p>Please Enter With Credentials.</p>
                    </div>
                </div>
                <div className="split right">
                    <div className="centered">
                        <div className="box">
                            <form onSubmit={this.handleSubmit}>
                                <label >Email</label>
                                <input type="text" name="email" value={this.state.email} onChange={this.handleInput}  />
                                <label >Last Name</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleInput} />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
