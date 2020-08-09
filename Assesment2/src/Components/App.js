import React, {useState} from 'react';
import Searchbar from './Searchbar';
import Postseebtn from './Postseebtn';
import Newpost from './Newpost';
import Published from  './Published';

const App = () =>{
	const [text , setText] = useState('')
	const [view, setview] = useState(<Published />)

	const setdataview = (val) =>{
		val === 1 ? setview(<Newpost/>) : setview(<Published title={text}/>)
	}
	

	return (<div className='ui container segments'>
			<div className='ui segment'>
				<Searchbar text={setText} setView={setdataview}/>
			</div>
			<div className='ui segment'>
				<Postseebtn setView={setdataview}/>
			</div>
			<div className='ui segment'>
				{view}
			</div>
		</div>);
};

export default App;