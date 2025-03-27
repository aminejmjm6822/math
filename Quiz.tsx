import React, { useState } from 'react';

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const questions = [
        {
            question: "What is 2 + 2?",
            options: [2, 3, 4, 5],
            answer: 4
        },
        {
            question: "What is 5 - 3?",
            options: [1, 2, 3, 4],
            answer: 2
        },
        {
            question: "What is 3 * 3?",
            options: [6, 7, 8, 9],
            answer: 9
        },
        {
            question: "What is 10 / 2?",
            options: [3, 4, 5, 6],
            answer: 5
        }
    ];

    const handleAnswer = (option: number) => {
        setUserAnswers([...userAnswers, option]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Handle quiz completion
            alert("Quiz completed! Your answers: " + userAnswers.join(", ") + ", " + option);
        }
    };

    return (
        <div>
            <h1>Quiz</h1>
            {currentQuestionIndex < questions.length ? (
                <div>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <div>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <h2>Thank you for completing the quiz!</h2>
            )}
        </div>
    );
};

export default Quiz;