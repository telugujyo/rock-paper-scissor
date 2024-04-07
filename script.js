let win=0;
    let lose =0;
    let tie=0;


    // const p = document.getElementById("paras")
    // p.style.display="none";
    //     p.innerHTML="none";
    //     p.style.color="red";

    const winDisplay = document.getElementById("win")
const loseDisplay = document.getElementById("lose")
const tieDisplay = document.getElementById("tie")
const button = document.getElementById("autoplay")
const ui = document.getElementById("u")
const si = document.getElementById("s")
const re = document.getElementById("r")

    function userinput(value){
        ui.innerHTML=`User input: ${ value}`;
        console.log('input accepted',value);
      const sysInput =   systemInput();
      si.innerHTML=`System input: ${ sysInput}`;
      console.log('system input:',sysInput)

      play(value,sysInput)

      win = win.toString().padStart(3,0)
      lose = lose.toString().padStart(3,0)
      tie = tie.toString().padStart(3,0)
winDisplay.innerHTML=`win: ${win}`;
loseDisplay.innerHTML=`lose: ${lose}`;
tieDisplay.innerHTML=`tie: ${tie}`;
      console.log('win:',win,'lose:',lose,'tie:',tie)
    
    }

    function systemInput(){
        
        let a = Math.round(Math.random()*2)
// console.log("system input invoked",a)
if(a==0){
    return 'rock';
}else if(a==1){ 
    return 'paper';
}else if(a==2){
    return 'scissor';
}

    }

    function play(userIn,systemIn){
if(userIn=='rock'){
    if(systemIn=='rock'){
        tie++;
        r.innerHTML=`Result:${'tie'}`
        console.log('tie')
    }else if(systemIn=='paper'){
        lose++;
        r.innerHTML=`Result:${'lose'}`
        console.log('lose')
    }else{
        win++;
        r.innerHTML=`Result:${'win'}`
        console.log('win')
    }
}else if(userIn=='paper'){
    if(systemIn=='rock'){
        win++;
        r.innerHTML=`Result:${'win'}`
        console.log('win')
    }else if(systemIn=='paper'){
        tie++;
        r.innerHTML=`Result:${'tie'}`
        console.log('tie')
    }else{
        lose++;
        r.innerHTML=`Result:${'lose'}`
        console.log('lose')
    }
}else if(userIn=='scissor'){
    if(systemIn=='rock'){
        lose++;
        r.innerHTML=`Result:${'lose'}`
        console.log('lose')
    }else if(systemIn=='paper'){
        win++;
        r.innerHTML=`Result:${'win'}`
        console.log('win')
    }else {
        tie++;
        r.innerHTML=`Result:${'tie'}`
        console.log('tie')
    }
}
    }

    function reset(){
        win=0;
        lose=0;
        tie=0;
value=0;
sysInput=0;
r.innerHTML=`Result:${'0'}`
        ui.innerHTML=`User input: ${ value}`;
      si.innerHTML=`System input: ${ sysInput}`;
        win = win.toString().padStart(3,0)
      lose = lose.toString().padStart(3,0)
      tie = tie.toString().padStart(3,0)
        winDisplay.innerHTML=`win: ${win}`;
loseDisplay.innerHTML=`lose: ${lose}`;
tieDisplay.innerHTML=`tie: ${tie}`;
console.log('win:',win,'lose:',lose,'tie:',tie)

}
let isAutoPlay = 0;
let id;
function autoplay(){
    if(!isAutoPlay){
        isAutoPlay=1;
       
        button.innerHTML="Autoplay:on"
        id = setInterval(()=>{
            const userIn = systemInput();
            console.log("autoplay userin",userIn)
            userinput(userIn)
        },1000)
    }else{
       
        clearInterval(id);
        isAutoPlay=0;
       

        button.innerHTML="Autoplay:off"
        
    }
}