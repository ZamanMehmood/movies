// <-------------------------Lesson 35---51 -------------->
// Motive :  Is ma ham na ak counter app ko banaya ha jis ma buttons ko set kiya ha (Increment , delete , Reset)

// import React, { Component } from "react";
// import Counter from "./counter";

// class Counters extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };

//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters });
//   };

//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.handleReset}
//           className="btn btn-primary btn-sm m-2"
//         >
//           Reset
//         </button>
//         {this.state.counters.map((counter, index) => (
//           <Counter
//             key={index}
//             id={counter.id}
//             onDelete={this.handleDelete}
//             onIncrement={this.handleIncrement}
//             counter={counter}
//           />
//         ))}
//         ;
//       </div>
//     );
//   }
// }

// export default Counters;

// <----------------Lecture 51 to 54 ---------- >

// import React, { Component } from "react";
// import Counter from "./counter";

// class Counters extends Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.onReset}
//           className="btn btn-primary btn-sm m-2"
//         >
//           Reset
//         </button>
//         {this.props.counters.map((counter, index) => (
//           <Counter
//             key={index}
//             id={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

//  <-----------Lecture 55 to 59 --------->
// Topic :  Stateless Function Components

// import React, { Component } from "react";
// import Counter from "./counter";

// class Counters extends Component {
//   render() {
//     console.log("Counters-Rendered");

//     const { onReset, counters, onDelete, onIncrement } = this.props;
//     return (
//       <div>
//         <button onClick={onReset} className="btn btn-primary btn-sm m-2">
//           Reset
//         </button>
//         {counters.map((counter, index) => (
//           <Counter
//             key={index}
//             id={counter.id}
//             onDelete={onDelete}
//             onIncrement={onIncrement}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

// <-----------------Lesson No 60 ----------->
// Topic : Making a exercise of butttons
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter, index) => (
          <Counter
            key={index}
            id={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
