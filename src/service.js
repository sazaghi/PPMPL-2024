const Repository = require("./repository");

class Service {
  constructor() {
    this.primaryRepository = new Repository();  // Primary repository
    this.secondaryRepository = new Repository(); // Secondary repository (assuming this is a different repository)
  }

  getAllItems() {
    return this.primaryRepository.getAllItems();
  }

  getItemById(id) {
    let item = this.primaryRepository.getItemById(id);
    if (!item) {
      item = this.secondaryRepository.getItemById(id);
    }
    if (!item) {
      throw new Error("Item not found in both repositories");
    }
    return item;
  }

  addItem(name) {
    const newItem = { id: this.primaryRepository.data.length + 1, name };
    return this.primaryRepository.addItem(newItem);
  }
  removeItem(id) {
    let removed = this.primaryRepository.removeItem(id);
    if (!removed) {
      removed = this.secondaryRepository.removeItem(id);
    }
    if (!removed) {
      throw new Error("Item not found in both repositories");
    }
    return removed;
  }
}

module.exports = Service;
