import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import EventCard  from './EventCard';
import { getEvents } from '../api';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

class EventList extends Component {
    state = {
        events: []
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                })),
            });
        }, 1000);

        getEvents().then(events => this.setState({ events }));
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    };

    render() {
        const { events } = this.state;
        return [
            <FlatList
                key="flatlist"
                style={styles.list}
                data={events}
                renderItem={({ item }) => <EventCard event={item}/>}
                keyExtractor={item => item.id}
            />,
            <ActionButton
                key="actionButton"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231,76,60,1)"
            />
        ]
    }
}

export default EventList;