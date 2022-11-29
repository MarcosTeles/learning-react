import React from 'react'

class SecondComponent extends React.Component<any, any>{
    render() {
        return <h2>#2 Component: {this.props.info.name} is <span style={{color: "OrangeRed"}}> {this.props.info.age}</span> years old</h2>
    }
}

export default SecondComponent
