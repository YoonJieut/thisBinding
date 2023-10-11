function student(name, number){
  this.name = name;
  this.number = number;
}

let test = new student('공욱재',"0")
console.log(test);
// 새로운 객체가 생성

// 객체를 꺼낸 적이 없는데? - 객체를 뽑아낸 것

let list =["이민구", "윤준현"];
let studentArr = [];

for(i=0; i<2; i++){
  // studentArr.push(new student(list[i], i));
  studentArr[i] = new student(list[i],i+1);
}
console.log(studentArr);