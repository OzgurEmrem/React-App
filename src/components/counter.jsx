import React, { Component } from "react";

export default class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getBagdeClasses();
    const { onDecrement, onDelete, onIncrement, counterProp } = this.props;
    return (
      <div>
        <span style={{ fontSize: 15 }} className={this.getBagdeClasses()}>
          {"button # " +
            this.props.counterProp.id +
            "  count value : " +
            this.formatCounter() +
            "  "}
        </span>

        <button
          style={this.styles}
          onClick={() => onIncrement(counterProp)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          style={this.styles}
          onClick={() => onDecrement(counterProp)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>

        <button
          onClick={() => onDelete(counterProp.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete Button
        </button>
      </div>
    );
  }

  getBagdeClasses() {
    const { counterProp } = this.props;
    let classes = "badge m-2 badge-";
    classes += counterProp.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value: count } = this.props.counterProp;
    return count === 0 ? "zero" : count;
  }
}

/*
  state = {
    value: this.props.counterProp.value,
    tags: ["tag 1", "tag 2", "tag 3"],
  };
  constructor() {
    super();
    this.handelDecrement = this.handelDecrement.bind(this);
    this.handelIncrement = this.handelIncrement.bind(this);
  }
  imgUrl: "https://picsum.photos/300",
  <img src={imgUrl} alt="" />
    const { imgUrl } = this.state;

        <span style={{ fontSize: 15 }} className={this.getBagdeClasses()}>
          {"count value : " + this.formatCounter() + "  "}
        </span>

        <button style={this.styles} className="btn btn-secondary btn-sm">
          Increment
        </button>

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
 
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
   {this.state.tags.length === 0 && "please create a tag"}
 */
