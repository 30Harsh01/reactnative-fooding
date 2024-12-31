// import Colors from '@/src/constants/Colors';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Product } from '@/src/types';

type ProductListItemPropo={
    product:Product
}
export const pizzaImage='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fpizza%2F&psig=AOvVaw3VV26-2rArIPxgqQo763DK&ust=1735752386674000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDWy9jD0ooDFQAAAAAdAAAAABAE'

// const product=products[0]

// now we will make our own component
const ProductList=({product}:ProductListItemPropo)=>{
  console.log(product)
  return(
    <View style={styles.container}>
      <Image 
        source={{uri:product.image||pizzaImage}} 
        style={styles.image}
        resizeMode='contain' 
        />
      {/* <Image src={product.image} style={styles.image}/> */}
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{`${product.price} Rs`}</Text>
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    flex:1,   //yeh shayad se kabhi 2 bhi krna ho 
    maxWidth:'50%'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical:2
  },
  price:{
    fontStyle:'italic',
    color:Colors.light.tint,
    fontWeight:'bold'
  },
  image:{
    // width:100
    width:'100%',   //to adjust accordig to the page we need percentage hence we do 100% instead of only 100
    // height:'50%'
    // height:'150%'
    aspectRatio:1/1   // autpmatically adjust according to the width
  }
});
