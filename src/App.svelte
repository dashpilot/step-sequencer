<script>
import { onMount } from 'svelte';
// import * as Tone from 'tone'





import classNames from "https://cdn.skypack.dev/classnames/bind";

let activeTab = "upload";

let playing = false;
let recording = false;
let started = false;
let bpm = 120;

let keys, recorder;
let isMobile;


onMount(async ()=>{
 
isMobile = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
  
  keys = new Tone.Players({
    urls: {
     0: "bass2/Bass-E1.wav",
     1: "bass2/Bass-Fsharp1.wav",
     2: "bass2/Bass-A1.wav",
     3: "bass2/Bass-B1.wav",
     4: "bass2/Bass-Csharp1.wav",
     5: "crash.wav",
     6: "hat2.wav",
     7: "snare.wav",
     8: "kick.wav",
    },
    fadeOut: "64n",
    baseUrl: "./audio/"
  }).toDestination();
  
  recorder = new Tone.Recorder();
  keys.connect(recorder);
  
  
  document.querySelector("tone-step-sequencer").addEventListener("trigger", ({ detail }) => {
    keys.player(detail.row).start(detail.time, 0, "16t");
  });
  
 
  
  
})

function setTab(){
  
}

async function play(){

  if (!started) {
    // Only exectued the first time the button is clicked
    // initializing Tone, setting the volume, and setting up the loop
    
    Tone.start();
    //Tone.getDestination().volume.rampTo(-10, 0.001)
 
    started = true;
  }
  
  // toggle Tone.Trasport and the flag variable.
  if (playing) {
   
    Tone.Transport.stop();
    playing = false;
  } else {
   
    Tone.Transport.start();
    playing = true;
  }
}

function stop(){
  Tone.Transport.stop();
  playing = false;
}

function record(){
  
  Tone.Transport.stop();
  Tone.Transport.start();
  playing = true;
  recording = true;
  
  var duration = getDuration();
  console.log(duration)
  
  // start recording
  recorder.start();
  // wait for the notes to end and stop the recording
  setTimeout(async () => {
    // the recorded audio is returned as a blob
    recording = await recorder.stop();
    Tone.Transport.stop();
    
    playing = false;
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();

  }, duration);
  
}

function setBpm(e){
  Tone.Transport.bpm.value = e.target.value;
  bpm = e.target.value;
}

function getDuration(){
  let ms_per_beat = 1000 * 60 / bpm;
  return ms_per_beat * 8;
}

</script>


<header class="header">

  <a href="./../"><img
    src="./img/cinetools.png"
    class="logo"
  /></a>


</header>
<br><br>

<main>
  
  
  <div class="wrap">
  <div class="screen">
    
    {#if isMobile}
    <div class="alert alert-warning text-center"><i class="fas fa-exclamation-triangle"></i> &nbsp;This app currently does not work on mobile.</div>
    
    {/if}
    
  <tone-step-sequencer rows="9"></tone-step-sequencer>
  

    
  </div>
  
  <div class="controls">

    
    <div class="tab text-center" id="tab-upload" style="display: block; border-top: 0;background-image: url(img/tape-long.jpg); background-size: cover; background-position: top center; padding: 40px; padding-top: 150px;">
   
  
  {#if !playing}
  <button class="btn btn-dark" id="play" on:click={play}>
    <i class="fas fa-play"></i> &nbsp;Play
  </button>
  {/if}
  
  {#if playing}
  <button class="btn btn-dark" on:click={stop}>
    <i class="fas fa-stop"></i> &nbsp;Stop
  </button>
  {/if}
  
  <button class="btn btn-dark" on:click={record}>
    <i class="fas fa-circle" class:redmeansrecording={recording === true}></i> &nbsp;Record
  </button>
  

    <div class="label-start mt-4">Tempo: {bpm} BPM</div>

 
    
  <div class="slider">
  <input type="range" class="form-range" min="1" max="240" step="1" value="120" autocomplete="off" on:input={setBpm} />
  </div>
  
  <!--
  <br /><br />
  <tone-slider
    id="tempo"
    label="tempo"
    units="bpm"
    min="60"
    max="240"
    value="120"
  ></tone-slider>
  
  <tone-slider
    id="distortion"
    label="distortion"
    units="dB"
    min="0"
    max="1"
    value="0"
  ></tone-slider>
  
  <tone-slider
    id="reverb"
    label="reverb decay"
    units="seconds"
    min="0.001"
    max="10"
    value="0"
  ></tone-slider>
-->
  
  
  
  
   
     </div>
     
     
    
 


    
   
    
   
 
</div>
    

   
    
    </div>
    
    


  
  
</main>


