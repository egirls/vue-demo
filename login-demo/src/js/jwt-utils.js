import jwtDecode from 'jwt-decode'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo'

let jwtToken = async(that)=> {
  localStorage.setItem('jwtToken', token)
  let message = jwtDecode(token)
  localStorage.setItem('message', message)
}

export {
  jwtToken
};
