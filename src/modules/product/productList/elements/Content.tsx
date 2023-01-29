import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../libraries/StateManagement";
import {fetchProductList} from "../../dataSource/productListData";
import {ProductType} from "../../model/productType";
import ProductItem from "./ProductItem";
import Header from "./Header";
import EmptyComponent from "./EmptyComponent";

const Content = () => {
    const {productList, hasNextPage, status, page, searchList} = useSelector((state:RootState) => state.product);
    const [refreshing, setRefreshing] = React.useState(false);
    const previousPage = React.useRef(0);
    const dispatch = useDispatch();6

    React.useEffect(() => {
        if (page === 1) {
            dispatch(fetchProductList({page}));
            setRefreshing(true);
        }
    }, []);

    React.useEffect(() => {
        if (status !== 'loading' && (previousPage.current !== page || page === 1)) {
            setRefreshing(false);
        }
    }, [status, productList]);

    const renderItem = React.useCallback(({item}: {item: ProductType}) => <ProductItem item={item} />, []);

    const keyExtractor = (item: ProductType, index: number) => `${item.id}${index}`;

    const onEndReached = () => {
        if (hasNextPage) {
            dispatch(fetchProductList({page: page + 1}));
        }
    }

    const onRefresh = () => {
        dispatch(fetchProductList({page: 1}));
        setRefreshing(true);
    }

    return (
        <>
            <FlatList
                ListHeaderComponent={Header}
                ListFooterComponent={EmptyComponent}
                stickyHeaderIndices={[0]}
                keyExtractor={keyExtractor}
                stickyHeaderHiddenOnScroll={true}
                data={searchList.length === 0 ? productList : searchList}
                initialNumToRender={10}
                renderItem={renderItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                refreshing={refreshing}
                onRefresh={onRefresh}
                contentContainerStyle={styles.contentContainerFlatlist}
            />
        </>
    )
}

const styles = StyleSheet.create({
    contentContainerFlatlist: {
        paddingHorizontal: 8,
        backgroundColor: 'white'
    }
});

export default Content;
