import React, { Component } from 'react';
import MainNavbar from './components/MainNavbar';
import MainSection from './components/MainSection';
import MainFooter from './components/MainFooter';
import MainSubFooter from './components/MainSubFooter';


class Main extends Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any){
        super(props);
    }

    public componentDidMount(): void {
        
    }

    public render(): React.ReactNode {
        return(
            <div>
                <div aria-label="navbar">
                    <MainNavbar />
                </div>
                <div aria-label="main-hero">
                    <MainSection />
                </div>
                <div aria-label="main-footer">
                    <MainFooter />
                </div>
                <div aria-label="sub-footer">
                    <MainSubFooter />
                </div>
            </div>
        );
    }
}

export default Main;