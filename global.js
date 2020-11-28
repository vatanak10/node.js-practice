// setTimeout(function(){
//     console.log('Go!')
// },4000);

// setTimeout(function(){
//     console.log('One..')
// },3000);

// setTimeout(function(){
//     console.log('Two..')
// },2000);

/*
setTimeout(function(){
    console.log('Three..')
},1000);
*/

var timer = 0;

var time = setInterval(function(){
    timer+=1;
    console.log(timer+' seconds has passed')
    if(timer>9){
        clearInterval(time);
    }
}, 1000);
