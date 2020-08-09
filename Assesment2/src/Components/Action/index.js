export const Createblog = (tit, tex) => {
	return{
		type:'BLOG',
		payload:{
			title:tit,
			text:tex
		}
	};
};