import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import NotFound from '../src/pages/NotFound';
import LoginPage from '../src/pages/LoginPage';
import SignupPage from '../src/pages/SignupPage';
import ForgotPwPage from '../src/pages/ForgotPwPage';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/forgotpw" element={<ForgotPwPage />} />
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/phim" element={<MovieDetail />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
