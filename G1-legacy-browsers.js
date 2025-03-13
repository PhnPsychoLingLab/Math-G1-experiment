/*********** 
 * G1 *
 ***********/


// store info about the experiment session:
let expName = 'G1';  // from the Builder filename that created this script
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
flowScheduler.add(exp1_introRoutineBegin());
flowScheduler.add(exp1_introRoutineEachFrame());
flowScheduler.add(exp1_introRoutineEnd());
const exp1_pre_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp1_pre_trialsLoopBegin(exp1_pre_trialsLoopScheduler));
flowScheduler.add(exp1_pre_trialsLoopScheduler);
flowScheduler.add(exp1_pre_trialsLoopEnd);



flowScheduler.add(exp1_restRoutineBegin());
flowScheduler.add(exp1_restRoutineEachFrame());
flowScheduler.add(exp1_restRoutineEnd());
const exp1_main_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp1_main_trialsLoopBegin(exp1_main_trialsLoopScheduler));
flowScheduler.add(exp1_main_trialsLoopScheduler);
flowScheduler.add(exp1_main_trialsLoopEnd);



flowScheduler.add(exp1_endRoutineBegin());
flowScheduler.add(exp1_endRoutineEachFrame());
flowScheduler.add(exp1_endRoutineEnd());
flowScheduler.add(exp2_introRoutineBegin());
flowScheduler.add(exp2_introRoutineEachFrame());
flowScheduler.add(exp2_introRoutineEnd());
const exp2_pre_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp2_pre_trialsLoopBegin(exp2_pre_trialsLoopScheduler));
flowScheduler.add(exp2_pre_trialsLoopScheduler);
flowScheduler.add(exp2_pre_trialsLoopEnd);



flowScheduler.add(exp2_restRoutineBegin());
flowScheduler.add(exp2_restRoutineEachFrame());
flowScheduler.add(exp2_restRoutineEnd());
const exp2_main_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp2_main_trialsLoopBegin(exp2_main_trialsLoopScheduler));
flowScheduler.add(exp2_main_trialsLoopScheduler);
flowScheduler.add(exp2_main_trialsLoopEnd);



flowScheduler.add(exp2_endRoutineBegin());
flowScheduler.add(exp2_endRoutineEachFrame());
flowScheduler.add(exp2_endRoutineEnd());
flowScheduler.add(exp3_introRoutineBegin());
flowScheduler.add(exp3_introRoutineEachFrame());
flowScheduler.add(exp3_introRoutineEnd());
flowScheduler.add(exp3_camera_testRoutineBegin());
flowScheduler.add(exp3_camera_testRoutineEachFrame());
flowScheduler.add(exp3_camera_testRoutineEnd());
flowScheduler.add(exp3_taskRoutineBegin());
flowScheduler.add(exp3_taskRoutineEachFrame());
flowScheduler.add(exp3_taskRoutineEnd());
flowScheduler.add(exp3_mainRoutineBegin());
flowScheduler.add(exp3_mainRoutineEachFrame());
flowScheduler.add(exp3_mainRoutineEnd());
flowScheduler.add(exp3_endRoutineBegin());
flowScheduler.add(exp3_endRoutineEachFrame());
flowScheduler.add(exp3_endRoutineEnd());
flowScheduler.add(Saving_Results_RoutineRoutineBegin());
flowScheduler.add(Saving_Results_RoutineRoutineEachFrame());
flowScheduler.add(Saving_Results_RoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'lib/pre.csv', 'path': 'lib/pre.csv'},
    {'name': './lib/exp1_pre/G1_exp1_pre1.png', 'path': './lib/exp1_pre/G1_exp1_pre1.png'},
    {'name': './lib/exp2_pre/G1_exp2_pre1.png', 'path': './lib/exp2_pre/G1_exp2_pre1.png'},
    {'name': './lib/exp3_pre/G1_exp3_2.png', 'path': './lib/exp3_pre/G1_exp3_2.png'},
    {'name': './lib/exp1_pre/G1_exp1_pre2.png', 'path': './lib/exp1_pre/G1_exp1_pre2.png'},
    {'name': './lib/exp2_pre/G1_exp2_pre2.png', 'path': './lib/exp2_pre/G1_exp2_pre2.png'},
    {'name': './lib/exp1_pre/G1_exp1_pre3.png', 'path': './lib/exp1_pre/G1_exp1_pre3.png'},
    {'name': './lib/exp2_pre/G1_exp2_pre3.png', 'path': './lib/exp2_pre/G1_exp2_pre3.png'},
    {'name': 'lib/main.csv', 'path': 'lib/main.csv'},
    {'name': './lib/exp1_main/G1_exp1_main1.png', 'path': './lib/exp1_main/G1_exp1_main1.png'},
    {'name': './lib/exp2_main/G1_exp2_main1.png', 'path': './lib/exp2_main/G1_exp2_main1.png'},
    {'name': './lib/exp1_main/G1_exp1_main2.png', 'path': './lib/exp1_main/G1_exp1_main2.png'},
    {'name': './lib/exp2_main/G1_exp2_main2.png', 'path': './lib/exp2_main/G1_exp2_main2.png'},
    {'name': './lib/exp1_main/G1_exp1_main3.png', 'path': './lib/exp1_main/G1_exp1_main3.png'},
    {'name': './lib/exp2_main/G1_exp2_main3.png', 'path': './lib/exp2_main/G1_exp2_main3.png'},
    {'name': './lib/exp1_main/G1_exp1_main4.png', 'path': './lib/exp1_main/G1_exp1_main4.png'},
    {'name': './lib/exp2_main/G1_exp2_main4.png', 'path': './lib/exp2_main/G1_exp2_main4.png'},
    {'name': './lib/exp1_main/G1_exp1_main5.png', 'path': './lib/exp1_main/G1_exp1_main5.png'},
    {'name': './lib/exp2_main/G1_exp2_main5.png', 'path': './lib/exp2_main/G1_exp2_main5.png'},
    {'name': './lib/exp1_main/G1_exp1_main6.png', 'path': './lib/exp1_main/G1_exp1_main6.png'},
    {'name': './lib/exp2_main/G1_exp2_main6.png', 'path': './lib/exp2_main/G1_exp2_main6.png'},
    {'name': './lib/exp1_main/G1_exp1_main7.png', 'path': './lib/exp1_main/G1_exp1_main7.png'},
    {'name': './lib/exp2_main/G1_exp2_main7.png', 'path': './lib/exp2_main/G1_exp2_main7.png'},
    {'name': './lib/exp1_main/G1_exp1_main8.png', 'path': './lib/exp1_main/G1_exp1_main8.png'},
    {'name': './lib/exp2_main/G1_exp2_main8.png', 'path': './lib/exp2_main/G1_exp2_main8.png'},
    {'name': './lib/exp1_main/G1_exp1_main9.png', 'path': './lib/exp1_main/G1_exp1_main9.png'},
    {'name': './lib/exp2_main/G1_exp2_main9.png', 'path': './lib/exp2_main/G1_exp2_main9.png'},
    {'name': './lib/exp1_main/G1_exp1_main10.png', 'path': './lib/exp1_main/G1_exp1_main10.png'},
    {'name': './lib/exp2_main/G1_exp2_main10.png', 'path': './lib/exp2_main/G1_exp2_main10.png'},
    {'name': './lib/exp1_main/G1_exp1_main11.png', 'path': './lib/exp1_main/G1_exp1_main11.png'},
    {'name': './lib/exp2_main/G1_exp2_main11.png', 'path': './lib/exp2_main/G1_exp2_main11.png'},
    {'name': './lib/exp1_main/G1_exp1_main12.png', 'path': './lib/exp1_main/G1_exp1_main12.png'},
    {'name': './lib/exp2_main/G1_exp2_main12.png', 'path': './lib/exp2_main/G1_exp2_main12.png'},
    {'name': './lib/exp1_main/G1_exp1_main13.png', 'path': './lib/exp1_main/G1_exp1_main13.png'},
    {'name': './lib/exp2_main/G1_exp2_main13.png', 'path': './lib/exp2_main/G1_exp2_main13.png'},
    {'name': './lib/exp1_main/G1_exp1_main14.png', 'path': './lib/exp1_main/G1_exp1_main14.png'},
    {'name': './lib/exp2_main/G1_exp2_main14.png', 'path': './lib/exp2_main/G1_exp2_main14.png'},
    {'name': './lib/exp1_main/G1_exp1_main15.png', 'path': './lib/exp1_main/G1_exp1_main15.png'},
    {'name': './lib/exp2_main/G1_exp2_main15.png', 'path': './lib/exp2_main/G1_exp2_main15.png'},
    {'name': 'lib/pre.csv', 'path': 'lib/pre.csv'},
    {'name': './lib/exp1_pre/G1_exp1_pre1.png', 'path': './lib/exp1_pre/G1_exp1_pre1.png'},
    {'name': './lib/exp2_pre/G1_exp2_pre1.png', 'path': './lib/exp2_pre/G1_exp2_pre1.png'},
    {'name': './lib/exp3_pre/G1_exp3_2.png', 'path': './lib/exp3_pre/G1_exp3_2.png'},
    {'name': './lib/exp1_pre/G1_exp1_pre2.png', 'path': './lib/exp1_pre/G1_exp1_pre2.png'},
    {'name': './lib/exp2_pre/G1_exp2_pre2.png', 'path': './lib/exp2_pre/G1_exp2_pre2.png'},
    {'name': './lib/exp1_pre/G1_exp1_pre3.png', 'path': './lib/exp1_pre/G1_exp1_pre3.png'},
    {'name': './lib/exp2_pre/G1_exp2_pre3.png', 'path': './lib/exp2_pre/G1_exp2_pre3.png'},
    {'name': 'lib/main.csv', 'path': 'lib/main.csv'},
    {'name': './lib/exp1_main/G1_exp1_main1.png', 'path': './lib/exp1_main/G1_exp1_main1.png'},
    {'name': './lib/exp2_main/G1_exp2_main1.png', 'path': './lib/exp2_main/G1_exp2_main1.png'},
    {'name': './lib/exp1_main/G1_exp1_main2.png', 'path': './lib/exp1_main/G1_exp1_main2.png'},
    {'name': './lib/exp2_main/G1_exp2_main2.png', 'path': './lib/exp2_main/G1_exp2_main2.png'},
    {'name': './lib/exp1_main/G1_exp1_main3.png', 'path': './lib/exp1_main/G1_exp1_main3.png'},
    {'name': './lib/exp2_main/G1_exp2_main3.png', 'path': './lib/exp2_main/G1_exp2_main3.png'},
    {'name': './lib/exp1_main/G1_exp1_main4.png', 'path': './lib/exp1_main/G1_exp1_main4.png'},
    {'name': './lib/exp2_main/G1_exp2_main4.png', 'path': './lib/exp2_main/G1_exp2_main4.png'},
    {'name': './lib/exp1_main/G1_exp1_main5.png', 'path': './lib/exp1_main/G1_exp1_main5.png'},
    {'name': './lib/exp2_main/G1_exp2_main5.png', 'path': './lib/exp2_main/G1_exp2_main5.png'},
    {'name': './lib/exp1_main/G1_exp1_main6.png', 'path': './lib/exp1_main/G1_exp1_main6.png'},
    {'name': './lib/exp2_main/G1_exp2_main6.png', 'path': './lib/exp2_main/G1_exp2_main6.png'},
    {'name': './lib/exp1_main/G1_exp1_main7.png', 'path': './lib/exp1_main/G1_exp1_main7.png'},
    {'name': './lib/exp2_main/G1_exp2_main7.png', 'path': './lib/exp2_main/G1_exp2_main7.png'},
    {'name': './lib/exp1_main/G1_exp1_main8.png', 'path': './lib/exp1_main/G1_exp1_main8.png'},
    {'name': './lib/exp2_main/G1_exp2_main8.png', 'path': './lib/exp2_main/G1_exp2_main8.png'},
    {'name': './lib/exp1_main/G1_exp1_main9.png', 'path': './lib/exp1_main/G1_exp1_main9.png'},
    {'name': './lib/exp2_main/G1_exp2_main9.png', 'path': './lib/exp2_main/G1_exp2_main9.png'},
    {'name': './lib/exp1_main/G1_exp1_main10.png', 'path': './lib/exp1_main/G1_exp1_main10.png'},
    {'name': './lib/exp2_main/G1_exp2_main10.png', 'path': './lib/exp2_main/G1_exp2_main10.png'},
    {'name': './lib/exp1_main/G1_exp1_main11.png', 'path': './lib/exp1_main/G1_exp1_main11.png'},
    {'name': './lib/exp2_main/G1_exp2_main11.png', 'path': './lib/exp2_main/G1_exp2_main11.png'},
    {'name': './lib/exp1_main/G1_exp1_main12.png', 'path': './lib/exp1_main/G1_exp1_main12.png'},
    {'name': './lib/exp2_main/G1_exp2_main12.png', 'path': './lib/exp2_main/G1_exp2_main12.png'},
    {'name': './lib/exp1_main/G1_exp1_main13.png', 'path': './lib/exp1_main/G1_exp1_main13.png'},
    {'name': './lib/exp2_main/G1_exp2_main13.png', 'path': './lib/exp2_main/G1_exp2_main13.png'},
    {'name': './lib/exp1_main/G1_exp1_main14.png', 'path': './lib/exp1_main/G1_exp1_main14.png'},
    {'name': './lib/exp2_main/G1_exp2_main14.png', 'path': './lib/exp2_main/G1_exp2_main14.png'},
    {'name': './lib/exp1_main/G1_exp1_main15.png', 'path': './lib/exp1_main/G1_exp1_main15.png'},
    {'name': './lib/exp2_main/G1_exp2_main15.png', 'path': './lib/exp2_main/G1_exp2_main15.png'},
    {'name': 'lib/page/homepage.png', 'path': 'lib/page/homepage.png'},
    {'name': 'lib/page/G1_exp1_intro.png', 'path': 'lib/page/G1_exp1_intro.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'lib/page/nextQ.png', 'path': 'lib/page/nextQ.png'},
    {'name': 'lib/page/pre_end.png', 'path': 'lib/page/pre_end.png'},
    {'name': 'lib/page/main_end.png', 'path': 'lib/page/main_end.png'},
    {'name': 'lib/page/G1_exp2_intro.png', 'path': 'lib/page/G1_exp2_intro.png'},
    {'name': 'lib/page/G1_exp3_intro.png', 'path': 'lib/page/G1_exp3_intro.png'},
    {'name': 'lib/online_mic/online_mic-legacy-browsers.js', 'path': 'lib/online_mic/online_mic-legacy-browsers.js'},
    {'name': 'lib/online_mic/online_mic.js', 'path': 'lib/online_mic/online_mic.js'},
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
    {'name': 'lib/exp3_pre/G1_exp3_2.png', 'path': 'lib/exp3_pre/G1_exp3_2.png'},
    {'name': 'lib/page/G1_exp3_intro.png', 'path': 'lib/page/G1_exp3_intro.png'},
    {'name': 'lib/page/pre_end.png', 'path': 'lib/page/pre_end.png'},
    {'name': 'lib/page/main_end.png', 'path': 'lib/page/main_end.png'},
    {'name': 'lib/page/G1_exp2_intro.png', 'path': 'lib/page/G1_exp2_intro.png'},
    {'name': 'lib/page/outtro.png', 'path': 'lib/page/outtro.png'},
    {'name': 'lib/page/G1_exp1_intro.png', 'path': 'lib/page/G1_exp1_intro.png'},
    {'name': 'lib/page/nextQ.png', 'path': 'lib/page/nextQ.png'},
    {'name': 'lib/page/homepage.png', 'path': 'lib/page/homepage.png'},
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
    {'name': 'lib/exp2_pre/G1_exp2_pre3.png', 'path': 'lib/exp2_pre/G1_exp2_pre3.png'},
    {'name': 'lib/exp2_pre/G1_exp2_pre2.png', 'path': 'lib/exp2_pre/G1_exp2_pre2.png'},
    {'name': 'lib/exp2_pre/G1_exp2_pre1.png', 'path': 'lib/exp2_pre/G1_exp2_pre1.png'},
    {'name': 'lib/exp1_pre/G1_exp1_pre2.png', 'path': 'lib/exp1_pre/G1_exp1_pre2.png'},
    {'name': 'lib/exp1_pre/G1_exp1_pre3.png', 'path': 'lib/exp1_pre/G1_exp1_pre3.png'},
    {'name': 'lib/exp1_pre/G1_exp1_pre1.png', 'path': 'lib/exp1_pre/G1_exp1_pre1.png'},
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
var exp1_introClock;
var exp1_intro_bg;
var exp1_intro_next_page;
var exp1_taskClock;
var exp1_pre_bg;
var exp1_pre_a1;
var exp1_pre_a2;
var exp1_pre_a3;
var exp1_pre_a4;
var nextQClock;
var nextQ_bg;
var exp1_restClock;
var exp1_rest_bg;
var exp1_rest_next_page;
var exp1_mainClock;
var globalClock;
var maxTime;
var exp1_main_bg;
var exp1_main_a1;
var exp1_main_a2;
var exp1_main_a3;
var exp1_main_a4;
var exp1_endClock;
var exp1_end_bg;
var exp1_end_next_page;
var exp2_introClock;
var exp2_intro_bg;
var exp2_intro_next_page;
var exp2_taskClock;
var exp2_pre_bg;
var exp2_pre_a1;
var exp2_pre_a2;
var exp2_pre_a3;
var exp2_pre_a4;
var exp2_restClock;
var exp2_rest_bg;
var exp2_rest_next_page;
var exp2_mainClock;
var exp2_main_bg;
var exp2_main_a1;
var exp2_main_a2;
var exp2_main_a3;
var exp2_main_a4;
var exp2_endClock;
var exp2_end_bg;
var exp2_end_next_page;
var exp3_introClock;
var exp3_intro_bg;
var exp3_intro_next_page;
var exp3_camera_testClock;
var exp3_taskClock;
var exp3_mainClock;
var exp3_endClock;
var Saving_Results_RoutineClock;
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
    texRes : 128.0, interpolate : true, depth : 0.0 
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
    depth: -1
  });
  hello_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp1_intro"
  exp1_introClock = new util.Clock();
  // Run 'Begin Experiment' code from exp1_intro_code
  // 設定 DataPipe 實驗 ID
  var dataPipeExperimentID = "mhfpupw5UYEf";  // ⚠️ 替換為你的 DataPipe ID
  
  // 載入 online_mic.js
  var micScript = document.createElement('script');
  if (window.location.hostname.includes("github.io")) {
      micScript.src = 'lib/online_mic/online_mic.js';  // GitHub Pages
  } else {
      micScript.src = 'resources/lib/online_mic.js';  // Pavlovia
  }
  document.head.appendChild(micScript);
  console.log("Loaded online_mic.js from:", micScript.src);
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
    texRes : 128.0, interpolate : true, depth : -1.0 
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
    depth: -2
  });
  exp1_intro_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp1_task"
  exp1_taskClock = new util.Clock();
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
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp1_pre_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a1',
    text: None,
    fillColor: [0.8824, 0.9451, 1.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.38), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -2
  });
  exp1_pre_a1.clock = new util.Clock();
  
  exp1_pre_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a2',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.12), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -3
  });
  exp1_pre_a2.clock = new util.Clock();
  
  exp1_pre_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a3',
    text: None,
    fillColor: [1.0, 0.7882, 0.5373],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0.14, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -4
  });
  exp1_pre_a3.clock = new util.Clock();
  
  exp1_pre_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a4',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [(- 1.0), 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.4, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -5
  });
  exp1_pre_a4.clock = new util.Clock();
  
  // Initialize components for Routine "nextQ"
  nextQClock = new util.Clock();
  nextQ_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextQ_bg', units : undefined, 
    image : 'lib/page/nextQ.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "exp1_rest"
  exp1_restClock = new util.Clock();
  exp1_rest_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_rest_bg', units : undefined, 
    image : 'lib/page/pre_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp1_rest_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_rest_next_page',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.14)],
    letterHeight: 0.05,
    size: [0.7, 0.13],
    ori: 0.0
    ,
    depth: -2
  });
  exp1_rest_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp1_main"
  exp1_mainClock = new util.Clock();
  // Run 'Begin Experiment' code from clock
  // 設定計時器，單位為秒（15 分鐘 = 900 秒）
  globalClock = new util.Clock();
  maxTime = 900;  // 15 分鐘
  exp1_main_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_main_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  exp1_main_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a1',
    text: None,
    fillColor: [0.8824, 0.9451, 1.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.38), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -3
  });
  exp1_main_a1.clock = new util.Clock();
  
  exp1_main_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a2',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.12), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -4
  });
  exp1_main_a2.clock = new util.Clock();
  
  exp1_main_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a3',
    text: None,
    fillColor: [1.0, 0.7882, 0.5373],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0.14, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -5
  });
  exp1_main_a3.clock = new util.Clock();
  
  exp1_main_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a4',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [(- 1.0), 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.4, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -6
  });
  exp1_main_a4.clock = new util.Clock();
  
  // Initialize components for Routine "exp1_end"
  exp1_endClock = new util.Clock();
  exp1_end_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_end_bg', units : undefined, 
    image : 'lib/page/main_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp1_end_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_end_next_page',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.225)],
    letterHeight: 0.05,
    size: [0.4, 0.08],
    ori: 0.0
    ,
    depth: -2
  });
  exp1_end_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp2_intro"
  exp2_introClock = new util.Clock();
  exp2_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_intro_bg', units : undefined, 
    image : 'lib/page/G1_exp2_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp2_intro_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_intro_next_page',
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
  exp2_intro_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp2_task"
  exp2_taskClock = new util.Clock();
  exp2_pre_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_pre_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp2_pre_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a1',
    text: None,
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
  exp2_pre_a1.clock = new util.Clock();
  
  exp2_pre_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a2',
    text: None,
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
  exp2_pre_a2.clock = new util.Clock();
  
  exp2_pre_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a3',
    text: None,
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
  exp2_pre_a3.clock = new util.Clock();
  
  exp2_pre_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a4',
    text: None,
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
  exp2_pre_a4.clock = new util.Clock();
  
  // Initialize components for Routine "exp2_rest"
  exp2_restClock = new util.Clock();
  exp2_rest_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_rest_bg', units : undefined, 
    image : 'lib/page/pre_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp2_rest_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_rest_next_page',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.14)],
    letterHeight: 0.05,
    size: [0.7, 0.13],
    ori: 0.0
    ,
    depth: -1
  });
  exp2_rest_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp2_main"
  exp2_mainClock = new util.Clock();
  exp2_main_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_main_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp2_main_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a1',
    text: None,
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
  exp2_main_a1.clock = new util.Clock();
  
  exp2_main_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a2',
    text: None,
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
  exp2_main_a2.clock = new util.Clock();
  
  exp2_main_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a3',
    text: None,
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
  exp2_main_a3.clock = new util.Clock();
  
  exp2_main_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a4',
    text: None,
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
  exp2_main_a4.clock = new util.Clock();
  
  // Initialize components for Routine "exp2_end"
  exp2_endClock = new util.Clock();
  exp2_end_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_end_bg', units : undefined, 
    image : 'lib/page/main_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp2_end_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_end_next_page',
    text: None,
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.225)],
    letterHeight: 0.05,
    size: [0.4, 0.08],
    ori: 0.0
    ,
    depth: -1
  });
  exp2_end_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp3_intro"
  exp3_introClock = new util.Clock();
  exp3_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_intro_bg', units : undefined, 
    image : 'lib/page/G1_exp3_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exp3_intro_next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp3_intro_next_page',
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
  exp3_intro_next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp3_camera_test"
  exp3_camera_testClock = new util.Clock();
  // Initialize components for Routine "exp3_task"
  exp3_taskClock = new util.Clock();
  // Initialize components for Routine "exp3_main"
  exp3_mainClock = new util.Clock();
  // Initialize components for Routine "exp3_end"
  exp3_endClock = new util.Clock();
  // Initialize components for Routine "Saving_Results_Routine"
  Saving_Results_RoutineClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var helloMaxDurationReached;
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


var exp1_introMaxDurationReached;
var exp1_introMaxDuration;
var exp1_introComponents;
function exp1_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_introClock.reset();
    routineTimer.reset();
    exp1_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_intro_next_page to account for continued clicks & clear times on/off
    exp1_intro_next_page.reset()
    psychoJS.experiment.addData('exp1_intro.started', globalClock.getTime());
    exp1_introMaxDuration = null
    // keep track of which components have finished
    exp1_introComponents = [];
    exp1_introComponents.push(exp1_intro_bg);
    exp1_introComponents.push(exp1_intro_next_page);
    
    exp1_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp1_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_intro' ---
    // get current time
    t = exp1_introClock.getTime();
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
    exp1_introComponents.forEach( function(thisComponent) {
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


function exp1_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_intro' ---
    exp1_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp1_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_intro_next_page.numClicks', exp1_intro_next_page.numClicks);
    psychoJS.experiment.addData('exp1_intro_next_page.timesOn', exp1_intro_next_page.timesOn);
    psychoJS.experiment.addData('exp1_intro_next_page.timesOff', exp1_intro_next_page.timesOff);
    // the Routine "exp1_intro" was not non-slip safe, so reset the non-slip timer
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
      trialList: 'lib/pre.csv',
      seed: undefined, name: 'exp1_pre_trials'
    });
    psychoJS.experiment.addLoop(exp1_pre_trials); // add the loop to the experiment
    currentLoop = exp1_pre_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exp1_pre_trials.forEach(function() {
      snapshot = exp1_pre_trials.getSnapshot();
    
      exp1_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_taskRoutineBegin(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_taskRoutineEachFrame());
      exp1_pre_trialsLoopScheduler.add(exp1_taskRoutineEnd(snapshot));
      exp1_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp1_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp1_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_pre_trialsLoopEndIteration(exp1_pre_trialsLoopScheduler, snapshot));
    });
    
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


var exp1_main_trials;
function exp1_main_trialsLoopBegin(exp1_main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp1_main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'lib/main.csv',
      seed: undefined, name: 'exp1_main_trials'
    });
    psychoJS.experiment.addLoop(exp1_main_trials); // add the loop to the experiment
    currentLoop = exp1_main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exp1_main_trials.forEach(function() {
      snapshot = exp1_main_trials.getSnapshot();
    
      exp1_main_trialsLoopScheduler.add(importConditions(snapshot));
      exp1_main_trialsLoopScheduler.add(exp1_mainRoutineBegin(snapshot));
      exp1_main_trialsLoopScheduler.add(exp1_mainRoutineEachFrame());
      exp1_main_trialsLoopScheduler.add(exp1_mainRoutineEnd(snapshot));
      exp1_main_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp1_main_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp1_main_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp1_main_trialsLoopScheduler.add(exp1_main_trialsLoopEndIteration(exp1_main_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function exp1_main_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp1_main_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp1_main_trialsLoopEndIteration(scheduler, snapshot) {
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


var exp2_pre_trials;
function exp2_pre_trialsLoopBegin(exp2_pre_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp2_pre_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'lib/pre.csv',
      seed: undefined, name: 'exp2_pre_trials'
    });
    psychoJS.experiment.addLoop(exp2_pre_trials); // add the loop to the experiment
    currentLoop = exp2_pre_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exp2_pre_trials.forEach(function() {
      snapshot = exp2_pre_trials.getSnapshot();
    
      exp2_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp2_pre_trialsLoopScheduler.add(exp2_taskRoutineBegin(snapshot));
      exp2_pre_trialsLoopScheduler.add(exp2_taskRoutineEachFrame());
      exp2_pre_trialsLoopScheduler.add(exp2_taskRoutineEnd(snapshot));
      exp2_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp2_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp2_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp2_pre_trialsLoopScheduler.add(exp2_pre_trialsLoopEndIteration(exp2_pre_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function exp2_pre_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp2_pre_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp2_pre_trialsLoopEndIteration(scheduler, snapshot) {
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


var exp2_main_trials;
function exp2_main_trialsLoopBegin(exp2_main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp2_main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'lib/main.csv',
      seed: undefined, name: 'exp2_main_trials'
    });
    psychoJS.experiment.addLoop(exp2_main_trials); // add the loop to the experiment
    currentLoop = exp2_main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    exp2_main_trials.forEach(function() {
      snapshot = exp2_main_trials.getSnapshot();
    
      exp2_main_trialsLoopScheduler.add(importConditions(snapshot));
      exp2_main_trialsLoopScheduler.add(exp2_mainRoutineBegin(snapshot));
      exp2_main_trialsLoopScheduler.add(exp2_mainRoutineEachFrame());
      exp2_main_trialsLoopScheduler.add(exp2_mainRoutineEnd(snapshot));
      exp2_main_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp2_main_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp2_main_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp2_main_trialsLoopScheduler.add(exp2_main_trialsLoopEndIteration(exp2_main_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function exp2_main_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp2_main_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp2_main_trialsLoopEndIteration(scheduler, snapshot) {
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


var exp1_taskMaxDurationReached;
var mic;
var startTime;
var exp1_taskMaxDuration;
var exp1_taskComponents;
function exp1_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_taskClock.reset();
    routineTimer.reset();
    exp1_taskMaxDurationReached = false;
    // update component parameters for each repeat
    console.log("Starting microphone for task...");
    mic = new p5.AudioIn();
    mic.start();
    startTime = util.MonotonicClock.getTime();
    exp1_pre_bg.setImage(exp1_pre_stimuli);
    // reset exp1_pre_a1 to account for continued clicks & clear times on/off
    exp1_pre_a1.reset()
    // reset exp1_pre_a2 to account for continued clicks & clear times on/off
    exp1_pre_a2.reset()
    // reset exp1_pre_a3 to account for continued clicks & clear times on/off
    exp1_pre_a3.reset()
    // reset exp1_pre_a4 to account for continued clicks & clear times on/off
    exp1_pre_a4.reset()
    psychoJS.experiment.addData('exp1_task.started', globalClock.getTime());
    exp1_taskMaxDuration = null
    // keep track of which components have finished
    exp1_taskComponents = [];
    exp1_taskComponents.push(exp1_pre_bg);
    exp1_taskComponents.push(exp1_pre_a1);
    exp1_taskComponents.push(exp1_pre_a2);
    exp1_taskComponents.push(exp1_pre_a3);
    exp1_taskComponents.push(exp1_pre_a4);
    
    exp1_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp1_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_task' ---
    // get current time
    t = exp1_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_pre_bg* updates
    if (t >= 0.0 && exp1_pre_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_bg.tStart = t;  // (not accounting for frame time here)
      exp1_pre_bg.frameNStart = frameN;  // exact frame index
      
      exp1_pre_bg.setAutoDraw(true);
    }
    
    
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exp1_taskComponents.forEach( function(thisComponent) {
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


function exp1_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_task' ---
    exp1_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp1_task.stopped', globalClock.getTime());
    mic.stop();
    mic.getBlob().then(function(blob) {
        var audioFilename = `audio_${expInfo["participant"]}_task_trial${trialN}.wav`;
    
        // 轉換錄音檔案為 Base64
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            var base64data = reader.result.split(',')[1];
    
            // 上傳錄音檔到 OSF via DataPipe
            fetch('https://pipe.jspsych.org/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: '*/*',
                },
                body: JSON.stringify({
                    experimentID: dataPipeExperimentID,  // 使用 DataPipe ID
                    filename: audioFilename,
                    data: base64data,  // Base64 格式
                    base64: true,
                }),
            }).then(response => response.json()).then(data => {
                console.log("Task Audio uploaded:", audioFilename);
            }).catch(error => {
                console.error("Audio upload error:", error);
            });
        };
    });
    
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
    // the Routine "exp1_task" was not non-slip safe, so reset the non-slip timer
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
    nextQClock.reset(routineTimer.getTime());
    routineTimer.add(0.300000);
    nextQMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('nextQ.started', globalClock.getTime());
    nextQMaxDuration = null
    // keep track of which components have finished
    nextQComponents = [];
    nextQComponents.push(nextQ_bg);
    
    nextQComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
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
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nextQ_bg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      nextQ_bg.setAutoDraw(false);
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
    nextQComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nextQRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nextQ' ---
    nextQComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('nextQ.stopped', globalClock.getTime());
    if (nextQMaxDurationReached) {
        nextQClock.add(nextQMaxDuration);
    } else {
        nextQClock.add(0.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_restMaxDurationReached;
var exp1_restMaxDuration;
var exp1_restComponents;
function exp1_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_restClock.reset();
    routineTimer.reset();
    exp1_restMaxDurationReached = false;
    // update component parameters for each repeat
    // 禁止 PsychoPy 下載本地 CSV
    psychoJS._saveResults = 0; 
    
    // 產生檔案名稱
    let filename_task = psychoJS.experiment._experimentName + '_' + expInfo["participant"] + '_task';
    
    // 提取 `exp1_task` 數據
    let taskData = psychoJS.experiment._trialsData.filter(trial => trial["trial_type"] === "task");
    
    // 轉換 `taskData` 成 CSV
    let taskCSV = [Object.keys(taskData[0])].concat(taskData).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // 上傳 `task` 數據到 OSF via DataPipe
    console.log('Uploading task data via DataPipe...');
    
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: dataPipeExperimentID,  // 使用 DataPipe ID
            filename: filename_task + ".csv",
            data: taskCSV,
        }),
    }).then(response => response.json()).then(data => {
        console.log("Task Data uploaded:", data);
    }).catch(error => {
        console.error("Upload error:", error);
    });
    
    // reset exp1_rest_next_page to account for continued clicks & clear times on/off
    exp1_rest_next_page.reset()
    psychoJS.experiment.addData('exp1_rest.started', globalClock.getTime());
    exp1_restMaxDuration = null
    // keep track of which components have finished
    exp1_restComponents = [];
    exp1_restComponents.push(exp1_rest_bg);
    exp1_restComponents.push(exp1_rest_next_page);
    
    exp1_restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp1_restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_rest' ---
    // get current time
    t = exp1_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_rest_bg* updates
    if (t >= 0.0 && exp1_rest_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_rest_bg.tStart = t;  // (not accounting for frame time here)
      exp1_rest_bg.frameNStart = frameN;  // exact frame index
      
      exp1_rest_bg.setAutoDraw(true);
    }
    
    
    // *exp1_rest_next_page* updates
    if (t >= 0 && exp1_rest_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_rest_next_page.tStart = t;  // (not accounting for frame time here)
      exp1_rest_next_page.frameNStart = frameN;  // exact frame index
      
      exp1_rest_next_page.setAutoDraw(true);
    }
    
    if (exp1_rest_next_page.status === PsychoJS.Status.STARTED) {
      // check whether exp1_rest_next_page has been pressed
      if (exp1_rest_next_page.isClicked) {
        if (!exp1_rest_next_page.wasClicked) {
          // store time of first click
          exp1_rest_next_page.timesOn.push(exp1_rest_next_page.clock.getTime());
          // store time clicked until
          exp1_rest_next_page.timesOff.push(exp1_rest_next_page.clock.getTime());
        } else {
          // update time clicked until;
          exp1_rest_next_page.timesOff[exp1_rest_next_page.timesOff.length - 1] = exp1_rest_next_page.clock.getTime();
        }
        if (!exp1_rest_next_page.wasClicked) {
          // end routine when exp1_rest_next_page is clicked
          continueRoutine = false;
          
        }
        // if exp1_rest_next_page is still clicked next frame, it is not a new click
        exp1_rest_next_page.wasClicked = true;
      } else {
        // if exp1_rest_next_page is clicked next frame, it is a new click
        exp1_rest_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_rest_next_page hasn't started / has finished
      exp1_rest_next_page.clock.reset();
      // if exp1_rest_next_page is clicked next frame, it is a new click
      exp1_rest_next_page.wasClicked = false;
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
    exp1_restComponents.forEach( function(thisComponent) {
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


function exp1_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_rest' ---
    exp1_restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp1_rest.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_rest_next_page.numClicks', exp1_rest_next_page.numClicks);
    psychoJS.experiment.addData('exp1_rest_next_page.timesOn', exp1_rest_next_page.timesOn);
    psychoJS.experiment.addData('exp1_rest_next_page.timesOff', exp1_rest_next_page.timesOff);
    // the Routine "exp1_rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_mainMaxDurationReached;
var exp1_mainMaxDuration;
var exp1_mainComponents;
function exp1_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_mainClock.reset();
    routineTimer.reset();
    exp1_mainMaxDurationReached = false;
    // update component parameters for each repeat
    console.log("Starting microphone for main task...");
    mic = new p5.AudioIn();
    mic.start();
    startTime = util.MonotonicClock.getTime();
    exp1_main_bg.setImage(exp1_main_stimuli);
    // reset exp1_main_a1 to account for continued clicks & clear times on/off
    exp1_main_a1.reset()
    // reset exp1_main_a2 to account for continued clicks & clear times on/off
    exp1_main_a2.reset()
    // reset exp1_main_a3 to account for continued clicks & clear times on/off
    exp1_main_a3.reset()
    // reset exp1_main_a4 to account for continued clicks & clear times on/off
    exp1_main_a4.reset()
    psychoJS.experiment.addData('exp1_main.started', globalClock.getTime());
    exp1_mainMaxDuration = null
    // keep track of which components have finished
    exp1_mainComponents = [];
    exp1_mainComponents.push(exp1_main_bg);
    exp1_mainComponents.push(exp1_main_a1);
    exp1_mainComponents.push(exp1_main_a2);
    exp1_mainComponents.push(exp1_main_a3);
    exp1_mainComponents.push(exp1_main_a4);
    
    exp1_mainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp1_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_main' ---
    // get current time
    t = exp1_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // 檢查是否超過 15 分鐘
    if (globalClock.getTime() > maxTime) {
        console.log("Time limit reached! Moving to next routine.");
        continueRoutine = false;  // 停止當前 Routine
        exp1_main_trials.finished = true;  // 停止整個迴圈
    }
    
    // *exp1_main_bg* updates
    if (t >= 0.0 && exp1_main_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_bg.tStart = t;  // (not accounting for frame time here)
      exp1_main_bg.frameNStart = frameN;  // exact frame index
      
      exp1_main_bg.setAutoDraw(true);
    }
    
    
    // *exp1_main_a1* updates
    if (t >= 0 && exp1_main_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a1.tStart = t;  // (not accounting for frame time here)
      exp1_main_a1.frameNStart = frameN;  // exact frame index
      
      exp1_main_a1.setAutoDraw(true);
    }
    
    if (exp1_main_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a1 has been pressed
      if (exp1_main_a1.isClicked) {
        if (!exp1_main_a1.wasClicked) {
          // store time of first click
          exp1_main_a1.timesOn.push(exp1_main_a1.clock.getTime());
          // store time clicked until
          exp1_main_a1.timesOff.push(exp1_main_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a1.timesOff[exp1_main_a1.timesOff.length - 1] = exp1_main_a1.clock.getTime();
        }
        if (!exp1_main_a1.wasClicked) {
          // end routine when exp1_main_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a1 is still clicked next frame, it is not a new click
        exp1_main_a1.wasClicked = true;
      } else {
        // if exp1_main_a1 is clicked next frame, it is a new click
        exp1_main_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a1 hasn't started / has finished
      exp1_main_a1.clock.reset();
      // if exp1_main_a1 is clicked next frame, it is a new click
      exp1_main_a1.wasClicked = false;
    }
    
    // *exp1_main_a2* updates
    if (t >= 0 && exp1_main_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a2.tStart = t;  // (not accounting for frame time here)
      exp1_main_a2.frameNStart = frameN;  // exact frame index
      
      exp1_main_a2.setAutoDraw(true);
    }
    
    if (exp1_main_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a2 has been pressed
      if (exp1_main_a2.isClicked) {
        if (!exp1_main_a2.wasClicked) {
          // store time of first click
          exp1_main_a2.timesOn.push(exp1_main_a2.clock.getTime());
          // store time clicked until
          exp1_main_a2.timesOff.push(exp1_main_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a2.timesOff[exp1_main_a2.timesOff.length - 1] = exp1_main_a2.clock.getTime();
        }
        if (!exp1_main_a2.wasClicked) {
          // end routine when exp1_main_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a2 is still clicked next frame, it is not a new click
        exp1_main_a2.wasClicked = true;
      } else {
        // if exp1_main_a2 is clicked next frame, it is a new click
        exp1_main_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a2 hasn't started / has finished
      exp1_main_a2.clock.reset();
      // if exp1_main_a2 is clicked next frame, it is a new click
      exp1_main_a2.wasClicked = false;
    }
    
    // *exp1_main_a3* updates
    if (t >= 0 && exp1_main_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a3.tStart = t;  // (not accounting for frame time here)
      exp1_main_a3.frameNStart = frameN;  // exact frame index
      
      exp1_main_a3.setAutoDraw(true);
    }
    
    if (exp1_main_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a3 has been pressed
      if (exp1_main_a3.isClicked) {
        if (!exp1_main_a3.wasClicked) {
          // store time of first click
          exp1_main_a3.timesOn.push(exp1_main_a3.clock.getTime());
          // store time clicked until
          exp1_main_a3.timesOff.push(exp1_main_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a3.timesOff[exp1_main_a3.timesOff.length - 1] = exp1_main_a3.clock.getTime();
        }
        if (!exp1_main_a3.wasClicked) {
          // end routine when exp1_main_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a3 is still clicked next frame, it is not a new click
        exp1_main_a3.wasClicked = true;
      } else {
        // if exp1_main_a3 is clicked next frame, it is a new click
        exp1_main_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a3 hasn't started / has finished
      exp1_main_a3.clock.reset();
      // if exp1_main_a3 is clicked next frame, it is a new click
      exp1_main_a3.wasClicked = false;
    }
    
    // *exp1_main_a4* updates
    if (t >= 0 && exp1_main_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a4.tStart = t;  // (not accounting for frame time here)
      exp1_main_a4.frameNStart = frameN;  // exact frame index
      
      exp1_main_a4.setAutoDraw(true);
    }
    
    if (exp1_main_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a4 has been pressed
      if (exp1_main_a4.isClicked) {
        if (!exp1_main_a4.wasClicked) {
          // store time of first click
          exp1_main_a4.timesOn.push(exp1_main_a4.clock.getTime());
          // store time clicked until
          exp1_main_a4.timesOff.push(exp1_main_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a4.timesOff[exp1_main_a4.timesOff.length - 1] = exp1_main_a4.clock.getTime();
        }
        if (!exp1_main_a4.wasClicked) {
          // end routine when exp1_main_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a4 is still clicked next frame, it is not a new click
        exp1_main_a4.wasClicked = true;
      } else {
        // if exp1_main_a4 is clicked next frame, it is a new click
        exp1_main_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a4 hasn't started / has finished
      exp1_main_a4.clock.reset();
      // if exp1_main_a4 is clicked next frame, it is a new click
      exp1_main_a4.wasClicked = false;
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
    exp1_mainComponents.forEach( function(thisComponent) {
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


function exp1_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_main' ---
    exp1_mainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp1_main.stopped', globalClock.getTime());
    mic.stop();
    mic.getBlob().then(function(blob) {
        var audioFilename = `audio_${expInfo["participant"]}_main_trial${trialN}.wav`;
    
        // 轉換錄音檔案為 Base64
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            var base64data = reader.result.split(',')[1];
    
            // 上傳錄音檔到 OSF via DataPipe
            fetch('https://pipe.jspsych.org/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: '*/*',
                },
                body: JSON.stringify({
                    experimentID: dataPipeExperimentID,  // 使用 DataPipe ID
                    filename: audioFilename,
                    data: base64data,  // Base64 格式
                    base64: true,
                }),
            }).then(response => response.json()).then(data => {
                console.log("Main Audio uploaded:", audioFilename);
            }).catch(error => {
                console.error("Audio upload error:", error);
            });
        };
    });
    psychoJS.experiment.addData('exp1_main_a1.numClicks', exp1_main_a1.numClicks);
    psychoJS.experiment.addData('exp1_main_a1.timesOn', exp1_main_a1.timesOn);
    psychoJS.experiment.addData('exp1_main_a1.timesOff', exp1_main_a1.timesOff);
    psychoJS.experiment.addData('exp1_main_a2.numClicks', exp1_main_a2.numClicks);
    psychoJS.experiment.addData('exp1_main_a2.timesOn', exp1_main_a2.timesOn);
    psychoJS.experiment.addData('exp1_main_a2.timesOff', exp1_main_a2.timesOff);
    psychoJS.experiment.addData('exp1_main_a3.numClicks', exp1_main_a3.numClicks);
    psychoJS.experiment.addData('exp1_main_a3.timesOn', exp1_main_a3.timesOn);
    psychoJS.experiment.addData('exp1_main_a3.timesOff', exp1_main_a3.timesOff);
    psychoJS.experiment.addData('exp1_main_a4.numClicks', exp1_main_a4.numClicks);
    psychoJS.experiment.addData('exp1_main_a4.timesOn', exp1_main_a4.timesOn);
    psychoJS.experiment.addData('exp1_main_a4.timesOff', exp1_main_a4.timesOff);
    // the Routine "exp1_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_endMaxDurationReached;
var exp1_endMaxDuration;
var exp1_endComponents;
function exp1_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_endClock.reset();
    routineTimer.reset();
    exp1_endMaxDurationReached = false;
    // update component parameters for each repeat
    // 禁止 PsychoPy 下載本地 CSV
    psychoJS._saveResults = 0; 
    
    // 產生 `main` 數據的檔案名稱
    let filename_main = psychoJS.experiment._experimentName + '_' + expInfo["participant"] + '_main';
    
    // 提取 `exp1_main` 數據
    let mainData = psychoJS.experiment._trialsData.filter(trial => trial["trial_type"] === "main");
    
    // 轉換 `mainData` 成 CSV
    let mainCSV = [Object.keys(mainData[0])].concat(mainData).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // 上傳 `main` 數據到 OSF via DataPipe
    console.log('Uploading main data via DataPipe...');
    
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: dataPipeExperimentID,  // 使用 DataPipe ID
            filename: filename_main + ".csv",
            data: mainCSV,
        }),
    }).then(response => response.json()).then(data => {
        console.log("Main Data uploaded:", data);
        quitPsychoJS();
    }).catch(error => {
        console.error("Upload error:", error);
    });
    // reset exp1_end_next_page to account for continued clicks & clear times on/off
    exp1_end_next_page.reset()
    psychoJS.experiment.addData('exp1_end.started', globalClock.getTime());
    exp1_endMaxDuration = null
    // keep track of which components have finished
    exp1_endComponents = [];
    exp1_endComponents.push(exp1_end_bg);
    exp1_endComponents.push(exp1_end_next_page);
    
    exp1_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp1_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_end' ---
    // get current time
    t = exp1_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_end_bg* updates
    if (t >= 0.0 && exp1_end_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_end_bg.tStart = t;  // (not accounting for frame time here)
      exp1_end_bg.frameNStart = frameN;  // exact frame index
      
      exp1_end_bg.setAutoDraw(true);
    }
    
    
    // *exp1_end_next_page* updates
    if (t >= 0 && exp1_end_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_end_next_page.tStart = t;  // (not accounting for frame time here)
      exp1_end_next_page.frameNStart = frameN;  // exact frame index
      
      exp1_end_next_page.setAutoDraw(true);
    }
    
    if (exp1_end_next_page.status === PsychoJS.Status.STARTED) {
      // check whether exp1_end_next_page has been pressed
      if (exp1_end_next_page.isClicked) {
        if (!exp1_end_next_page.wasClicked) {
          // store time of first click
          exp1_end_next_page.timesOn.push(exp1_end_next_page.clock.getTime());
          // store time clicked until
          exp1_end_next_page.timesOff.push(exp1_end_next_page.clock.getTime());
        } else {
          // update time clicked until;
          exp1_end_next_page.timesOff[exp1_end_next_page.timesOff.length - 1] = exp1_end_next_page.clock.getTime();
        }
        if (!exp1_end_next_page.wasClicked) {
          // end routine when exp1_end_next_page is clicked
          continueRoutine = false;
          
        }
        // if exp1_end_next_page is still clicked next frame, it is not a new click
        exp1_end_next_page.wasClicked = true;
      } else {
        // if exp1_end_next_page is clicked next frame, it is a new click
        exp1_end_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_end_next_page hasn't started / has finished
      exp1_end_next_page.clock.reset();
      // if exp1_end_next_page is clicked next frame, it is a new click
      exp1_end_next_page.wasClicked = false;
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
    exp1_endComponents.forEach( function(thisComponent) {
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


function exp1_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_end' ---
    exp1_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp1_end.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_end_next_page.numClicks', exp1_end_next_page.numClicks);
    psychoJS.experiment.addData('exp1_end_next_page.timesOn', exp1_end_next_page.timesOn);
    psychoJS.experiment.addData('exp1_end_next_page.timesOff', exp1_end_next_page.timesOff);
    // the Routine "exp1_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_introMaxDurationReached;
var exp2_introMaxDuration;
var exp2_introComponents;
function exp2_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_introClock.reset();
    routineTimer.reset();
    exp2_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_intro_next_page to account for continued clicks & clear times on/off
    exp2_intro_next_page.reset()
    psychoJS.experiment.addData('exp2_intro.started', globalClock.getTime());
    exp2_introMaxDuration = null
    // keep track of which components have finished
    exp2_introComponents = [];
    exp2_introComponents.push(exp2_intro_bg);
    exp2_introComponents.push(exp2_intro_next_page);
    
    exp2_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp2_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_intro' ---
    // get current time
    t = exp2_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_intro_bg* updates
    if (t >= 0.0 && exp2_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp2_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp2_intro_bg.setAutoDraw(true);
    }
    
    
    // *exp2_intro_next_page* updates
    if (t >= 0 && exp2_intro_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_intro_next_page.tStart = t;  // (not accounting for frame time here)
      exp2_intro_next_page.frameNStart = frameN;  // exact frame index
      
      exp2_intro_next_page.setAutoDraw(true);
    }
    
    if (exp2_intro_next_page.status === PsychoJS.Status.STARTED) {
      // check whether exp2_intro_next_page has been pressed
      if (exp2_intro_next_page.isClicked) {
        if (!exp2_intro_next_page.wasClicked) {
          // store time of first click
          exp2_intro_next_page.timesOn.push(exp2_intro_next_page.clock.getTime());
          // store time clicked until
          exp2_intro_next_page.timesOff.push(exp2_intro_next_page.clock.getTime());
        } else {
          // update time clicked until;
          exp2_intro_next_page.timesOff[exp2_intro_next_page.timesOff.length - 1] = exp2_intro_next_page.clock.getTime();
        }
        if (!exp2_intro_next_page.wasClicked) {
          // end routine when exp2_intro_next_page is clicked
          continueRoutine = false;
          
        }
        // if exp2_intro_next_page is still clicked next frame, it is not a new click
        exp2_intro_next_page.wasClicked = true;
      } else {
        // if exp2_intro_next_page is clicked next frame, it is a new click
        exp2_intro_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_intro_next_page hasn't started / has finished
      exp2_intro_next_page.clock.reset();
      // if exp2_intro_next_page is clicked next frame, it is a new click
      exp2_intro_next_page.wasClicked = false;
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
    exp2_introComponents.forEach( function(thisComponent) {
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


function exp2_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_intro' ---
    exp2_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp2_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_intro_next_page.numClicks', exp2_intro_next_page.numClicks);
    psychoJS.experiment.addData('exp2_intro_next_page.timesOn', exp2_intro_next_page.timesOn);
    psychoJS.experiment.addData('exp2_intro_next_page.timesOff', exp2_intro_next_page.timesOff);
    // the Routine "exp2_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_taskMaxDurationReached;
var exp2_taskMaxDuration;
var exp2_taskComponents;
function exp2_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_taskClock.reset();
    routineTimer.reset();
    exp2_taskMaxDurationReached = false;
    // update component parameters for each repeat
    exp2_pre_bg.setImage(exp2_pre_stimuli);
    // reset exp2_pre_a1 to account for continued clicks & clear times on/off
    exp2_pre_a1.reset()
    // reset exp2_pre_a2 to account for continued clicks & clear times on/off
    exp2_pre_a2.reset()
    // reset exp2_pre_a3 to account for continued clicks & clear times on/off
    exp2_pre_a3.reset()
    // reset exp2_pre_a4 to account for continued clicks & clear times on/off
    exp2_pre_a4.reset()
    psychoJS.experiment.addData('exp2_task.started', globalClock.getTime());
    exp2_taskMaxDuration = null
    // keep track of which components have finished
    exp2_taskComponents = [];
    exp2_taskComponents.push(exp2_pre_bg);
    exp2_taskComponents.push(exp2_pre_a1);
    exp2_taskComponents.push(exp2_pre_a2);
    exp2_taskComponents.push(exp2_pre_a3);
    exp2_taskComponents.push(exp2_pre_a4);
    
    exp2_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp2_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_task' ---
    // get current time
    t = exp2_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_pre_bg* updates
    if (t >= 0.0 && exp2_pre_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_bg.tStart = t;  // (not accounting for frame time here)
      exp2_pre_bg.frameNStart = frameN;  // exact frame index
      
      exp2_pre_bg.setAutoDraw(true);
    }
    
    
    // *exp2_pre_a1* updates
    if (t >= 0 && exp2_pre_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a1.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a1.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a1.setAutoDraw(true);
    }
    
    if (exp2_pre_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a1 has been pressed
      if (exp2_pre_a1.isClicked) {
        if (!exp2_pre_a1.wasClicked) {
          // store time of first click
          exp2_pre_a1.timesOn.push(exp2_pre_a1.clock.getTime());
          // store time clicked until
          exp2_pre_a1.timesOff.push(exp2_pre_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a1.timesOff[exp2_pre_a1.timesOff.length - 1] = exp2_pre_a1.clock.getTime();
        }
        if (!exp2_pre_a1.wasClicked) {
          // end routine when exp2_pre_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a1 is still clicked next frame, it is not a new click
        exp2_pre_a1.wasClicked = true;
      } else {
        // if exp2_pre_a1 is clicked next frame, it is a new click
        exp2_pre_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a1 hasn't started / has finished
      exp2_pre_a1.clock.reset();
      // if exp2_pre_a1 is clicked next frame, it is a new click
      exp2_pre_a1.wasClicked = false;
    }
    
    // *exp2_pre_a2* updates
    if (t >= 0 && exp2_pre_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a2.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a2.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a2.setAutoDraw(true);
    }
    
    if (exp2_pre_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a2 has been pressed
      if (exp2_pre_a2.isClicked) {
        if (!exp2_pre_a2.wasClicked) {
          // store time of first click
          exp2_pre_a2.timesOn.push(exp2_pre_a2.clock.getTime());
          // store time clicked until
          exp2_pre_a2.timesOff.push(exp2_pre_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a2.timesOff[exp2_pre_a2.timesOff.length - 1] = exp2_pre_a2.clock.getTime();
        }
        if (!exp2_pre_a2.wasClicked) {
          // end routine when exp2_pre_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a2 is still clicked next frame, it is not a new click
        exp2_pre_a2.wasClicked = true;
      } else {
        // if exp2_pre_a2 is clicked next frame, it is a new click
        exp2_pre_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a2 hasn't started / has finished
      exp2_pre_a2.clock.reset();
      // if exp2_pre_a2 is clicked next frame, it is a new click
      exp2_pre_a2.wasClicked = false;
    }
    
    // *exp2_pre_a3* updates
    if (t >= 0 && exp2_pre_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a3.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a3.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a3.setAutoDraw(true);
    }
    
    if (exp2_pre_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a3 has been pressed
      if (exp2_pre_a3.isClicked) {
        if (!exp2_pre_a3.wasClicked) {
          // store time of first click
          exp2_pre_a3.timesOn.push(exp2_pre_a3.clock.getTime());
          // store time clicked until
          exp2_pre_a3.timesOff.push(exp2_pre_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a3.timesOff[exp2_pre_a3.timesOff.length - 1] = exp2_pre_a3.clock.getTime();
        }
        if (!exp2_pre_a3.wasClicked) {
          // end routine when exp2_pre_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a3 is still clicked next frame, it is not a new click
        exp2_pre_a3.wasClicked = true;
      } else {
        // if exp2_pre_a3 is clicked next frame, it is a new click
        exp2_pre_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a3 hasn't started / has finished
      exp2_pre_a3.clock.reset();
      // if exp2_pre_a3 is clicked next frame, it is a new click
      exp2_pre_a3.wasClicked = false;
    }
    
    // *exp2_pre_a4* updates
    if (t >= 0 && exp2_pre_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a4.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a4.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a4.setAutoDraw(true);
    }
    
    if (exp2_pre_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a4 has been pressed
      if (exp2_pre_a4.isClicked) {
        if (!exp2_pre_a4.wasClicked) {
          // store time of first click
          exp2_pre_a4.timesOn.push(exp2_pre_a4.clock.getTime());
          // store time clicked until
          exp2_pre_a4.timesOff.push(exp2_pre_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a4.timesOff[exp2_pre_a4.timesOff.length - 1] = exp2_pre_a4.clock.getTime();
        }
        if (!exp2_pre_a4.wasClicked) {
          // end routine when exp2_pre_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a4 is still clicked next frame, it is not a new click
        exp2_pre_a4.wasClicked = true;
      } else {
        // if exp2_pre_a4 is clicked next frame, it is a new click
        exp2_pre_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a4 hasn't started / has finished
      exp2_pre_a4.clock.reset();
      // if exp2_pre_a4 is clicked next frame, it is a new click
      exp2_pre_a4.wasClicked = false;
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
    exp2_taskComponents.forEach( function(thisComponent) {
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


function exp2_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_task' ---
    exp2_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp2_task.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_pre_a1.numClicks', exp2_pre_a1.numClicks);
    psychoJS.experiment.addData('exp2_pre_a1.timesOn', exp2_pre_a1.timesOn);
    psychoJS.experiment.addData('exp2_pre_a1.timesOff', exp2_pre_a1.timesOff);
    psychoJS.experiment.addData('exp2_pre_a2.numClicks', exp2_pre_a2.numClicks);
    psychoJS.experiment.addData('exp2_pre_a2.timesOn', exp2_pre_a2.timesOn);
    psychoJS.experiment.addData('exp2_pre_a2.timesOff', exp2_pre_a2.timesOff);
    psychoJS.experiment.addData('exp2_pre_a3.numClicks', exp2_pre_a3.numClicks);
    psychoJS.experiment.addData('exp2_pre_a3.timesOn', exp2_pre_a3.timesOn);
    psychoJS.experiment.addData('exp2_pre_a3.timesOff', exp2_pre_a3.timesOff);
    psychoJS.experiment.addData('exp2_pre_a4.numClicks', exp2_pre_a4.numClicks);
    psychoJS.experiment.addData('exp2_pre_a4.timesOn', exp2_pre_a4.timesOn);
    psychoJS.experiment.addData('exp2_pre_a4.timesOff', exp2_pre_a4.timesOff);
    // the Routine "exp2_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_restMaxDurationReached;
var exp2_restMaxDuration;
var exp2_restComponents;
function exp2_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_restClock.reset();
    routineTimer.reset();
    exp2_restMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_rest_next_page to account for continued clicks & clear times on/off
    exp2_rest_next_page.reset()
    psychoJS.experiment.addData('exp2_rest.started', globalClock.getTime());
    exp2_restMaxDuration = null
    // keep track of which components have finished
    exp2_restComponents = [];
    exp2_restComponents.push(exp2_rest_bg);
    exp2_restComponents.push(exp2_rest_next_page);
    
    exp2_restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp2_restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_rest' ---
    // get current time
    t = exp2_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_rest_bg* updates
    if (t >= 0.0 && exp2_rest_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_rest_bg.tStart = t;  // (not accounting for frame time here)
      exp2_rest_bg.frameNStart = frameN;  // exact frame index
      
      exp2_rest_bg.setAutoDraw(true);
    }
    
    
    // *exp2_rest_next_page* updates
    if (t >= 0 && exp2_rest_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_rest_next_page.tStart = t;  // (not accounting for frame time here)
      exp2_rest_next_page.frameNStart = frameN;  // exact frame index
      
      exp2_rest_next_page.setAutoDraw(true);
    }
    
    if (exp2_rest_next_page.status === PsychoJS.Status.STARTED) {
      // check whether exp2_rest_next_page has been pressed
      if (exp2_rest_next_page.isClicked) {
        if (!exp2_rest_next_page.wasClicked) {
          // store time of first click
          exp2_rest_next_page.timesOn.push(exp2_rest_next_page.clock.getTime());
          // store time clicked until
          exp2_rest_next_page.timesOff.push(exp2_rest_next_page.clock.getTime());
        } else {
          // update time clicked until;
          exp2_rest_next_page.timesOff[exp2_rest_next_page.timesOff.length - 1] = exp2_rest_next_page.clock.getTime();
        }
        if (!exp2_rest_next_page.wasClicked) {
          // end routine when exp2_rest_next_page is clicked
          continueRoutine = false;
          
        }
        // if exp2_rest_next_page is still clicked next frame, it is not a new click
        exp2_rest_next_page.wasClicked = true;
      } else {
        // if exp2_rest_next_page is clicked next frame, it is a new click
        exp2_rest_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_rest_next_page hasn't started / has finished
      exp2_rest_next_page.clock.reset();
      // if exp2_rest_next_page is clicked next frame, it is a new click
      exp2_rest_next_page.wasClicked = false;
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
    exp2_restComponents.forEach( function(thisComponent) {
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


function exp2_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_rest' ---
    exp2_restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp2_rest.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_rest_next_page.numClicks', exp2_rest_next_page.numClicks);
    psychoJS.experiment.addData('exp2_rest_next_page.timesOn', exp2_rest_next_page.timesOn);
    psychoJS.experiment.addData('exp2_rest_next_page.timesOff', exp2_rest_next_page.timesOff);
    // the Routine "exp2_rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_mainMaxDurationReached;
var exp2_mainMaxDuration;
var exp2_mainComponents;
function exp2_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_mainClock.reset();
    routineTimer.reset();
    exp2_mainMaxDurationReached = false;
    // update component parameters for each repeat
    exp2_main_bg.setImage(exp2_main_stimuli);
    // reset exp2_main_a1 to account for continued clicks & clear times on/off
    exp2_main_a1.reset()
    // reset exp2_main_a2 to account for continued clicks & clear times on/off
    exp2_main_a2.reset()
    // reset exp2_main_a3 to account for continued clicks & clear times on/off
    exp2_main_a3.reset()
    // reset exp2_main_a4 to account for continued clicks & clear times on/off
    exp2_main_a4.reset()
    psychoJS.experiment.addData('exp2_main.started', globalClock.getTime());
    exp2_mainMaxDuration = null
    // keep track of which components have finished
    exp2_mainComponents = [];
    exp2_mainComponents.push(exp2_main_bg);
    exp2_mainComponents.push(exp2_main_a1);
    exp2_mainComponents.push(exp2_main_a2);
    exp2_mainComponents.push(exp2_main_a3);
    exp2_mainComponents.push(exp2_main_a4);
    
    exp2_mainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp2_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_main' ---
    // get current time
    t = exp2_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_main_bg* updates
    if (t >= 0.0 && exp2_main_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_bg.tStart = t;  // (not accounting for frame time here)
      exp2_main_bg.frameNStart = frameN;  // exact frame index
      
      exp2_main_bg.setAutoDraw(true);
    }
    
    
    // *exp2_main_a1* updates
    if (t >= 0 && exp2_main_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a1.tStart = t;  // (not accounting for frame time here)
      exp2_main_a1.frameNStart = frameN;  // exact frame index
      
      exp2_main_a1.setAutoDraw(true);
    }
    
    if (exp2_main_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a1 has been pressed
      if (exp2_main_a1.isClicked) {
        if (!exp2_main_a1.wasClicked) {
          // store time of first click
          exp2_main_a1.timesOn.push(exp2_main_a1.clock.getTime());
          // store time clicked until
          exp2_main_a1.timesOff.push(exp2_main_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a1.timesOff[exp2_main_a1.timesOff.length - 1] = exp2_main_a1.clock.getTime();
        }
        if (!exp2_main_a1.wasClicked) {
          // end routine when exp2_main_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a1 is still clicked next frame, it is not a new click
        exp2_main_a1.wasClicked = true;
      } else {
        // if exp2_main_a1 is clicked next frame, it is a new click
        exp2_main_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a1 hasn't started / has finished
      exp2_main_a1.clock.reset();
      // if exp2_main_a1 is clicked next frame, it is a new click
      exp2_main_a1.wasClicked = false;
    }
    
    // *exp2_main_a2* updates
    if (t >= 0 && exp2_main_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a2.tStart = t;  // (not accounting for frame time here)
      exp2_main_a2.frameNStart = frameN;  // exact frame index
      
      exp2_main_a2.setAutoDraw(true);
    }
    
    if (exp2_main_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a2 has been pressed
      if (exp2_main_a2.isClicked) {
        if (!exp2_main_a2.wasClicked) {
          // store time of first click
          exp2_main_a2.timesOn.push(exp2_main_a2.clock.getTime());
          // store time clicked until
          exp2_main_a2.timesOff.push(exp2_main_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a2.timesOff[exp2_main_a2.timesOff.length - 1] = exp2_main_a2.clock.getTime();
        }
        if (!exp2_main_a2.wasClicked) {
          // end routine when exp2_main_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a2 is still clicked next frame, it is not a new click
        exp2_main_a2.wasClicked = true;
      } else {
        // if exp2_main_a2 is clicked next frame, it is a new click
        exp2_main_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a2 hasn't started / has finished
      exp2_main_a2.clock.reset();
      // if exp2_main_a2 is clicked next frame, it is a new click
      exp2_main_a2.wasClicked = false;
    }
    
    // *exp2_main_a3* updates
    if (t >= 0 && exp2_main_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a3.tStart = t;  // (not accounting for frame time here)
      exp2_main_a3.frameNStart = frameN;  // exact frame index
      
      exp2_main_a3.setAutoDraw(true);
    }
    
    if (exp2_main_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a3 has been pressed
      if (exp2_main_a3.isClicked) {
        if (!exp2_main_a3.wasClicked) {
          // store time of first click
          exp2_main_a3.timesOn.push(exp2_main_a3.clock.getTime());
          // store time clicked until
          exp2_main_a3.timesOff.push(exp2_main_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a3.timesOff[exp2_main_a3.timesOff.length - 1] = exp2_main_a3.clock.getTime();
        }
        if (!exp2_main_a3.wasClicked) {
          // end routine when exp2_main_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a3 is still clicked next frame, it is not a new click
        exp2_main_a3.wasClicked = true;
      } else {
        // if exp2_main_a3 is clicked next frame, it is a new click
        exp2_main_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a3 hasn't started / has finished
      exp2_main_a3.clock.reset();
      // if exp2_main_a3 is clicked next frame, it is a new click
      exp2_main_a3.wasClicked = false;
    }
    
    // *exp2_main_a4* updates
    if (t >= 0 && exp2_main_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a4.tStart = t;  // (not accounting for frame time here)
      exp2_main_a4.frameNStart = frameN;  // exact frame index
      
      exp2_main_a4.setAutoDraw(true);
    }
    
    if (exp2_main_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a4 has been pressed
      if (exp2_main_a4.isClicked) {
        if (!exp2_main_a4.wasClicked) {
          // store time of first click
          exp2_main_a4.timesOn.push(exp2_main_a4.clock.getTime());
          // store time clicked until
          exp2_main_a4.timesOff.push(exp2_main_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a4.timesOff[exp2_main_a4.timesOff.length - 1] = exp2_main_a4.clock.getTime();
        }
        if (!exp2_main_a4.wasClicked) {
          // end routine when exp2_main_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a4 is still clicked next frame, it is not a new click
        exp2_main_a4.wasClicked = true;
      } else {
        // if exp2_main_a4 is clicked next frame, it is a new click
        exp2_main_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a4 hasn't started / has finished
      exp2_main_a4.clock.reset();
      // if exp2_main_a4 is clicked next frame, it is a new click
      exp2_main_a4.wasClicked = false;
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
    exp2_mainComponents.forEach( function(thisComponent) {
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


function exp2_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_main' ---
    exp2_mainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp2_main.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_main_a1.numClicks', exp2_main_a1.numClicks);
    psychoJS.experiment.addData('exp2_main_a1.timesOn', exp2_main_a1.timesOn);
    psychoJS.experiment.addData('exp2_main_a1.timesOff', exp2_main_a1.timesOff);
    psychoJS.experiment.addData('exp2_main_a2.numClicks', exp2_main_a2.numClicks);
    psychoJS.experiment.addData('exp2_main_a2.timesOn', exp2_main_a2.timesOn);
    psychoJS.experiment.addData('exp2_main_a2.timesOff', exp2_main_a2.timesOff);
    psychoJS.experiment.addData('exp2_main_a3.numClicks', exp2_main_a3.numClicks);
    psychoJS.experiment.addData('exp2_main_a3.timesOn', exp2_main_a3.timesOn);
    psychoJS.experiment.addData('exp2_main_a3.timesOff', exp2_main_a3.timesOff);
    psychoJS.experiment.addData('exp2_main_a4.numClicks', exp2_main_a4.numClicks);
    psychoJS.experiment.addData('exp2_main_a4.timesOn', exp2_main_a4.timesOn);
    psychoJS.experiment.addData('exp2_main_a4.timesOff', exp2_main_a4.timesOff);
    // the Routine "exp2_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_endMaxDurationReached;
var exp2_endMaxDuration;
var exp2_endComponents;
function exp2_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_endClock.reset();
    routineTimer.reset();
    exp2_endMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_end_next_page to account for continued clicks & clear times on/off
    exp2_end_next_page.reset()
    psychoJS.experiment.addData('exp2_end.started', globalClock.getTime());
    exp2_endMaxDuration = null
    // keep track of which components have finished
    exp2_endComponents = [];
    exp2_endComponents.push(exp2_end_bg);
    exp2_endComponents.push(exp2_end_next_page);
    
    exp2_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp2_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_end' ---
    // get current time
    t = exp2_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_end_bg* updates
    if (t >= 0.0 && exp2_end_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_end_bg.tStart = t;  // (not accounting for frame time here)
      exp2_end_bg.frameNStart = frameN;  // exact frame index
      
      exp2_end_bg.setAutoDraw(true);
    }
    
    
    // *exp2_end_next_page* updates
    if (t >= 0 && exp2_end_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_end_next_page.tStart = t;  // (not accounting for frame time here)
      exp2_end_next_page.frameNStart = frameN;  // exact frame index
      
      exp2_end_next_page.setAutoDraw(true);
    }
    
    if (exp2_end_next_page.status === PsychoJS.Status.STARTED) {
      // check whether exp2_end_next_page has been pressed
      if (exp2_end_next_page.isClicked) {
        if (!exp2_end_next_page.wasClicked) {
          // store time of first click
          exp2_end_next_page.timesOn.push(exp2_end_next_page.clock.getTime());
          // store time clicked until
          exp2_end_next_page.timesOff.push(exp2_end_next_page.clock.getTime());
        } else {
          // update time clicked until;
          exp2_end_next_page.timesOff[exp2_end_next_page.timesOff.length - 1] = exp2_end_next_page.clock.getTime();
        }
        if (!exp2_end_next_page.wasClicked) {
          // end routine when exp2_end_next_page is clicked
          continueRoutine = false;
          
        }
        // if exp2_end_next_page is still clicked next frame, it is not a new click
        exp2_end_next_page.wasClicked = true;
      } else {
        // if exp2_end_next_page is clicked next frame, it is a new click
        exp2_end_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_end_next_page hasn't started / has finished
      exp2_end_next_page.clock.reset();
      // if exp2_end_next_page is clicked next frame, it is a new click
      exp2_end_next_page.wasClicked = false;
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
    exp2_endComponents.forEach( function(thisComponent) {
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


function exp2_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_end' ---
    exp2_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp2_end.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_end_next_page.numClicks', exp2_end_next_page.numClicks);
    psychoJS.experiment.addData('exp2_end_next_page.timesOn', exp2_end_next_page.timesOn);
    psychoJS.experiment.addData('exp2_end_next_page.timesOff', exp2_end_next_page.timesOff);
    // the Routine "exp2_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_introMaxDurationReached;
var exp3_introMaxDuration;
var exp3_introComponents;
function exp3_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_introClock.reset();
    routineTimer.reset();
    exp3_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp3_intro_next_page to account for continued clicks & clear times on/off
    exp3_intro_next_page.reset()
    psychoJS.experiment.addData('exp3_intro.started', globalClock.getTime());
    exp3_introMaxDuration = null
    // keep track of which components have finished
    exp3_introComponents = [];
    exp3_introComponents.push(exp3_intro_bg);
    exp3_introComponents.push(exp3_intro_next_page);
    
    exp3_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp3_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_intro' ---
    // get current time
    t = exp3_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp3_intro_bg* updates
    if (t >= 0.0 && exp3_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp3_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp3_intro_bg.setAutoDraw(true);
    }
    
    
    // *exp3_intro_next_page* updates
    if (t >= 0 && exp3_intro_next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_intro_next_page.tStart = t;  // (not accounting for frame time here)
      exp3_intro_next_page.frameNStart = frameN;  // exact frame index
      
      exp3_intro_next_page.setAutoDraw(true);
    }
    
    if (exp3_intro_next_page.status === PsychoJS.Status.STARTED) {
      // check whether exp3_intro_next_page has been pressed
      if (exp3_intro_next_page.isClicked) {
        if (!exp3_intro_next_page.wasClicked) {
          // store time of first click
          exp3_intro_next_page.timesOn.push(exp3_intro_next_page.clock.getTime());
          // store time clicked until
          exp3_intro_next_page.timesOff.push(exp3_intro_next_page.clock.getTime());
        } else {
          // update time clicked until;
          exp3_intro_next_page.timesOff[exp3_intro_next_page.timesOff.length - 1] = exp3_intro_next_page.clock.getTime();
        }
        if (!exp3_intro_next_page.wasClicked) {
          // end routine when exp3_intro_next_page is clicked
          continueRoutine = false;
          
        }
        // if exp3_intro_next_page is still clicked next frame, it is not a new click
        exp3_intro_next_page.wasClicked = true;
      } else {
        // if exp3_intro_next_page is clicked next frame, it is a new click
        exp3_intro_next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp3_intro_next_page hasn't started / has finished
      exp3_intro_next_page.clock.reset();
      // if exp3_intro_next_page is clicked next frame, it is a new click
      exp3_intro_next_page.wasClicked = false;
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
    exp3_introComponents.forEach( function(thisComponent) {
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


function exp3_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_intro' ---
    exp3_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp3_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp3_intro_next_page.numClicks', exp3_intro_next_page.numClicks);
    psychoJS.experiment.addData('exp3_intro_next_page.timesOn', exp3_intro_next_page.timesOn);
    psychoJS.experiment.addData('exp3_intro_next_page.timesOff', exp3_intro_next_page.timesOff);
    // the Routine "exp3_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_camera_testMaxDurationReached;
var exp3_camera_testMaxDuration;
var exp3_camera_testComponents;
function exp3_camera_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_camera_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_camera_testClock.reset();
    routineTimer.reset();
    exp3_camera_testMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp3_camera_test.started', globalClock.getTime());
    exp3_camera_testMaxDuration = null
    // keep track of which components have finished
    exp3_camera_testComponents = [];
    
    exp3_camera_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp3_camera_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_camera_test' ---
    // get current time
    t = exp3_camera_testClock.getTime();
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
    exp3_camera_testComponents.forEach( function(thisComponent) {
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


function exp3_camera_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_camera_test' ---
    exp3_camera_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp3_camera_test.stopped', globalClock.getTime());
    // the Routine "exp3_camera_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_taskMaxDurationReached;
var exp3_taskMaxDuration;
var exp3_taskComponents;
function exp3_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_taskClock.reset();
    routineTimer.reset();
    exp3_taskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp3_task.started', globalClock.getTime());
    exp3_taskMaxDuration = null
    // keep track of which components have finished
    exp3_taskComponents = [];
    
    exp3_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp3_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_task' ---
    // get current time
    t = exp3_taskClock.getTime();
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
    exp3_taskComponents.forEach( function(thisComponent) {
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


function exp3_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_task' ---
    exp3_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp3_task.stopped', globalClock.getTime());
    // the Routine "exp3_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_mainMaxDurationReached;
var exp3_mainMaxDuration;
var exp3_mainComponents;
function exp3_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_mainClock.reset();
    routineTimer.reset();
    exp3_mainMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp3_main.started', globalClock.getTime());
    exp3_mainMaxDuration = null
    // keep track of which components have finished
    exp3_mainComponents = [];
    
    exp3_mainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp3_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_main' ---
    // get current time
    t = exp3_mainClock.getTime();
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
    exp3_mainComponents.forEach( function(thisComponent) {
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


function exp3_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_main' ---
    exp3_mainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp3_main.stopped', globalClock.getTime());
    // the Routine "exp3_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_endMaxDurationReached;
var exp3_endMaxDuration;
var exp3_endComponents;
function exp3_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_endClock.reset();
    routineTimer.reset();
    exp3_endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp3_end.started', globalClock.getTime());
    exp3_endMaxDuration = null
    // keep track of which components have finished
    exp3_endComponents = [];
    
    exp3_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp3_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_end' ---
    // get current time
    t = exp3_endClock.getTime();
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
    exp3_endComponents.forEach( function(thisComponent) {
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


function exp3_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_end' ---
    exp3_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('exp3_end.stopped', globalClock.getTime());
    // the Routine "exp3_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Saving_Results_RoutineMaxDurationReached;
var Saving_Results_RoutineMaxDuration;
var Saving_Results_RoutineComponents;
function Saving_Results_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Saving_Results_Routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Saving_Results_RoutineClock.reset();
    routineTimer.reset();
    Saving_Results_RoutineMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Saving_Results_Routine.started', globalClock.getTime());
    Saving_Results_RoutineMaxDuration = null
    // keep track of which components have finished
    Saving_Results_RoutineComponents = [];
    
    Saving_Results_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Saving_Results_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Saving_Results_Routine' ---
    // get current time
    t = Saving_Results_RoutineClock.getTime();
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
    Saving_Results_RoutineComponents.forEach( function(thisComponent) {
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


function Saving_Results_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Saving_Results_Routine' ---
    Saving_Results_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Saving_Results_Routine.stopped', globalClock.getTime());
    // the Routine "Saving_Results_Routine" was not non-slip safe, so reset the non-slip timer
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
