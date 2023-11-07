import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { request } from '../../../utils/request';

const StatisticsContainer = ({ className }) => {
	const [tests, setTests] = useState([]);
	const [results, setResults] = useState([]);

	const resultPerPage = 8;
	const [currentPage, setCurrentPage] = useState(0);
	let pagesCount = Math.ceil(results.length / resultPerPage);

	const goNext = () => {
		setCurrentPage((oldPage) => Math.min(oldPage + 1, pagesCount - 1));
	};
	const goPrev = () => {
		setCurrentPage((oldPage) => Math.max(oldPage - 1, 0));
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
			<div>История прохождений</div>

			{results
				.slice(currentPage * resultPerPage, (currentPage + 1) * resultPerPage)
				.map(({ id, currentDate, score }) => (
					<div className="game" key={id}>
						<div className="game-statistics">{currentDate}</div>
						<div className="bar-block">
							Верно
							<div className="visualisation">
								<div
									className="true"
									style={{ width: `${(score / tests.length) * 200}px` }}
								>
									{score}
								</div>
								<div
									className="notTrue"
									style={{ width: `${(1 - score / tests.length) * 200}px` }}
								>
									{' '}
									{tests.length - score}
								</div>{' '}
							</div>
							Неверно
						</div>
						<div className="game-statistics">
							Правильных ответов: {score}/{tests.length}
						</div>
					</div>
				))}
			<button className="button-go" onClick={goPrev}>
				Назад
			</button>
			<button className="button-go" onClick={goNext}>
				Вперед
			</button>
		</div>
	);
};

export const Statistics = styled(StatisticsContainer)`
	display: block;
	height: 1000px;
	padding: 10px;
	font-size: 22px;
	font-weight: bold;

	& .game {
		justify-content: space-between;
		display: flex;
		border: 1px solid #000;
		margin: 25px 15px;
		border-radius: 5px;
		height: 55px;
	}

	& .game-statistics {
		margin: 10px 15px;
		font-size: 22px;
		font-weight: lighter;
	}

	& .visualisation {
		border: 1px solid #000;
		margin: 1px 5px;
		display: flex;
		height: 30px;
		font-size: 12px;
		justify-content: space-between;
	}
	& .notTrue {
		border: 1px solid #000;
		background-color: red;
		font-size: 18px;
		font-weight: bold;
	}
	& .true {
		border: 1px solid #000;
		background-color: green;
		font-size: 18px;
		font-weight: bold;
	}

	& .bar-block {
		display: flex;
		margin-top: 10px;
		font-weight: lighter;
	}

	& .button-go {
		width: 150px;
		height: 30px;
		font-size: 18px;
		margin: 10px 8px;
	}
`;
