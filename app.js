var gunsmithTab = document.getElementById("gunsmith");
var gunsmithTitle = document.getElementById("gunsmith-title");
var gunsmithWords = document.getElementById("gunsmith-words");

var glockTab = document.getElementById("glock");
var glockTitle = document.getElementById("glock-title");
var glockWords = document.getElementById("glock-words");

var transferTab = document.getElementById("transfer");
var transferTitle = document.getElementById("transfer-title");
var transferWords = document.getElementById("transfer-words");

var cerakoteTab = document.getElementById("cerakote");
var cerakoteTitle = document.getElementById("cerakote-title");
var cerakoteWords = document.getElementById("cerakote-words");

var stipplingTab = document.getElementById("stippling");
var stipplingTitle = document.getElementById("stippling-title");
var stipplingWords = document.getElementById("stippling-words");

var aeroTab = document.getElementById("aero");
var aeroTitle = document.getElementById("aero-title");
var aeroWords = document.getElementById("aero-words");

function turnOnGunsmith() {
    gunsmithTitle.style.display = "none";
    gunsmithWords.style.display = "block";
}

function turnOffGunsmith() {
    gunsmithTitle.style.display = "block";
    gunsmithWords.style.display = "none";
}

function turnOnGlock() {
    glockTitle.style.display = "none";
    glockWords.style.display = "block";
}

function turnOffGlock() {
    glockTitle.style.display = "block";
    glockWords.style.display = "none";
}


function turnOnTransfer() {
    transferTitle.style.display = "none";
    transferWords.style.display = "block";
}

function turnOffTransfer() {
    transferTitle.style.display = "block";
    transferWords.style.display = "none";
}


function turnOnCerakote() {
    cerakoteTitle.style.display = "none";
    cerakoteWords.style.display = "block";
}

function turnOffCerakote() {
    cerakoteTitle.style.display = "block";
    cerakoteWords.style.display = "none";
}


function turnOnStippling() {
    stipplingTitle.style.display = "none";
    stipplingWords.style.display = "block";
}

function turnOffStippling() {
    stipplingTitle.style.display = "block";
    stipplingWords.style.display = "none";
}


function turnOnAero() {
    aeroTitle.style.display = "none";
    aeroWords.style.display = "block";
}

function turnOffAero() {
    aeroTitle.style.display = "block";
    aeroWords.style.display = "none";
}


gunsmithTab.addEventListener('mouseover', turnOnGunsmith);
glockTab.addEventListener('mouseover', turnOnGlock);
transferTab.addEventListener('mouseover', turnOnTransfer);
cerakoteTab.addEventListener('mouseover', turnOnCerakote);
stipplingTab.addEventListener('mouseover', turnOnStippling);
aeroTab.addEventListener('mouseover', turnOnAero);

gunsmithTab.addEventListener('mouseleave', turnOffGunsmith);
glockTab.addEventListener('mouseleave', turnOffGlock);
transferTab.addEventListener('mouseleave', turnOffTransfer);
cerakoteTab.addEventListener('mouseleave', turnOffCerakote);
stipplingTab.addEventListener('mouseleave', turnOffStippling);
aeroTab.addEventListener('mouseleave', turnOffAero);

var menuBtn = document.getElementById("menuBtn");
var closeBtn = document.getElementById("closeBtn");
var menuHeader = document.getElementById("mobile-menu");

function openMenu() {
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    menuHeader.style.right = "0";
}

function closeMenu() {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    menuHeader.style.right = "100%";
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
