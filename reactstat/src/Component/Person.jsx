import React from "react";
import mekki from "./mekki.jpg";
class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: "BAHRI Mekki",
            bio: "full stack js etudiant in the GoMyCode training center",
            imgSrc: mekki,
            profession: "Full Stack JS Developer",
            second: 0,
            minute: 0,
            hour: 0,
        };
    }
    componentDidMount() {
        var interval = setInterval(this.timer.bind(this), 1000);
        this.setState({ interval: interval });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
        console.log(
            "Unmount : " +
                this.state.hour +
                " : " +
                this.state.minute +
                " : " +
                this.state.second
        );
    }
    timer() {
        if (this.state.second < 59) {
            this.setState({ second: this.state.second + 1 });
        } else if (this.state.minute < 59) {
            this.setState({ second: 0 });
            this.setState({ minute: this.state.minute + 1 });
        } else {
            this.setState({ second: 0 });
            this.setState({ minute: 0 });
            this.setState({ hour: this.state.hour + 1 });
        }
        console.log(
            this.state.hour +
                " : " +
                this.state.minute +
                " : " +
                this.state.second
        );
    }

    render() {
        return (
            <>
                <img
                    src={this.state.imgSrc}
                    alt="Mekki"
                    style={{
                        width: "38%",
                        height: "100%",
                        borderRadius: "100%",
                        margin: "auto 3%",
                    }}
                />
                <div
                    style={{
                        padding: "3%",
                        margin: "auto 0",
                        borderLeft: "solid #ffffff",
                        backgroundColor: "#9e9e9e2b",
                        color: "#607d8b",
                    }}
                >
                    <h1>
                        {this.state.hour} : {this.state.minute} :{" "}
                        {this.state.second}
                    </h1>
                    <h1>{this.state.fullName}</h1>
                    <h1>{this.state.bio}</h1>
                    <h1>{this.state.profession}</h1>
                </div>
            </>
        );
    }
}

export default Person;
