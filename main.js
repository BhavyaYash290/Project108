function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XCw_XBAO0/', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomNumberR=Math.flow(Math.random() *255)+1;
        randomNumberB=Math.flow(Math.random() *255)+1;
        randomNumberG=Math.flow(Math.random() *255)+1;

        document.getElementById("result").innerHTML="I Can Hear : "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        document.getElementById("accuracy").style.color="rgb("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
        
        img1=document.getElementById("ear");

        if(results[0].label=="Meow"){
            img1.src="cat.gif";
        }
        else if(results[0].label=="Chirp"){
            img1.src="bird.gif";
        }
        else if(results[0].label=="Bark"){
            img1.src="dog-walking.gif";
        }
        else if(results[0].label=="Moo"){
            img1.src="cow.gif";
        }
    }
}