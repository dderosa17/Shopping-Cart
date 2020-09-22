import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data:'',
            email:'',
            password:'',
        }
    }
    getMail =(event) =>{
        this.setState({
            email: event.target.value   
        })
    }
    getPassword =(event) =>{
        this.setState({
            password: event.target.value   
        })
    }

    login = () => {

        const config = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,

            })
        }
        fetch('https://motion.propulsion-home.ch/backend/api/auth/token/', config)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data:data,
                })
            })
    }


    render() {
        console.log(this.state.data)
        return (
            <div className="form-login">
                <input type="text" onChange={this.getMail}></input>
                <input type="password" onChange={this.getPassword}></input>
                <button onClick={this.login}>Log in</button>
            </div>

        )
    }
}

export default Login