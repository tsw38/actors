export const backgroundState    = "rgba(243,245,248,1)";
export const borderGrey         = "rgba(191,193,194, 1)";
export const borderGreyInverted = "rgba(64,62,61, 1)";
export const appWidth           = 1080;
export const basicPadding       = 7;

export const axios  = (typeof window !== 'undefined') ? window.axios = require('axios') : require('axios');
export const origin = /DEVELOPMENT/.test(process.env.ENVIRONMENT) ? `http://localhost:${process.env.HTTP_PORT}` : "https://tylerscott.gallery";
export const maxFontChangeWidth = 800;
