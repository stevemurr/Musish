import React, { Component, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import SearchBar from './Common/NavigationBar/Search/SearchBar';
import Queue from './Common/Player/Queue/Queue';
import { ModalProps, withModal } from './Providers/ModalProvider';

interface LayoutProps extends RouteComponentProps, ModalProps {
  children: ReactNode;
}

class Layout extends Component<LayoutProps> {
  public componentDidMount() {
    const { history, modal } = this.props;

    history.listen(() => {
      modal.flush();
    });
  }

  public render() {
    return (
      <>
        <div id='main-wrapper'>
          <Queue />
          {/* <Sidebar /> */}
          <main id='main-content'>
            <SearchBar /> 
          </main>
        </div>
      </>
    );
  }
}

export default withRouter(withModal(Layout));
