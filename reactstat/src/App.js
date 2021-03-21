import "./App.css";
import React from "react";
import Person from "./Component/Person";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true,
            x: "True",
        };
        this.hendeleClick = () => {
            this.setState({ show: !this.state.show });
            if (this.state.show !== true) {
                this.setState({ x: "True" });
            } else {
                this.setState({ x: "False" });
            }
        };
    }
    render() {
        return (
            <>
                <button onClick={this.hendeleClick}>{this.state.x}</button>
                <div className="App">
                    {this.state.show === true ? (
                        <Person />
                    ) : (
                        <h1> {this.state.seconde}</h1>
                    )}
                </div>
            </>
        );
    }
}

export default App;
