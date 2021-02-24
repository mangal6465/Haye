import AsyncStorage from '@react-native-community/async-storage';


export const getUserId = () => AsyncStorage.getItem('userId').then(value => value)

export const getSchemaname = () => AsyncStorage.getItem('schemaName').then(value => value)

export const getAuthToken = () => AsyncStorage.getItem('authToken').then(value => value)

export const getDisplayName = () => AsyncStorage.getItem('displayName').then(value => value)

export const getEncryptedPass = () => AsyncStorage.getItem('encryptedPass').then(value => value)

export const getExchangeId = () => AsyncStorage.getItem('exchangeId').then(value => value)

