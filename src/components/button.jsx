import React, { useState } from 'react'
import style from '@/styles/Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button({variant, content}) {
    const stateArray = ['constrained', 'outlined', 'outlinedLight', 'transparent']
    const [currentState, setCurrentState] = useState(stateArray.includes(variant) ? variant : 'constrained')
  return (
    <button className={style.test}>
        {content}
        {variant === 'transparent' && <FontAwesomeIcon icon={("calendar")} />}
    </button>
  )
}

export default Button