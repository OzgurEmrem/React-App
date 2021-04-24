import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onAdd,
      onDecrement,
      onDelete,
      onReset,
      onIncrement,
    } = this.props;

    return (
      <div>
        <button onClick={onAdd} className="btn btn-secondary btn-sm m-2">
          Add Button
        </button>

        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset Buttons
        </button>

        {this.props.counters.map((counterObj) => (
          <Counter
            key={counterObj.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counterProp={counterObj}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
