function preload() {

}

function setup() {
    canvas= createCanvas(400,500)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(500,300)
    video.hide()
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 550, 350)
}

function takeSnapshot() {
    save("snapshot.png")
}

function modelLoaded() {
    console.log("model loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("eyes x= " + results[0].pose.righteye.x)
        console.log("eyes y= " + results[0].pose.righteye.y)
    }
}