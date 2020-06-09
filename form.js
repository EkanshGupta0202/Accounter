class Form{
    constructor(){
        this.input = createInput("Enter password",'password');
        this.button = createButton('Enter',);
    }
    display(){
        this.input.position(150,200);
        this.button.position(150,240);
        this.button.mousePressed(()=>{
        input = this.input.value();
        })
    }
    getCount(){
        var passwordRef = database.ref('Password');
        passwordRef.on("value",(data)=>{
          password = data.val();
        })
      }
      hide(){
          this.input.hide();
          this.button.hide();
      }
      getHistory(){
        var historyRef = database.ref('History');
            historyRef.on("value",(data)=>{
              iterator = data.val();
            })
          }
}
