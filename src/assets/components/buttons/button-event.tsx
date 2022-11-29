import React from "react";

class ConsoleMessage extends React.Component<any, any> {

    message(name: string){
        console.log('Hello ' + name)
    }
    render() {
        return <button onClick={this.message.bind(this, 'Maverick')}>Console this log</button>
    }

}

export default ConsoleMessage