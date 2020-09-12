import React, { Component } from 'react'
import { BidCategoryContainer } from './styles'

export default function BidCategory({name, bgPath}) {
    return (
        <BidCategoryContainer bgPath={bgPath}>
            <h3>
                {name}
            </h3>
        </BidCategoryContainer>
    )
}