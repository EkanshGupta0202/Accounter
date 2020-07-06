var database;
var input = "a";
var password;
var form;
var balance = 0;
var amount = 0;
var accounter;
var transactions = [];
var iterator;
var history;
var t1;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    form = new Form();
    form.display();
    form.getCount();
    form.getHistory();
    
}

function draw(){
    if(input == password){
        form.hide();
        console.log("yes");
        input = "a";
        accounter = new Accounter();
        accounter.getBalance();
        
        transactions.push(iterator);
        accounter.display();
    }
}