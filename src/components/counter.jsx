import React, {Component} from 'react';

export default class Counter extends Component{

    constructor(props){

        super(props);
        this.state = { 
            
            value: props.initialValue 
        
        }

    }

    sum(n){

        this.setState({ 
            
            value: this.state.value + n
        
        })

    }

    render(){

        return(

            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(1)}>+</button>
                <button onClick={() => this.sum(-1)}>-</button>
            </div>

        )

    }

}