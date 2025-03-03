import { Box } from '@mui/material';


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#f5f5f5',
                display: 'flex',
                flexDirection: 'column'
            }}
          
        >
            {children}
        </Box>

    );
}
