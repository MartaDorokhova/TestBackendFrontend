import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Main, Test, Result, Update } from './pages';

const AppContainer = ({ className }) => {
	return (
		<div className={className}>
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/edit" element={<Update />}></Route>
				<Route path="/test" element={<Test />}></Route>
				<Route path="/result" element={<Result />}></Route>
				<Route path="*" element={<>Ошибка</>}></Route>
			</Routes>
		</div>
	);
};

export const App = styled(AppContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
	position: relative;
`;
