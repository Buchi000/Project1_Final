import productdb, {
    bulkcreate
} from './module.js'
const db = productdb("Ticket",{
    city:`++id, cityName`
})

//UI Vars
export const fname = document.querySelector('#name');
const email = document.querySelector('#email');
const from = document.querySelector('#from');
const to = document.querySelector('#to');
const date = document.querySelector('#date');
const adult = document.querySelector('#adult');
const student = document.querySelector('#student');
const senior = document.querySelector('#senior');
const child = document.querySelector('#child');
const toCitySelect = document.querySelector('.toCity');
const fromCitySelect = document.querySelector('.fromCity');
const findMyJourney = document.querySelector(".findjourney");

findMyJourney.addEventListener('click', readInputs);
function readInputs(){
    let inputs = {
        fname: fname.value,
        email: email.value,
        from: from.value,
        to: to.value,
        date: date.value,
        adult: adult.value,
        student: student.value,
        senior: senior.value,
        child: child.value
    }

    localStorage.setItem('inputs',JSON.stringify(inputs));
}

bulkcreate(db.city,{
    cityName:'Addis Ababa'
})

bulkcreate(db.city,{
    cityName:'BahirDar'
})

bulkcreate(db.city,{
    cityName:'Gonder'
})

bulkcreate(db.city,{
    cityName:'Jimma'
})
bulkcreate(db.city,{
    cityName:'Awassa'
})
bulkcreate(db.city,{
    cityName:'Debre Birhan'
})
bulkcreate(db.city,{
    cityName:'Nazret'
})
bulkcreate(db.city,{
    cityName:'Debrezeyt'
})
bulkcreate(db.city,{
    cityName:'Mekele'
})

let id = 1;
let length = 0;

let output = ''

var values = [];
let word ='';


for (let i = 0; i < 9; i++) {
    db.city.get(i, function(row) {
        console.log(row['cityName'] + '')
        var option = document.createElement("option");
        let val = row['cityName']
        option.value = val;
        option.text = val;
        fromCitySelect.appendChild(option)
    })
}

for (let i = 0; i < 9; i++) {
    db.city.get(i, function(row) {
        console.log(row['cityName'] + '')
        var option = document.createElement("option");
        let val = row['cityName']
        option.value = val;
        option.text = val;
        toCitySelect.appendChild(option)
    })
}



//document.getElementById("container").appendChild(label).appendChild(select);



/*db.get(id, function(row){
    console.log(row[cityName])
})
id++*/