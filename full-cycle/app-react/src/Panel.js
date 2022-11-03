import React from "react";


class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { headerColor, headerText, borderColor, data } = this.props;
        return (
            <div className='panel' style={{ border: `1px solid ${borderColor}`, width: '500px', height: '100px', position: 'relative' }}>
                <div className='panel-head' style={{ width: '100%', height: '50px', background: headerColor }}>
                    { headerText }
                </div>
                <div className='panel-body'>
                    { data }
                </div>
            </div>
        );
    }
}

export default Panel;