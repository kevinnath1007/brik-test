import React from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {PreLoaderProps} from './image.interface';

function ImagePreLoader({
                            resizeMode = FastImage.resizeMode.contain,
                            style = {},
                            source = null
                        }: PreLoaderProps): JSX.Element {
    if (!source) {
        return <></>;
    }

    return <FastImage resizeMode={resizeMode} style={style} source={source as Source} />;
}

export default ImagePreLoader;
