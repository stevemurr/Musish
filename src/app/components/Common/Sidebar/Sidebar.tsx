import React from 'react';
import withContext from '../../../hoc/withContext';
import { AuthorizeContext } from '../../Providers/AuthorizeProvider';
import SearchBar from '../NavigationBar/Search/SearchBar';
import classes from './Sidebar.scss';

interface SidebarProps {
  authorized: boolean;
}

const Sidebar: React.FC<SidebarProps> = _ => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.menus}>
        <SearchBar />
      </div>
    </aside>
  );
};

export default withContext(Sidebar, AuthorizeContext);
