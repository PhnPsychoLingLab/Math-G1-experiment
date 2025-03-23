/********************* 
 * Math-G1-Exp1 *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Math-G1-exp1';  // from the Builder filename that created this script
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
  fullscr: false,
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
flowScheduler.add(loadingRoutineBegin());
flowScheduler.add(loadingRoutineEachFrame());
flowScheduler.add(loadingRoutineEnd());
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
const exp1_pre_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp1_pre_trialsLoopBegin(exp1_pre_trialsLoopScheduler));
flowScheduler.add(exp1_pre_trialsLoopScheduler);
flowScheduler.add(exp1_pre_trialsLoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'exp1_pre.csv', 'path': 'exp1_pre.csv'},
    {'name': './exp1_pre/G1_exp1_pre1.png', 'path': './exp1_pre/G1_exp1_pre1.png'},
    {'name': './exp1_pre/G1_exp1_pre2.png', 'path': './exp1_pre/G1_exp1_pre2.png'},
    {'name': './exp1_pre/G1_exp1_pre3.png', 'path': './exp1_pre/G1_exp1_pre3.png'},
    {'name': 'welcome.png', 'path': 'welcome.png'},
    {'name': 'G1_exp1_intro.png', 'path': 'G1_exp1_intro.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'nextQ.png', 'path': 'nextQ.png'},
    {'name': 'G1_main_end.png', 'path': 'G1_main_end.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


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


var loadingClock;
var welcomeClock;
var hello_np;
var welcome_bg;
var introClock;
var exp1_intro_np;
var exp1_intro_bg;
var exp1_preClock;
var exp1_pre_a1;
var exp1_pre_a2;
var exp1_pre_a3;
var exp1_pre_a4;
var exp1_pre_bg;
var nextQClock;
var nextQ_bg;
var endClock;
var end_bg;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "loading"
  loadingClock = new util.Clock();
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  hello_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hello_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.22)],
    letterHeight: 0.05,
    size: [0.4, 0.1],
    ori: 0.0
    ,
    depth: 0
  });
  hello_np.clock = new util.Clock();
  
  welcome_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'welcome_bg', units : undefined, 
    image : 'welcome.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  exp1_intro_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_intro_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.27)],
    letterHeight: 0.05,
    size: [0.55, 0.08],
    ori: 0.0
    ,
    depth: 0
  });
  exp1_intro_np.clock = new util.Clock();
  
  exp1_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_intro_bg', units : undefined, 
    image : 'G1_exp1_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp1_pre"
  exp1_preClock = new util.Clock();
  exp1_pre_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a1',
    text: '""',
    fillColor: [0.8824, 0.9451, 1.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.38), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -1
  });
  exp1_pre_a1.clock = new util.Clock();
  
  exp1_pre_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a2',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.12), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -2
  });
  exp1_pre_a2.clock = new util.Clock();
  
  exp1_pre_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a3',
    text: '""',
    fillColor: [1.0, 0.7882, 0.5373],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0.14, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -3
  });
  exp1_pre_a3.clock = new util.Clock();
  
  exp1_pre_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a4',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [(- 1.0), 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.4, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -4
  });
  exp1_pre_a4.clock = new util.Clock();
  
  exp1_pre_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_pre_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "nextQ"
  nextQClock = new util.Clock();
  nextQ_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextQ_bg', units : undefined, 
    image : 'nextQ.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'end_bg', units : undefined, 
    image : 'G1_main_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var loadingMaxDurationReached;
var loadingMaxDuration;
var loadingComponents;
function loadingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loading' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    loadingClock.reset();
    routineTimer.reset();
    loadingMaxDurationReached = false;
    // update component parameters for each repeat
    console.log("檢查麥克風權限狀態...");
    
    // 全局變數用於存儲音訊數據
    window.audioChunks = [];
    window.mediaRecorder = null;
    
    // 首先檢查權限狀態
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'microphone' })
        .then(permissionStatus => {
          console.log("麥克風權限狀態:", permissionStatus.state);
          
          // 根據權限狀態執行不同的操作
          if (permissionStatus.state === 'granted') {
            console.log("麥克風權限已預先授予");
            // 已有權限，直接獲取麥克風流
            getAndSetupMicrophone();
          } else {
            console.log("需要請求麥克風權限");
            // 需要請求權限
            requestMicrophoneAccess();
          }
          
          // 監聽權限變化
          permissionStatus.onchange = () => {
            console.log("麥克風權限狀態變更為:", permissionStatus.state);
          };
        })
        .catch(error => {
          console.error("檢查權限狀態失敗:", error);
          // 無法檢查權限狀態，直接嘗試請求
          requestMicrophoneAccess();
        });
    } else {
      console.log("瀏覽器不支持 permissions API，直接請求麥克風");
      // 無法檢查權限狀態，直接嘗試請求
      requestMicrophoneAccess();
    }
    
    // 獲取並設置麥克風
    function getAndSetupMicrophone() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(stream => {
            console.log("成功獲取麥克風流");
            console.log("麥克風串流軌道數量:", stream.getAudioTracks().length);
            console.log("麥克風是否靜音:", stream.getAudioTracks()[0].muted);
            console.log("麥克風狀態:", stream.getAudioTracks()[0].enabled);
            
            window.microphoneStream = stream;
            
            // 可以繼續進行實驗
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          })
          .catch(error => {
            console.error("獲取麥克風流失敗:", error);
            // 即使失敗也繼續實驗，但可能需要提示用戶
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          });
      } else {
        console.error("瀏覽器不支持 getUserMedia");
        // 不支持也繼續實驗，但可能需要提示用戶
        setTimeout(() => {
          continueRoutine = false;
        }, 1000);
      }
    }
    
    // 請求麥克風權限
    function requestMicrophoneAccess() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(stream => {
            console.log("麥克風權限已授予");
            console.log("麥克風串流軌道數量:", stream.getAudioTracks().length);
            console.log("麥克風是否靜音:", stream.getAudioTracks()[0].muted);
            console.log("麥克風狀態:", stream.getAudioTracks()[0].enabled);
            
            window.microphoneStream = stream;
            
            // 成功獲取權限後，繼續實驗
            setTimeout(() => {
              continueRoutine = false;
            }, 2000); // 給用戶更多時間看到權限已授予
          })
          .catch(error => {
            console.error("麥克風權限錯誤:", error);
            console.error("錯誤名稱:", error.name);
            console.error("錯誤訊息:", error.message);
            
            // 權限被拒絕，也繼續實驗（可能需要顯示提示）
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          });
      } else {
        console.error("瀏覽器不支持getUserMedia");
        // 不支持getUserMedia，繼續實驗
        setTimeout(() => {
          continueRoutine = false;
        }, 1000);
      }
    }
    psychoJS.experiment.addData('loading.started', globalClock.getTime());
    loadingMaxDuration = null
    // keep track of which components have finished
    loadingComponents = [];
    
    for (const thisComponent of loadingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function loadingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loading' ---
    // get current time
    t = loadingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of loadingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loadingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loading' ---
    for (const thisComponent of loadingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('loading.stopped', globalClock.getTime());
    // the Routine "loading" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcomeMaxDurationReached;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset hello_np to account for continued clicks & clear times on/off
    hello_np.reset()
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(hello_np);
    welcomeComponents.push(welcome_bg);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hello_np* updates
    if (t >= 0 && hello_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_np.tStart = t;  // (not accounting for frame time here)
      hello_np.frameNStart = frameN;  // exact frame index
      
      hello_np.setAutoDraw(true);
    }
    
    if (hello_np.status === PsychoJS.Status.STARTED) {
      // check whether hello_np has been pressed
      if (hello_np.isClicked) {
        if (!hello_np.wasClicked) {
          // store time of first click
          hello_np.timesOn.push(hello_np.clock.getTime());
          // store time clicked until
          hello_np.timesOff.push(hello_np.clock.getTime());
        } else {
          // update time clicked until;
          hello_np.timesOff[hello_np.timesOff.length - 1] = hello_np.clock.getTime();
        }
        if (!hello_np.wasClicked) {
          // end routine when hello_np is clicked
          continueRoutine = false;
          
        }
        // if hello_np is still clicked next frame, it is not a new click
        hello_np.wasClicked = true;
      } else {
        // if hello_np is clicked next frame, it is a new click
        hello_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hello_np hasn't started / has finished
      hello_np.clock.reset();
      // if hello_np is clicked next frame, it is a new click
      hello_np.wasClicked = false;
    }
    
    // *welcome_bg* updates
    if (t >= 0 && welcome_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_bg.tStart = t;  // (not accounting for frame time here)
      welcome_bg.frameNStart = frameN;  // exact frame index
      
      welcome_bg.setAutoDraw(true);
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
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    psychoJS.experiment.addData('hello_np.numClicks', hello_np.numClicks);
    psychoJS.experiment.addData('hello_np.timesOn', hello_np.timesOn);
    psychoJS.experiment.addData('hello_np.timesOff', hello_np.timesOff);
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var introMaxDurationReached;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_intro_np to account for continued clicks & clear times on/off
    exp1_intro_np.reset()
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(exp1_intro_np);
    introComponents.push(exp1_intro_bg);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_intro_np* updates
    if (t >= 0 && exp1_intro_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_intro_np.tStart = t;  // (not accounting for frame time here)
      exp1_intro_np.frameNStart = frameN;  // exact frame index
      
      exp1_intro_np.setAutoDraw(true);
    }
    
    if (exp1_intro_np.status === PsychoJS.Status.STARTED) {
      // check whether exp1_intro_np has been pressed
      if (exp1_intro_np.isClicked) {
        if (!exp1_intro_np.wasClicked) {
          // store time of first click
          exp1_intro_np.timesOn.push(exp1_intro_np.clock.getTime());
          // store time clicked until
          exp1_intro_np.timesOff.push(exp1_intro_np.clock.getTime());
        } else {
          // update time clicked until;
          exp1_intro_np.timesOff[exp1_intro_np.timesOff.length - 1] = exp1_intro_np.clock.getTime();
        }
        if (!exp1_intro_np.wasClicked) {
          // end routine when exp1_intro_np is clicked
          continueRoutine = false;
          
        }
        // if exp1_intro_np is still clicked next frame, it is not a new click
        exp1_intro_np.wasClicked = true;
      } else {
        // if exp1_intro_np is clicked next frame, it is a new click
        exp1_intro_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_intro_np hasn't started / has finished
      exp1_intro_np.clock.reset();
      // if exp1_intro_np is clicked next frame, it is a new click
      exp1_intro_np.wasClicked = false;
    }
    
    // *exp1_intro_bg* updates
    if (t >= 0.0 && exp1_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp1_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp1_intro_bg.setAutoDraw(true);
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
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_intro_np.numClicks', exp1_intro_np.numClicks);
    psychoJS.experiment.addData('exp1_intro_np.timesOn', exp1_intro_np.timesOn);
    psychoJS.experiment.addData('exp1_intro_np.timesOff', exp1_intro_np.timesOff);
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_pre_trials;
function exp1_pre_trialsLoopBegin(exp1_pre_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp1_pre_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'exp1_pre.csv',
      seed: undefined, name: 'exp1_pre_trials'
    });
    psychoJS.experiment.addLoop(exp1_pre_trials); // add the loop to the experiment
    currentLoop = exp1_pre_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp1_pre_trial of exp1_pre_trials) {
      snapshot = exp1_pre_trials.getSnapshot();
      exp1_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_preRoutineBegin(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_preRoutineEachFrame());
      exp1_pre_trialsLoopScheduler.add(exp1_preRoutineEnd(snapshot));
      exp1_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp1_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp1_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_pre_trialsLoopEndIteration(exp1_pre_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp1_pre_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp1_pre_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp1_pre_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp1_preMaxDurationReached;
var exp1_preMaxDuration;
var exp1_preComponents;
function exp1_preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_preClock.reset();
    routineTimer.reset();
    exp1_preMaxDurationReached = false;
    // update component parameters for each repeat
    // 記錄開始時間
    window.recordingStartTime = Date.now();
    // 清空之前的錄音數據
    window.audioChunks = [];
    
    // 處理 AudioContext 需要用戶交互的問題
    function resumeAudioContext() {
      if (window.microphoneStream) {
        // 嘗試恢復所有音訊軌道
        window.microphoneStream.getAudioTracks().forEach(track => {
          if (track.enabled === false) {
            track.enabled = true;
            console.log("已啟用音訊軌道");
          }
        });
      }
    }
    
    // 直接嘗試恢復 AudioContext
    resumeAudioContext();
    
    // 如果有麥克風權限，創建新的MediaRecorder
    if (window.microphoneStream) {
      try {
        // 確保音訊軌道已啟用
        resumeAudioContext();
        
        // 檢查瀏覽器支持的 MIME 類型
        const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') 
          ? 'audio/webm;codecs=opus' 
          : 'audio/webm';
        
        // 創建 MediaRecorder 實例
        window.mediaRecorder = new MediaRecorder(window.microphoneStream, {
          mimeType: mimeType,
          audioBitsPerSecond: 128000
        });
        
        console.log("使用格式:", mimeType);
        console.log("比特率設置:", 128000);
        
        // 設置數據可用時的回調
        window.mediaRecorder.ondataavailable = function(e) {
          if (e.data.size > 0) {
            window.audioChunks.push(e.data);
            console.log("收到音訊數據塊，大小:", e.data.size);
          }
        };
        
        // 開始錄音並每秒收集一次數據
        window.mediaRecorder.start(1000);
        console.log("開始錄音");
      } catch (error) {
        console.error("創建MediaRecorder時出錯:", error);
        // 即使出錯也繼續實驗
        setTimeout(() => continueRoutine = false, 1000);
      }
    } else {
      console.error("無法取得麥克風串流");
      // 沒有麥克風也繼續實驗
      setTimeout(() => continueRoutine = false, 1000);
    }
    
    // 確保我們有一個能正常工作的計時器
    // 5秒後無論如何都繼續
    setTimeout(function() {
      console.log("5秒時間已到");
      
      // 嘗試停止錄音
      try {
        if (window.mediaRecorder && window.mediaRecorder.state !== 'inactive') {
          window.mediaRecorder.stop();
          console.log("錄音已停止");
        }
      } catch (e) {
        console.error("停止錄音時出錯:", e);
      }
      
      // 記錄總錄音時間
      window.recordingDuration = Date.now() - window.recordingStartTime;
      console.log("錄音總時長:", window.recordingDuration, "ms");
      
      // 一秒後繼續實驗
      setTimeout(() => {
        console.log("繼續到下一個階段");
        continueRoutine = false;
      }, 1000);
    }, 5000);
    // reset exp1_pre_a1 to account for continued clicks & clear times on/off
    exp1_pre_a1.reset()
    // reset exp1_pre_a2 to account for continued clicks & clear times on/off
    exp1_pre_a2.reset()
    // reset exp1_pre_a3 to account for continued clicks & clear times on/off
    exp1_pre_a3.reset()
    // reset exp1_pre_a4 to account for continued clicks & clear times on/off
    exp1_pre_a4.reset()
    exp1_pre_bg.setImage(exp1_pre_stimuli);
    psychoJS.experiment.addData('exp1_pre.started', globalClock.getTime());
    exp1_preMaxDuration = null
    // keep track of which components have finished
    exp1_preComponents = [];
    exp1_preComponents.push(exp1_pre_a1);
    exp1_preComponents.push(exp1_pre_a2);
    exp1_preComponents.push(exp1_pre_a3);
    exp1_preComponents.push(exp1_pre_a4);
    exp1_preComponents.push(exp1_pre_bg);
    
    for (const thisComponent of exp1_preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_pre' ---
    // get current time
    t = exp1_preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_pre_a1* updates
    if (t >= 0 && exp1_pre_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a1.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a1.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a1.setAutoDraw(true);
    }
    
    if (exp1_pre_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a1 has been pressed
      if (exp1_pre_a1.isClicked) {
        if (!exp1_pre_a1.wasClicked) {
          // store time of first click
          exp1_pre_a1.timesOn.push(exp1_pre_a1.clock.getTime());
          // store time clicked until
          exp1_pre_a1.timesOff.push(exp1_pre_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a1.timesOff[exp1_pre_a1.timesOff.length - 1] = exp1_pre_a1.clock.getTime();
        }
        if (!exp1_pre_a1.wasClicked) {
          // end routine when exp1_pre_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a1 is still clicked next frame, it is not a new click
        exp1_pre_a1.wasClicked = true;
      } else {
        // if exp1_pre_a1 is clicked next frame, it is a new click
        exp1_pre_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a1 hasn't started / has finished
      exp1_pre_a1.clock.reset();
      // if exp1_pre_a1 is clicked next frame, it is a new click
      exp1_pre_a1.wasClicked = false;
    }
    
    // *exp1_pre_a2* updates
    if (t >= 0 && exp1_pre_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a2.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a2.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a2.setAutoDraw(true);
    }
    
    if (exp1_pre_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a2 has been pressed
      if (exp1_pre_a2.isClicked) {
        if (!exp1_pre_a2.wasClicked) {
          // store time of first click
          exp1_pre_a2.timesOn.push(exp1_pre_a2.clock.getTime());
          // store time clicked until
          exp1_pre_a2.timesOff.push(exp1_pre_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a2.timesOff[exp1_pre_a2.timesOff.length - 1] = exp1_pre_a2.clock.getTime();
        }
        if (!exp1_pre_a2.wasClicked) {
          // end routine when exp1_pre_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a2 is still clicked next frame, it is not a new click
        exp1_pre_a2.wasClicked = true;
      } else {
        // if exp1_pre_a2 is clicked next frame, it is a new click
        exp1_pre_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a2 hasn't started / has finished
      exp1_pre_a2.clock.reset();
      // if exp1_pre_a2 is clicked next frame, it is a new click
      exp1_pre_a2.wasClicked = false;
    }
    
    // *exp1_pre_a3* updates
    if (t >= 0 && exp1_pre_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a3.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a3.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a3.setAutoDraw(true);
    }
    
    if (exp1_pre_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a3 has been pressed
      if (exp1_pre_a3.isClicked) {
        if (!exp1_pre_a3.wasClicked) {
          // store time of first click
          exp1_pre_a3.timesOn.push(exp1_pre_a3.clock.getTime());
          // store time clicked until
          exp1_pre_a3.timesOff.push(exp1_pre_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a3.timesOff[exp1_pre_a3.timesOff.length - 1] = exp1_pre_a3.clock.getTime();
        }
        if (!exp1_pre_a3.wasClicked) {
          // end routine when exp1_pre_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a3 is still clicked next frame, it is not a new click
        exp1_pre_a3.wasClicked = true;
      } else {
        // if exp1_pre_a3 is clicked next frame, it is a new click
        exp1_pre_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a3 hasn't started / has finished
      exp1_pre_a3.clock.reset();
      // if exp1_pre_a3 is clicked next frame, it is a new click
      exp1_pre_a3.wasClicked = false;
    }
    
    // *exp1_pre_a4* updates
    if (t >= 0 && exp1_pre_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a4.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a4.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a4.setAutoDraw(true);
    }
    
    if (exp1_pre_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a4 has been pressed
      if (exp1_pre_a4.isClicked) {
        if (!exp1_pre_a4.wasClicked) {
          // store time of first click
          exp1_pre_a4.timesOn.push(exp1_pre_a4.clock.getTime());
          // store time clicked until
          exp1_pre_a4.timesOff.push(exp1_pre_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a4.timesOff[exp1_pre_a4.timesOff.length - 1] = exp1_pre_a4.clock.getTime();
        }
        if (!exp1_pre_a4.wasClicked) {
          // end routine when exp1_pre_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a4 is still clicked next frame, it is not a new click
        exp1_pre_a4.wasClicked = true;
      } else {
        // if exp1_pre_a4 is clicked next frame, it is a new click
        exp1_pre_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a4 hasn't started / has finished
      exp1_pre_a4.clock.reset();
      // if exp1_pre_a4 is clicked next frame, it is a new click
      exp1_pre_a4.wasClicked = false;
    }
    
    // *exp1_pre_bg* updates
    if (t >= 0.0 && exp1_pre_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_bg.tStart = t;  // (not accounting for frame time here)
      exp1_pre_bg.frameNStart = frameN;  // exact frame index
      
      exp1_pre_bg.setAutoDraw(true);
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
    for (const thisComponent of exp1_preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_pre' ---
    for (const thisComponent of exp1_preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp1_pre.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_pre_a1.numClicks', exp1_pre_a1.numClicks);
    psychoJS.experiment.addData('exp1_pre_a1.timesOn', exp1_pre_a1.timesOn);
    psychoJS.experiment.addData('exp1_pre_a1.timesOff', exp1_pre_a1.timesOff);
    psychoJS.experiment.addData('exp1_pre_a2.numClicks', exp1_pre_a2.numClicks);
    psychoJS.experiment.addData('exp1_pre_a2.timesOn', exp1_pre_a2.timesOn);
    psychoJS.experiment.addData('exp1_pre_a2.timesOff', exp1_pre_a2.timesOff);
    psychoJS.experiment.addData('exp1_pre_a3.numClicks', exp1_pre_a3.numClicks);
    psychoJS.experiment.addData('exp1_pre_a3.timesOn', exp1_pre_a3.timesOn);
    psychoJS.experiment.addData('exp1_pre_a3.timesOff', exp1_pre_a3.timesOff);
    psychoJS.experiment.addData('exp1_pre_a4.numClicks', exp1_pre_a4.numClicks);
    psychoJS.experiment.addData('exp1_pre_a4.timesOn', exp1_pre_a4.timesOn);
    psychoJS.experiment.addData('exp1_pre_a4.timesOff', exp1_pre_a4.timesOff);
    // the Routine "exp1_pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nextQMaxDurationReached;
var nextQMaxDuration;
var nextQComponents;
function nextQRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nextQ' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nextQClock.reset();
    routineTimer.reset();
    nextQMaxDurationReached = false;
    // update component parameters for each repeat
    try {
      // 檢查是否有錄音數據
      if (window.audioChunks && window.audioChunks.length > 0) {
        // 獲取 MIME 類型
        const mimeType = window.mediaRecorder ? window.mediaRecorder.mimeType : 'audio/webm';
        
        // 創建音訊Blob
        const audioBlob = new Blob(window.audioChunks, { type: mimeType });
        window.audioBlob = audioBlob;
        
        console.log("錄音時長: " + (window.recordingDuration / 1000).toFixed(1) + " 秒");
        console.log("錄音大小: " + (audioBlob.size / 1024).toFixed(1) + " KB");
        console.log("錄音格式: " + mimeType);
        
        // 轉換為 base64 以便上傳
        const reader = new FileReader();
        reader.onloadend = function() {
          window.audioBase64 = reader.result.split(',')[1];
          console.log("音訊已轉換為 base64 格式，準備上傳");
          console.log("Base64 數據長度:", window.audioBase64 ? window.audioBase64.length : 0);
        };
        reader.readAsDataURL(audioBlob);
        
        // 播放錄音
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        
        audio.onended = function() {
          URL.revokeObjectURL(audioUrl);
          setTimeout(() => {
            console.log("音訊播放結束");
            continueRoutine = false;
          }, 500);
        };
        
        audio.play().then(() => {
          console.log("音訊播放中");
        }).catch(error => {
          console.error("音訊播放失敗:", error);
          continueRoutine = false;
        });
      } else {
        console.log("沒有錄音數據可播放");
        continueRoutine = false;
      }
    } catch (error) {
      console.error("處理錄音時出錯:", error);
      continueRoutine = false;
    }
    psychoJS.experiment.addData('nextQ.started', globalClock.getTime());
    nextQMaxDuration = null
    // keep track of which components have finished
    nextQComponents = [];
    nextQComponents.push(nextQ_bg);
    
    for (const thisComponent of nextQComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function nextQRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nextQ' ---
    // get current time
    t = nextQClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nextQ_bg* updates
    if (t >= 0.0 && nextQ_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextQ_bg.tStart = t;  // (not accounting for frame time here)
      nextQ_bg.frameNStart = frameN;  // exact frame index
      
      nextQ_bg.setAutoDraw(true);
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
    for (const thisComponent of nextQComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nextQRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nextQ' ---
    for (const thisComponent of nextQComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('nextQ.stopped', globalClock.getTime());
    // 檢查音訊數據是否存在
    console.log("檢查音訊數據...");
    
    if (window.audioBlob) {
      if (window.audioBase64) {
        // 獲取正確的 MIME 類型
        const mimeType = window.mediaRecorder ? window.mediaRecorder.mimeType : 'audio/webm';
        
        console.log("上傳音訊檔案...");
        console.log("MIME 類型:", mimeType);
        
        // 使用正確的檔案擴展名
        const fileExtension = '.webm';
        const filename = `audio_${expInfo["participant"]}_${Date.now()}${fileExtension}`;
        
        // !!關鍵修改!! - 使用正確的端點 /api/base64 而不是 /api/data
        fetch('https://pipe.jspsych.org/api/base64', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify({
            experimentID: 'XV78p02Q6Bcu', // 您的 DataPipe ID
            filename: filename,
            data: window.audioBase64,
            datatype: mimeType
          }),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('音訊上傳成功:', data);
          setTimeout(() => {
            continueRoutine = false;
          }, 1000);
        })
        .catch(error => {
          console.error('音訊上傳失敗:', error);
          console.error('錯誤詳情:', error.message);
          setTimeout(() => {
            continueRoutine = false;
          }, 1000);
        });
      } else {
        console.log("等待 base64 轉換完成...");
        // 重試轉換
        const reader = new FileReader();
        reader.onloadend = function() {
          window.audioBase64 = reader.result.split(',')[1];
          console.log("base64 轉換完成，準備重新上傳");
          
          // 獲取正確的 MIME 類型
          const mimeType = window.mediaRecorder ? window.mediaRecorder.mimeType : 'audio/webm';
          const fileExtension = '.webm';
          const filename = `audio_${expInfo["participant"]}_${Date.now()}${fileExtension}`;
          
          // !!關鍵修改!! - 使用正確的端點 /api/base64
          fetch('https://pipe.jspsych.org/api/base64', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: '*/*',
            },
            body: JSON.stringify({
              experimentID: 'XV78p02Q6Bcu',
              filename: filename,
              data: window.audioBase64,
              datatype: mimeType
            }),
          })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('音訊上傳成功:', data);
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          })
          .catch(error => {
            console.error('音訊上傳失敗:', error);
            console.error('錯誤詳情:', error.message);
            setTimeout(() => {
              continueRoutine = false;
            }, 1000);
          });
        };
        reader.readAsDataURL(window.audioBlob);
      }
    } else {
      console.log("沒有音訊數據需要保存");
      setTimeout(() => {
        continueRoutine = false;
      }, 1000);
    }
    // the Routine "nextQ" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    // 確保清理所有音訊資源
    if (window.microphoneStream) {
      window.microphoneStream.getTracks().forEach(track => {
        track.stop();
      });
      window.microphoneStream = null;
    }
    
    // 設置實驗結束時間
    setTimeout(() => {
      continueRoutine = false;
    }, 3000);
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_bg);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_bg* updates
    if (t >= 0.0 && end_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_bg.tStart = t;  // (not accounting for frame time here)
      end_bg.frameNStart = frameN;  // exact frame index
      
      end_bg.setAutoDraw(true);
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
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
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
