const menus= document.querySelector('nav ul');
const header= document.querySelector('header');
const menuBtn=document.querySelector('.menu-btn');
const closeBtn=document.querySelector('.close-btn');

menuBtn.addEventListener('click',()=> {
    menus.classList.add("display");
});
closeBtn.addEventListener('click',()=> {
    menus.classList.remove("display");
});

    
//static numbers
const countersEle= document.querySelectorAll('.number');
countersEle.forEach((counters) =>{
    counters.textContent=0;

    increaseCounter();

    function increaseCounter(){
        let currentNo = + counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");
        const increase = dataCeil/25;//25 is the speed
        currentNo = Math.ceil(currentNo+increase);

        if(currentNo<dataCeil){
            counters.textContent = currentNo;
            setTimeout(increaseCounter,50)
        }
        else{
            counters.textContent = dataCeil;
            
        }
        }
    }
);

