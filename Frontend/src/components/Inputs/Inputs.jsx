import { Input } from 'antd'
import React from 'react'

const Inputs = (size, placeholder, style, bordered, ...rest) => {
    return (
        <Input
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            style={style}
            {...rest}
        />
    )
}

export default Inputs
