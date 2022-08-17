/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Routers from './routes/Routes';
import "primeflex/primeflex.css";

class App extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props)
  }

  public componentDidMount(): void {
      
  }

  public render() {
      return(
        <div>
            <Routers />
        </div>
      );
  }
}

export default App;
