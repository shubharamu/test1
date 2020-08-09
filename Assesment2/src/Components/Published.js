import React from 'react';
import Reducer from './Reducer';
import {State} from './Newpost';
import { connect } from 'react-redux';
import {Createblog} from './Action';


const Published = ({title}) =>{
	const data = State().getState().blog
	
	const displaytosearch = () =>{
		return(
			data.map((d, index)=>{
				if(d.title===title){
					return(<div className='ui segment' key={index}>
						<div>Title : {d.title}</div>
						<div>Text : {d.text}</div>
					</div>);
				}else{
					return;
				}	
			})
		);
	}
	const display = () =>{
		return(
			data.map((d, index)=>{
				return(<div className='ui segment' key={index}>
						<div>Title : {d.title}</div>
						<div>Text : {d.text}</div>
					</div>);
			})
			
		);
	}
	const has = () =>{
		if(data.length===0){
			return <div>No blogs available!!</div>;
		}else{
			return (<div style={{ height: '500px', overflowY: 'scroll' }}>
						{title==='' ? display() : displaytosearch()}
					</div>)
		}
	}

	return (<div>
				{has()}
			</div>		 
	);
};

// const mapStatetoProps = (state) =>{
// 	return {blog:state.selectedblog}
// }
export default Published;