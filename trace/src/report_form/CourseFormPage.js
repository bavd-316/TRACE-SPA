import React, {Component} from 'react';
import styles from "./CourseFormPage.css";
import CourseForm from "./CourseForm";

class CourseFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            questions: {
                "Course Related Questions": [
                    'Question1', 'Question2', 'Question3', 'Question4', 'Question5'],
                "Instructor Related Questions": [
                    "Question6", "Question7", "Question8"
                ],
                "Stupid Questions": [
                    "Question9", "Question10", "Question11", "Question12",
                    "Question13", "Question14", "Question15", "Question16"
                ],
                "Last Page": [
                    "Question17"
                ]
            }
        }
    };

    getQuestionKey = () => {
        let keys = Object.keys(this.state.questions);
        return keys[this.state.index]
    };

    nextPage = () => {
        let page = this.state.index + 1;
        if (page === Object.keys(this.state.questions).length) {
            alert("Done");
        } else {
            this.setState({index: page});
        }
    };

    prevPage = () => {
        let page = this.state.index - 1;
        this.setState({index: page});
    };

    getQuestionList = () => {
        let questions = this.state.questions[this.getQuestionKey()];
        return questions;
    };

    renderCompletionBar = () => {
        let spanList = [];
        for (let i = 0; i < Object.keys(this.state.questions).length; i++) {
            if (this.state.index >= i) {
                spanList.push(styles.active);
            } else {
                spanList.push(null);
            }
        }
        return (
            <div className={styles.sectionBar}>
                {spanList.map((status) => {
                    return (
                        <div className={status}></div>
                    )
                })}
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className={styles.banner}>

                </div>
                <div className={styles.form}>
                    {this.renderCompletionBar()}
                    <CourseForm title={this.getQuestionKey()} questionList={this.getQuestionList()}/>
                    <div className={styles.buttonCluster}>
                        <button className={styles.button}
                                onClick={this.nextPage}>{this.state.index < 3 ? "Next" : "Done"}</button>
                        {
                            this.state.index > 0 ?
                                <button className={styles.button} onClick={this.prevPage}>Prev</button> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseFormPage;