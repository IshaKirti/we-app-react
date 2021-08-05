import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const FutureForecast = () => {
  return (
    <View style= {{flexDirection:'row'}}>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
      
    </View>
  )
}
 const FutureForecastItem =() => {
     const img ={ uri:"https://th.bing.com/th/id/R.20a7a52cc8ff191b45bc3ec23e5224f9?rik=69ISqT7JB7TUvA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f06%2fpartly-cloudy-weather-clip-art_191413.jpg&ehk=N7fAYOxigTtYYogL93zrKQK5rqwL%2fier7IrivDii8jU%3d&risl=&pid=ImgRaw&r=0"}
     return(
         <View style={styles.futureForecastItemContainer}>
             <Text styles ={styles.day}>Monday</Text>
             <Image source={img} style={styles.image}/>
             <Text  style={styles.temp}> Night - 28&#176; C</Text>
             <Text style={styles.temp}> Day - 32&#176; C</Text>
         </View>
     )
 }
export default FutureForecast
 const styles = StyleSheet.create({
     image:{
         width:100,
         height:100,
         borderRadius:30,
     },
     futureForecastItemContainer:{
         flex:1,
         justifyContent:'center',
         backgroundColor:'#00ffff',
         borderRadius:10,
         borderWidth:1,
         padding:20,
         marginLeft: 10,
         borderColor:'white',
     },
   day:{
    fontSize:20,
    color:'white',
    backgroundColor:"#18181bca",
    padding:10,
    textAlign:"center",
    borderRadius:50,
    fontWeight:"200",
    marginBottom:15,
    marginLeft:50,
     },
     temp:{
        fontSize:20,
        color:'white',
        fontWeight:'100',
        textAlign:'center',
    },
     
 })