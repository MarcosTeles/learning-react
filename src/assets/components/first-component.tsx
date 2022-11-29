import React from 'react'   

class FirstComponent extends React.Component <any, any>{ // <any, any> solves props that does not have been specified yet   
    render() {
        return <h2>#1 Component: {this.props.info.name}'s favorite fruit it's <span style={{color: "crimson"}}>{this.props.info.favoriteFruit}</span></h2>
    }
}

export default FirstComponent
