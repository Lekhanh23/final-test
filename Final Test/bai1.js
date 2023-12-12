function calculateSum (){
    const a = calInt(document.getElementById('input-a').value);
    const b = calInt(document.getElementById('input-b').value);
    const sum = 0;
    for(let i = a; i <= b; i++  ){
        if(calPrime(i)){
            sum += i;
        }
    }
    const rst = document.getElementById('result').innerHTML = "Các số nguyên tố trong khoảng từ" + a + "đến" + b + "là:" + sum;
}
function calPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}