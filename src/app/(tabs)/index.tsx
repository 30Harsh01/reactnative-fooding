// import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import {View,FlatList} from 'react-native';
import ProductList from '@/src/components/productList';


// now we will make our own component

export default function TabOneScreen() {
  return (
      <FlatList
      data={products}
      renderItem={({item})=><ProductList product={item}/>}
      numColumns={2}
      contentContainerStyle={{gap:10 , padding:10}}
      columnWrapperStyle={{gap:10}}
      />
  );
}
