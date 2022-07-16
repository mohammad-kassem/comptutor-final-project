import { View, Text } from 'react-native'
import React from 'react'
import { getToken } from '../../components/utility/Token';
import axios from 'axios';

export default async function getSchedules(setSchedules) {
  const token = await getToken()
  console.log(token);
  axios({
      method: "get",
      url: "http://192.168.1.105:8000/api/v1/tutor/schedule/get",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
    .then(function(response){
      console.log("hello")
      setSchedules(response.data.schedules)
      // alert(await response.data.message);
    })
    .catch(error=>console.log(error))
}