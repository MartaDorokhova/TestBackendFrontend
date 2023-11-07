import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetTest } from '../../../actions/reset-test';
import { currentDate } from '../../../bff/utils';
import { request } from '../../../utils/request';
import { saveResultAsync } from '../../../actions/save-result-async';

const QuestionsContainer = ({ className }) => {
	const dispatch = useDispatch();
	const [tests, setTests] = useState([]);
	const [score, setScore] = useState([]);
	const [results, setResults] = useState([]);
	const [answeredQuestions, setAnsweredQuestions] = useState([]);

	const onChoose = ({ selectedAnswer, rightVersion, id }) => {
		const isCorrect = selectedAnswer === rightVersion;
		setAnsweredQuestions((prevAnswers) => {
			const updatedAnswers = {
				...prevAnswers,
				[id]: isCorrect,
			};

			const newScore = Object.values(updatedAnswers).filter(
				(value) => value === true,
			).length;
			setScore(newScore);

			return updatedAnswers;
		});
	};
	console.log(score);
	const handleFinishTestClick = () => {
		dispatch(saveResultAsync({ score, currentDate }));
	};

	const previousResults = localStorage.getItem('testResults');
	const resultsToSave = previousResults ? JSON.parse(previousResults) : [];

	const incrementId =
		resultsToSave.length > 0
			? resultsToSave[resultsToSave.length - 1].id + 1
			: 1;

	const newResult = {
		currentDate: currentDate,
		score: score,
		id: incrementId,
	};

	resultsToSave.push(newResult);

	// Save to local storage
	localStorage.setItem('testResults', JSON.stringify(resultsToSave));

	const handleResetTestClick = () => {
		dispatch(resetTest());
	};
	useEffect(() => {
		request('/tests').then(({ data: { tests } }) => {
			setTests(tests);
		});
		request('/results').then(({ data: { results } }) => {
			setResults(results);
		});
	}, []);
	return (
		<div className={className}>
			<h3>Тест</h3>
			{tests.map(
				({
					id,
					question,
					firstVersion,
					secondVersion,
					thirdVersion,
					rightVersion,
				}) => (
					<div className={className}>
						<>
							{question}

							<form>
								{[firstVersion, secondVersion, thirdVersion].map(
									(version, i) => (
										<div key={version} className="answer">
											<input
												type="radio"
												name={question}
												value={version}
												onChange={() =>
													onChoose({
														selectedAnswer: version,
														rightVersion: rightVersion,
														id,
													})
												}
											/>

											<label htmlFor={version}>{version}</label>
										</div>
									),
								)}
							</form>
						</>
					</div>
				),
			)}
			<Link to="/result">
				<button className="button" onClick={handleFinishTestClick}>
					Завершить тест
				</button>
			</Link>
			<Link to="/">
				<button className="button" onClick={handleResetTestClick}>
					На главную страницу
				</button>
			</Link>
		</div>
	);
};

export const Questions = styled(QuestionsContainer)`
	display: block;
	padding: 0 40px;
	font-size: 28px;

	& .answers {
		margin: 20px;
	}

	& .answer {
		display: flex;
		margin-bottom: 20px;
		font-size: 24px;
	}

	& .answer input[type='radio'] {
		width: 24px;
		height: 24px;
		background: #fff;
		border-radius: 50%;
		border: 1px solid #000;
		position: relative;
		margin-right: 20px;
		margin-top: 5px;
	}

	& .answer input[type='radio']:checked {
		background: #000;
	}
	& .button {
		width: 350px;
		height: 50px;
		margin: 20px;
		font-size: 24px;
		border-radius: 5px;
		cursor: pointer;
	}
`;
