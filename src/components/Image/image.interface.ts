import type {StyleProp, ViewStyle} from 'react-native';
import type {FastImageProps, ImageStyle, ResizeMode, Source} from 'react-native-fast-image';

export interface ImageProps extends Omit<FastImageProps, 'source'> {
    testID?: string;
    source: null | Source | string;
    preLoaderSource?: null | Source | string;
    preLoaderStyle?: StyleProp<ImageStyle>;
    preLoaderResizeMode?: ResizeMode;
    containerStyle?: StyleProp<ViewStyle>;
}

export interface PreLoaderProps extends Omit<FastImageProps, 'source'> {
    source: null | string | Source;
}
