function timed(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timed,1000)