import { Component } from "react";

class ClassIntervalCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState((preState) => ({ count: preState.count + 1 }))
    }

    render() {
        return (
            <h1>Counter: {this.state.count}</h1>
        );
    }
}

export default ClassIntervalCounter;