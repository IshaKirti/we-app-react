import React,{useEffect,useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment'

const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
 const months=['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'Nov', 'Dec'];


  const WeatherItem =({title, value, unit}) =>{
    return(
        <View styles={ styles.weatherItem}>
            <Text styles={ styles.weatherItemTitle}> {title}</Text>
            <Text styles={ styles.weatherItemValue}> {value}{unit}</Text>
        </View>
    )
}

const DateTime = ( current, lat, long, timezone) => {
    const[ date, setDate]= useState('')
    const[time, setTime] = useState('')
 console. log(current);
    useEffect(() =>  {
       setInterval(() => {
           const time = new Date();
           const month = time.getMonth();
           const date = time.getDate();
           const day = time.getDay();
           const hour = time.getHours();
           const hourIn12HrFormat = hour  >= 13 ? hour %12: hour
           const minutes = time.getMinutes();
           const ampm = hour >=12 ? 'pm':'am'

            setTime((hourIn12HrFormat <10? '0' +hourIn12HrFormat : hourIn12HrFormat) + ':' + (minutes <10?
                '0'+ minutes:minutes) + ' ' +ampm) 
            
                setDate(days[day] + ', ' + date+ ' ' + months[month])  
        }, 1000);
    },[])
  return (
    <View style = {styles.container}>
      <View>
          <View>
              <Text style={styles.heading}> {time}</Text>
          </View>
          <View>
              <Text style={styles.subheading}>{date}</Text>
          </View>
          
          <View style={styles.weatherItemContainer}>
            <Text>{current.humidity  &&  current.humidity} </Text>
            <WeatherItem title="Humidity" value={ current? current.humidity: ""} unit="%"/>
            <WeatherItem title="Pressure" value={current?  current.pressure :""} unit="hpA"/>
            <WeatherItem title="Sunrise" value={ current?  current.sunrise: ""} unit="am"/>
            <WeatherItem title="Sunset" value={ current?   current.sunset: ""} unit="pm"/>
            
          </View>
      </View>
      <View  style={styles.rightAlign}>
          <Text  style={styles.timezone}>Asia/Bihar</Text>
          <Text  style={styles.latlong}> 43.2n  54.3E</Text>
      </View>
    </View>
  )
}
 const styles = StyleSheet.create({
     container:{
         flex: 1.5,
         flexDirection:"row",
         justifyContent:'space-between',
         padding:30,
     },
      heading:{
          fontSize: 45,
          color:"purple",
          fontWeight:'100',
      },
       subheading:{
        fontSize: 20,
        color:"#eee",
        fontWeight:'300',

       },
        rightAlign:{
            textAlign:'right',
            marginTop:10,

        },
         timezone:{
             fontSize:20,
              color: 'white',
              marginTop:8,
         },
          latlong:{
              fontSize: 16,
              color:"white",
              fontWeight:'700',
          },
           weatherItemContainer:{
               backgroundColor:"#18181b99",
               borderRadius:10,
               padding: 10,
               marginTop:10,
            },
           weatherItem:{
              flexDirection:'row',
              justifyContent:'space-between' ,
           },
           weatherItemTitle:{
               color: 'white',
               fontSize:14,
               fontWeight:'100',
               flexDirection:'row',
               justifyContent:'space-between',

           },
           weatherItemValue:{
            color: 'white',
            fontSize:14,
            fontWeight:'100',
        },
           

 })
export default DateTime
