import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetTest } from '../../actions/reset-test';
import { useEffect, useState } from 'react';
import { request } from '../../utils/request';

const ResultContainer = ({ className }) => {
	const dispatch = useDispatch();
	const [results, setResults] = useState([]);
	const [tests, setTests] = useState([]);

	useEffect(() => {
		request('/tests').then(({ data: { tests } }) => {
			setTests(tests);
		});
		request('/results').then(({ data: { results } }) => {
			setResults(results);
		});
	}, []);
	const lastResult = results[results.length - 1];
	const handleResetTestClick = () => {
		dispatch(resetTest());
	};

	return (
		<div className={className}>
			В последнем тесте вы ответили верно на {lastResult?.score} из
			{tests.length} вопросов
			<div>
				<Link to="/test">
					<button className="button" onClick={handleResetTestClick}>
						Пройти заново
					</button>
				</Link>
				<Link to="/">
					<button className="button" onClick={handleResetTestClick}>
						На главную страницу
					</button>
				</Link>
			</div>
		</div>
	);
};

export const Result = styled(ResultContainer)`
	display: block;
	text-align: center;
	justify-content: center;
	width: 100%;
	font-size: 40px;
	font-weight: bold;
	margin-top: 100px;

	& .button {
		width: 350px;
		height: 50px;
		margin: 60px;
		font-size: 24px;
		border-radius: 5px;
		cursor: pointer;
	}
`;
