import React from "react";
import AuthNavbar from './components/AuthNavbar';
import AuthBodyForm from './components/AuthBodyForm';

class Authentication extends React.Component {
// eslint-disable-next-line @typescript-eslint/no-useless-constructor
constructor(props: any) {
    super(props);
}

public componentDidMount(): void {
    
}

public render(): React.ReactNode {
    return(
        <div>
            <div aria-label="navbar">
                <AuthNavbar/>
            </div>
            <div aria-label="auth-body">
                <AuthBodyForm/>
            </div>
        </div>
    );
}
}

export default Authentication;