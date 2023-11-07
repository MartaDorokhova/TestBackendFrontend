import styled from 'styled-components';
import { Statistics, ButtonBlock } from './components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<ButtonBlock />
			<Statistics />
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: block;
	text-align: center;
	margin: 20px 20px 15px 20px;
	height: 1300px;
`;
