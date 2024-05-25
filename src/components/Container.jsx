import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderTypography = styled(Typography)(({ theme }) => ({
	position: 'relative', marginBottom: '20px',
	'&::before': {
		content: '""',
		position: 'absolute',
		bottom: '-4px', // Adjust the position as needed
		left: 0,
		width: '120px', // Adjust the width as needed
		height: '4px', // Adjust the height as needed
		backgroundColor: '#ff0000', // Red color
		borderRadius: '2px', // Optional: add rounded corners
	},
}));

function Container({ header, children }) {
	return (
		<div>
			<HeaderTypography
				variant="h5"
				fontWeight="700"
				textTransform="uppercase"
				color={'white'}>
				{header}
			</HeaderTypography>
			<div>
                {children}
            </div>
		</div>
	);
}

export default Container;
