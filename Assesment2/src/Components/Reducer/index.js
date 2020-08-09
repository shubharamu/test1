import { combineReducers } from 'redux';

const blogReducer = (oldBlog=[], action) => {
	if(action.type === 'BLOG'){
		return [...oldBlog, action.payload];
	}
	return oldBlog;
};

const selectblogReducer = (selectedblog = null, action) =>{
	if(action.type === 'BLOG'){
		return action.payload;
	}
	return selectedblog;
};

export default combineReducers({
	blog : blogReducer,
	selectedblog : selectblogReducer
});