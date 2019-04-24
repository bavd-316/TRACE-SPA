import React, {Component} from 'react';
import styles from "./CourseFormPage.css";
import CourseForm from "./CourseForm";


class CourseFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            questions: "Course Related Questions"
        }
    }

    updateQuestions = (iterate) => {
        const sections = [
            "Course Related Questions",
            "Instructor Related Questions",
            "Stupid Questions"];
        let page = this.state.index;
        page += iterate;
        this.setState({index: page})
        this.setState({questions: sections[page]})
    }

    getQuestions = () => {
        const questions = {
            "Course Related Questions": [
                'Question1', 'Question2', 'Question3', 'Question4', 'Question5'],
            "Instructor Related Questions": [
                "Question6", "Question7", "Question8"
            ],
            "Stupid Questions": [
                "Question9", "Question10", "Question11", "Question12",
                "Question13", "Question14", "Question15", "Question16"
            ]
        };
        console.log(this.state);
        return questions[this.state.questions]
    };

    render() {
        return (
            <div>
                <CourseForm title={this.state.questions} questionList={this.getQuestions()}/>
                <button className={styles.button} onClick={() => this.updateQuestions(1)}>{this.state.index < 2 ? "Next" : "Done"}</button>
                {
                    this.state.index > 0 ? <button className={styles.button} onClick={() => this.updateQuestions(-1)}>Prev</button> : <div></div>};
                }
            </div>
        );
    };
}

export default CourseFormPage;