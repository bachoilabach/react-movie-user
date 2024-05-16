import { Button } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircularRate from './CircularRate';

function MediaItem({ imgUrl, score, releaseDate, title }) {
	return (
		<div
			className="bg-contain bg-no-repeat  w-[200px] h-[300px] mt-6 rounded-lg hover cursor-pointer text-white p-3
            overflow-hidden group flex flex-col justify-between items-center hover:brightness-[0.8] mb-16
            "
			style={{
				backgroundImage:
					`url(${imgUrl})`,
			}}>
			<div></div>
			<div className="opacity-0 group-hover:opacity-100">
				<Button
					variant="contained"
					color="primary"
					startIcon={<PlayArrowIcon />}
					sx={{
						backgroundColor: '#ff0000',
						'&:hover': {
							backgroundColor: 'rgba(255, 0, 0, 0.8)',
						},
						paddingLeft: '40%',
						marginBottom: '-100px',
						width: '10px',
					}}></Button>
			</div>
			<div className="inset-0 opacity-0 items-center group-hover:opacity-100 transition-opacity ">
				<div className="w-full">
					<CircularRate value={score} />
					<p className='text-[14px]'>{releaseDate}</p>
					<p className="font-semibold text-[15px]">{title}</p>
				</div>
			</div>
		</div>
	);
}

export default MediaItem;
