import styled from 'styled-components';
import { Questions } from './components';

const TestContainer = ({ className }) => {
	return (
		<div className={className}>
			<Questions />
			{/* <Navigation /> */}
		</div>
	);
};

export const Test = styled(TestContainer)`
	display: block;
`;
