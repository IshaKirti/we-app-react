import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet} from 'react-native'
import FutureForecast from './FutureForecast'


const WeatherScroll = () => {
  return (
    <ScrollView horizontal ={true} style = {styles.scrollView}>
      <CurrentTempEl/>
      <FutureForecast/>
    </ScrollView>
  )
}
 const CurrentTempEl =() => {
      const img ={uri:'https://th.bing.com/th/id/R.20a7a52cc8ff191b45bc3ec23e5224f9?rik=69ISqT7JB7TUvA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f06%2fpartly-cloudy-weather-clip-art_191413.jpg&ehk=N7fAYOxigTtYYogL93zrKQK5rqwL%2fier7IrivDii8jU%3d&risl=&pid=ImgRaw&r=0'}
     return(
         <View style ={styles.currentTempContainer}>
            <Image source={img} style={styles.image}/>
             
            <View style ={ styles.otherContainer}>
                <Text style={styles.day}> Sunday</Text>
                <Text style={styles.temp}> Night - 28&#176; C</Text>
                <Text style={styles.temp}> Day - 35&#176; C</Text>
            </View>

            
         </View>
     )
 }

const styles = StyleSheet.create({

    scrollView:{
        backgroundColor:'#18181bcc',
        padding:30,
        flex:0.2,
    },
    image:{
        width:100,
        height:100,
        borderRadius:30,
        padding:20,
        marginLeft:20,
    },

    currentTempContainer:{
        flexDirection:'row',
        backgroundColor:'#18181bcc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#eee',
        borderWidth:1,
        padding:15,
    },

    day:{
        fontSize:20,
        color:'white',
        backgroundColor:"#3c3c44",
        padding:10,
        textAlign:"center",
        borderRadius:50,
        fontWeight:"200",
        marginBottom:15,
        marginLeft:50,
        marginTop:20,
    },
     temp:{
         fontSize:20,
         color:'white',
         fontWeight:'100',
         textAlign:'center',
     },

     otherContainer:{
         paddingRight:20,

     }
})

export default WeatherScroll
