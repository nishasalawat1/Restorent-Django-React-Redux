
export const ApIBegin = type => ({
    type: type
});

export const ApISuccess = (type,payload) => ({
    type: type,
    payload: payload 
});

export const ApIFailure = (type,payload) => ({
    type: type,
    payload: payload 
});

