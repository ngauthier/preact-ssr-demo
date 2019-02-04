import { Component, h, render } from "preact";

export default class App extends Component {
    public timer: any;

    constructor() {
        super();
        // set initial time:
        this.state = {
            time: Date.now(),
        };
    }

    public componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() });
        }, 1000);
    }

    public componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
    }

    public render(props, state) {
        const time = new Date(state.time).toLocaleTimeString();
        return <span>{time}</span>;
    }
}
