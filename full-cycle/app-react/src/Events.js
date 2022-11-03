import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        }

        //this.clickMethod = this.clickMethod.bind(this);
        // Seria necessário fazer dessa forma, caso não fosse utilizado arrow function em clickMethod
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    clickMethod = () => {
        console.log('click begin', this.state);

        this.setState({
            clicked: this.state.clicked + 1
        });

        console.log('click end', this.state);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickMethod} type='button'>Click Me</button>
            </div>
        );
    }
}

export default Events;