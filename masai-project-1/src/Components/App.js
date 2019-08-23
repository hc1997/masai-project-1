import React from 'react'
import Homepage from './Homepage.js';
import Sport from './sport.js';
import Culture from './culture.js'
import Lifestyle from './lifestyle.js';
class App extends React.Component {
    render() {
        return (
            <div className="App">
			<Homepage />
			<Sport />
			<Culture />
			<Lifestyle />
			
            </div>
        );
    }
}
export default App;

