import React from 'react';

const UserContext = React.createContext();

// destructuring provider and consumer to better names for ease of use
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};