interface Lakes{
name: string,
area: number,
length: number,
depth: number,
isFreshwater: boolean,
countries: string[],
frozen?:string[]
[extraProp: string]: any 
}

let secondLake: Lakes = {
    name: 'superior',
    depth: 406.3,
    length: 616,
    area:50512,
    isFreshwater:true,
    countries: ['canada', 'United states']
}
let thirdLake: Lakes = {
    name: 'bakai',
    depth: 406.3,
    length: 616,
    area:50512,
    isFreshwater:true,
    countries: ['Rusia'],
    frozen : ['January', 'February', 'March', 'April', 'May']
}
let fourthLake: Lakes = {    
    name: 'Tanganyika',   
    depth: 1470,    
    length: 676,    
    area: 32600,    
    isFreshwater: true,    
    countries: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],    
    kigoma:'Tanzania',    
    kalemie: 'Congo',    
    bujumbura: 'Burundi' }

