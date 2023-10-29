import React, { useCallback } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import tabsData from '../../tabs/tabs.json'
import { Loader } from '../Loader/'

export const Routing = () => {
  const route = useCallback((path) => <Loader path={path} />, [])

  return (
    <Routes>
      {tabsData.map((tab) => (
        <Route key={tab.id} path={`/${tab.id}`} element={route(tab.path)} />
      ))}
      <Route path="*" element={<Navigate to={`/${tabsData[0].id}`} replace />} />
    </Routes>
  )
}
