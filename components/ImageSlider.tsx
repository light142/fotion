import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    Text,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';

interface ImageSliderProps {
    images: string[]; // Define the prop type for images
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const { width } = Dimensions.get('window');
    const height = width * 0.7;

    const [active, setActive] = useState<number>(0);

    const onScrollChange = ({
        nativeEvent,
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
                style={{width, height}}
                scrollEventThrottle={16} // Optimize scroll event handling
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={{ width, height, resizeMode: 'cover' }}
                    />
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <Text key={index} style={index === active ? styles.activeDot : styles.dot}>
                        •
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        alignSelf: 'center',
    },
    dot: {
        color: '#888',
        fontSize: 50,
    },
    activeDot: {
        color: '#FFF',
        fontSize: 50,
    },
});

export default ImageSlider;
