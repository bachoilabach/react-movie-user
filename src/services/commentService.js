import axios from '../axious';

const handleCreateComment = (email, movieID, content) => {
	return axios.post('/api/comment/create-new-comment', {
		email: email,
		movieID: movieID,
		content: content,
	});
};

export {
    handleCreateComment
}