class Counter extends React.Component {
  constructor(props) {
    super(props);
    //binds to correct instance
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //everything we want to track
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    //older obsolete version
    //asynchronous count: 0 not applied yet, old value is grabbed instead
    this.setState({
      count: 0
    });
    this.setState({
      count: this.state.count + 1
    });
    // this.setState(() => {
    //   return {
    //     count: 0
    //   }
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     console.log('minusOne', count);
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset', count);
// };
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
