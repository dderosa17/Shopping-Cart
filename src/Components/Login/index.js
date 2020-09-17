import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    login = ()=>{
        const url ='https://motion.propulsion-home.ch/backend/api/auth/token/';
        fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const myData = data;
            console.log(data);
        })
    }
    render(){
        return(
            <div className="form-login">
                <input type="text"></input>
                <input type="password"></input>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default Login