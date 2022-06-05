let pradip = {
    firstName: 'pradip',
    lastName:'mandal'
}
// we can set proto of a object using Object.setPrototypeOf(nameOfTheObjectWhereYouwantToGet,NameOfTheObjectWhereFromYouwant)
let otherDetails = {
    age: 21,
    address:"WestBengal"
}
Object.setPrototypeOf(pradip, otherDetails)
