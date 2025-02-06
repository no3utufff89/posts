import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';

createRoot(document.getElementById('root')!).render(
 
    <Provider store={store}>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
        <App />
      </BrowserRouter>
    </Provider>
,
)
