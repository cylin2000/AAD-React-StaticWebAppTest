import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: '2d84330e-50fb-4077-b1a6-d5d087418e3b',
        authority: 'https://login.microsoftonline.com/c4894239-6dc4-402c-a360-f0ddd7e1311c',
        //redirectUri: 'http://localhost:3000',
        //postLogoutRedirectUri: 'https://localhost:3000'
        redirectUri: 'https://ambitious-forest-09471cb10.3.azurestaticapps.net',
        postLogoutRedirectUri: 'https://ambitious-forest-09471cb10.3.azurestaticapps.net'
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true
    },
    system: {
        allowRedirectInIframe: true,
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    }

};

