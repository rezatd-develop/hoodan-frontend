'use client'
import { Provider } from 'react-redux';
import PublicLayout from '../../layouts/public/PublicLayout';
import { store } from '../../redux/store';
import ReduxMiddlewares from '../../utilities/ReduxMiddlewares';


export default function App({ t, lang }) {
    return (
        <Provider store={store} >
            <ReduxMiddlewares t={t} lang={lang}>
                <PublicLayout >
                </PublicLayout>
            </ReduxMiddlewares>
        </Provider>
    )
}