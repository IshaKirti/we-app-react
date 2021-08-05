import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

const API_key='37c598706bec892028ad619a4f05ac28';
const img = require('./assets/image.jpg')

export default function App() {
    const [data,setData]= useState(null);

    useEffect(() => {
     navigator.geolocation.getCurrentPosition((success) => {
        let {latitude,longitude } = success.coords;
        fetchDataFromApi(latitude,longitude)


     }, (err) => {
       if(err){
        fetchDataFromApi( "22.572645" , "88.363892")
       }
     })  

    }, [])

    const fetchDataFromApi = (longitude, latitude) => {

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude= hourly,minutely&units= metric&appid=${API_key}`
       ).then(res => res.json()). then(data => {
        console.log(data)
        setData(data);
      })
    }
  return (
    data && 
    <View style={styles.container}>
      <ImageBackground source ={img}  style ={styles.image}>
        <DateTime current ={data.current} timezone= {data.timezone} lat ={ data.lat} lon={data.long}/>
        <WeatherScroll/>
      
      </ImageBackground>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
   image:{
    width:"100%" , 
    flex:1, 
    resizeMode:"cover", 
    justifyContent:"center"
   }
});
