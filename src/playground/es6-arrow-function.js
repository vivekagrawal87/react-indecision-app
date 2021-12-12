const add = (a, b) => {
    //console.log(arguments)
    console.log(a + b);
}

add(2,4);

const user = {
    name : 'Vivek Agrawal',
    cities : ['Indore', 'Mumbai', 'Singapore'],
    printCitiesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printCitiesLived())

const multiplier = {
    numbers : [1, 2, 3],
    mutiplyBy : 3,
    mutiply() {
        return this.numbers.map((number) => this.mutiplyBy * number)
    }
}

console.log(multiplier.mutiply())