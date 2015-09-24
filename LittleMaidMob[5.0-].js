//Little Maid Mob Mod
//Original Version was created by Kaspy

var File=java.io.File;
var Environment=android.os.Environment;
var BufferedReader=java.io.BufferedReader;

//0
ModPE.overrideTexture("images/mob/SackMaid.png","http://i.imgur.com/HDMU4gp.png");
//1
ModPE.overrideTexture("images/mob/RedMaid.png","http://i.imgur.com/MkEnefH.png");
//2
ModPE.overrideTexture("images/mob/GreenMaid.png","http://i.imgur.com/PD6FzwY.png");
//3
ModPE.overrideTexture("images/mob/BeansMaid.png","http://i.imgur.com/MbbwEe5.png");
//4
ModPE.overrideTexture("images/mob/LazuliMaid.png","http://i.imgur.com/kUJ46TX.png");
//5
ModPE.overrideTexture("images/mob/PurpleMaid.png","http://i.imgur.com/xcbII8o.png");
//6
ModPE.overrideTexture("images/mob/CyanMaid.png","http://i.imgur.com/SWI21F7.png");
//7
ModPE.overrideTexture("images/mob/LightMaid.png","http://i.imgur.com/o7UtWQK.png");
//8
ModPE.overrideTexture("images/mob/GrayMaid.png","http://i.imgur.com/KVJAYJ7.png");
//9
ModPE.overrideTexture("images/mob/PinkMaid.png","http://i.imgur.com/eBf5VYS.png");
//10
ModPE.overrideTexture("images/mob/LimeMaid.png","http://i.imgur.com/OnvKGPD.png");
//11
ModPE.overrideTexture("images/mob/YellowMaid.png","http://i.imgur.com/4w6kILO.png");
//12
ModPE.overrideTexture("images/mob/BlueMaid.png","http://i.imgur.com/hHEXSZK.png");
//13
ModPE.overrideTexture("images/mob/MagentaMaid.png","http://i.imgur.com/W4dHRVD.png");
//14
ModPE.overrideTexture("images/mob/OrangeMaid.png","http://i.imgur.com/mB0Q4Bu.png");
//15
ModPE.overrideTexture("images/mob/MealMaid.png","http://i.imgur.com/T5VoOrQ.png");
//16
ModPE.overrideTexture("images/mob/WildMaid.png","http://i.imgur.com/S2tEQgV.png");
//17
ModPE.overrideTexture("images/mob/PokenaruMaid.png","http://i.imgur.com/o1Du1k2.png");

//219id-00hp

var maids=[];
var use=3;//id,s,skin

function newLevel(){
	getD(File(Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/lmmmod.sfile"));
}

function entityAddedHook(e){
	checkMaid(e,Entity.getHealth(e));
}

function getD(f){
	if(f.exsits()){
		var r=BufferedReader(f);
		var t=r.readLine();
		r.close();
		maids=t.splice(",");
	}else{
		f.createNewFile();
	}
}

function checkMaid(e,h){
	if(Math.floor(h/1000000)==219){
		i=parseInt(toString(h).slice(3,6));
		if(maids[maids.indexOf(i+1)]==0){
			Entity.setRenderType(e,wmaidRenderType.renderType);
		}else{
			Entity.setRenderType(e,maidRenderType.renderType);
		}
	}
}

//Maid Renderers by Kaspy
function addMaidRenderType(renderer){
	var model=renderer.getModel();
	var head=model.getPart("head").clear();
	var body=model.getPart("body").clear();
	var rArm=model.getPart("rightArm").clear();
	var lArm=model.getPart("leftArm").clear();
	var rLeg=model.getPart("rightLeg").clear();
	var lLeg=model.getPart("leftLeg").clear();
	head.clear();
	head.setTextureOffset(0,0,true);
	head.addBox(-4,-1,-4,8,8,8);
	body.clear();
	body.setTextureOffset(32,8,true);
	body.addBox(-3,7,-2,6,7,4);
	body.setTextureOffset(0,16,true);
	body.addBox(-4,12,-4,8,8,8);
	rArm.clear();
	rArm.setTextureOffset(48,0,true);
	rArm.addBox(0,5,-2,2,8,2);
	lArm.clear();
	lArm.setTextureOffset(56,0,true);
	lArm.addBox(-2,5,-2,2,8,2);
	rLeg.clear();
	rLeg.setTextureOffset(32,19,true);
	rLeg.addBox(-1,3,-2,3,9,4);
	lLeg.clear();
	lLeg.setTextureOffset(32,19,true);
	lLeg.addBox(-2,3,-2,3,9,4);
}
function addWmaidRenderType(renderer){
	var model=renderer.getModel();
	var var2=0;
	var head=model.getPart("head").clear();
	var body=model.getPart("body").clear();
	var rArm=model.getPart("rightArm").clear();
	var lArm=model.getPart("leftArm").clear();
	var rLeg=model.getPart("rightLeg").clear();
	var lLeg=model.getPart("leftLeg").clear();
	head.clear();
	head.setTextureOffset(0,0,true);
	head.addBox(-4,-1,-4,8,8,8);
	body.clear();
	body.setTextureOffset(32,8,true);
	body.addBox(-3,7,-2,6,7,4);
	body.setTextureOffset(0,16,true);
	body.addBox(-4,12,-4,8,8,8);
	rArm.clear();
	rArm.setTextureOffset(48,0,true);
	rArm.addBox(0,5,-2,2,8,2);
	lArm.clear();
	lArm.setTextureOffset(56,0,true);
	lArm.addBox(-2,5,-2,2,8,2);
	rLeg.clear();
	rLeg.setTextureOffset(32,19,true);
	rLeg.addBox(-1,3,-2,3,9,4);
	lLeg.clear();
	lLeg.setTextureOffset(32,19,true);
	lLeg.addBox(-2,3,-2,3,9,4);
}
var maidRenderType=Renderer.createHumanoidRenderer();
addMaidRenderType(maidRenderType);
var wmaidRenderType=Renderer.createHumanoidRenderer();
addWmaidRenderType(wmaidRenderType);