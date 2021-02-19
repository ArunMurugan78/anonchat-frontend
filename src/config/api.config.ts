import {environment} from '../environments/environment';


export const DEVELOPMENT_URL = 'http://localhost:8000';
export const PRODUCTION_URL = 'https://anon-chat-web.herokuapp.com';

export const API_BASE_URL = environment.production ? PRODUCTION_URL : DEVELOPMENT_URL;
export const WEBSOCKET_URI = API_BASE_URL;
