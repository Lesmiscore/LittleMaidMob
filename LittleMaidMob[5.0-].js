//Little Maid Mob Mod
//Original Version was created by Kaspy

//デフォルトテクスチャのオーバーライド

//村人をすべてメイドにしたりしない仕様にしたい
//↓
//セーブ方法をHP式に変更

//そもそも使用するMob自体かえようかと

//アタック式の雇用は嫌だ

//ファイルセーブは自作を使用

//インベントリとか追加したい

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