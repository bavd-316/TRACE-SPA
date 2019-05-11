import React, {Component} from "react";
import styles from "./Question.css";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Not Applicable"
        };
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };


    render() {
        const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree", "Not Applicable"];
        const radioid = this.props.question;
        return (
            <div className={styles.row}>
                <h4>{radioid}</h4>
                <div className={styles.form}>
                    <form>
                        {options.map(function (option) {
                            return (
                                <div className={styles.check}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={radioid}
                                            checked={this.state.selectedOption === option}
                                            value={option}
                                            onChange={this.handleOptionChange}
                                        />
                                        {option}
                                    </label>
                                </div>
                            );
                        }, {state: this.state, handleOptionChange: this.handleOptionChange})}
                    </form>
                </div>
            </div>
        );
    }
}

export default Question;
