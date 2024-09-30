import React from 'react'
import { WrapperLableText } from './style'

const Navbar = () => {
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return <h1>{option}</h1>
                })
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLableText>Label</WrapperLableText>
            {renderContent('text', ['Sach', 'Truyen', 'Tieu Thuyet'])}
        </div>
    )
}

export default Navbar
