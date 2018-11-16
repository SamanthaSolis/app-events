import React, { Component } from 'react';
import { Input, Popup, Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

class DatePicker extends Component {
  handleDateChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
      this.props.onChange(event, { name, value });
    }
  };
  state = {
    date: this.props.date,
  };

  render() {
    const { title, icon } = this.props;
    return (
      <Form>
        <Popup
          trigger={
            <Input
              placeholder={title}
              icon={icon}
              iconPosition="left"
              value={this.state.date}
            />
          }
          on="click"
          hideOnScroll
        >
          <DateInput
            inline
            name="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </Popup>
      </Form>
    );
  }
}

export default DatePicker;
