gdjs.win_32sceneCode = {};
gdjs.win_32sceneCode.localVariables = [];
gdjs.win_32sceneCode.GDyou_9595win_9595textObjects1= [];
gdjs.win_32sceneCode.GDyou_9595win_9595textObjects2= [];
gdjs.win_32sceneCode.GDSkyBackgroundObjects1= [];
gdjs.win_32sceneCode.GDSkyBackgroundObjects2= [];


gdjs.win_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


};

gdjs.win_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win_32sceneCode.GDyou_9595win_9595textObjects1.length = 0;
gdjs.win_32sceneCode.GDyou_9595win_9595textObjects2.length = 0;
gdjs.win_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.win_32sceneCode.GDSkyBackgroundObjects2.length = 0;

gdjs.win_32sceneCode.eventsList0(runtimeScene);
gdjs.win_32sceneCode.GDyou_9595win_9595textObjects1.length = 0;
gdjs.win_32sceneCode.GDyou_9595win_9595textObjects2.length = 0;
gdjs.win_32sceneCode.GDSkyBackgroundObjects1.length = 0;
gdjs.win_32sceneCode.GDSkyBackgroundObjects2.length = 0;


return;

}

gdjs['win_32sceneCode'] = gdjs.win_32sceneCode;
