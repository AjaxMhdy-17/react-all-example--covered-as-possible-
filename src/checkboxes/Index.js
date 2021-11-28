import React, { Component } from "react";

export class Index extends Component {
  state = {
    list: [
      { id: 1, label: "Reading", value: false },
      { id: 2, label: "Playing game", value: false },
      { id: 3, label: "Listening to music", value: false },
      { id: 4, label: "Watching TV", value: true },
    ],
  };

  handleChange = (e) => {
      const id = e.target.id ;
      this.setState(prevState => {
          return({
              list : prevState.list.map(li => (li.id === +id ? {...li , value : !li.value} : li))
          })
      })
  };

  handleSubmit = (e) => {
      e.preventDefault()
      console.log('submited');
    //   console.log(this.state.list);
        this.setState((prevState) => {
            return({
                list : prevState.list.filter(item => item.value === false)
            })
        })
  }

  render() {
    const renderingInputLists = this.state.list.map((item) => {
      const { id, label, value } = item;
      return (
        <div key={id}>
          <input
            type="checkbox"
            id={id} 
            checked={value}
            onChange={this.handleChange}
          />
          <label htmlFor="label">{label}</label>
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            {renderingInputLists}
            <button type="submit">
                submit
            </button>
        </form>
      </div>
    );
  }
}

export default Index;
