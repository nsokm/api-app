import axios from 'axios';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Weather = () => {
    const [city,setCity] = useState('');
    const [weather,setWeather] = useState(null);
   // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
   const API_KEY = '1ce2b11f53923fcf50276a4f87dddec6';
   const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
   
   //create  function
   const getWeather = async () => {
    try{
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
        setWeather(response.data);
    }catch(error){
        console.error('Error fetching weather data',error);
    }
   }
   return (
    <View style={styles.container}>
      <Text>Weather ☂️ </Text>
      <TextInput 
      placeholder='Enter City Name'
      style={styles.input}
      value={city}
      onChangeText={(NewText) => setCity(NewText)}
      />
      <Button title='Get Weather' onPress={getWeather}/>
      
      {weather && (
        <View style={{marginTop:20,backgroundColor:'#fff'}}>
            <Text style={{fontSize:18}}>Temperature 🌡️ :{Math.round(weather.main.temp-273.15)} ํC </Text>
            <Text style={{fontSize:18}}>Humidity 💧: </Text>
            <Text>Condition :{weather.weather[0].description} </Text>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:5,
        marginVertical:20,
        padding:10,
        margin:5,
        backgroundColor:'#fff'
    },
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default Weather;