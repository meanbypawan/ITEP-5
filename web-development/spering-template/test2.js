let temp = {
    id:1000,
    cname: "PQR",
    display: function(){
        console.log(this.id+" "+this.cname);
    }
}
let customer1 = {
    id:1001,
    cname: "ABC"
}

let customer2 = {
    id:1002,
    cname: "XYZ"
}
let newDisplayFunction = temp.display.bind(customer2);
newDisplayFunction();