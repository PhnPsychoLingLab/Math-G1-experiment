/*********** 
 * G1 *
 ***********/


// store info about the experiment session:
let expName = 'g1';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(helloRoutineBegin());
flowScheduler.add(helloRoutineEachFrame());
flowScheduler.add(helloRoutineEnd());
flowScheduler.add(exp_introRoutineBegin());
flowScheduler.add(exp_introRoutineEachFrame());
flowScheduler.add(exp_introRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'lib/page/homepage.png', 'path': 'lib/page/homepage.png'},
    {'name': 'lib/page/G1_exp1_intro.png', 'path': 'lib/page/G1_exp1_intro.png'},
    {'name': 'lib/exp1_pre/G1_exp1_pre3.png', 'path': 'lib/exp1_pre/G1_exp1_pre3.png'},
    {'name': 'lib/exp1_pre/G1_exp1_pre2.png', 'path': 'lib/exp1_pre/G1_exp1_pre2.png'},
    {'name': 'lib/exp1_pre/G1_exp1_pre1.png', 'path': 'lib/exp1_pre/G1_exp1_pre1.png'},
    {'name': 'lib/exp2_pre/G1_exp2_pre3.png', 'path': 'lib/exp2_pre/G1_exp2_pre3.png'},
    {'name': 'lib/exp2_pre/G1_exp2_pre2.png', 'path': 'lib/exp2_pre/G1_exp2_pre2.png'},
    {'name': 'lib/exp2_pre/G1_exp2_pre1.png', 'path': 'lib/exp2_pre/G1_exp2_pre1.png'},
    {'name': 'lib/exp1_main/G1_exp1_main15.png', 'path': 'lib/exp1_main/G1_exp1_main15.png'},
    {'name': 'lib/exp1_main/G1_exp1_main14.png', 'path': 'lib/exp1_main/G1_exp1_main14.png'},
    {'name': 'lib/exp1_main/G1_exp1_main13.png', 'path': 'lib/exp1_main/G1_exp1_main13.png'},
    {'name': 'lib/exp1_main/G1_exp1_main12.png', 'path': 'lib/exp1_main/G1_exp1_main12.png'},
    {'name': 'lib/exp1_main/G1_exp1_main11.png', 'path': 'lib/exp1_main/G1_exp1_main11.png'},
    {'name': 'lib/exp1_main/G1_exp1_main10.png', 'path': 'lib/exp1_main/G1_exp1_main10.png'},
    {'name': 'lib/exp1_main/G1_exp1_main9.png', 'path': 'lib/exp1_main/G1_exp1_main9.png'},
    {'name': 'lib/exp1_main/G1_exp1_main8.png', 'path': 'lib/exp1_main/G1_exp1_main8.png'},
    {'name': 'lib/exp1_main/G1_exp1_main7.png', 'path': 'lib/exp1_main/G1_exp1_main7.png'},
    {'name': 'lib/exp1_main/G1_exp1_main6.png', 'path': 'lib/exp1_main/G1_exp1_main6.png'},
    {'name': 'lib/exp1_main/G1_exp1_main5.png', 'path': 'lib/exp1_main/G1_exp1_main5.png'},
    {'name': 'lib/exp1_main/G1_exp1_main4.png', 'path': 'lib/exp1_main/G1_exp1_main4.png'},
    {'name': 'lib/exp1_main/G1_exp1_main3.png', 'path': 'lib/exp1_main/G1_exp1_main3.png'},
    {'name': 'lib/exp1_main/G1_exp1_main2.png', 'path': 'lib/exp1_main/G1_exp1_main2.png'},
    {'name': 'lib/exp1_main/G1_exp1_main1.png', 'path': 'lib/exp1_main/G1_exp1_main1.png'},
    {'name': 'lib/exp2_main/G1_exp2_main15.png', 'path': 'lib/exp2_main/G1_exp2_main15.png'},
    {'name': 'lib/exp2_main/G1_exp2_main14.png', 'path': 'lib/exp2_main/G1_exp2_main14.png'},
    {'name': 'lib/exp2_main/G1_exp2_main13.png', 'path': 'lib/exp2_main/G1_exp2_main13.png'},
    {'name': 'lib/exp2_main/G1_exp2_main12.png', 'path': 'lib/exp2_main/G1_exp2_main12.png'},
    {'name': 'lib/exp2_main/G1_exp2_main11.png', 'path': 'lib/exp2_main/G1_exp2_main11.png'},
    {'name': 'lib/exp2_main/G1_exp2_main10.png', 'path': 'lib/exp2_main/G1_exp2_main10.png'},
    {'name': 'lib/exp2_main/G1_exp2_main9.png', 'path': 'lib/exp2_main/G1_exp2_main9.png'},
    {'name': 'lib/exp2_main/G1_exp2_main8.png', 'path': 'lib/exp2_main/G1_exp2_main8.png'},
    {'name': 'lib/exp2_main/G1_exp2_main7.png', 'path': 'lib/exp2_main/G1_exp2_main7.png'},
    {'name': 'lib/exp2_main/G1_exp2_main6.png', 'path': 'lib/exp2_main/G1_exp2_main6.png'},
    {'name': 'lib/exp2_main/G1_exp2_main5.png', 'path': 'lib/exp2_main/G1_exp2_main5.png'},
    {'name': 'lib/exp2_main/G1_exp2_main4.png', 'path': 'lib/exp2_main/G1_exp2_main4.png'},
    {'name': 'lib/exp2_main/G1_exp2_main3.png', 'path': 'lib/exp2_main/G1_exp2_main3.png'},
    {'name': 'lib/exp2_main/G1_exp2_main2.png', 'path': 'lib/exp2_main/G1_exp2_main2.png'},
    {'name': 'lib/exp2_main/G1_exp2_main1.png', 'path': 'lib/exp2_main/G1_exp2_main1.png'},
    {'name': 'lib/page/G1_exp3_intro.png', 'path': 'lib/page/G1_exp3_intro.png'},
    {'name': 'lib/page/pre_end.png', 'path': 'lib/page/pre_end.png'},
    {'name': 'lib/page/main_end.png', 'path': 'lib/page/main_end.png'},
    {'name': 'lib/page/G1_exp2_intro.png', 'path': 'lib/page/G1_exp2_intro.png'},
    {'name': 'lib/page/outtro.png', 'path': 'lib/page/outtro.png'},
    {'name': 'lib/page/G1_exp1_intro.png', 'path': 'lib/page/G1_exp1_intro.png'},
    {'name': 'lib/page/nextQ.png', 'path': 'lib/page/nextQ.png'},
    {'name': 'lib/page/homepage.png', 'path': 'lib/page/homepage.png'},
    {'name': 'lib/exp3_pre/G1_exp3_2.png', 'path': 'lib/exp3_pre/G1_exp3_2.png'},
    {'name': 'lib/exp3_main/G1_exp3_15.png', 'path': 'lib/exp3_main/G1_exp3_15.png'},
    {'name': 'lib/exp3_main/G1_exp3_13.png', 'path': 'lib/exp3_main/G1_exp3_13.png'},
    {'name': 'lib/exp3_main/G1_exp3_12.png', 'path': 'lib/exp3_main/G1_exp3_12.png'},
    {'name': 'lib/exp3_main/G1_exp3_11.png', 'path': 'lib/exp3_main/G1_exp3_11.png'},
    {'name': 'lib/exp3_main/G1_exp3_10.png', 'path': 'lib/exp3_main/G1_exp3_10.png'},
    {'name': 'lib/exp3_main/G1_exp3_9.png', 'path': 'lib/exp3_main/G1_exp3_9.png'},
    {'name': 'lib/exp3_main/G1_exp3_8.png', 'path': 'lib/exp3_main/G1_exp3_8.png'},
    {'name': 'lib/exp3_main/G1_exp3_7.png', 'path': 'lib/exp3_main/G1_exp3_7.png'},
    {'name': 'lib/exp3_main/G1_exp3_6.png', 'path': 'lib/exp3_main/G1_exp3_6.png'},
    {'name': 'lib/exp3_main/G1_exp3_5.png', 'path': 'lib/exp3_main/G1_exp3_5.png'},
    {'name': 'lib/exp3_main/G1_exp3_4.png', 'path': 'lib/exp3_main/G1_exp3_4.png'},
    {'name': 'lib/exp3_main/G1_exp3_3.png', 'path': 'lib/exp3_main/G1_exp3_3.png'},
    {'name': 'lib/exp3_main/G1_exp3_2.png', 'path': 'lib/exp3_main/G1_exp3_2.png'},
    {'name': 'lib/exp3_main/G1_exp3_1.png', 'path': 'lib/exp3_main/G1_exp3_1.png'},
    {'name': 'lib/psychojs-2024.2.4.js.map', 'path': 'lib/psychojs-2024.2.4.js.map'},
    {'name': 'lib/psychojs-2024.2.4.js.LEGAL.txt', 'path': 'lib/psychojs-2024.2.4.js.LEGAL.txt'},
    {'name': 'lib/psychojs-2024.2.4.iife.js.map', 'path': 'lib/psychojs-2024.2.4.iife.js.map'},
    {'name': 'lib/psychojs-2024.2.4.iife.js', 'path': 'lib/psychojs-2024.2.4.iife.js'},
    {'name': 'lib/psychojs-2024.2.4.js', 'path': 'lib/psychojs-2024.2.4.js'},
    {'name': 'lib/psychojs-2024.2.4.css', 'path': 'lib/psychojs-2024.2.4.css'},
    {'name': 'lib/pre.csv', 'path': 'lib/pre.csv'},
    {'name': 'lib/main.csv', 'path': 'lib/main.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var helloClock;
var hello_bg;
var hello_next_page;
var exp_introClock;
var exp1_intro_bg;
var exp1_intro_next_page;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "hello"
  helloClock = new util.Clock();
  hello_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'hello_bg', units : undefined, 
    image : 'lib/page/homepage.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  hello_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hello_next_page',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.22)],
    letterHeight: 0.05,
    size: [0.4, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  hello_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp_intro"
  exp_introClock = new util.Clock();
  exp1_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_intro_bg', units : undefined, 
    image : 'lib/page/G1_exp1_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp1_intro_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_intro_next_page',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.27)],
    letterHeight: 0.05,
    size: [0.55, 0.08],
    ori: 0.0
    ,
    depth: -1
  });
  exp1_intro_next_page.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var helloMaxDurationReached;
var mic_perms_text_string;
var helloMaxDuration;
var helloComponents;
function helloRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hello' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    helloClock.reset();
    routineTimer.reset();
    helloMaxDurationReached = false;
    // update component parameters for each repeat
    mic_perms_text_string = "Please grant permission to access your microphone if asked.\n\nThen, press space to continue.";
    
    // If browser supports getUserMedia(), request 
    // microphone permissions
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia supported.");
      navigator.mediaDevices
        .getUserMedia(
          // constraints - audio and video needed for this app
          {
            audio: true,
            video: true,  // 改為 true 以請求攝影機權限
          }
        )
    
        // Success callback
        .then((stream) => {
            mic_perms_text_string = "Please grant permission to access your microphone and camera if asked.\n\nThen, press space to continue.";
            console.log("ACTIVE?");
            console.log(stream.active);
                if (stream.active) {
                    continueRoutine = false;
                }
            })
    
        // Error callback
        .catch((err) => {
          console.error(`The following getUserMedia error occurred: ${err}`);
          mic_perms_text_string = "Microphone access has been denied. Please refresh the page and grant permission to access your microphone.";
        });
    } else {
      console.log("getUserMedia not supported on your browser!");
      mic_perms_text_string = "Sorry, it seems your browser isn't supported.  Please try a different browser.";
    }
    
    // reset hello_next_page to account for continued clicks & clear times on/off
    hello_next_page.reset()
    psychoJS.experiment.addData('hello.started', globalClock.getTime());
    helloMaxDuration = null
    // keep track of which components have finished
    helloComponents = [];
    helloComponents.push(hello_bg);
    helloComponents.push(hello_next_page);
    
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function helloRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hello' ---
    // get current time
    t = helloClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hello_bg* updates
    if (t >= 0.0 && hello_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_bg.tStart = t;  // (not accounting for frame time here)
      hello_bg.frameNStart = frameN;  // exact frame index
      
      hello_bg.setAutoDraw(true);
    }
    
    
    // *hello_next_page* updates
    if (t >= 0 && hello_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_next_page.tStart = t;  // (not accounting for frame time here)
      hello_next_page.frameNStart = frameN;  // exact frame index
      
      hello_next_page.setAutoDraw(true);
    }
    
    if (hello_next_page.status === PsychoJS.Status.STARTED) {
      // check whether hello_next_page has been pressed
      if (hello_next_page.isClicked) {
        if (!hello_next_page.wasClicked) {
          // store time of first click
          hello_next_page.timesOn.push(hello_next_page.clock.getTime());
          // store time clicked until
          hello_next_page.timesOff.push(hello_next_page.clock.getTime());
        } else {
          // update time clicked until;
          hello_next_page.timesOff[hello_next_page.timesOff.length - 1] = hello_next_page.clock.getTime();
        }
        if (!hello_next_page.wasClicked) {
          // end routine when hello_next_page is clicked
          continueRoutine = false;
          
        }
        // if hello_next_page is still clicked next frame, it is not a new click
        hello_next_page.wasClicked = true;
      } else {
        // if hello_next_page is clicked next frame, it is a new click
        hello_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hello_next_page hasn't started / has finished
      hello_next_page.clock.reset();
      // if hello_next_page is clicked next frame, it is a new click
      hello_next_page.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function helloRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hello' ---
    helloComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('hello.stopped', globalClock.getTime());
    psychoJS.experiment.addData('hello_next_page.numClicks', hello_next_page.numClicks);
    psychoJS.experiment.addData('hello_next_page.timesOn', hello_next_page.timesOn);
    psychoJS.experiment.addData('hello_next_page.timesOff', hello_next_page.timesOff);
    // the Routine "hello" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_introMaxDurationReached;
var exp_introMaxDuration;
var exp_introComponents;
function exp_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp_introClock.reset();
    routineTimer.reset();
    exp_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_intro_next_page to account for continued clicks & clear times on/off
    exp1_intro_next_page.reset()
    psychoJS.experiment.addData('exp_intro.started', globalClock.getTime());
    exp_introMaxDuration = null
    // keep track of which components have finished
    exp_introComponents = [];
    exp_introComponents.push(exp1_intro_bg);
    exp_introComponents.push(exp1_intro_next_page);
    
    exp_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_intro' ---
    // get current time
    t = exp_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_intro_bg* updates
    if (t >= 0.0 && exp1_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp1_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp1_intro_bg.setAutoDraw(true);
    }
    
    
    // *exp1_intro_next_page* updates
    if (t >= 0 && exp1_intro_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_intro_next_page.tStart = t;  // (not accounting for frame time here)
      exp1_intro_next_page.frameNStart = frameN;  // exact frame index
      
      exp1_intro_next_page.setAutoDraw(true);
    }
    
    if (exp1_intro_next_page.status === PsychoJS.Status.STARTED) {
      // check whether exp1_intro_next_page has been pressed
      if (exp1_intro_next_page.isClicked) {
        if (!exp1_intro_next_page.wasClicked) {
          // store time of first click
          exp1_intro_next_page.timesOn.push(exp1_intro_next_page.clock.getTime());
          // store time clicked until
          exp1_intro_next_page.timesOff.push(exp1_intro_next_page.clock.getTime());
        } else {
          // update time clicked until;
          exp1_intro_next_page.timesOff[exp1_intro_next_page.timesOff.length - 1] = exp1_intro_next_page.clock.getTime();
        }
        if (!exp1_intro_next_page.wasClicked) {
          // end routine when exp1_intro_next_page is clicked
          continueRoutine = false;
          
        }
        // if exp1_intro_next_page is still clicked next frame, it is not a new click
        exp1_intro_next_page.wasClicked = true;
      } else {
        // if exp1_intro_next_page is clicked next frame, it is a new click
        exp1_intro_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_intro_next_page hasn't started / has finished
      exp1_intro_next_page.clock.reset();
      // if exp1_intro_next_page is clicked next frame, it is a new click
      exp1_intro_next_page.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exp_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_intro' ---
    exp_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_intro_next_page.numClicks', exp1_intro_next_page.numClicks);
    psychoJS.experiment.addData('exp1_intro_next_page.timesOn', exp1_intro_next_page.timesOn);
    psychoJS.experiment.addData('exp1_intro_next_page.timesOff', exp1_intro_next_page.timesOff);
    // the Routine "exp_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
