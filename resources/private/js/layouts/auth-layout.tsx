import { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => {
    return (
        <div className="login login-v1">
            <div className="login-container">
                <div className="login-header">
                    <div className="brand">
                        <div className="d-flex align-items-center">
                            <span className="logo"></span> <b>SCM</b> Admin
                        </div>
                        <small>School Management System solutions</small>
                    </div>
                    <div className="icon">
                        <i className="fa fa-lock"></i>
                    </div>
                </div>
                <div className="login-body">
                    <div className="login-content fs-13px">{children}</div>
                </div>
            </div>
        </div>
    );
};
