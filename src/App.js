import './App.css';
import React, { useState } from 'react';
function App() {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  const [QuestionIndex,setQuestionIndex] = useState (0);
  const [scoreBoolean, setScoreBoolean] = useState(false);
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);


  const handleQuestionIndex = (isCorrect) =>{
    if(isCorrect)
    setScore(score+1);
    if(QuestionIndex+1 < questions.length)
      return setQuestionIndex(QuestionIndex+1);
    else
    return setScoreBoolean(true);
  }
  const handlingReset = () =>{
     setQuestionIndex(0);
     setScoreBoolean(false);
     setPrevScore(score);
     setScore(0);
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{scoreBoolean ? (
        <div className='score_page'>
          <p>your previous score: {prevScore}</p>
        	<div className='score-section'>You scored {score} out of {questions.length}</div>
          <button onClick={() => handlingReset()} className='reset_btn' >reset</button>  
        </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {QuestionIndex+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[QuestionIndex].questionText}</div>
					</div>
					<div className='answer-section'>
						{
              questions[QuestionIndex].answerOptions.map((answerOption) =>
                <button onClick={()=> handleQuestionIndex(answerOption.isCorrect)}>{answerOption.answerText}</button>
            )
            }
					</div>
				</>
			)}
		</div>
	);
}

export default App;
