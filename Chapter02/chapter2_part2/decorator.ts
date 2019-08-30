function iq(target) {
  Object.defineProperty(target.prototype, 'iq', {value: () => "Genius"})
}
@iq
class Person {
}
let readerOfMyBook = new Person();
console.log(readerOfMyBook.iq());  // prints out "Genius" to the console