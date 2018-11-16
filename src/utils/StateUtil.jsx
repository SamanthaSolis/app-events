var handleChange = self => (e, { name, value }) => {
  changeState(self)(name, value);
};

var changeState = self => (name, value) => {
  if (self.state.hasOwnProperty(name)) {
    self.setState({ [name]: value });
  }
};

var addItemState = self => (name, value) => {
  if (self.state.hasOwnProperty(name)) {
    self.setState({ [name]: [...self.state[name], value] });
  }
};

var removeItemState = self => (name, value) => {
  if (self.state.hasOwnProperty(name)) {
    var newState = self.state[name].filter(x => x !== value);
    self.setState({ [name]: newState });
  }
};

export { handleChange, changeState, addItemState, removeItemState };
