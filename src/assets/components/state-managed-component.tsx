import React from 'react'

class ComponentWithState extends React.Component<any, any>{
    
    constructor(props: any){
        super(props);

        this.state = { text: this.props.initialText };
    }

    managingState = (element: any) => {
        this.setState({
            text : element.target.value
        })
    }   

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input type="text" onChange={this.managingState} value={this.state.text} />
            </div>
    )}
}

export default ComponentWithState
