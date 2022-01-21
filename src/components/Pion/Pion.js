import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Component } from 'react';
import './pion.css'
import { Map } from '../Map/Map'




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
                //disabled={true} quand c'est pas ton tour il passe a true

                onStop={this.handleStop}>
                <span className="Pion handle">

                </span>
            </Draggable>
        </>
        );

    }

};
export default Pion;