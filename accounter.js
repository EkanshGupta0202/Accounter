class Accounter{
    constructor(){
        this.input1 = createInput();
        this.button1 = createButton('View balance');
        this.button2 = createButton('View transactions');
        this.button3 = createButton('Hide balance');

    }

display(){
    this.input1.position(150,200);
    this.button1.position(150,240);
    this.button2.position(350,50);
    this.button3.position(150,240);
    this.button3.hide();
    this.button1.mousePressed(()=>{
    amount = this.input1.value();
    balance = parseInt(balance)+parseInt(amount);
    this.updateBalance(balance);
    t1=text("="+balance,50,300);
    transactions.push(parseInt(amount));
    iterator = transactions.toString();
    this.updateHistory(iterator);
    //this.button1.hide();
    //this.button3.show();
    })
    /*
    this.button3.mousePressed(()=>{
      t1.hide();
      })
      */
    this.button2.mousePressed(()=>{
    text("="+iterator,50,100);
    })
}
getBalance(){
    var balanceRef = database.ref('Balance');
        balanceRef.on("value",(data)=>{
          balance = data.val();
        })
}
updateBalance(balan){
    database.ref('/').update({
      Balance: balan
    });
  }


updateHistory(hist){
        database.ref('/').update({
          History: hist
        });
      }
}