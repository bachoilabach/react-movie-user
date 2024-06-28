import axios from '../axious';

const handleCreateComment = (email, movieID, content) => {
	return axios.post('/api/comment/create-new-comment', {
		email: email,
		movieID: movieID,
		content: content,
	});
};

const handleDeleteComment = (commentID)=>{
	return axios.delete('/api/comment/delete-comment',{
		data: {
			id: commentID
		}
	})
}

export {
    handleCreateComment,
	handleDeleteComment
}