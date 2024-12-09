import * as React from 'react'
import "../index.css"
import { Outlet, createRootRoute } from '@tanstack/react-router'



export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
