import React from "react";

class ConsoleAFMessage extends React.Component<any, any> {

    messageArrowFunction = () => {
        console.log('Message created with arrow function')
    }    

    render() {
        return <button onClick={() => this.messageArrowFunction()}>Console this log AF</button>
    }

}

export default ConsoleAFMessage