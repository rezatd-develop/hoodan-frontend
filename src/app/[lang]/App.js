'use client'
import { Provider } from 'react-redux';
import PublicLayout from '../../layouts/public/PublicLayout';
import { store } from '../../redux/store';
import ReduxMiddlewares from '../../utilities/ReduxMiddlewares';


export default function App({ t, lang, children }) {
    return (
        <Provider store={store} >
            <ReduxMiddlewares t={t} lang={lang}>
                <PublicLayout>
                    {children}
                </PublicLayout>
            </ReduxMiddlewares>
        </Provider>
    )
}