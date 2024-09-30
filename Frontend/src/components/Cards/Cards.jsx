import { Card } from 'antd'
import React from 'react'
import { StyleNameProduct, WrapperPriceText, WrapperReportText, WrapperDiscountText } from './style'
import { StarFilled } from '@ant-design/icons';
const Cards = () => {
    return (
        <Card
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>Sach</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.5 </span><StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span>| Da ban 1000+</span>
            </WrapperReportText>
            <WrapperPriceText>
                1.000.000d
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </Card>
    )
}

export default Cards

