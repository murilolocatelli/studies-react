import React from "react";

class Events2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            data: []
        }

        //this.clickMethod = this.clickMethod.bind(this);
        // Seria necessário fazer dessa forma, caso não fosse utilizado arrow function em clickMethod
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log('state ', this.state)
    }

    clickMethod = () => {
        const arr = this.state.data;

        arr.push(this.state.name);

        this.setState({
            name: '',
            data: arr
        });

        console.log(this.state);
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <input onChange={this.onChange} name='name' id='name' type='text' placeholder='Seu nome'></input>
                <input onChange={this.onChange} name='age' id='age' type='text' placeholder='Sua idade'></input>
                <button onClick={this.clickMethod} type='button'>Click Me</button>
                <ul>
                    {
                        data.map(item =>
                            <li key={item}>{item}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Events2;