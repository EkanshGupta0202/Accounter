class Accounter{
    constructor(){
        this.input1 = createInput('-0');
        this.input2 = createInput();
        this.button1 = createButton('View balance');
        this.button2 = createButton('View transactions');
        this.button3 = createButton('Update Balance');
        this.button4 = createButton('Hide Balance');
        this.button5 = createButton('Click to update balance');
        this.button6 = createButton('Clear Transactions');
        this.elem1 = createElement('h3');

    }

display(){
    this.input1.position(150,200);
    this.input2.position(50,130);
    this.input2.hide();
    this.button4.hide();
    this.elem1.hide();
    this.button1.position(150,240);
    this.button2.position(350,50);
    this.button3.position(50,50);
    this.button4.position(150,240);
    this.button5.position(50,50);
    this.button6.position(175,50);
    this.button5.hide();
    this.elem1.position(50,300);
    this.button1.mousePressed(()=>{
    amount = this.input1.value();
    balance = parseInt(balance)+parseInt(amount);
    this.updateBalance(balance);
    //text("="+balance,50,300);
   this.elem1.html('='+balance);
   this.elem1.show()
    transactions.push(parseInt(amount));
    iterator = transactions.toString();
    this.updateHistory(iterator);
    this.button1.hide();
    this.button4.show();
    })
    
    this.button3.mousePressed(()=>{
      this.input2.show();
      this.updateBalance(this.input2.value());
      this.button3.hide();
      this.button5.show();
      })
    
    this.button5.mousePressed(()=>{
      this.updateBalance(this.input2.value());
      this.input2.hide();
      this.button3.show();
      this.button5.hide();
    })
      
    this.button2.mousePressed(()=>{
    text("="+iterator,50,100);
    })

    this.button4.mousePressed(()=>{
      this.elem1.hide();
      this.button1.show();
      this.button4.hide();
    })

    this.button6.mousePressed(()=>{
      this.clearTransactions();
      transactions = [0]
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

clearTransactions(){
  database.ref('/').update({
      History: 0
  })
}
}