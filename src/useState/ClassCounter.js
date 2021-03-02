import { Component } from "react";

class ClassCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState((preState, props) => {
            return {
                count: preState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={this.incrementCount}>incrementCount</button>
            </div>
        );
    }
}

export default ClassCounter;