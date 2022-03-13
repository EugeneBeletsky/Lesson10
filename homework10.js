// Добрый день. 
//#1     Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getTimeout(){
    return new Promise((resolve,reject)=>{
        let random = getRandom(1,5);
        setTimeout(()=>{
            console.log(`random will be ${random}`);
            resolve(random);
        },random*1000)
    })
}

let promise1=getTimeout();
let promise2=getTimeout();
let promise3=getTimeout();

Promise.all([promise1,promise2,promise3])
.then((data)=>{
    let summ= data.reduce((acc,next)=>{
        return acc + next
    })
    console.log(`summ will be ${summ}`);
    return summ;
})





//#2     Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
// его работы на экран.

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let promise1 = new Promise((resolve,reject)=>{
    let random1 = getRandom(1,5);
    setTimeout(()=>{
       
        resolve(1);
    },random1*1000)
    
})

let promise2=new Promise((resolve,reject)=>{
    let random2=getRandom(1,5);
    setTimeout(()=>{
        
        resolve(2);
    },random2*1000)
})

let promise3= new Promise((resolve,reject)=>{
    let random3=getRandom(1,5);
    setTimeout(()=>{
        
        resolve(3);
    },random3*1000)
})

Promise.race([promise1,promise2,promise3])
.then((data)=>{
console.log(data);
return data;
})





//#3 Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getNum() {
    return new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            console.log(random);
            resolve(random);
        }, 3000)
    })
}

async function square() {
    let result = await getNum();
    console.log(result*result) 
    return result * result;
}

square();

    



//#4 Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
// а затем найдет сумму полученных чисел и выведет на экран.

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getNum1(){
    return new Promise((resolve,reject)=>{
        let random=getRandom(1,5);
        setTimeout(()=>{
            console.log(random);
            resolve(random);
        },3000)
    })
}

function getNum2(){
    return new Promise((resolve,reject)=>{
        let random=getRandom(6,10);
        setTimeout(()=>{
            console.log(random);
            resolve(random);
        },5000)
    })
}

async function summ(){
    let num1 = await getNum1();
    let num2 = await getNum2();
    let result =  num1+num2;
    return console.log(result);
}

summ();

// На следующем занятии:
// - объектно-ориентированное программирование в JS
// Презентация в облаке