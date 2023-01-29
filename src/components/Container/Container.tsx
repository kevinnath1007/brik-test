import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

interface IContainerProps extends ViewProps {

}

const Container: React.FC<IContainerProps> = ({style, children}) => {
    const insets = useSafeAreaInsets();

    const stylesView = React.useMemo(() => styles(insets), [insets]);

    return (
        <View style={[stylesView.container, style]}>
            {children}
        </View>
    )
}

const styles = (insets: EdgeInsets) => StyleSheet.create({
    container: {
        paddingTop: insets.top,
        paddingBottom: insets.bottom
    }
});

export default Container;
