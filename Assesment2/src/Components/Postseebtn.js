import React from 'react';

const Postseebtn = ({setView}) => {
	
	return (<div>
				<div className="ui center aligned grid">
					<div className="three column row">
						<button onClick={(e)=>{setView(1)}} className="ui left floated secondary basic button">New post</button>
						<button onClick={(e)=>{setView(2)}} className="ui right floated secondary basic button">Published</button>
					</div>
				</div><br/>
			</div>);
};

export default Postseebtn;