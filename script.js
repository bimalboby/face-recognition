//Author : Bimal Boby



const video=document.getElementById("video")
async function beginVideo(){
    let stream =null;
    try{
         stream= await navigator.mediaDevices.getUserMedia({audio:false,video:true})
         video.srcObject=stream
    }
    catch(err){
        alert("unable to find device")
        console.log(err);
    }
}
beginVideo()