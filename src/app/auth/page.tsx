"use client"
import { Formik, Form } from 'formik';
import { TextField, Button } from "@mui/material";
import * as yup from "yup";

const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
    return (
        <Formik
            initialValues={{ phone: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
        >
            {({ handleChange, handleBlur, values, errors, touched }) => (
                <Form>
                    <TextField
                        name="phone"
                        label="شماره همراه"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="password"
                        label="کلمه عبور"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        ورود
                    </Button>
                </Form>
            )}
        </Formik>

    )
}