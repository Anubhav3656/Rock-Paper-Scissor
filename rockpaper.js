let a=0 ;   // 1=rock   2=paper    3=scissor;
        let result=``;
        let computer=``;
        let playermove=``;
        let resul = JSON.parse(localStorage.getItem('update'))  || {wins : 0,
            lose :0,
            tie:0} ;

            ons();        

        function player(playermove)
        {
             pickcomputer();
             if(playermove === `rock`)
             {
                if (computer ===`paper`){
                   result=`you lose`;
                }
                else if(computer === `rock`){
                    result=`Tie` ; 
                }
                else{
                    result=`you win`;
                }
                
             }
             else if(playermove === `paper`)
             {
                if (computer === `scissor`)
                {  
                    result= `you lose`;
                }
                else if(computer === `paper`)
                {   
                    result = `Tie` ; 
                }
                else{
                        result=` you win`  ;
                    }
                    
            }
            else{
                if (computer === `rock`){
                    result=  `you lose`;
                }
                else if(computer === `scissor`){
                    result=`Tie`;
                }
                else{
                    result=`you win`;
                }
                
             }
            if(result === `you win`){
                resul.wins++;
             }
             else if(result === `you lose`)
             {
                resul.lose++;
             }
             else{
                resul.tie++;
             }
            
             ons();
             update();

             localStorage.setItem('update' , JSON.stringify(resul));
             

        }
        function update(){
            document.querySelector('.res').innerHTML=` ${result}`;
            console.log(document.querySelector('.youcomp').innerHTML=`you  <img src="${playermove}1.png"> - <img src="${computer}1.png"> computer`);

        }
        
        function ons(){
            document.querySelector('.quer')
        .innerHTML = `wins=${resul.wins} , lose=${resul.lose} , tie=${resul.tie}`;
        }
        
        
        function pickcomputer()
        {
            a=Math.floor(Math.random()*3)+1;
            if (a === 1)  {
                computer=`rock` ;
            }
            else if(a === 2)  {
                computer = `paper` ;
            }
            else {
                computer = `scissor` ;
            }
        }