import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  lastname: t.maybe(t.String),
  email: t.String,
  password: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    name: {
      error: 'Name is required to move on'
    },
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you wont remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User}
          options = {options} />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
