import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    defaultStyle: {
        width: '100%',
        height: '100%'
    },
    fixedPosition: {
        position: 'absolute',
        zIndex: -1
    },
    container: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    // eslint-disable-next-line react-native/no-color-literals
    containerImageLoader: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    loader: {
        flex: 1,
        position: 'absolute'
    }
});
