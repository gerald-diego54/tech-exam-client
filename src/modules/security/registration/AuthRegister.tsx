import React from "react";
import RegNavbar from './components/RegNavbar';
import RegBodyForm from './components/RegBodyForm';

class AuthRegister extends React.Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div>
                <div aria-label="reg-navbar">
                    <RegNavbar/>
                </div>
                <div aria-label="body-form">
                    <RegBodyForm/>
                </div>
            </div>
        )
    }
}

export default AuthRegister;