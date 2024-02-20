

/** 
* react component 특징
* 1. 파일명과 함수명을 일치시킨다
* 2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다.
* 3. 함수를 꼭 export 해야한다.

react 특징
* 일반 함수로는 랜더링 시키지 않는다.

*/

import { useState } from "react";

export default function App() {
  let names =["정건희", "정건이", "정건삼"];
  // [ <h1>정건희</h1>, <h1>정건이</h1>, <h1>정건삼</h1>]
  const [nameArrayState, setNameArrayState] = useState(["정건희", "정건이", "정건삼"]); 
  // 상태관리
  // 상태가 변하면 렌더링이 처음부터 다시 된다.


  console.log("콘솔 호출?")

  const handleClick = () => {
    setNameArrayState ([...names, "김준사"]);
    console.log(names);
  }
  
  return <>
  <button onClick={handleClick}>추가</button>
  <div>
    {nameArrayState.map(name => <h1>{name}</h1>)}
  </div>
  </>
}





