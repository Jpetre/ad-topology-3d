import { observable, action, decorate } from 'mobx'

class Store {
  likesCount = 12;

  updateCount = () => {
      this.likesCount++;
  }
}

decorate(Store, {
  likesCount: observable,
  updateCount: action
})

const storeInstance = new Store()
export default storeInstance;
