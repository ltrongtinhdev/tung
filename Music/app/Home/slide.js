import React, { Component } from 'react';
import { Text, Dimensions, Image, View } from 'react-native';
import styles from '../style';
import SwiperFlatList from 'react-native-swiper-flatlist';

export default class slide extends Component {
    render() {
        return (
            <View style={styles.containerTop2}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    showPagination
                >
                    <View style={[styles.child]}>
                        <Image style={styles.titleimg} source={require('../img/1.jpg')} />
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.titleimg} source={require('../img/3.jpg')} />
                    </View>
                    <View style={[styles.child]}>
                        <Image style={styles.titleimg} source={require('../img/3.jpg')} />
                    </View>
                </SwiperFlatList>
            </View>
        );
    }
}

