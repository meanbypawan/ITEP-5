let temp = {
    id:1000,
    cname: "PQR",
    display: function(){
        console.log(this.id+" "+this.cname);
    }
}
function customerInfo(){
    console.log(this.id+"  "+this.cname)
}
console.log("Customer info called.....");
customerInfo();

let customer1 = {
    id:1001,
    cname: "ABC"
}

let customer2 = {
    id:1002,
    cname: "XYZ"
}

let obj = customerInfo.bind(customer2);
obj();