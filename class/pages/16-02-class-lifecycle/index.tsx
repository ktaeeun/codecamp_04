import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent/index";
import Router from "next/router";
interface IState {
  count: number;
}
export default class MyLifecyclePage extends Component {
  state: IState = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
  }

  componentDidUpdate() {
    console.log("수정됨");
  }

  componentWillUnmount() {
    console.log("잘가요");
  }

  onClickCounter = () => {
    // console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        <div>현재 카운트 {this.state.count}</div>
        <button onClick={this.onClickCounter}>페인지 카운트</button>
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <MyComponent count={this.state.count}>카운트 올리기</MyComponent>
      </>
    );
  }
}
