//Little Maid Mob Mod
//Original Version was created by Kaspy

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

var selectedEntity;
var entityIsSelected=false,teleported=false,deathAdd=false,displayID=true;
var countdown=0,idMaid=-1,saveNumber=-1,attackedMaid=0;
var wmaid;
var maidvi=0;
var startGame=0;
var satouReturned=Math.floor((Math.random()*5)+4);
var maid=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var savex=[0];
var savey=[0];
var savez=[0];
var saveskin=[0];
var savestates=[0];
var readx=[0];
var ready=[0];
var readz=[0];
var readskin=[0];
var readstates=[0];
var readmaid=[0];
var dir=new android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftWorlds/";
var filewrite=null;
var filewriter=null;
var fileread=null;
var filereader=null;

function entityAddedHook(entity){
	maidsavebb=Entity.getEntityTypeId(entity);
	if(maidsavebb==15){
		if(maidvi==0){
			/*Entity.setMobSkin(entity,"mob/WildMaid.png");
			Entity.setRenderType(entity,wmaidRenderType.renderType);*/
			if(startGame<=1){
				readmaid.push(entity);
			}
		}else if(maidvi==1){
			maidvi=0;
		}
	}
}

function useItem(x,y,z,itemId,blockId){
	if(itemId==383){
		if(Player.getCarriedItemData()==15){
			maidvi=1;
		}
	}
}

function attackHook(attacker,victim){
	var item=Player.getCarriedItem();
	var render=Entity.getRenderType(victim);
	if((render==wmaidRenderType.renderType||render==maidRenderType.renderType)&&(item==325||item==354||item==351||item==353)&&Player.isPlayer(attacker)){
		if(item==325){
			if(Player.getCarriedItemData()==0){
				addItemInventory(325,1,1);
				if(Level.getGameMode()==1||invContains(325,1)){
					var maiddeduct=invDeduct(325,1,0);
				}
				preventDefault();
			}
			if(Player.getCarriedItemData()==8){
				Entity.setMobSkin(victim,"mob/PokenaruMaid.png");
				addItemInventory(325,1,0);
				if(Level.getGameMode()==1||invContains(325,1)){
					var maiddeduct=invDeduct(325,1,8);
				}
				preventDefault();
			}
		}else if(item==354&&render==wmaidRenderType.renderType){
			var x=Entity.getX(victim);
			var y=Entity.getY(victim);
			var z=Entity.getZ(victim);
			var skin=Entity.getMobSkin(victim);
			Entity.remove(victim);
			preventDefault();
			spawnmaid(x,y-1,z);
			Level.addParticle(14,x+0.5,y+1.5,z+0.5,0,0,0,2);
			Level.addParticle(14,x+1,y+1.5,z+0.5,0,0,0,1);
			Level.addParticle(14,x-0.5,y+1.5,z-0.5,0,0,0,2);
			Level.addParticle(14,x+0.5,y+1.5,z+1,0,0,0,1);
			Level.addParticle(14,x-1,y+1.5,z-0.5,0,0,0,1);
			Level.addParticle(14,x-0.5,y+1.5,z-1,0,0,0,1);
			if(Level.getGameMode()==1||invContains(354,1)){
				var maiddeduct=invDeduct(354,1,0);
			}
			if(skin!="mob/WildMaid.png"){
				Entity.setMobSkin(maid[idMaid][0],skin);
			}
		}else if(item==353&&render==maidRenderType.renderType){
			var x=Entity.getX(victim);
			var y=Entity.getY(victim);
			var z=Entity.getZ(victim);
			var count=Player.getCarriedItemCount();
			health=Entity.getHealth(victim);
			if(health>0){
				preventDefault();
				Level.addParticle(14,x+0.5,y+1.5,z+0.5,0,0,0,2);
				Level.addParticle(14,x+1,y+1.5,z+0.5,0,0,0,1);
				Level.addParticle(14,x-0.5,y+1.5,z-0.5,0,0,0,2);
				Level.addParticle(14,x+0.5,y+1.5,z+1,0,0,0,1);
				Level.addParticle(14,x-1,y+1.5,z-0.5,0,0,0,1);
				Level.addParticle(14,x-0.5,y+1.5,z-1,0,0,0,1);
				if(health+1<=10){
					Entity.setHealth(victim,health+1);
				}
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),353,count-1,0);}
			}
		}else if(item==351){
			var temp=Player.getCarriedItemData();
			var count=Player.getCarriedItemCount();
			if(temp==0){
				Entity.setMobSkin(victim,"mob/SackMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==1){
				Entity.setMobSkin(victim,"mob/RedMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==2){
				Entity.setMobSkin(victim,"mob/GreenMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==3){
				Entity.setMobSkin(victim,"mob/BeansMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==4){
				Entity.setMobSkin(victim,"mob/LazuliMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==5){
				Entity.setMobSkin(victim,"mob/PurpleMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==6){
				Entity.setMobSkin(victim,"mob/CyanMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==7){
				Entity.setMobSkin(victim,"mob/LightMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==8){
				Entity.setMobSkin(victim,"mob/GrayMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==9){
				Entity.setMobSkin(victim,"mob/PinkMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==10){
				Entity.setMobSkin(victim,"mob/LimeMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==11){
				Entity.setMobSkin(victim,"mob/YellowMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==12){
				Entity.setMobSkin(victim,"mob/BlueMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==13){
				Entity.setMobSkin(victim,"mob/MagentaMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==14){
				Entity.setMobSkin(victim,"mob/OrangeMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}else if(temp==15){
				Entity.setMobSkin(victim,"mob/MealMaid.png");
				if(count-1==0){Entity.setCarriedItem(Player.getEntity(),0,0,0);}else{Entity.setCarriedItem(Player.getEntity(),351,count-1,temp);}
				preventDefault();
			}
		}else{
			preventDefault();
		}
	}else{
		selectedEntity=victim;
		entityIsSelected=true;
		teleported=false;
		if(render==maidRenderType.renderType){
			entityIsSelected=false;
			teleported=false;
			preventDefault();
			for(var i5=0;i5<=idMaid;i5++){
				if(victim==maid[i5][0]){
					Level.playSoundEnt(maid[i5][0],"random.hurt",100,30);
					ModPE.showTipMessage("Maidhealth:"+(Entity.getHealth(maid[i5][0])/2));
					break;
				}
			}
		}
	}
}

function deathHook(murderer,victim){
	if(victim==selectedEntity){
		entityIsSelected=false;
		teleported=false;
	}
	for(var i=0;i<=idMaid;i++){
		if(victim==maid[i][0]){
			preventDefault();
			Level.playSoundEnt(maid[i][0],"random.hurt",1000,15);
			satouReturned=Math.floor((Math.random()*5)+4);
			Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,353,satouReturned,0);
			maid.splice(i,1);
			attackedMaid--;
			idMaid--;
			if(idMaid==-1){
				entityIsSelected=false;
				teleported=false;
			}
		}
		if(victim==wmaid){
			preventDefault();
			satouReturned=Math.floor((Math.random()*5)+4);
			Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,353,satouReturned,0);
			entityIsSelected=false;
			teleported=false;
		}
	}
}

function leaveGame(){
	FileWriteOpen(dir+Level.getWorldDir()+"/littleMaidMob.Maid");
	attackedMaid=0;
	entityIsSelected=false;
	teleported=false;
	startGame=0;
	idMaid=-1;
	readx=[0];
	ready=[0];
	readz=[0];
	readskin=[0];
	readstates=[0];
	readmaid=[0];
}

function newLevel(){
	var file=new java.io.File(dir+Level.getWorldDir()+"/littleMaidMob.Maid").exists();
	if(file){
		FileReadOpen(dir+Level.getWorldDir()+"/littleMaidMob.Maid");
		var temp=fileread.readLine();
		while(temp!=null){
			temp=temp.split(":");
			readx.push(parseInt(temp[0]));
			ready.push(parseInt(temp[1]));
			readz.push(parseInt(temp[2]));
			readskin.push(temp[3]);
			readstates.push(parseInt(temp[4]));
			var temp=fileread.readLine();
		}
		FileReadClose();
	}else{
		CreateFile(dir+Level.getWorldDir(),"littleMaidMob.Maid");
	}
	savex=[0];
	savey=[0];
	savez=[0];
	saveskin=[0];
	savestates=[0];
}
function entityRemovedHook(entity){
	var type=Entity.getEntityTypeId(entity);
	if(type==15){
		var health=Entity.getHealth(entity);
		var skin=Entity.getMobSkin(entity);
		var render=Entity.getRenderType(entity);
		if(health>0&&skin.indexOf("vill")==-1){
			savex.push(Math.floor(Entity.getX(entity)));
			savey.push(Math.floor(Entity.getY(entity)));
			savez.push(Math.floor(Entity.getZ(entity)));
			saveskin.push(skin);
			if(render==maidRenderType.renderType){
				savestates.push(0);
			}else{
				savestates.push(1);
			}
		}
	}
}
function modTick(){
	if(startGame<=1){
		startGame++;
	}else if(startGame==2){
		for(var temp=0;temp<readmaid.length;temp++){
			var x=Entity.getX(readmaid[temp]);
			var y=Entity.getY(readmaid[temp]);
			var z=Entity.getZ(readmaid[temp]);
			var xx=Math.floor(x);
			var yy=Math.floor(y);
			var zz=Math.floor(z);
			var temp1=2;
			while(temp1<readx.length){
				if(readx[temp1]==xx&&ready[temp1]==yy&&readz[temp1]==zz){
					if(readstates[temp1]==0){
						spawnmaid(x,y-1,z);
						Entity.setMobSkin(maid[idMaid][0],readskin[temp1]);
					}else{
						wmaid=Level.spawnMob(x,y,z,15,readskin[temp1]);
						Entity.setHealth(wmaid,5);
						Entity.setRenderType(wmaid,wmaidRenderType.renderType);
					}
					Entity.remove(readmaid[temp]);
					readx.splice(temp1,1);
					ready.splice(temp1,1);
					readz.splice(temp1,1);
					readskin.splice(temp1,1);
					readstates.splice(temp1,1);
					break;
				}else{
					temp1++;
				}
			}
		}
		for(var temp=2;temp<readx.length;temp++){
			if(readstates[temp]==0){
				spawnmaid(readx[temp],ready[temp]-1,readz[temp]);
				Entity.setMobSkin(maid[idMaid][0],readskin[temp]);
			}else{
				wmaid=Level.spawnMob(readx[temp],ready[temp],readz[temp],15,readskin[temp]);
				Entity.setHealth(wmaid,5);
				Entity.setRenderType(wmaid,wmaidRenderType.renderType);
			}
		}
		startGame++;
	}else{
		var SpawnMob=Math.floor((Math.random()*60)+1);
		switch(SpawnMob){
			case 1:
				ranx=Math.floor(Math.random()*64)-32;
				ranz=Math.floor(Math.random()*64)-32;
			if(getTile(getPlayerX()+ranx,getPlayerY()-2,getPlayerZ()+ranz)!=0 && Level.getBrightness(getPlayerX()+ranx,getPlayerY()-2,getPlayerZ()+ranz)==15){
				wmaid=Level.spawnMob(getPlayerX()+ranx,getPlayerY()-1,getPlayerZ()+ranz,15,"mob/WildMaid.png");
				Entity.setHealth(wmaid,5);
				Entity.setRenderType(wmaid,wmaidRenderType.renderType);
		}
			break;
		}
	}
	if(idMaid!=-1){
		for(var i=0;i<=idMaid;i++){
			var coX=Math.round(Entity.getX(maid[i][0]));
			var coZ=Math.round(Entity.getZ(maid[i][0]));
			var vX=0,vZ=0;
			if(entityIsSelected){
				countdown++;
				var sEX=Math.round(Entity.getX(selectedEntity));
				var sEY=Math.round(Entity.getY(selectedEntity));
				var sEZ=Math.round(Entity.getZ(selectedEntity));
				var yaw=Math.atan2((sEZ-coZ),(sEX-coX));
				if(teleported==false){
					for(var t=0;t<=idMaid;t++){
						Entity.setPosition(maid[t][0],(sEX+1),sEY,sEZ);
					}
					teleported=true;
				}
				if((sEX-1)>coX){
					vX=0.2;
				}
				if((sEZ-1)>coZ){
					vZ=0.2;
				}
				if(coX>(sEX+1)){
					vX=-0.2;
				}
				if(coZ>(sEZ+1)){
					vZ=-0.2;
				}
				if(vX!=0){
					Entity.setVelX(maid[i][0],vX);
				}
				if(vZ!=0){
					Entity.setVelZ(maid[i][0],vZ);
				}
				Entity.setRot(maid[i][0],(((yaw*180)/3.14)+270),Entity.getPitch(maid[i][0]));
				if(countdown==20){
					var dXZ=Math.pow((sEX-coX),2)+Math.pow((sEZ-coZ),2);
					if(dXZ<=3.5){
						simulateAttackHook(i);
					}
					if(dXZ>=20){
						Entity.setVelY(maid[i][0],0.4);
					}
					countdown=0;
				}
			}else{
				var sEX=Math.round(Player.getX());
				var sEY=Math.round(Player.getY());
				var sEZ=Math.round(Player.getZ());
				var yaw=Math.atan2((sEZ-coZ),(sEX-coX));
				if((sEX-3)>coX){
					vX=Math.random()/4;
				}else if(coX>(sEX+3)){
					vX=Math.random()/-4;
				}
				if((sEZ-3)>coZ){
					vZ=Math.random()/4;
				}else if(coZ>(sEZ+3)){
					vZ=Math.random()/-4;
				}
				Entity.setVelX(maid[i][0],vX);
				Entity.setVelZ(maid[i][0],vZ);
				Entity.setRot(maid[i][0],(((yaw*180)/3.14)+270),Entity.getPitch(maid[i][0]));
				if(Math.pow((sEX-coX),2)+Math.pow((sEZ-coZ),2)>=30){
					if(maid[i][2]>=60){
						maid[i][2]=0;
						Entity.setVelY(maid[i][0],0.4);
					}
					maid[i][2]+=Math.floor(Math.random()*5);
				}
			}
		}
	}

}

//0
function spawnmaid(x,y,z){
	idMaid++;
	maid[idMaid][0]=Level.spawnMob(x,y+1,z,15,"mob/SackMaid.png");
	if(!(maid[idMaid][1]>=1)){
		maid[idMaid][1]=1;
	}
	maid[idMaid][2]=0;
	if(!(maid[idMaid][3]>=0)){
		maid[idMaid][3]=0;
	}
	Entity.setRenderType(maid[idMaid][0],maidRenderType.renderType);
	Entity.setHealth(maid[idMaid][0],10);
}
//16
function spawnwmaid(x,y,z){
	Entity.remove(wmaid);
	wmaid=Level.spawnMob(x,y,z,15,"mob/WildMaid.png");
	Entity.setRenderType(wmaid,wmaidRenderType.renderType);
	Entity.setHealth(wmaid,5);
	wmaidSpawned=true;
}
function simulateAttackHook(ID){
	var mobHealth=Entity.getHealth(selectedEntity);
	if(mobHealth<=(maid[ID][1]*2)){
		attackedMaid=0;
		entityIsSelected=false;
		teleported=false;
		deathAdd=true;
	}
	Entity.setHealth(selectedEntity,(mobHealth-((maid[ID][1]*2)-1)));
	Entity.setFireTicks(selectedEntity,1);
	//ModPE.showTipMessage("MobHP:"+((mobHealth/2)-1));
	if(deathAdd){
		deathAdd=false;
		maid[ID][3]++;
		if((maid[ID][3]%(5*maid[ID][1]))==0){
			maid[ID][1]++;
			maid[ID][3]=0;
		}
	}
}

function invContains(itemId,count){
	var maidhasItem=false;
	for(var i=0;i<36;i++){
		if(Player.getInventorySlot(i)==itemId&&Player.getInventorySlotCount(i)>=count){
			maidhasItem=true;
			break;
		}
	}
	return maidhasItem;
}

function invDeduct(itemId,count,itemData){
	var maiddidDeduct=false;

	for(var i=0;i<36;i++){
		if(Player.getInventorySlot(i)==itemId&&Player.getInventorySlotData(i)==itemData&&Player.getInventorySlotCount(i)>=count){
			var remainder=Player.getInventorySlotCount(i)-count;
			Player.clearInventorySlot(i);
			if(remainder>0){
				Player.addItemInventory(itemId,remainder,itemData);
			}
			maiddidDeduct=true;
			break;
		}
	}
	return maiddidDeduct;
}





function addMaidRenderType(renderer){

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

function FileReadOpen(filename){
	try{
		filereader = new java.io.FileReader(filename);
		fileread=new java.io.BufferedReader(filereader);
		return true;
	}catch(err){
		return false;
	}
}
function FileReadClose(){
	try{
		fileread.close();
		filereader.close();
	}catch(err){
	}
}
function FileWriteOpen(filename){
	try{
		filetemp=java.io.File(filename);
		filewriter = new java.io.FileWriter(filetemp,false);
		filewrite=new java.io.BufferedWriter(filewriter);
		for(var temp=0;temp<savex.length;temp++){
			filewrite.write(savex[temp]+":"+savey[temp]+":"+savez[temp]+":"+saveskin[temp]+":"+savestates[temp]+"\n");
		}
		FileWriteClose();
	}catch(err){
	}
}
function FileWriteClose(){
	try{
		filewrite.close();
		filewriter.close();
	}catch(err){
	}
}
function CreateFile(folder,filename){
	try{
		createfile=java.io.File(folder+"/"+filename);
		return createfile.createNewFile();
	}catch(err){
		createfile=java.io.File(folder);
		createfile.mkdirs();
		createfile=java.io.File(folder+"/"+filename);
		return createfile.createNewFile();
	}
}
