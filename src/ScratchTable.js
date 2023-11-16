import React from 'react';
import { useState } from 'react';
import ScratchButton from './ScratchButton';


function ScratchTable(props) {
  
  return (
    <div className="ScratchTable">
      <table>
        <tbody align="center">
          <tr>
            <td>
              <ScratchButton
                imgDir={process.env.PUBLIC_URL + "/img/buy_cake.png"}
                imgHoverDir={process.env.PUBLIC_URL + "/img/buy_cake_hover.png"}
                url={"https://scratch.mit.edu/projects/924837931/fullscreen/"}
              />
            </td>
            <td>
              <ScratchButton
                imgDir={process.env.PUBLIC_URL + "/img/frog.png"}
                imgHoverDir={process.env.PUBLIC_URL + "/img/frog_hover.png"}
                url={"https://scratch.mit.edu/projects/924835579/fullscreen/"}
              />
            </td>
            <td>
              <ScratchButton
                imgDir={process.env.PUBLIC_URL + "/img/frog_02.png"}
                imgHoverDir={process.env.PUBLIC_URL + "/img/frog_02_hover.png"}
                url={"https://scratch.mit.edu/projects/924836423/fullscreen/"}
              />
            </td>
          </tr>
          <tr>
            <td><a>▲七年級座標與移動：買蛋糕</a></td>
            <td colSpan="2"><a>▲七年級座標與移動：青蛙過河</a></td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody align="center">
          <tr>
          </tr>
          <tr>
            <td>
              <ScratchButton
                imgDir={process.env.PUBLIC_URL + "/img/burg_basic.png"}
                imgHoverDir={process.env.PUBLIC_URL + "/img/burg_basic_hover.png"}
                url={"https://scratch.mit.edu/projects/899791795/fullscreen/"}
              />
            </td>
            <td>
              <ScratchButton
                imgDir={process.env.PUBLIC_URL + "/img/burg.png"}
                imgHoverDir={process.env.PUBLIC_URL + "/img/burg_hover.png"}
                url={"https://scratch.mit.edu/projects/924838268/fullscreen/"}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2"><a>▲八年級角色分身與變數</a></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScratchTable;