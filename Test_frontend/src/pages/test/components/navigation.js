import styled from 'styled-components';

const NavigationContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className={className}>
				<button className="button">Предыдущий вопрос</button>

				<button className="button">Следующий вопрос</button>
			</div>
		</div>
	);
};

export const Navigation = styled(NavigationContainer)`
	display: flex;
	justify-content: center;
	width: 100%;

	& .button {
		width: 350px;
		height: 50px;
		/* margin: 20px; */
		font-size: 24px;
		border-radius: 5px;
		cursor: pointer;
	}
`;
