import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime } from '../api';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },
    container: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5,
    }
});

class EventForm extends Component {
    state = {
        title: null,
        date: '',
    };

    onHandlePress = () => {
        this.props.navigation.navigate('list');
    };

    handleChangeTitle = title => {
        this.setState({ title })
    };

    handleDatePress = () => {
        this.setState({ showDatePicker: true });
    };

    handleDatePicked = date => {
        this.setState({ date });
        this.hideDatePicker();
    };

    hideDatePicker = () => {
        this.setState({ showDatePicker: false });
    };

    render() {
        return(
            <View style={styles.parent}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.text}
                        placeholder="Event Title"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}
                    />
                    <TextInput style={[styles.text, styles.borderTop]}
                               placeholder="Event Date"
                               spellCheck={false}
                               value={formatDateTime(this.state.date.toString())}
                               editable={!this.state.showDatePicker}
                               onFocus={this.handleDatePress}
                    />
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        mode="datetime"
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDatePicker}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.onHandlePress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default EventForm;