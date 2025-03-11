import Box from '@mui/joy/Box';
import Header from '../../components/profile/Header';
import Sidebar from '../../components/profile/Sidebar';

export default function ProfileLayout(props) {
    return (
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Header />
            <Sidebar isAdmin />
            {props?.children}
        </Box>
    );
}
