//Little Maid Mob Mod
//Original Version was created by Kaspy

var File = java.io.File;
var Environment = android.os.Environment;
var BufferedReader = java.io.BufferedReader;

//0
ModPE.overrideTexture("images/mob/SackMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/SackMaid.png");
//1
ModPE.overrideTexture("images/mob/RedMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/RedMaid.png");
//2
ModPE.overrideTexture("images/mob/GreenMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/GreenMaid.png");
//3
ModPE.overrideTexture("images/mob/BeansMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/BeansMaid.png");
//4
ModPE.overrideTexture("images/mob/LazuliMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/LazuliMaid.png");
//5
ModPE.overrideTexture("images/mob/PurpleMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/PurpleMaid.png");
//6
ModPE.overrideTexture("images/mob/CyanMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/CyanMaid.png");
//7
ModPE.overrideTexture("images/mob/LightMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/LightMaid.png");
//8
ModPE.overrideTexture("images/mob/GrayMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/GrayMaid.png");
//9
ModPE.overrideTexture("images/mob/PinkMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/PinkMaid.png");
//10
ModPE.overrideTexture("images/mob/LimeMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/LimeMaid.png");
//11
ModPE.overrideTexture("images/mob/YellowMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/YellowMaid.png");
//12
ModPE.overrideTexture("images/mob/BlueMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/BlueMaid.png");
//13
ModPE.overrideTexture("images/mob/MagentaMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/MagentaMaid.png");
//14
ModPE.overrideTexture("images/mob/OrangeMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/OrangeMaid.png");
//15
ModPE.overrideTexture("images/mob/MealMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/MealMaid.png");
//16
ModPE.overrideTexture("images/mob/WildMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/WildMaid.png");
//17
ModPE.overrideTexture("images/mob/PokenaruMaid.png", "https://raw.githubusercontent.com/nao20010128nao/LittleMaidMob/master/assets/PokenaruMaid.png");

//219id-00hp

var maids = [];
var use = 3;//id,s,skin

function newLevel() {
    getD(File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/lmmmod.sfile"));
}

function entityAddedHook(e) {
    checkMaid(e, Entity.getHealth(e));
}

function modTick() {
    cSpawn(Player.getX() + Math.floor(Math.random() * 50) - 25, Player.getY() + Math.floor(Math.random() * 10) - 5, Player.getZ() + Math.floor(Math.random * 50) - 25);
}

function getD(f) {
    if (f.exsits()) {
        var r = BufferedReader(f);
        var t = r.readLine();
        r.close();
        maids = t.splice(",");
        for (loop = 0; loop < maids.length / use; loop += use) {
            maids[loop] = parseInt(maids[loop]);
            maids[loop + 1] = parseInt(maids[loop + 1]);
        }
    } else {
        f.createNewFile();
    }
}

function checkMaid(e, h) {
    if (Math.floor(h / 1000000) == 219) {
        var i = parseInt(toString(h).slice(3, 6));
        if (maids[maids.indexOf(i) + 1] == 0) {
            Entity.setRenderType(e, wmaidRenderType.renderType);
        } else {
            Entity.setRenderType(e, maidRenderType.renderType);
        }
        Entity.setMobSkin(e, "images/mob/" + maids[maids.indexOf(i) + 2] + ".png");
    }
}

function cSpawn(x, y, z) {
    if (Level.getTile(x, y, z) == 0 && Level.getTile(x, y - 1, z) !== 0) {
        var i = maids.length / use + 1;
        Entity.setHealth(Entity.spawnMob(x, y, z, EntityType.PLAYER), 2190000020 + i * 100);
    }
}

//Maid Renderers by Kaspy
function addMaidRenderType(renderer) {
    var model = renderer.getModel();
    var head = model.getPart("head").clear();
    var body = model.getPart("body").clear();
    var rArm = model.getPart("rightArm").clear();
    var lArm = model.getPart("leftArm").clear();
    var rLeg = model.getPart("rightLeg").clear();
    var lLeg = model.getPart("leftLeg").clear();
    head.clear();
    head.setTextureOffset(0, 0, true);
    head.addBox(-4, -1, -4, 8, 8, 8);
    body.clear();
    body.setTextureOffset(32, 8, true);
    body.addBox(-3, 7, -2, 6, 7, 4);
    body.setTextureOffset(0, 16, true);
    body.addBox(-4, 12, -4, 8, 8, 8);
    rArm.clear();
    rArm.setTextureOffset(48, 0, true);
    rArm.addBox(0, 5, -2, 2, 8, 2);
    lArm.clear();
    lArm.setTextureOffset(56, 0, true);
    lArm.addBox(-2, 5, -2, 2, 8, 2);
    rLeg.clear();
    rLeg.setTextureOffset(32, 19, true);
    rLeg.addBox(-1, 3, -2, 3, 9, 4);
    lLeg.clear();
    lLeg.setTextureOffset(32, 19, true);
    lLeg.addBox(-2, 3, -2, 3, 9, 4);
}
function addWmaidRenderType(renderer) {
    var model = renderer.getModel();
    var var2 = 0;
    var head = model.getPart("head").clear();
    var body = model.getPart("body").clear();
    var rArm = model.getPart("rightArm").clear();
    var lArm = model.getPart("leftArm").clear();
    var rLeg = model.getPart("rightLeg").clear();
    var lLeg = model.getPart("leftLeg").clear();
    head.clear();
    head.setTextureOffset(0, 0, true);
    head.addBox(-4, -1, -4, 8, 8, 8);
    body.clear();
    body.setTextureOffset(32, 8, true);
    body.addBox(-3, 7, -2, 6, 7, 4);
    body.setTextureOffset(0, 16, true);
    body.addBox(-4, 12, -4, 8, 8, 8);
    rArm.clear();
    rArm.setTextureOffset(48, 0, true);
    rArm.addBox(0, 5, -2, 2, 8, 2);
    lArm.clear();
    lArm.setTextureOffset(56, 0, true);
    lArm.addBox(-2, 5, -2, 2, 8, 2);
    rLeg.clear();
    rLeg.setTextureOffset(32, 19, true);
    rLeg.addBox(-1, 3, -2, 3, 9, 4);
    lLeg.clear();
    lLeg.setTextureOffset(32, 19, true);
    lLeg.addBox(-2, 3, -2, 3, 9, 4);
}
var maidRenderType = Renderer.createHumanoidRenderer();
addMaidRenderType(maidRenderType);
var wmaidRenderType = Renderer.createHumanoidRenderer();
addWmaidRenderType(wmaidRenderType);