import React,{Component} from 'react';

import fire from './config/fire';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    login=(e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch((error)=>{
            console.log(error)
        })
    }
    signup=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

        }).catch((error)=>{
            console.log(error)
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div className="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="exempleInputEmail">Email adress</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exempleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">we'll never share your email with anyone else.</small>
=
                    </div>
                    <div>
                    <label for="exempleInputPassword"> Password adress</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exempleInputPassword" aria-describedby="PasswordHelp" placeholder="Enter Password"/>
                        <small id="emailHelp" class="form-text text-muted">we'll never share your email with anyone else.</small>
=  
                    </div>
                    <div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft:'25px'}} className="btn btn-success">Signup</button>
                    </div>

                    
                </form>
            
            </div>
        )
    }
}
export default Login;