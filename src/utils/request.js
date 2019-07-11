import 'whatwg-fetch'
// import consts from '../static/requestApi'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    let accessToken = JSON.parse(localStorage.getItem('userInfo'))
    ? JSON.parse(localStorage.getItem('userInfo')).access_token
    : ""
  return fetch(url, {
    credentials:'include',
    headers:{
        'content-type':'application/json;charset=UTF-8',
        'Accept': 'application/json, text/plain, */*',
        'Dahai-Env-Selector': 'aitest',
        'Dahai-Access-Token': accessToken,
    },
    ...options,
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
