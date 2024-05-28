import React, { useEffect, useState } from 'react';
import Container from '../components/Container';

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TextAvatar from '../components/TextAvatar';

import {
	Button,
	Stack,
	TextField,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@mui/material';
import { getCommentByMoviID } from '../services/movieService';

function MovieComment({ movieID }) {
	const [comments, setComments] = useState([]);
	const [visibleComments, setVisibleComments] = useState(3);
	const commentLength = comments.length;

	const loadMoreComments = () => {
		setVisibleComments(visibleComments + 3);
	};

	const commentTime = (commentDate)=>{
		const commentDateFromApi = commentDate.split('T')[0]
		return commentDateFromApi
	}

	const renderAvatar = (text) => (
		<ListItemAvatar>
			<TextAvatar text={text} />
		</ListItemAvatar>
	);

	const fetchComment = async () => {
		try {
			const response = await getCommentByMoviID(movieID);
			setComments(response.comments);
		} catch (error) {
			console.log(error);
		}
	};

	const renderComment = (comment) => {
		return (
			<ListItem
				alignItems="flex-start"
				key={comment.userName + comment.CreateAt}
				className="hover:bg-blue-700">
				{renderAvatar(comment.userName.charAt(0))}
				<ListItemText>
					<Typography variant="h6" fontWeight="700">
						{comment.userName}
					</Typography>
					<Typography fontSize={12}>{commentTime(comment.commentDate)}</Typography>
					<Typography variant="h6">{comment.content}</Typography>
				</ListItemText>
			</ListItem>
		);
	};

	useEffect(() => {
		fetchComment();
	}, [movieID]);

	return (
		<>
			<Container header={`Bình luận phim (${commentLength})`}>
				<List sx={{ width: '100%', bgcolor: 'black' }}>
					{comments
						.slice(0, visibleComments)
						.map((comment) => renderComment(comment))}
				</List>
				<div className="flex justify-center font-semibold">
					{visibleComments < comments.length && (
						<Button
							sx={{
								fontSize: '18px',
								color: '#ff0000',
								'&hover': {
									opacity: 0.8,
								},
							}}
							onClick={loadMoreComments}>
							Xem thêm
						</Button>
					)}
				</div>
				<Stack direction="row" spacing={2} sx={{ marginTop: '20px' }}>
					{/* cho ten usẻ vao */}
					<TextAvatar text={'Truong'} />
					<Stack spacing={2} flexGrow={1}>
						<Typography variant="h6" fontWeight="700">
							{'Truong'}
						</Typography>
						<TextField
							// value={content}
							// onChange={(e) => setContent(e.target.value)}
							multiline
							rows={4}
							placeholder="Viết bình luận của bạn"
							variant="outlined"
							fullWidth
							sx={{ border: '1px solid blue' }}
						/>
						<Button
							variant="contained"
							size="large"
							sx={{
								width: 'max-content',
								backgroundColor: '#ff0000',
								'&:hover': {
									opacity: 0.8,
									backgroundColor: '#ff0000',
								},
							}}
							startIcon={<SendOutlinedIcon />}>
							Đăng
						</Button>
					</Stack>
				</Stack>
			</Container>
		</>
	);
}

export default MovieComment;
