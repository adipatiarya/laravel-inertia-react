import { Form, Head } from '@inertiajs/react';
import AuthLayout from '@@/layouts/auth-layout';
import { store } from '@@/routes/login';

export default function Login() {
    return (
        <AuthLayout>
            <Head title="Log in" />
            <Form {...store.form()} resetOnSuccess={['password']}>
                {({ processing, errors }) => (
                    <>
                        <div className="form-floating mb-20px">
                            <input
                                type="email"
                                className="form-control fs-13px h-45px"
                                id="emailAddress"
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                            <label htmlFor="emailAddress" className="d-flex align-items-center py-0">
                                Email Address
                            </label>
                            {errors.email && <span className="text-red-600">{errors.email}</span>}
                        </div>

                        <div className="form-floating mb-20px">
                            <input
                                type="password"
                                className="form-control fs-13px h-45px"
                                id="password"
                                placeholder="Password"
                                name="password"
                                required
                            />
                            <label htmlFor="password" className="d-flex align-items-center py-0">
                                Password
                            </label>
                            {errors.email && <span className="text-red-600">{errors.email}</span>}
                        </div>
                        <div className="form-check mb-20px">
                            <input className="form-check-input" type="checkbox" value="" id="rememberMe" name="remember" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>
                        <div className="login-buttons">
                            <button type="submit" className="btn h-45px btn-theme d-block w-100 btn-lg">
                                {processing && <i className="fa fa-spinner fa-spin"></i>} Sign me in
                            </button>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
