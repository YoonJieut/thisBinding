function a( callback ){
  return callback()
};

// a( console.log(this) );
console.log(a(function(){
  console.log(this);
  console.log('------------------------');
  console.log(global);
}))
