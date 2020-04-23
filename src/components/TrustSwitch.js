import React from 'react';
import 'antd/dist/antd.css';
import { Switch } from 'antd'; 

const TrustSwitch = props => {
  const { onChange, showTrusts } = props
  return (
    <>
      <span className="trustSwitch_label">Show/Hide trusts</span>
      <Switch onChange={onChange} checked={showTrusts} />
    </>
  )
}

export default TrustSwitch
