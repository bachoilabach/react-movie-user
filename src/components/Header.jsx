import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import menuConfigs from '../config/menu.configs';
import Logo from './Logo';

const Header = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrolled, setScrolled] = useState(false);

	const handleButtonClick = (index) => {
		setSelectedIndex(index);
	};

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<AppBar elevation={0} sx={{ zIndex: 9999, backgroundColor: scrolled ? '#131313' : 'transparent', transition: 'background-color 0.3s' }}>
				<Toolbar className="items-center justify-between">
					<Stack direction="row" spacing={1} alignItems="center">
						<IconButton color="inherit" sx={{ mr: 2, display: { md: 'none' } }}>
							<MenuIcon />
						</IconButton>

						<Box sx={{ display: { xs: 'inline-block', md: 'none' } }}>
							<Logo />
						</Box>
					</Stack>

					{/* main menu */}
					<Box
						flexGrow={1}
						alignItems="center"
						display={{ xs: 'none', md: 'flex' }}>
						<Box sx={{ marginRight: '30px' }}>
							<Logo />
						</Box>
						{menuConfigs.main.map((item, index) => (
							<Button
								key={index}
								component={Link}
								to={item.path}
								variant="text"
								onClick={() => handleButtonClick(index)}
								style={{
									backgroundColor:
										selectedIndex === index ? 'red' : 'transparent',
								}}>
								<Typography
									className="text-white"
									fontWeight={600}
									sx={{ fontSize: '13px' }}>
									{item.display}
								</Typography>
							</Button>
						))}
					</Box>
					{/* main menu */}

					{/* user menu */}
					<Stack spacing={3} direction="row" alignItems="center">
						{
							<Button
								className=""
								variant="contained"
								sx={{ fontSize: '13px', backgroundColor: '#ff0000' }}>
								Đăng nhập
							</Button>
						}
					</Stack>
					{/* user menu */}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
