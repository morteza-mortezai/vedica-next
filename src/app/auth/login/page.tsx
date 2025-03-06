"use client"

import { useActionState } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Link,
  CircularProgress,
  Alert
} from "@mui/material";
import { loginAction } from './login.action';

import NextLink from 'next/link';

export default function LoginPage() {

  const [errors, formAction, pending] = useActionState(loginAction, undefined)

  return (
    <Container component="main" maxWidth="xs" sx={{ my: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
          ورود به حساب کاربری
        </Typography>


        {errors?.message && <Alert severity="error">
          {errors?.message}
        </Alert>}



        <form style={{ width: '100%' }} action={formAction}>
          <TextField
            name="phone"
            label="شماره همراه"
            defaultValue={'+989362532122'}
            error={errors?.errors?.phone && Boolean(errors?.errors.phone)}
            helperText={errors?.errors?.phone && errors?.errors.phone}
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="09123456789"
          />

          <TextField
            name="password"
            label="کلمه عبور"
            type="password"
            defaultValue={'3132028MRtz'}
            error={errors?.errors?.password && Boolean(errors?.errors.password)}
            helperText={errors?.errors?.password && errors?.errors.password}
            fullWidth
            margin="normal"
            variant="outlined"

          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 2 }}>
            <Link component={NextLink} href="/forgot-password" variant="body2">
              فراموشی رمز عبور
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={pending}
            sx={{
              mt: 2,
              mb: 2,
              py: 1.5,
              borderRadius: 1,
              fontWeight: 'bold'
            }}
          >
            {pending ? <CircularProgress size={24} color="inherit" /> : 'ورود'}
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              حساب کاربری ندارید؟
            </Typography>
            <Link component={NextLink} href="/register" variant="body2">
              ثبت نام کنید
            </Link>
          </Box>
        </form>

      </Paper>
    </Container>
  );
}