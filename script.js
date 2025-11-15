const input = document.querySelector("#guess");
const button = document.querySelector("#btn");

// Генерация случайного числа от 21 до 51 включительно
let answer = Math.floor(Math.random() * 31 + 21);

input.addEventListener("keypress", function(e) {
    if(e.key === "Enter"){
        play();
    }
});

button.addEventListener("click", play);

function play(){
    const userNumber = Number(input.value);

    // Проверка на число
    if(isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a number!',
        });
        return;
    }

    // Проверка диапазона
    if (userNumber < 21 || userNumber > 51) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a number between 21 and 51!',
        });
        return;
    }

    // Сравнение с загаданным числом
    if(userNumber < answer){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a number higher!',
        });
    } else if(userNumber > answer){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a number lower!',
        });
    } else {
        Swal.fire({
            title: 'Congratulations!',
            text: 'You won!',
            imageUrl: 'flower.jpeg',
            imageWidth: 400,
            imageHeight: 300,
            confirmButtonText: 'Play Again!'
        }).then(() => {
            // Сброс игры: очистка input и генерация нового числа
            input.value = '';
            answer = Math.floor(Math.random() * 31 + 21);
        });
    }
}
