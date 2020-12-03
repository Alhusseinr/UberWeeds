import React, { Component } from 'react';
import { Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default class dispensaryList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            dispensaries: {}
        }
    }

    render() {
        return(
            <SafeAreaView style={{ backgroundColor: '#499B4A' }}>
                <ScrollView style={{ height: '100%' }}>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Card.Cover source={{ uri: 'https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fdispensary%2Flogos%2FG7Ssg8u5RdX8qX6BNhQ2_leafly_cover.png?ixlib=js-2.3.2&dpr=1&w=1100&h=750&fit=fillmax&s=9f21ed5f691797be2aad0141e97dfbda' }} />
                            <Card.Content style={{ margin: 5 }}>
                                <Title>Harmmony Dispensary</Title>
                                <Paragraph>reviews</Paragraph>
                                <Paragraph>Secaucus, NJ.   <Text style={{ fontWeight: 'bold' }}>3.4 mi</Text></Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Card.Cover source={{ uri: 'https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fdispensary%2Flogos%2FAJgABSVRey4bVgsXVPKF_NY%2520Leafly.jpg?ixlib=js-2.3.2&dpr=1&w=1100&h=750&fit=fillmax&s=490331683b9c9b1c4a4193d51078aa65' }} />
                            <Card.Content style={{ margin: 5 }}>
                                <Title>Columbia Care - Manhattan</Title>
                                <Paragraph>reviews</Paragraph>
                                <Paragraph>New York, NY.   <Text style={{ fontWeight: 'bold' }}>4.6 mi</Text></Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Card style={styles.card}>
                            <Card.Cover source={{ uri: 'https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fmenu%2FmttAsCWQ663Kqa4rIo3a_1270_GreenWall.jpg?ixlib=js-2.3.2&dpr=1&w=1100&h=750&fit=fillmax&s=685a7437e24dc84a561d9083012394e0' }} />
                            <Card.Content style={{ margin: 5 }}>
                                <Title>Etain - Manhattan</Title>
                                <Paragraph>reviews</Paragraph>
                                <Paragraph>New York, NY.   <Text style={{ fontWeight: 'bold' }}>3.8 mi</Text></Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 1
    }
})