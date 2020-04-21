import { observable, action, computed, decorate } from 'mobx'

class Store {
  defaultCameraPosition = [0, 0, 30];
  
  cameraPosition = [0, 0, 30];
  active = observable.box(null);

  setCameraPosition = (position) => {
    this.cameraPosition = position;
  }

  setActive = (position) => {
    this.active.set(position);
  }

  setInactive = () => {
    this.active.set(null);
  }

  get activePositions() {
    return this.active.get()
  }
}

decorate(Store, {
  cameraPosition: observable,
  active: observable,
  activePositions: computed,
  setCameraPosition: action,
  setActive: action,
  setInactive: action,
})

const storeInstance = new Store()
export default storeInstance;
