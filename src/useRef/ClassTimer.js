import { Component } from "react";

class ClassTimer extends Component {

    interval;

    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }

    tick = () => {
        this.setState((preState) => ({ timer: preState.timer + 1 }))
    }


    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Timer : {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>clear timer</button>
            </div>
        );
    }
}

export default ClassTimer;