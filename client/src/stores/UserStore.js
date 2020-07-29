import { extendObservable } from 'mobx';

class UserStore {
  constructor() {
    extendObservable(this, {
      isLoggedIn: false,
      loading: false,
      username: ''
    })
  }
}

export default new UserStore();