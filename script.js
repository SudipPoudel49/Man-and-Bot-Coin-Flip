function appLe(){
    var i=prompt("Enter number of entries  from 3 to 6");
    if(i>6||i<3){
        alert("Entry should be greater or equal to 3 but less or equal to 6");
        location.reload();
    }else if(i==3){
        document.getElementById("apple").innerHTML="You have entered "+i+" entries";
        document.getElementById("zero").remove();
        document.getElementById("for").remove();
        document.getElementById("fiv").remove();
        document.getElementById("six").remove();
        document.getElementById("foh").remove();
        document.getElementById("fot").remove();
        document.getElementById("fih").remove();
        document.getElementById("fit").remove();
        document.getElementById("sih").remove();
        document.getElementById("sit").remove();
    }else if(i==4){
        document.getElementById("apple").innerHTML="You have entered "+i+" entries";
        document.getElementById("zero").remove();
        document.getElementById("fiv").remove();
        document.getElementById("six").remove();
        document.getElementById("fih").remove();
        document.getElementById("fit").remove();
        document.getElementById("sih").remove();
        document.getElementById("sit").remove();
        
    }else if(i==5){
        document.getElementById("apple").innerHTML="You have entered "+i+" entries";
        document.getElementById("zero").remove();
        document.getElementById("six").remove();
        document.getElementById("sih").remove();
        document.getElementById("sit").remove();
        
    }else if(i==6){
        document.getElementById("apple").innerHTML="You have entered "+i+" entries";
        document.getElementById("zero").remove();
        
    }else{
        document.getElementById("apple").innerHTML="An Unknown Eror Occured";
    }
}
var p=randToRpsInt();
function randToRpsInt(){
    return Math.floor(Math.random() * 2);
}
function myfunc(){
if (p===0){
    document.getElementById("bo").innerHTML="Bot Choice= Head"
    
}else{
    document.getElementById("bo").innerHTML="Bot Choice= Tail" 
    
}
}
var ak=randToRpsInt();
function myAk(){
if (ak===0){
    document.getElementById("akm").innerHTML="Bot Choice= Head"
    
}else{
    document.getElementById("akm").innerHTML="Bot Choice= Tail" 
    
}
}
var m4=randToRpsInt();

function myM4(){
if (m4===0){
    document.getElementById("m4a").innerHTML="Bot Choice= Head"
    
}else{
    document.getElementById("m4a").innerHTML="Bot Choice= Tail" 
    
}
}
var mp40=randToRpsInt();

function myMp40(){
if (mp40===0){
    document.getElementById("mp4").innerHTML="Bot Choice= Head"
    
}else{
    document.getElementById("mp4").innerHTML="Bot Choice= Tail" 
    
}
}
var m10=randToRpsInt();

function myM1014(){
if (m10===0){
    document.getElementById("m10").innerHTML="Bot Choice= Head"
    
}else{
    document.getElementById("m10").innerHTML="Bot Choice= Tail" 
    
}
}
var awm=randToRpsInt();

function m82b(){
if (awm===0){
    document.getElementById("awm").innerHTML="Bot Choice= Head"
    
}else{
    document.getElementById("awm").innerHTML="Bot Choice= Tail" 
    
}
}
function nef(){
    var piro=document.getElementById("ttwo").innerHTML;
    if(piro==p){
        document.getElementById("console").innerHTML="10"
        
    }else{
        document.getElementById("console").innerHTML="1"
    }
}
function tik(){
    var pratik=document.getElementById("deep").innerHTML;
    if(pratik==ak){
        document.getElementById("pra").innerHTML="10"
        
    }else{
        document.getElementById("pra").innerHTML="1"
    }
}
function rajAce(){
    var rajesh=document.getElementById("raj").innerHTML;
    if(rajesh==m4){
        document.getElementById("ace").innerHTML="10"
        
    }else{
        document.getElementById("ace").innerHTML="1"
    }
}
function padMaa(){
    var padma=document.getElementById("pad").innerHTML;
    if(padma==mp40){
        document.getElementById("maa").innerHTML="10"
        
    }else{
        document.getElementById("maa").innerHTML="1"
    }
}
function sanDy(){
    var sandy=document.getElementById("san").innerHTML;
    if(sandy==m10){
        document.getElementById("dy").innerHTML="10"
        
    }else{
        document.getElementById("dy").innerHTML="1"
    }
}
function kaPil(){
    var kapil=document.getElementById("ka").innerHTML;
    if(kapil==awm){
        document.getElementById("pil").innerHTML="10"
        
    }else{
        document.getElementById("pil").innerHTML="1"
    }
}
function lastOne(){
    document.getElementById("last").innerHTML=document.getElementById("pil").innerHTML+document.getElementById("dy").innerHTML+document.getElementById("maa").innerHTML+document.getElementById("ace").innerHTML+document.getElementById("pra").innerHTML+document.getElementById("console").innerHTML;
}





