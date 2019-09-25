import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Outer } from './styles/components';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
    return (
        <ToastProvider>
            <Outer>
                <GlobalStyle />
                <Routes />
            </Outer>
        </ToastProvider>
    )
};

export default App;
