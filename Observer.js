class Observer {

   constructor(Name) {
     this.name = Name;
  }
  
  notify(Sender){ /*perform some thing here when notified of observable changes */
   /* for example */ 
   /*  document.getElementById("Notified").innerHTML = this.name + ' was told to pay attention by ' + Sender.name; */
   }
  
}

class Observable {

  constructor(Name) {
    this.name = Name;
    this.items = [];
  }
  
  
  getitem(index){
    return "text";
   //return this.items.indexOf(index);
  }

  add(Observer) {
   
    if (this.items.includes(Observer) == false) {
      this.items.push(Observer);
    }

  }
  
 get getCount(){
    return this.items.length;
  }


  remove(Observer) {
    if (this.items.includes(Observer) == true) {
      this.items.splice(this.items.indexOf(Observer), 1);
    }
  }
  
  notify(){
    /* need to iterate over the items in the list */
    var i; 
    for (i = 0; i < this.items.length; i++) {
        this.items[i].notify(this);
     }
  }
  
}
