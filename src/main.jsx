import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import AuthProvider from './contextProviders/AuthProvider';
import { Provider } from 'react-redux';
import store from './reducers/Store';
 
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </Provider>

)
