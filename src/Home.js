import React,{Component} from 'react';
import fire from './config/fire';

class Home extends Component{
    logout=()=>{
        fire.auth().signOut();
    }
    
    render(){
        return(
            <div className="col-md-6">
           <h1> you are in Home</h1>
           <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home;