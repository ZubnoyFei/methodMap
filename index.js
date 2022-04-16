'use strict'

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

/*^
* ^
* ^
* Мы хотим перевести этот объект в формат карты*/

const userMap = new Map(Object.entries(user));

/*Создадим переменную, которая работает с картами*/

const newUserObject = Object.fromEntries(userMap);

console.log(newUserObject);

//console.log(typeof(Object.keys(user)[0]));// Мы вызываем объект, получаем ключ и получаем самый первый ключ из этого объекта.  В консоли выведет string, чтобы не выбивало ошибку

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]

/*Map- это специфические структуры данных, которые похожи на объект, но у них вместо свойств может использоваться и объект, и массив*/
const budget = [5000,15000,25000];
const map = new Map([
    [{paper:400},8000]//У нас есть магазин в виде объекта и в нем есть бумага в количестве 400, и у этого магазина бюджет в 8000
]);

//map.set(shops[0],5000) //мы берем переменную мэп и передаём в нее shops. Аргументы у map- это ключ и значение.

/*У нас есть 2 структуры и нам нужно их объединить. для этого мы можем воспользоваться циклом либо методом forEach*/

shops.forEach((shop, i) =>{
    map.set(shop, budget[i]) //Мы обращаемся к map, передаем туда shop и бюджет. Будет взят первый магазин и в него назначен бюджет 5000, во второй 15000 и в третий 25000
})

// console.log(map);
/*console result
Map(3) { {…} → 5000, {…} → 15000, {…} → 25000 }

0: Object { rice: 500 } → 5000

1: Object { oil: 200 } → 15000

2: Object { bread: 50 } → 25000
*
* */

/*Также мы можем использовать команду get для обращения к результатам*/

// console.log(map.get(shops[0])); //console result 5000

/*Существует команда проверки на наличие чего-либо внутри карты. Она имееет булиновое значение*/

//console.log(map.has(shops[0])); //true

console.log(map); /*result 0: Object { paper: 400 } → 8000
<key>: Object { paper: 400 }
      <value>: 8000
             1: Object { rice: 500 } → 5000
            2: Object { oil: 200 } → 15000
               3: Object { bread: 50 } → 25000*/

//map.keys() возвращает итерируемый объект по ключам

for (let shop of map.keys()) {
    console.log(shop);
}