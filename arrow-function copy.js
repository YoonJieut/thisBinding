function outerOne() {
  return "hello";
}

const outerTwo = function() {
  // * 엄밀히는 함수 선언은 아니고 대입에 가깝다
  // * 변수가 함수의 이름처럼 쓰인다.
  // ! 기명처럼 쓰이지만 다름, 얘는 "함수 리터럴"
  return "bye";
};

// ! 메모리 방면
// * 변수는 쓰지 않으면 사라지는 형태
//  * 일급시민은 메모리를 항상 가지고 있으며 날리지 않음
// * 최적화 입장에선 두번째 방식이 이득

// ! 화살표 함수의 등장
const outerThree = () => "wow";
// * 가독성 문제, 초보자에겐 불친절하긴 함
// * 정말 간단한 작성법, 피로도 감소
// * 압축률이 높아져서 편하지만, 독해는 어려움 => 이름의 중요도 증가

// * 매개변수 하나만 있으면 소괄호 축약도 가능
const outerFour = a => a;



console.log(outerOne());
console.log(outerTwo());
console.log(outerThree());