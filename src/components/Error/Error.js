import { Component } from 'react';
import './Error.css';

class ErrorNotification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
    }

    componentDidMount() {
        this.showError()
    }
    
    showError() {
        if (this.props.message) {
            setTimeout(() => {
                this.setState({
                    visible: false
                });
            }, 5000);
        } else {
            this.setState({
                visible: false
            })
        }
    }

    render() {
        if (this.state.visible) {
            return (
                < div className="error-notification">
                    <span className="error">{this.props.message} </span >
                </div >
            )
        } else {
            return (
                null
            )
        }
    }
}

export default ErrorNotification;