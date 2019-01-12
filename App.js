import React from 'react';
import EventList from './Components/EventList';
import EventForm from './Components/EventForm';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

const AppNavigator =  createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
        title: 'Your Events',
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
        title: 'Add an event',
    })
  },
});

export default createAppContainer(AppNavigator);