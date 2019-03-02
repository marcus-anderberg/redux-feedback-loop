import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'


class HowFeeling extends Component {

    state = {
        feeling: 0,
    }


    onNextClick = () => {
        this.props.dispatch({ type: 'FEELING', payload: this.state.feeling })
        // redirects the user to /confirm
        this.props.history.push('/understanding');
    }

    onChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }


    render() {
        return (
            <>
               <Header/>
                <div className="container">
                    <h1>How are you feeling today? </h1>
                    <input onChange={this.onChange}type="number" name="quantity" min="0" max="5" placeholder="0"/>
                    <button onClick={this.onNextClick}>Next</button>
                </div>
               <ReviewFeedback/>
            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(HowFeeling);