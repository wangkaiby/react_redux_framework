import request from '../utils/request';
import API from '../static/requestApi'
// import { stringify } from 'querystring';
// import qs from 'qs';

export async function getpass(params) {
    const accessToken = JSON.parse(localStorage.getItem('userInfo'))
    ? JSON.parse(localStorage.getItem('userInfo')).access_token
    : ""
    const paramsobj = {...params, 'access_token': accessToken}
	return request(API.quality,{
        method:'post',
        body: JSON.stringify(paramsobj)
	});
}

export async function login(params) {
	return request(API.login,{
        method:'post',
        body: JSON.stringify(params)
	});
}

export async function authority() {
    let accessToken = JSON.parse(localStorage.getItem('userInfo'))
    ? JSON.parse(localStorage.getItem('userInfo')).access_token
    : ""
	return request(`${API.authority}?access_token=${accessToken}`,{
		method:'get',
	});
}

export async function koa(params) {
	return request(API.koa,{
        method:'get',
	});
}