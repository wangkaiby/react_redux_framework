import request from '../utils/request';
// import qs from 'qs';

export async function getpass(params) {
	return request(`https://api.apiopen.top/EmailSearch?number=1012002`,{
		method:'get',
	});
}