function buildFirstLevDiv(uniqueId)
{
  let s=document.querySelector('script');
  let div=document.createElement('div');
  
  div.id=uniqueId;
  
  s.insertAdjacentElement("beforebegin", div);

  return(div);
}

function buildPairLevDiv(uniqueId, nLevelDiv)
{
  let div=document.createElement('div');
  
  div.id=uniqueId;
  
  nLevelDiv.insertAdjacentElement("beforebegin", div);

  return(div);
}

function buildTopSonLevel(uniqueId, sonLevelDiv, tag)
{
  let div=document.createElement(tag);
  
  div.id=uniqueId;
  
  sonLevelDiv.insertAdjacentElement("afterbegin", div);

  return(div);
}

function buildBottomSonLevel(uniqueId, sonLevelDiv, tag)
{
  let div=document.createElement(tag);
  
  console.log(tag,div);
  div.id=uniqueId;
  
  sonLevelDiv.insertAdjacentElement("beforeend", div);

  return(div);
}

function buildHeaderButtons(){

    for (let i=0;i<aHButtonTemp.length;i++){
        //console.log(aHButtonTemp[i]);
        let buttonId="headButtonId_"+i;
        bHeadButtons[i] = buildBottomSonLevel(buttonId,dHeadRow,"button");
        bHeadButtons[i].classList.add("genButtons");
        bHeadButtons[i].classList.add("inLineBlock");
        bHeadButtons[i].textContent = aHButtonTemp[i];
        bHeadButtons[i].style.width = currentIHeadLogoStyle.width;
        bHeadButtons[i].style.height = currentIHeadLogoStyle.height;
    }
}

function buildHeaderImg(){
    iHeadProfileImg=buildBottomSonLevel("profile",dHeadRow,"img");
    iHeadProfileImg.src=currentProfileImage;
    iHeadProfileImg.classList.add("inLineBlock");
    iHeadProfileImg.classList.add("headImages");    
}

function setCurrentProfile(){
    switch (currentProfile){
        case "User":
            aHButtonTemp = aUserProfileBtnNames.slice();
            aVButtonTemp = aUserProfileVertBtnNames.slice();
            currentProfileImage="assets/img/userImg.png";
            break;
        case "Administrator":
            aHButtonTemp = aAdminProfileBtnNames.slice();
            aVButtonTemp = aAdminProfileVertBtnNames.slice();
            currentProfileImage="assets/img/adminImg.jpg"
            break;
        case "Controller":
            aHButtonTemp = aControllerProfileBtnNames.slice();
            aVButtonTemp = aControllerProfileVertBtnNames.slice();
            currentProfileImage="assets/img/controllerImg.jpg"
            break;
        default:
            console.log("Default???");
            break;
    }
    
}

function builVertBtnFrame(){
    //Build the button list
for (let i=0;i<aVButtonTemp.length;i++){
    let buttonIdItem="vertButtonItemId_"+i;
    let buttonId="vertButtonId_"+i;
    bVertButtonsItem[i] = buildBottomSonLevel(buttonIdItem,uVBtnList,"li");   
    bVertButtons[i] = buildBottomSonLevel(buttonId,bVertButtonsItem[i],"button");
    console.log("bVerButtons of i: ",bVertButtons[i]);
    bVertButtons[i].classList.add("genButtons");
    bVertButtons[i].textContent = aVButtonTemp[i];
}

}
    
//Global var 
let currentProfile="User"; //Current profile is user
let currentProfileImage="assets/img/userImg.png";

//HTML BLOCKS
let dBody=null;
let bHeadButtons=[];
let bVertButtonsItem=[];
let bVertButtons=[];
let aHButtonTemp=[];
let aVButtonTemp=[];
let iHeadProfileImg = null;
let dMainFrame = null;
let dHeadRow = null;
let iHeadLogo = null;
let dBodyRow = null;
let aVertButton = null;
let aCenterSection = null;
let aNewsFeed = null;
let uVBtnList = null;

//STYLES
let currentIHeadLogoStyle = null;
let currentStyle=null;
let currentWidth=0;
let currentHeigth=0;

//Find the Body
dBody=document.querySelector("body");
currentStyle=getComputedStyle(dBody)
currentWidth=parseInt(currentStyle.width);
currentHeigth=parseInt(currentStyle.height);
//console.log(currentWidth, currentHeigth);
//Assign some class to Body
dBody.classList.add("backGray");

//Create main frame of the single Page
dMainFrame=buildFirstLevDiv("mainFrame");
dMainFrame.classList.add("backWhite");
//dimensions fo mainFrame
if (currentHeigth ==0){
    dMainFrame.style.height = cDbHeight+"px";
    console.log("set default body height",dMainFrame.style.height);
}//else
if (currentWidth ==cDbWdth){
    dMainFrame.style.width = cDbWdth+"px";
    console.log("set default body width",dMainFrame.style.width);
}//else

//Build the header row (logo - profile button - profile image)
// the row is a div first son of frame
dHeadRow=buildTopSonLevel("headerRow",dMainFrame,"div");
dHeadRow.classList.add("backBlue");
dHeadRow.classList.add("rowFrames");

dBodyRow=buildBottomSonLevel("bodyRow",dMainFrame,"div");
dBodyRow.classList.add("backRed");
dBodyRow.classList.add("rowFrames");

//dHeadRow
iHeadLogo=buildTopSonLevel("logo",dHeadRow,"img"); //First item in the dHeadRow row is an img
iHeadLogo.src="assets/img/logo-time2marketing.png";
iHeadLogo.classList.add("inLineBlock");
iHeadLogo.classList.add("headImages");

//dBodyRow
aVertButton = buildBottomSonLevel("vertButtonFrame",dBodyRow,"aside");
aVertButton.classList.add("inLineBlock");
aCenterSection = buildBottomSonLevel("centerFrame",dBodyRow,"aside");
aCenterSection.classList.add("inLineBlock");
aNewsFeed = buildBottomSonLevel("newsFrame",dBodyRow,"aside");
aNewsFeed.classList.add("inLineBlock");

uVBtnList = buildTopSonLevel("unordBtnList",aVertButton,"ul");
uVBtnList.classList.add("backGreen");


currentIHeadLogoStyle=getComputedStyle(iHeadLogo);

setCurrentProfile();

buildHeaderButtons();
buildHeaderImg();
builVertBtnFrame();
