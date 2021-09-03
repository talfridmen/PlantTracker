import _ from 'lodash';
import Timer from './Timer'
import React, {useState, useEffect} from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timers: []};
    }

    getTimers = () => fetch('http://localhost:5000/api/timers').then(res => (res.json()));

    componentDidMount() {
        this.getTimers().then(data => this.setState({timers: data}));
    }

    render() {
        return (
            <div className="MainPage">
                {_.map(this.state.timers, timer => <Timer timer={timer}/>)}
            </div>
        );
    }
}

export default MainPage;
