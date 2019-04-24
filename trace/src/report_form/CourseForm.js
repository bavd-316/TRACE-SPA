import React, {Component} from "react";
import styles from "./CourseForm.css";
import Question from "./Question.js";

class CourseForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const questions = this.props.questionList;
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>{this.props.title}</h2>
                    <p>Please answer these questions about your course.</p>
                </div>
                <div className={styles.questions}>
                    {questions.map(function (question) {
                        return (
                            <Question question={question}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CourseForm;
