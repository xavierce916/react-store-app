
export const getEnvVariables = () => {

    // import.meta.env;

    return {
        // ...import.meta.env
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_FLICKR_API_KEY: import.meta.env.VITE_FLICKR_API_KEY
    }
}
