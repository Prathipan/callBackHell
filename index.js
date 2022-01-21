// const arr = [1,2,3,4,5,6,7,8,9,10];

// // arr.slice().reverse().forEach(x => console.log(x))
// function showmessage(cb){
//     var msg = "happy birthday";
//     cb(msg);
// }

// function execute(arr,cb){
//         setTimeout(function(){
//             arr.slice().reverse().forEach(x => {
//             console.log(x);
//         },1000);
//         cb();
//     });
    
// }
//   execute(arr,function(){
//         showmessage(function(msg){
//             console.log(msg);
//         })     
        
//     });

var count = 11;

setTimeout(function(){
     document.querySelector(".display").innerHTML = "Countdown starts";
     setTimeout(function(){
         count--;
         document.querySelector(".display").innerHTML = count;
         setTimeout(function(){
            count--;
            document.querySelector(".display").innerHTML = count;
            setTimeout(function(){
                count--;
                document.querySelector(".display").innerHTML = count;
                setTimeout(function(){
                    count--;
                    document.querySelector(".display").innerHTML = count;
                    setTimeout(function(){
                        count--;
                        document.querySelector(".display").innerHTML = count;
                        setTimeout(function(){
                            count--;
                            document.querySelector(".display").innerHTML = count;
                            setTimeout(function(){
                                count--;
                                document.querySelector(".display").innerHTML = count;
                                setTimeout(function(){
                                    count--;
                                    document.querySelector(".display").innerHTML = count;
                                    setTimeout(function(){
                                        count--;
                                        document.querySelector(".display").innerHTML = count;
                                        setTimeout(function(){
                                            count--;
                                            document.querySelector(".display").innerHTML = count;
                                            setTimeout(function(){
                                                count--;
                                                document.querySelector(".display").innerHTML = "Happy Birthday";
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
     },1000);
},1000);