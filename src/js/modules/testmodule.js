export default class Testmodule {
  constructor() {
    this.el = [...document.querySelectorAll('meta')]
  }

  logMe() {
    this.el.forEach((el) => console.log(el))
  }
}
