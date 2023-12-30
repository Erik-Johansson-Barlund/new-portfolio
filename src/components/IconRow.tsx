import React from 'react'
import Icon from './Icon'
import { TfiEmail } from "react-icons/tfi";

function IconRow() {
  return (
    <div>
      <Icon
      title="Contact"
      icon={<TfiEmail />}
      />
    </div>
  )
}

export default IconRow