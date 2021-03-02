// rcc - react class component
import React, { Component } from "react";

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  render() {
    // Javascript 주석

    // function formatName(user) {
    //   return user.firstName + " " + user.lastName;
    // }

    const user = {
      firstName: "React",
      lastName: "Component",
    };

    const type = "class";
    // JSX - camelcase 표현식 background-color ==> backgroundColor
    //        class ==> className
    const style = {
      backgroundColor: "black",
      color: "aqua",
      fontSize: "50px",
      fontWeight: "bold",
      padding: 6,
    };
    return (
      // 전체를 return 하는 root element가 있어야 함. <div>, <fragment>, <>
      <div>
        {/*JSX 문법 주석*/}
        {/* 
            JSX - HTML code , {Javascript 표현식} 
            one root element로 감싸야한다.
        */}
        <div style={style}>
          {/* Hello {formatName(user)}. - {type}{" "} */}
          Hello {this.formatName(user)}. - {type}{" "}
        </div>
      </div>
    );
  }
}

export default App;
// react component를 다른 곳에서 사용하게 하려면 꼭 export를 해야함.
// default로 export하면 그냥 import 참조. 아니면 {}로 참조.
