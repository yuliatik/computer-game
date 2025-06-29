const input=document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*50+1);

input.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        play();
    }
})       

button.addEventListener("click", play);
function play(){
    const userNumber = document.querySelector("#guess").value;
    if (userNumber < 21 || userNumber > 51) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Type the number between 21 and 51!',
          })
         
      }
      else if(isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type the number!',
            }) 
        }

        else{
            if(userNumber < answer){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Type the number higher!',
                    
                  })
            }  
            
            else if(userNumber > answer){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Type the number below!',
                        
                })
                }
            
                else{
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'You won!',
                        imageUrl: 'flower.jpeg',
                        imageWidth: 400,
                        imageHeight: 300,
                        
                      })
                }
            }

            
        
        }
      












