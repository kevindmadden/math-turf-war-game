//Increase version number if you want to add a new key to ensure that new keys are added to existing users
const newestVersion = 1.111111
export const getNewestVersion = () => newestVersion

//These are the default values that a new user would start with.
//add any new user data (e.g. email) within method addDefaultNewUserData()
const getDefaultNewUserData = (forFirebase=true) => {
  return {
    gridGameTestDataEntry : 0,
  }
}

export const getDefaultNewUserDataForFirebase = () => getDefaultNewUserData(true)
export const getDefaultNewUserDataForLocalState = () => getDefaultNewUserData(false)
