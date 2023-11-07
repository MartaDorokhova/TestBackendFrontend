import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonBlockContainer = ({ className }) => {
	return (
		<div className={className}>
			<Link to="/test">
				<button className="button">Запустить тест</button>
			</Link>
			<Link to="/edit">
				<button className="button">Редактировать тест</button>
			</Link>
		</div>
	);
};

export const ButtonBlock = styled(ButtonBlockContainer)`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 20px 30px;

	& .button {
		width: 350px;
		height: 80px;
		margin: 10px 20px;
		font-size: 20px;
		font-weight: bold;
		cursor: pointer;
	}
`;
