import React from "react";
import Panel from './Panel';

class Props extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { myAttr } = this.props;
        return (
            <div>
                { myAttr === 'p' ? <p>p</p> : <h1>h1</h1> }
                <Panel headerColor='blue' headerText='This is a header' borderColor='red' data='School of net' />
                <Panel headerColor='gray' headerText='This is a header' borderColor='green' data='School of net' />
            </div>
        );
    }
}

export default Props;