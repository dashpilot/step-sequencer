<script>
import { onMount } from 'svelte';
// import * as Tone from 'tone'





let activeTab = "upload";

let playing = false;
let recording = false;
let started = false;
let bpm = 120;

let keys, recorder;
let isMobile;

let step;
let index = 0;


onMount(async ()=>{
 
 // import('./sequencer.js');
 
 // https://beat-makerrr.glitch.me/app.js
 // https://beat-makerrrr.glitch.me/app.js
 
 /*  Most browsers require a user action to intiate AudioContext
 This is a fix to allow tone to start on pageload*/
 document.documentElement.addEventListener("mousedown", () => {
   if (Tone.context.state !== "running") Tone.context.resume();
 });
 
 let beats = [];
 let notes = [];

 
 sequencer();

 
 /*
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
  
 
  
  
  document.querySelector("tone-step-sequencer").addEventListener("trigger", ({ detail }) => {
    keys.player(detail.row).start(detail.time, 0, "16t");
  });
  */
 
  
  
})

function sequencer() {
  /*
  //BPM slider event handler
  let slider = document.getElementById("bpmRange");
  let output = document.getElementById("bpmOutput");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
    Tone.Transport.bpm.value = this.value;
  };
*/

 recorder = new Tone.Recorder();

  //Instrument sound files
  const kick = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fkick-electro01.wav?v=1614018257380"
  ).toDestination().connect(recorder);
  const snare = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fsnare-lofi02.wav?v=1614018257350"
  ).toDestination().connect(recorder);
  const clap = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fclap-808.wav?v=1614018257350"
  ).toDestination().connect(recorder);
  const hihat = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fhihat-808.wav?v=1614018257350"
  ).toDestination().connect(recorder);
  const tom = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Ftom-808.wav?v=1614018257451"
  ).toDestination().connect(recorder);

  //Tone js' synth object
  const synthA5 = new Tone.Synth().toDestination().connect(recorder);
  const synthB5 = new Tone.Synth().toDestination().connect(recorder);
  const synthC5 = new Tone.Synth().toDestination().connect(recorder);
  const synthD5 = new Tone.Synth().toDestination().connect(recorder);
  const synthE5 = new Tone.Synth().toDestination().connect(recorder);
  const synthF5 = new Tone.Synth().toDestination().connect(recorder);
  const synthG5 = new Tone.Synth().toDestination().connect(recorder);


 
 
// .connect(recorder);

  Tone.Transport.scheduleRepeat(repeat, "8n");
  
  // Tone.Transport.start();
  

  function repeat(time) {
    step = index % 16;

    //console.log(step);
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );
    let clapInputs = document.querySelector(
      `.clap input:nth-child(${step + 1})`
    );
    let hihatInputs = document.querySelector(
      `.hihat input:nth-child(${step + 1})`
    );
    let tomInputs = document.querySelector(`.tom input:nth-child(${step + 1})`);
    let synthInputsa5 = document.querySelector(
      `.synth-a5 input:nth-child(${step + 1})`
    );
    let synthInputsb5 = document.querySelector(
      `.synth-b5 input:nth-child(${step + 1})`
    );
    let synthInputsc5 = document.querySelector(
      `.synth-c5 input:nth-child(${step + 1})`
    );
    let synthInputsd5 = document.querySelector(
      `.synth-d5 input:nth-child(${step + 1})`
    );
    let synthInputse5 = document.querySelector(
      `.synth-e5 input:nth-child(${step + 1})`
    );
    let synthInputsf5 = document.querySelector(
      `.synth-f5 input:nth-child(${step + 1})`
    );
    let synthInputsg5 = document.querySelector(
      `.synth-g5 input:nth-child(${step + 1})`
    );
    if (kickInputs.checked) {
      kick.start(time);
    }
    if (snareInputs.checked) {
      snare.start(time);
    }
    if (clapInputs.checked) {
      clap.start(time);
    }
    if (hihatInputs.checked) {
      hihat.start(time);
    }
    if (tomInputs.checked) {
      tom.start(time);
    }
    if (synthInputsa5.checked) {
      synthA5.triggerAttackRelease("A3", "8n", time);
    }
    if (synthInputsb5.checked) {
      synthB5.triggerAttackRelease("B3", "8n", time);
    }
    if (synthInputsc5.checked) {
      synthC5.triggerAttackRelease("C3", "8n", time);
    }
    if (synthInputsd5.checked) {
      synthD5.triggerAttackRelease("D3", "8n", time);
    }
    if (synthInputse5.checked) {
      synthE5.triggerAttackRelease("E3", "8n", time);
    }
    if (synthInputsf5.checked) {
      synthF5.triggerAttackRelease("F3", "8n", time);
    }
    if (synthInputsg5.checked) {
      synthG5.triggerAttackRelease("G3", "8n", time);
    }
    index++;
    
   
  }
  

}

function setTab(){
  
}

function start(){
  if (!started) {
    // Only exectued the first time the button is clicked
    // initializing Tone, setting the volume, and setting up the loop
    
    Tone.start();
    //Tone.getDestination().volume.rampTo(-10, 0.001)
  
    started = true;
  }
  
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
    index = 0;
    playing = false;
  } else {
    index = 0;
    Tone.Transport.start();
    playing = true;
  }
}

function stop(){
  Tone.Transport.stop();
  index = 0;
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

<!--
  <a href="./../"><img
    src="./img/cinetools.png"
    class="logo"
  /></a>
-->


<div class="text-center"><h5><a href="https://www.clipflare.com">Tape Deck</a></h5></div>


</header>


<main>
  
  
  <div class="wrap">
  <div class="screen">
    
  
  <div class="pads">
        <div class='drums mb-4'>
            <div>Kick</div>
            <div class='kick'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
            </div>
            <div>Snare</div>
            <div class='snare'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
            </div>
            <div>Clap</div>
            <div class='clap'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
            </div>
            <div>Hihat</div>
            <div class='hihat'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
            </div>
            <div>Tom</div>
            <div class='tom'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
                <input type='checkbox'>
            </div>
        </div> 
        
           
            <div class='synth'>
                <div>Synth a5</div>
                <div class='synth-a5'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                </div>
                <div>Synth b5</div>
                <div class='synth-b5'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                </div>
                <div>Synth c5</div>
                <div class='synth-c5'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                </div>
                <div>Synth d5</div>
                <div class='synth-d5'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                </div>
                <div>Synth e5</div>
                <div class='synth-e5'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                </div>
                <div>Synth f5</div>
                <div class='synth-f5'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                </div>
                <div>Synth g5</div>
                <div class='synth-g5'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                    <input type='checkbox'>
                </div>
                
            </div>
        </div>
 
    
    <!--
  <tone-step-sequencer rows="9"></tone-step-sequencer>
-->
  

    
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




