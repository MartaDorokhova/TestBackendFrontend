import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { request } from '../../utils/request';
import { saveTestAsync } from '../../actions/save-test-async';

const UpdateContainer = ({ className }) => {
	const [updateQuestion, setUpdateQuestion] = useState('');
	const [answers, setAnswers] = useState(['', '', '', '']);
	const [rightVersion, setRightVersion] = useState('');
	const [tests, setTests] = useState([]);
	const dispatch = useDispatch();

	const handleUpdateChange = (event) => {
		setUpdateQuestion(event.target.value);
		console.log(updateQuestion);
	};

	const handleUpdateChangeAnswer = (event, index) => {
		let newAnswers = [...answers];
		newAnswers[index] = event.target.value;
		setAnswers(newAnswers);
		console.log(answers);
	};

	const handleUpdateRightQuestionChange = ({ target }) =>
		setRightVersion(target.value);

	const firstVersion = answers[0];
	const secondVersion = answers[1];
	const thirdVersion = answers[2];

	const saveUpdatedTest = (id) => {
		const updatedQuestion =
			updateQuestion || tests.find((test) => test.id === id)?.question || '';
		const updatedRightVersion =
			rightVersion || tests.find((test) => test.id === id)?.rightVersion || '';
		const updatedFirstVersion =
			firstVersion || tests.find((test) => test.id === id)?.firstVersion || '';
		const updatedSecondVersion =
			secondVersion ||
			tests.find((test) => test.id === id)?.secondVersion ||
			'';
		const updatedThirdVersion =
			thirdVersion || tests.find((test) => test.id === id)?.thirdVersion || '';
		dispatch(
			saveTestAsync(id, {
				question: updatedQuestion,
				rightVersion: updatedRightVersion,
				firstVersion: updatedFirstVersion,
				secondVersion: updatedSecondVersion,
				thirdVersion: updatedThirdVersion,
			}),
		);
	};

	useEffect(() => {
		request('/tests').then(({ data: { tests } }) => {
			setTests(tests);
		});
	}, []);

	return (
		<div className={className}>
			<h3>Редактирование теста</h3>
			{tests.map((test) => (
				<div className="answers" key={test.id}>
					Вопрос
					<br />
					<input
						className="newQuestion"
						type="text"
						name="question"
						onChange={(event) => handleUpdateChange(event)}
						defaultValue={test.question}
					/>
					<br />
					Введите правильный ответ <br />
					<input
						className="newVersion"
						type="text"
						name="rightVersion"
						onChange={handleUpdateRightQuestionChange}
						defaultValue={test.rightVersion}
					/>
					<br />
					Варианты ответа
					<br />
					{['firstVersion', 'secondVersion', 'thirdVersion'].map(
						(version, index) => (
							<div key={version} className="answer">
								<input
									className="newVersion"
									type="text"
									name={'question-' + test.id}
									id={version + '-' + test.id}
									defaultValue={test[version]}
									onChange={(event) => handleUpdateChangeAnswer(event, index)}
								/>
							</div>
						),
					)}{' '}
					<button
						className="save-button"
						onClick={() => saveUpdatedTest(test.id)}
					>
						Сохранить
					</button>
				</div>
			))}
		</div>
	);
};

export const Update = styled(UpdateContainer)`
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

	& .newQuestion {
		width: 600px;
		height: 80px;
		font-size: 22px;
		border-width: 0.14rem;
		margin-bottom: 20px;
		margin-top: 20px;
		padding: 3px 15px;
	}

	& .newVersion {
		width: 550px;
		height: 60px;
		font-size: 18px;
		margin-bottom: 8px;
		padding: 3px 15px;
	}

	& .button {
		width: 350px;
		height: 50px;
		margin: 20px;
		font-size: 18px;
		border-radius: 5px;
		cursor: pointer;
	}

	& .save-button {
		width: 150px;
		height: 50px;
		margin: 0 0 30px 5px;
		font-size: 18px;
		border-radius: 5px;
		cursor: pointer;
	}
`;

export default Update;
