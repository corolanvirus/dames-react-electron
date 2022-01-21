import Pion from '../Pion/Pion';
import './map.css';
import { Component } from 'react';





class Map extends Component {



    render() {

        // on attends le call to action (onclick)
        //dans le return on met l'état initial
        return (
            // c'est le pion qui devra être draggable
            // disabled: boolean, if true si player 2 ?
            <>



                <table className='Map'>

                    <tr>

                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                    </tr>
                    <tr>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
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
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                    </tr>
                    <tr>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                        <td class="white"><Pion /></td>
                        <td class="black"><Pion /></td>
                    </tr>
                </table>
            </>);
    }
}

export default Map;