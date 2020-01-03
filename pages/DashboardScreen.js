import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DashboardScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Dashboard Screen
              </Text>
            </View>
        );
    }

}
export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


