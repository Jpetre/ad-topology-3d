import { observable, action, computed, decorate } from 'mobx'

class Store {
  defaultCameraPosition = [0, 0, 20];
  
  cameraPosition = observable.box([0, 0, 20]);
  active = observable.box(null);

  setCameraPosition = (position) => {
    this.cameraPosition.set(position);
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

  get cameraPositionComputed() {
    return this.cameraPosition.get()
  }
}

decorate(Store, {
  cameraPosition: observable,
  active: observable,
  activePositions: computed,
  cameraPositionComputed: computed,
  setCameraPosition: action,
  setActive: action,
  setInactive: action,
})

const storeInstance = new Store()
export default storeInstance;
