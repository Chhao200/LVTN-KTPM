import React from 'react'
import { Button } from 'antd'

const Buttons = ({ size, styleButton, styleTextButton, textButton, ...rest }) => {
    return (
        <Button
            size={size}
            style={styleButton}
            {...rest}
        >
            <span style={styleTextButton}>{textButton} </span>

        </Button>
    )
}

export default Buttons
