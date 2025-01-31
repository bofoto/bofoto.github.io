var coin = 0;
var life = 3;
var strik = 3;
let hasCollided = false;
let sucessJump = false;






 
$(function() {
    $(document).on("keypress", function(key) {
        if(key.which == 32) { jump() }         
        if(key.which == 100 ) { right(); }             
    }).ready(function () {
        gumba_move();
        
        workPerFrame();
        // $("#토관자스").animate({left: '500px'},1000)
    })
});

function jump() {
    $("#mario").animate({
        top: '200px'
        
    }, 200, function() {
        $(this).animate( {
            top: '380px'
        }, 500)
        });
    }
    
    function right() {
        $("#mario").animate({
            left: `200px`
        }, 200, function() {
            $(this).animate( {
                left: '50px'
            }, 500)
        });
    }
    function gumba_move(){
        
        $('#gumba_movement').animate({
            left: '-50px'
        }, Math.random()*2000+900);
        
        $('#gumba_movement').animate({
            left: '1000px'
        }, 0,clear);
        
        

    }
    function kirby() {
        $('#kirby').animate({
            left:'300px'
            
        }, 200, function() {
            $(this).animate({
                left:'-96px'
                
            },800)
        });
    }
    function strike(){
        strik--;
        document.getElementById("strike").innerText = strik.toString();
        if(strik <0){
            strik =0;
            document.getElementById("strike").innerText = strik.toString();
        }
    }
    
    function lifedown() {
        if(!hasCollided &&isCollision){
        hasCollided = true;
        life--;
        document.getElementById("life").innerText = life.toString();
        $("#mario").animate((
            {
                left : '-150px',
                
                rotate : '-720deg'
                
            }
        ),500).animate(({left:'50px',rotate : '0deg'}),100)

        if(life <=0){
            life =0;
            document.getElementById("life").innerText = life.toString();
            GAMEOVER();
        }
        setTimeout(()=>{
            hasCollided = false;
        },1000)
    
    }
}
    
    function GAMEOVER() {
        
        $('#GAMEOVER').css({'animation':'bounce 3s linear forwards'})
        
    }
    function isCollision(){
        const mario = document.querySelector("#mario");
        const gumba = document.querySelector("#gumba_movement");
        
        const rect1 = mario.getBoundingClientRect();
        const rect2 = gumba.getBoundingClientRect();

        if (rect1.right>rect2.x&&rect1.x+20<rect2.right) {
            if (rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
                lifedown()
            }else
            coinCount()
        }        
        

        }
     
    function workPerFrame() {
        requestAnimationFrame(workPerFrame);
        timer++;
        
        if(life ==0)stop();
        if(timer%5 ==0)isCollision()
       
        }
    
    var timer =0;

function coinCount() {
    if(!sucessJump &&isCollision){
    sucessJump = true;
    coin++;
    document.getElementById("coin").innerText = coin.toString();
    setTimeout(()=>{
        sucessJump = false;
    },1000)
    }

}

function clear() {
    
    if(coin>=10){
        const regum = document.getElementById("gumba_movement");
        regum.classList.remove(".gumbaStyle")
        regum.classList.add(".gumbaStyle.hide")
        GAMEOVER()
    }else gumba_move()
}

const width = document.querySelector(".game").offsetWidth;
const height = document.querySelector(".game").offsetHeight;
window.parent.postMessage({width,height},"*");
