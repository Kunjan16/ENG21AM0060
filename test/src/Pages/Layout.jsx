import React from 'react'

const Layout = (props) => {
  return (
    <React.Fragment>
    <div id="layout-wrapper">

      <div className="main-content">
        {props.children}
      </div>
    </div>
  </React.Fragment>
  )
}

export default Layout;