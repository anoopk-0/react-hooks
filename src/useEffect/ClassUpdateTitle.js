import { Component } from "react";

class ClassUpdateTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: ''
        };
    }

    ///update the title only once
    componentDidMount() {
        document.title = `Clicked ${this.state.counter} times`;
    }

    //update after incrementing 
    componentDidUpdate(preProps, preState) {
        //if we don't check, then on entering value in input field, the updating the title is called again and again
        if (preState.counter !== this.state.counter) {
            console.log('updating doc title')
            document.title = `Clicked ${this.state.counter} times`;
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState(() => ({ counter: this.state.counter + 1 }))}>
                    Increment Counter - {this.state.counter}
                </button >
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            </div>
        );
    }
}

export default ClassUpdateTitle;