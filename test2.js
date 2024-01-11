const isDateValid=(...val)=>!Number.isNaN(new Date(...val).valueOf());
console.log(isDateValid("October 17, 2021 03:24:00"))

const dayOfYear=(date)=>Math.floor((date - new Date(date.getFullYear(),0,0)) /1000/60/60/24)
console.log(dayOfYear(new Date()))
//console.log(new Date()-new Date(new Date().getFullYear(),0,0))

const copyToClipboard=(text)=>{
    navigator.clipboard.writeText(text);
}
// copyToClipboard("manjeet")

const isEven=num=>num%2 ==0;
console.log(isEven(2))