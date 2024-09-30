import React from "react"
import TypeProduct from "../../components/TypeProduct/TypeProduct"
import Sliders from "../../components/Sliders/Sliders"
import Cards from "../../components/Cards/Cards"
import { WrapperButtonMore, WrapperTypeProduct } from "./style"
import anh1 from '../../assets/images/anh1.webp'
import anh2 from '../../assets/images/anh2.webp'
import anh3 from '../../assets/images/anh3.webp'



const trangchu = () => {
    const arr = ['Sách Thiếu Nhi', 'Truyện', 'Tiểu Thuyết']
    return (
        <div style={{ padding: "0px 120px" }}>
            <WrapperTypeProduct>
                {arr.map((Item) => {
                    return (
                        <TypeProduct name={Item} key={Item} />
                    )
                })}
            </WrapperTypeProduct>
            <div id="container" style={{ backgroundColor: '##a0b8b4', padding: '0 120px', height: '1000px' }}>
                <Sliders arrImages={[anh1, anh2, anh3]} />
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />

                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <WrapperButtonMore textButton='Xem them' Type='outline'
                        styleButton={{
                            border: '1px solid rgb(11, 116, 229)',
                            color: 'rgb(11, 116, 229)',
                            width: '240px',
                            height: '38px',
                            borderRadius: '4px',
                        }} />
                </div>
            </div>



        </div >
    )
}

export default trangchu