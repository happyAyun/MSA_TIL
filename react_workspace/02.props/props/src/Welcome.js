import React from "react"; //rsc - react state less
import PropTypes from "prop-types";
// React Component 선언 : function(lamda function), Class
// <부모 element key="value"> content </부모 element>
// ex) <Welcome name="React" /> : App.js
// 부모 element로부터 전달된 attribute값이나 content는 props에 저장 전달.
// 자식 element에서는 function에서 : argument로 전달된 props 사용.
//                   class에서 : 상속받은 React.Component의 this.props 사용.
// *주의* props : readOnly => 수정 불가.

// const Welcome = (props) => { // function에서는 this를 사용하지 못함. 인자가 하나일 경우 () 괄호 생략 가능 : props
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//     </div>
//   );
// };

// export default Welcome;

function Welcome(props) {
  return (
    <div>
      <h1 style={props.style}>
        Hello, {props.name} ==&gt; {props.children}
      </h1>
    </div>
  );
}

// 부모 element로부터 props값이 전달되지 않을 때 기본값 설정.
Welcome.defaultProps = {
  style: {
    backgroundColor: "gray",
    color: "aqua",
    fontSize: "50px",
    fontWeight: "bold",
    padding: 6,
  },
  name: "리액트",
};

// props의 타입
Welcome.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
};
export default Welcome;

// import React, { Component } from "react"; // rcc

// class Welcome extends Component {
//   render() {
//     // 부모 element App attribute의 값 : props 객체로 참조.
//     // const name = this.props.name; // name 참조 <Welcome name="값"/>
//     // this.props.name = "test"; // 안됨. 부모 element App attribute의 name으로부터 전달받은 readOnly 이다.
//     // const style = this.props.style; // style 참조 <Welcome style="값"/>
//     // const { name, style } = this.props; // 한번에 작성.
//     return (
//       <div>
//         <h1 style={style}> hello, {name}</h1>
//       </div>
//     );
//   }
// }

// export default Welcome;
