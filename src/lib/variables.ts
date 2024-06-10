export const variables = {
    lsAPI: import.meta.env.LS_BASE_URL
};



export function getBaseUrl() {
    return import.meta.env.LS_BASE_URL;
}