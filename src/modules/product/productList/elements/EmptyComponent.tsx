import React from 'react';
import {StyleSheet, Text, View, Dimensions, ActivityIndicator} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../../../../libraries/StateManagement";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const EmptyComponent = () => {
    const [loading, setLoading] = React.useState(false);
    const {status, productList} = useSelector((state:RootState) => state.product);

    React.useEffect(() => {
        if (status === 'loading' && productList.length === 0) {
            setLoading(true);
        }
    }, [status, productList]);

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator size="large" /> : <Text>NO DATA</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'white',
       justifyContent: 'center',
       alignItems: 'center',
       height: SCREEN_HEIGHT * 69 / 100
   }
});

export default EmptyComponent;
