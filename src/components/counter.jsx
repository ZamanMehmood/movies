// Cover Lesson 1 - 29

// import React, { Component } from 'react';

// class Counter extends React.Component {
//     state ={
//         count : 0,
//         tags : ['tag1', 'tag2', 'tag3']
//     };

//     render () {
//         return (
//             <div>
//                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//                 <button className="btn btn-secondary btn-sm">Increment</button>
//                 <ul>
//                     { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
//                 </ul>
//                 </div>
//         );
//     };

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

//     formatCount () {
//         const {count } = this.state;
//         return count === 0 ? 'Zero' : count;
//     }
//     };

// export default Counter;

// <----------------------Lesson 30 --------------->
//               Conditional Rendering

// import React, { Component } from 'react';

// class Counter extends React.Component {
//     state ={
//         count : 0,
//         tags : []
//     };

//     renderTags () {
//         if (this.state.tags.length === 0 ) return <p>There are no Tags!</p>;
//         return  <ul>  { this.state.tags.map(tag => <li key={tag}>{tag}</li>) } </ul>

//     }

//     render () {
//         return (
//             <div>
//                 {this.state.tags.length === 0  && "Please Create a new Tag!" };
//                 {this.renderTags()}
//                 </div>
//         );
//     };
//     };

// export default Counter;

// <----------------Lesson 30 - 34-------------->

// import React, { Component } from 'react';

// class Counter extends React.Component {
//     state ={
//         count : 0
//     };

//     // constructor () {
//     //     super();
//     //     this.handleIncrement = this.handleIncrement.bind(this);
//     // };

//     handleIncrement = () => {
//      this.setState ({ count : this.state.count + 1 });
//     };

//     render () {
//         return (
//             <div>
//                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//                 <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
//                 </div>
//         );
//     };

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

//     formatCount () {
//         const {count } = this.state;
//         return count === 0 ? 'Zero' : count;
//     }
//     };

// export default Counter;

// <-------------------------Lesson 35---51 -------------->
// Motive :  Is ma ham na ak counter app ko banaya ha jis ma buttons ko set kiya ha (Increment , delete , Reset)

// import React, { Component } from "react";

// class Counter extends React.Component {
//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={() => this.props.onIncrement(this.props.counter)}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>

//         <button
//           onClick={() => this.props.onDelete(this.props.id)}
//           className="btn btn-danger btn-sm m-2"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.props.counter.value === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { value: count } = this.props.counter;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;

// <----------------Lecture 51 to  59 ------------>
// import React, { Component } from "react";

// class Counter extends React.Component {
//   componentDidUpdate(prevProps, prevState) {
//     console.log("prevProps", prevProps);
//     console.log("prevState", prevState);
//     if (prevProps.counter.value !== this.props.counter.value) {
//       // Ajax call and get new data from the server
//     }
//   }

//   componentWillUnmount() {
//     console.log("Counter-Unmount");
//   }

//   render() {
//     console.log("Counter-Rendered");

//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={() => this.props.onIncrement(this.props.counter)}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>

//         <button
//           onClick={() => this.props.onDelete(this.props.id)}
//           className="btn btn-danger btn-sm m-2"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.props.counter.value === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { value: count } = this.props.counter;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;

// <............Lesson No 60 to ownward ---------->
// Topic :   Exercise (+, - *  etc)

import React, { Component } from "react";

class Counter extends React.Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from the server
  //   }
  // }

  // componentWillUnmount() {
  //   console.log("Counter-Unmount");
  // }

  render() {
    console.log("Counter-Rendered");

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value == 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
