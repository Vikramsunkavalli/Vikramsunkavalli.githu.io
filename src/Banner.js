import { Component } from "react";

class Banner extends Component{

     name="Saurabh";

    render(){

        return(
            <div>
                <h1>Class Component Example</h1>
                <p>{this.name}</p>
            </div>
        )

    }

}

export default Banner;