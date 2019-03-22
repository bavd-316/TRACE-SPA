import React from 'react';

class Question extends React.Component {
    render() {
        const items = this.props.data.listQuestions.items;

        return items.map((question) => {
            return (
                <div>
                    <h3>{ question.text }</h3>
                    <p>Strongly Agree: { question.strongly_agree }</p>
                    <p>Agree: { question.agree }</p>
                    <p>Neutral: { question.neutral }</p>
                    <p>Disagree: { question.disagree }</p>
                    <p>Strongly Disagree: { question.strongly_disagree }</p>
                    <p>Dont: { question.dont }</p>
                    <p>Count: { question.count }</p>
                    <p>Rate: { question.rate }</p>
                </div>
            )
        })
    }

}

export default Question;