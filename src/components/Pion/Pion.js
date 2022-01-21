import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Component } from 'react';
import './pion.css'



class Pion extends Component {

    render() {


        return (<>
            <Draggable
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <span className="Pion handle">

                </span>
            </Draggable>
        </>);

    }
};
export default Pion;