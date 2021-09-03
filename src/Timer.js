function Timer(props) {
    return (
        <div className="Timer">
            {props.timer.name} {props.timer.deadline * 1000 - new Date()}
        </div>
    );
}

export default Timer;
