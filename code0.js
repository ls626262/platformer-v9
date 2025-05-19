gdjs.Obby_32sceneCode = {};
gdjs.Obby_32sceneCode.localVariables = [];
gdjs.Obby_32sceneCode.GDPlayer1Objects1= [];
gdjs.Obby_32sceneCode.GDPlayer1Objects2= [];
gdjs.Obby_32sceneCode.GDPlayer1Objects3= [];
gdjs.Obby_32sceneCode.GDGroundObjects1= [];
gdjs.Obby_32sceneCode.GDGroundObjects2= [];
gdjs.Obby_32sceneCode.GDGroundObjects3= [];
gdjs.Obby_32sceneCode.GDLightObjects1= [];
gdjs.Obby_32sceneCode.GDLightObjects2= [];
gdjs.Obby_32sceneCode.GDLightObjects3= [];
gdjs.Obby_32sceneCode.GDKillbrikcObjects1= [];
gdjs.Obby_32sceneCode.GDKillbrikcObjects2= [];
gdjs.Obby_32sceneCode.GDKillbrikcObjects3= [];
gdjs.Obby_32sceneCode.GDcheckpointObjects1= [];
gdjs.Obby_32sceneCode.GDcheckpointObjects2= [];
gdjs.Obby_32sceneCode.GDcheckpointObjects3= [];
gdjs.Obby_32sceneCode.GDbackgroundObjects1= [];
gdjs.Obby_32sceneCode.GDbackgroundObjects2= [];
gdjs.Obby_32sceneCode.GDbackgroundObjects3= [];
gdjs.Obby_32sceneCode.GDfpsObjects1= [];
gdjs.Obby_32sceneCode.GDfpsObjects2= [];
gdjs.Obby_32sceneCode.GDfpsObjects3= [];
gdjs.Obby_32sceneCode.GDwin_9595flagObjects1= [];
gdjs.Obby_32sceneCode.GDwin_9595flagObjects2= [];
gdjs.Obby_32sceneCode.GDwin_9595flagObjects3= [];


gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.Obby_32sceneCode.GDPlayer1Objects1});
gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDwin_95959595flagObjects1Objects = Hashtable.newFrom({"win_flag": gdjs.Obby_32sceneCode.GDwin_9595flagObjects1});
gdjs.Obby_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("win_flag"), gdjs.Obby_32sceneCode.GDwin_9595flagObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDPlayer1Objects1Objects, gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDwin_95959595flagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win scene", false);
}}

}


};gdjs.Obby_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length;i<l;++i) {
    if ( gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("IdleTracker").IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Obby_32sceneCode.GDPlayer1Objects2[k] = gdjs.Obby_32sceneCode.GDPlayer1Objects2[i];
        ++k;
    }
}
gdjs.Obby_32sceneCode.GDPlayer1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Obby_32sceneCode.GDPlayer1Objects2 */
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Obby_32sceneCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.Obby_32sceneCode.GDPlayer1Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Obby_32sceneCode.GDPlayer1Objects1[k] = gdjs.Obby_32sceneCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.Obby_32sceneCode.GDPlayer1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Obby_32sceneCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


};gdjs.Obby_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Obby_32sceneCode.GDPlayer1Objects1.length !== 0 ? gdjs.Obby_32sceneCode.GDPlayer1Objects1[0] : null), true, "", 0);
}}

}


};gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.Obby_32sceneCode.GDPlayer1Objects1});
gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDKillbrikcObjects1Objects = Hashtable.newFrom({"Killbrikc": gdjs.Obby_32sceneCode.GDKillbrikcObjects1});
gdjs.Obby_32sceneCode.asyncCallback12016452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Obby_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);

{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}gdjs.Obby_32sceneCode.localVariables.length = 0;
}
gdjs.Obby_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Obby_32sceneCode.localVariables);
for (const obj of gdjs.Obby_32sceneCode.GDPlayer1Objects1) asyncObjectsList.addObject("Player1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Obby_32sceneCode.asyncCallback12016452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Obby_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Killbrikc"), gdjs.Obby_32sceneCode.GDKillbrikcObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDPlayer1Objects1Objects, gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDKillbrikcObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Obby_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDPlayer1Objects1Objects = Hashtable.newFrom({"Player1": gdjs.Obby_32sceneCode.GDPlayer1Objects1});
gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDcheckpointObjects1Objects = Hashtable.newFrom({"checkpoint": gdjs.Obby_32sceneCode.GDcheckpointObjects1});
gdjs.Obby_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(166);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(958);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkpoint"), gdjs.Obby_32sceneCode.GDcheckpointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDPlayer1Objects1Objects, gdjs.Obby_32sceneCode.mapOfGDgdjs_9546Obby_959532sceneCode_9546GDcheckpointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Obby_32sceneCode.GDPlayer1Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.Obby_32sceneCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.Obby_32sceneCode.GDPlayer1Objects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Obby_32sceneCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.Obby_32sceneCode.GDPlayer1Objects1[0].getPointY("")));
}}

}


};gdjs.Obby_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.Obby_32sceneCode.GDfpsObjects1);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDfpsObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 500,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 500);
}
}}

}


};gdjs.Obby_32sceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects2);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects2.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects1);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects1[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}}

}


};gdjs.Obby_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.Obby_32sceneCode.GDPlayer1Objects1);
{for(var i = 0, len = gdjs.Obby_32sceneCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.Obby_32sceneCode.GDPlayer1Objects1[i].setPosition(166,958);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Obby_32sceneCode.eventsList9 = function(runtimeScene) {

{


gdjs.Obby_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Obby_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Obby_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Obby_32sceneCode.eventsList4(runtimeScene);
}


{


gdjs.Obby_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Obby_32sceneCode.eventsList6(runtimeScene);
}


{


gdjs.Obby_32sceneCode.eventsList7(runtimeScene);
}


{


gdjs.Obby_32sceneCode.eventsList8(runtimeScene);
}


};

gdjs.Obby_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Obby_32sceneCode.GDPlayer1Objects1.length = 0;
gdjs.Obby_32sceneCode.GDPlayer1Objects2.length = 0;
gdjs.Obby_32sceneCode.GDPlayer1Objects3.length = 0;
gdjs.Obby_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Obby_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Obby_32sceneCode.GDGroundObjects3.length = 0;
gdjs.Obby_32sceneCode.GDLightObjects1.length = 0;
gdjs.Obby_32sceneCode.GDLightObjects2.length = 0;
gdjs.Obby_32sceneCode.GDLightObjects3.length = 0;
gdjs.Obby_32sceneCode.GDKillbrikcObjects1.length = 0;
gdjs.Obby_32sceneCode.GDKillbrikcObjects2.length = 0;
gdjs.Obby_32sceneCode.GDKillbrikcObjects3.length = 0;
gdjs.Obby_32sceneCode.GDcheckpointObjects1.length = 0;
gdjs.Obby_32sceneCode.GDcheckpointObjects2.length = 0;
gdjs.Obby_32sceneCode.GDcheckpointObjects3.length = 0;
gdjs.Obby_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Obby_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Obby_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.Obby_32sceneCode.GDfpsObjects1.length = 0;
gdjs.Obby_32sceneCode.GDfpsObjects2.length = 0;
gdjs.Obby_32sceneCode.GDfpsObjects3.length = 0;
gdjs.Obby_32sceneCode.GDwin_9595flagObjects1.length = 0;
gdjs.Obby_32sceneCode.GDwin_9595flagObjects2.length = 0;
gdjs.Obby_32sceneCode.GDwin_9595flagObjects3.length = 0;

gdjs.Obby_32sceneCode.eventsList9(runtimeScene);
gdjs.Obby_32sceneCode.GDPlayer1Objects1.length = 0;
gdjs.Obby_32sceneCode.GDPlayer1Objects2.length = 0;
gdjs.Obby_32sceneCode.GDPlayer1Objects3.length = 0;
gdjs.Obby_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Obby_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Obby_32sceneCode.GDGroundObjects3.length = 0;
gdjs.Obby_32sceneCode.GDLightObjects1.length = 0;
gdjs.Obby_32sceneCode.GDLightObjects2.length = 0;
gdjs.Obby_32sceneCode.GDLightObjects3.length = 0;
gdjs.Obby_32sceneCode.GDKillbrikcObjects1.length = 0;
gdjs.Obby_32sceneCode.GDKillbrikcObjects2.length = 0;
gdjs.Obby_32sceneCode.GDKillbrikcObjects3.length = 0;
gdjs.Obby_32sceneCode.GDcheckpointObjects1.length = 0;
gdjs.Obby_32sceneCode.GDcheckpointObjects2.length = 0;
gdjs.Obby_32sceneCode.GDcheckpointObjects3.length = 0;
gdjs.Obby_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Obby_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Obby_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.Obby_32sceneCode.GDfpsObjects1.length = 0;
gdjs.Obby_32sceneCode.GDfpsObjects2.length = 0;
gdjs.Obby_32sceneCode.GDfpsObjects3.length = 0;
gdjs.Obby_32sceneCode.GDwin_9595flagObjects1.length = 0;
gdjs.Obby_32sceneCode.GDwin_9595flagObjects2.length = 0;
gdjs.Obby_32sceneCode.GDwin_9595flagObjects3.length = 0;


return;

}

gdjs['Obby_32sceneCode'] = gdjs.Obby_32sceneCode;
