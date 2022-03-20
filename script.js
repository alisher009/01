
let discount = 20


let arr_cars = [
    {
        name: 'malibu',
        price: 30000
    },
    {
        name: 'matiz',
        price: 3000
    },
    {
        name: 'spark',
        price: 7500
    },
    {
        name: 'gentra',
        price: 140000
    },
    {
        name: 'santaferro',
        price: 80000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'tesla model y',
        price: 30000
    }
]



let a = confirm('Добро пожаловать вы хотите продать машину?')

    let name = prompt('Название машины?')
    let price = +prompt('За сколько хотите продать машину')
    let year = prompt('кокого года машина')
    if(year <= 2010 ) { 
    }



    let newcars = {
        name: name,
        price:price

    }

    alert(`вы точно хотите дбавить? нозвание ${name} цена ${price} год ${year}`)
    arr_cars.push(newcars)

    for( let item of arr_cars) {
        item.saleprice = item.price - (discount * item.price / 100)
    }


console.log(newcars,arr_cars );
 
    

