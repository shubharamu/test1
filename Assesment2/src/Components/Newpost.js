import React from 'react';
import {useState, useEffect } from 'react';
import {createStore} from 'redux';
import {Createblog} from './Action';
import Reducer from './Reducer';

const store = createStore(Reducer)

export const State = () =>{
	return store;
}

const Newpost = () =>{
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [titerr, settiterr] = useState('')
	const [texerr, settexerr] = useState('')
	const [add, setadd] = useState('')
	
	const validate=(e)=>{
		e.preventDefault();
		if (title===''){
			settiterr('Title Field should not be empty');	
		}
		else if (text===''){
			settexerr('Text Field should not be empty');
		}
		else{
			store.dispatch(Createblog(title, text));
			settiterr('')
			settexerr('')
			setadd('Blog added Successfully')
		}
	}
	return (<div>
				<form className="ui form">
					<div className="field">
						<input onChange={(e)=>{setTitle(e.target.value)}} type="text" value={title} placeholder="Title"/>
						<div style={{ padding:'10px', color:'red'}}>{titerr}</div>
					</div>
					
					<div className="field">
						<textarea onChange={(e)=>{setText(e.target.value)}} value={text} placeholder='Text'></textarea>
						<div style={{ padding:'10px', color:'red'}}>{texerr}</div>
					</div>
					
					<div>
						<button  onClick={(e)=>{validate(e)}} className="ui button" type="submit">Publish</button>
					</div>
					<div style={{ padding:'10px', color:'green'}}>{add}</div>
				</form>
			</div>
	);
};

export default Newpost;