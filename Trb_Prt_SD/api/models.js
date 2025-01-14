class Item {
    constructor(name) {
      this.id = Item.incrementId();
      this.name = name;
    }
  
    static incrementId() {
      if (!this.currentId) this.currentId = 1;
      else this.currentId += 1;
      return this.currentId;
    }
  }
  
  module.exports = Item;
  