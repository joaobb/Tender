import React, { Component } from 'react'
import BidCategory from '../../components/bid-category'

export default class index extends Component {
    render() {
        return (
            <div>
                <BidCategory name="Redes" bgPath={'./img.jpg'} />
            </div>
        )
    }
}
