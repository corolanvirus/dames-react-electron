import Pion from '../Pion/Pion';
import './map.css';
import { Component } from 'react';


var position;


class Map extends Component {

    getPosition = (id) => {
        position = document.getElementById(id);
        console.log(position)

    }
    render() {

        // on attends le call to action (onclick)
        //dans le return on met l'état initial
        return (

            <>

                <table className='Map'>

                    <tr>

                        <td class="black" id="A1"><Pion /></td>
                        <td class="white" id="A2"><Pion /></td>
                        <td class="black" id="A3"><Pion /></td>
                        <td class="white" id="A4"><Pion /></td>
                        <td class="black" id="A5"><Pion /></td>
                        <td class="white" id="A6"><Pion /></td>
                        <td class="black" id="A7"><Pion /></td>
                        <td class="white" id="A8"><Pion /></td>
                    </tr>
                    <tr>
                        <td class="white" id="A9"><Pion /></td>
                        <td class="black" id="A10"><Pion /></td>
                        <td class="white" id="A11"><Pion /></td>
                        <td class="black" id="A12"><Pion /></td>
                        <td class="white" id="A13"><Pion /></td>
                        <td class="black" id="A14"><Pion /></td>
                        <td class="white" id="A15"><Pion /></td>
                        <td class="black" id="A16"><Pion /></td>
                    </tr>
                    <tr>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                    </tr>
                    <tr>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                    </tr>    <tr>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                    </tr>
                    <tr>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                        <td class="white"></td>
                        <td class="black"></td>
                    </tr>    <tr>
                        <td class="black" id="B1"><Pion /></td>
                        <td class="white" id="B2"><Pion /></td>
                        <td class="black" id="B3"><Pion /></td>
                        <td class="white" id="B4"><Pion /></td>
                        <td class="black" id="B5"><Pion /></td>
                        <td class="white" id="B6"><Pion /></td>
                        <td class="black" id="B7"><Pion /></td>
                        <td class="white" id="B8"><Pion /></td>
                    </tr>
                    <tr>
                        <td class="white" id="B9"><Pion /></td>
                        <td class="black" id="B10"><Pion /></td>
                        <td class="white" id="B11"><Pion /></td>
                        <td class="black" id="B12"><Pion /></td>
                        <td class="white" id="B13"><Pion /></td>
                        <td class="black" id="B14"><Pion /></td>
                        <td class="white" id="B15"><Pion /></td>
                        <td class="black" id="B16"><Pion /></td>
                    </tr>
                </table>
                <button onClick={this.getPosition}>testez ma position</button>
            </>);
    }
}

export default Map;