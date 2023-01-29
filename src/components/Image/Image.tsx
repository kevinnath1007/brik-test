import React from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import ImagePreLoader from './Image.Preloader';
import {ImageProps} from './image.interface';
import styles from './image.styles';

const Image = ({
                   testID = 'fastImageComponent',
                   resizeMode = FastImage.resizeMode.contain,
                   style = styles.defaultStyle,
                   source = null,
                   preLoaderSource = '',
                   preLoaderStyle = null,
                   preLoaderResizeMode = FastImage.resizeMode.contain
}: ImageProps): JSX.Element => {
    return (
        <>
            <FastImage testID={testID} resizeMode={resizeMode} style={style} source={source as Source}/>
            <ImagePreLoader
                source={preLoaderSource}
                resizeMode={preLoaderResizeMode}
                style={[styles.fixedPosition, preLoaderStyle]}
            />
        </>
    );
}

export default Image;
