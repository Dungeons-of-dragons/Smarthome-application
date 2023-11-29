import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'


const URL = 'http://192.168.0.111:5000'

async function handleLogin(username, password, errorHandler) {
  // perform fetch request
  const request = await fetch(`${URL}/auth/login`, {
    method: 'post',
    headers: {
      "Content-type": 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
  // if request success save return value
  if (request.status === 200) {
    const response_json = await request.json()
    await save('access_token', response_json.access_token)
    await save('refresh_token', response_json.refresh_token)
    // handle user storage
    await handleSetUser(errorHandler)
  }
  else {
    if (errorHandler !== undefined) {
      errorHandler()
    }
  }
}

async function handleSetUser(errorHandler) {
  const access_token = await getValueFor('access_token')
  const userRequest = await fetch(`${URL}/v1/profile`, {
    // method: get,
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    }
  })
  if (userRequest.status === 200) {
    const userJSON = await userRequest.json()
    await setUser(JSON.stringify(userJSON))
    // console.log(userJSON)
  }
  else {
    if (errorHandler !== undefined) {
      errorHandler()
    }
  }
}


async function save(key, value) {
  await SecureStore.setItemAsync(key, value)
}

async function getValueFor(key) {
  const result = await SecureStore.getItemAsync(key)
  return result
}


async function setUser(userJSON) {
  await AsyncStorage.setItem('user', userJSON)
}
async function getUser() {
  return await AsyncStorage.getItem('user')
}

export {
  getValueFor,
  save,
  setUser,
  getUser,
  handleLogin,
  handleSetUser
}
