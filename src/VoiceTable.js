import React from 'react';
import { useState } from 'react';
import VoiceButton from './VoiceButton';


function VoiceTable(props) {
  
  return (
    <div className="VoiceButton">
      <table>
        <tbody>
          <tr>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/80733.m4a"}
              />
            </td>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/80906.m4a"}
              />
            </td>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/81502.mp3"}
              />
            </td>
          </tr>
          <tr>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/81608.m4a"}
              />
            </td>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/81731.m4a"}
              />
            </td>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/81924.mp3"}
              />
            </td>
          </tr>
          <tr>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/82010.mp3"}
              />
            </td>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/82311.m4a"}
              />
            </td>
            <td>
              <VoiceButton
                StopImgDir={process.env.PUBLIC_URL + "/img/80733.png"}
                PlayImgDir={process.env.PUBLIC_URL + "/img/80733_playing.png"}
                voiceDir={process.env.PUBLIC_URL + "/audio/82734.m4a"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default VoiceTable;