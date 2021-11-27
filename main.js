var prediction1;
var prediction2;

Webcam.set({height:300,width:350,image_format:'png',image_quality:90});

var camera = document.getElementById("camera");
Webcam.attach("#camera");

function TakePic()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("photoResult").innerHTML = "<img id='capturedPic' src="+data_uri+">";
    });
}

function CheckGester()
{
    img = document.getElementById("capturedPic");
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mqLt6AVKh/model.json", modelLoaded);
    classifier.classify(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
        console.error(error);
    else
    {
        console.log(results);

        name1 = document.getElementById("handGesterName1");
        name2 = document.getElementById("handGesterName2");
        emoji1 = document.getElementById("handGesterEmoji1");
        emoji2 = document.getElementById("handGesterEmoji2");

        if(results[0].label == "gang")
        {
            prediction1 = "gang sign";
            name1.innerHTML = "prediction 1 : " + prediction1;
            emoji1.innerHTML = "🤘";
        }
        else if(results[0].label == "thumbs up")
        {
            prediction1 = "thumbs up";
            name1.innerHTML = "prediction 1 : " + prediction1;
            emoji1.innerHTML = "👍";
        }
        else if(results[0].label == "good")
        {
            prediction1 = "amazing!!";
            name1.innerHTML = "prediction 1 :" + prediction1;
            emoji1.innerHTML = "👌";
        }

        if(results[1].label == "gang")
        {
            prediction2 = "gang sign";
            name2.innerHTML = "prediction 2 : " + prediction2;
            emoji2.innerHTML = "🤘";
        }
        else if(results[1].label == "thumbs up")
        {
            prediction2 = "thumbs up";
            name2.innerHTML = "prediction 2 : " + prediction2;
            emoji1.innerHTML = "👍";
        }
        else if(results[1].label == "good")
        {
            prediction2 = "amazing!!";
            name2.innerHTML = "prediction 2 :" + prediction2;
            emoji2.innerHTML = "👌";
        }
    }
}

function modelLoaded()
{
    console.log("model loaded!!");
}