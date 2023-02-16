// https://beat-makerrr.glitch.me/app.js
// https://beat-makerrrr.glitch.me/app.js

/*  Most browsers require a user action to intiate AudioContext
This is a fix to allow tone to start on pageload*/
document.documentElement.addEventListener("mousedown", () => {
  if (Tone.context.state !== "running") Tone.context.resume();
});

let beats = [];
let notes = [];

/*
function setup() {
  createCanvas(400, 400);
}

function createBeat(rate) {

  let b = new Beat(200, 200, 10, rate); //Shape(x-axis, y-axis, radius, rate)
  beats.push(b);

}

function createNote() {
  let n = new Note();
  notes.push(n);
}
  */

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
  //Instrument sound files
  const kick = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fkick-electro01.wav?v=1614018257380"
  ).toDestination();
  const snare = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fsnare-lofi02.wav?v=1614018257350"
  ).toDestination();
  const clap = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fclap-808.wav?v=1614018257350"
  ).toDestination();
  const hihat = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Fhihat-808.wav?v=1614018257350"
  ).toDestination();
  const tom = new Tone.Player(
    "https://cdn.glitch.com/d76f6799-eb82-4320-a573-9366109360da%2Ftom-808.wav?v=1614018257451"
  ).toDestination();

  //Tone js' synth object
  const synthA5 = new Tone.Synth().toDestination();
  const synthB5 = new Tone.Synth().toDestination();
  const synthC5 = new Tone.Synth().toDestination();
  const synthD5 = new Tone.Synth().toDestination();
  const synthE5 = new Tone.Synth().toDestination();
  const synthF5 = new Tone.Synth().toDestination();
  const synthG5 = new Tone.Synth().toDestination();

  /*
  const recorder1 = new Tone.Recorder();
  kick.connect(recorder1);
  */

  Tone.Transport.scheduleRepeat(repeat, "8n");
  // Tone.Transport.start();
  let index = 0;

  function repeat(time) {
    let step = index % 16;

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

sequencer();

/*
function draw() {
  background(0);
  for (let i = 0; i < beats.length; i++) {
    beats[i].move();
    beats[i].display();
  }
  for (let i = 0; i < notes.length; i++) {
    notes[i].move();
    notes[i].display();
  }
}

class Beat {
  constructor(x, y, r, rate) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rate = rate;
  }

  move() {
    this.r = this.r + this.rate;
  }

  display() {
    strokeWeight(2);
    stroke(255, 255, 255);
    fill(0, 0, 0, 0);
    ellipse(this.x, this.y, this.r * 2);
  }
}

class Note {
  constructor() {
    this.x = random(0, 400);
    this.y = random(0, 400);
    this.r = random(5, 50);

    this.alpha = 255;
  }

  move() {
    this.alpha = this.alpha - 5;
  }

  display() {
    let setColor = color(255, 255, 255);
    setColor.setAlpha(this.alpha);
    noStroke();
    fill(setColor);
    ellipse(this.x, this.y, this.r * 2);
  }
}
*/
