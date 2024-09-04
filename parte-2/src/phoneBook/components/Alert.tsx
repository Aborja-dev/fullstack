import React from 'react'
interface Props {
    message: string | null
    type?: string
}

const alertTypes = {
    success: '4px solid green',
    error: '4px solid red',
    warning: '4px solid yellow',
    info: '4px solid blue',
}
const Alert: React.FC<Props> = ({message, type = 'info'}) => {
    if (message === null || '') {
        return null
    }
    return (
        <div className="alert" style={{border: alertTypes[type]}}>
          <p>{message}</p>
        </div>
      )
  
}

export default Alert
