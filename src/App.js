import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import NotFound from '../src/pages/NotFound';
import LoginPage from '../src/pages/LoginPage';
import SignupPage from '../src/pages/SignupPage';
import ListMovie from './pages/ListMovie';
import ForgotPwPage from '../src/pages/ForgotPwPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/forgotpw" element={<ForgotPwPage />} />
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/movie/:id" element={<MovieDetail />} />
						<Route path="/actor/:id" element={<ActorDetail />} />
						<Route path="/search" element={<SearchPage />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer/>
		</>
	);
}

export default App;
