import { dev } from '$app/environment';
import { LS_BASE_URL } from '$env/static/private';
// import { lsAPI } from '$lib/variables';

const debug = dev;


// const base = "http://localhost:8000"

// const base = lsAPI;
const base = LS_BASE_URL;

export type Fetcher = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

export async function apiFetch(fetchFn: Fetcher | undefined, path: string, request: RequestInit): Promise<Response> {
    if (!fetchFn) {
        fetchFn = fetch;
    }

    request.credentials = 'omit';
    request.mode = 'cors';
    request.headers = {
        ...request.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
    // if (debug) console.log('apiFetch', path, request);

    try {
        const response = await fetchFn(`${base}${path}`, request);
        // if (debug) console.log('apiFetch response', path, response);

        if (response.status >= 400) {
            const serverError: ServerError = {
                message: response.statusText,
                status: response.status,
                stack: undefined
            };
            return Promise.reject(serverError);
        }
        return Promise.resolve(response);
    } catch (e) {
        //a response cannot be retrieved
        const serverError: ServerError = {
            message: 'Failure communicating with server',
            status: -101,
            stack: undefined
        };
        if (debug) console.log('Communication Failure', e, serverError);
        return Promise.reject(serverError);
    }
}

export interface ServerError {
    message: string;
    status: number;
    stack: unknown;
}
