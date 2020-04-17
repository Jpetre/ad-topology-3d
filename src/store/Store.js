import { observable, action, decorate } from 'mobx'

class Store {
  defaultCameraPosition = [0, 0, 30];
  
  cameraPosition = [0, 0, 30];

  setCameraPosition = (position) => {
    this.cameraPosition = position;
  }
}

decorate(Store, {
  cameraPosition: observable,
  setCameraPosition: action
})

const storeInstance = new Store()
export default storeInstance;
