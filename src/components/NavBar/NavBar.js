import React, { useCallback, useState, useEffect } from 'react'
import { Tabs, Tab, Paper } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import tabsData from '../../tabs/tabs.json'

const useStyles = makeStyles((theme) => ({
  activeTab: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  const active = useCallback(
    (index) => (activeTab === tabsData.findIndex((t) => t.id === index) ? classes.activeTab : null),
    [activeTab, classes.activeTab],
  )

  useEffect(() => {
    const activeTabIndex = tabsData.findIndex((tab) => `/${tab.id}` === location.pathname);
    setActiveTab(Math.max(activeTabIndex, 0));
  }, [location.pathname]);

  const handleChange = useCallback((event, newValue) => {
    setActiveTab(newValue);
  }, []);

  return (
    <Paper>
      <Tabs value={activeTab} onChange={handleChange}>
        {tabsData
          .sort((a, b) => a.order - b.order)
          .map((tab) => (
            <Tab key={tab.id} label={tab.title} component={Link} to={`/${tab.id}`} className={active(tab.id)} />
          ))}
      </Tabs>
    </Paper>
  );
};
