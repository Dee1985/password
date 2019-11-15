

 function createPassword() {
    const buttonEl = document.querySelector("button");
    
    


    
    buttonEl.addEventListener("click", randomGenerator);
        
    
// random character selector
            function randomGenerator () {
                const numbers = [1,2,3];
                const lowerCase = ["a","b","c"];
                const upperCase = ["A","B","C"];
                const Symbols = ["!","@","#"];
                const combo = numbers.concat(lowerCase,upperCase,Symbols);
                const randomIndex = combo[Math.floor(Math.random()*combo.length)]; 
                console.log(randomIndex);

             
                }

                    
                        

 }
 
 createPassword();






  

 

 
 
 
 


