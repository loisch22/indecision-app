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
  componentDidMount() {
    try {
      const count =  parseInt(localStorage.getItem('count'), 10);

      if(!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    //don't want this to fire when reset is clicked so..
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
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
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
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

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));
