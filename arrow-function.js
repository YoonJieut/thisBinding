function outerOne(a) {

  function innerOne(b){
    console.log(b);
  }
  innerOne(a);

}
// outerOne();
// outerOne('hello');

function outerOnee(a) {
  const innerOnee = b => console.log(b);
  innerOnee(a);
}
console.log(outerOnee('hi'));

