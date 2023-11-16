import * as SecureStore from 'expo-secure-store'

async function save(key, value) {
  await SecureStore.setItemAsync(key, value)
}

async function getValueFor(key){
  const result = await SecureStore.getItemAsync(key)
  // if (setFunction !== undefined){
  // setFunction(result)
  // }
  return result
}

export {
  getValueFor,
  save
}
