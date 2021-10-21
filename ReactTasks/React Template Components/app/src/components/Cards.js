import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
    render() {
        const { cardDatas } = this.props
        return (
            <div className="row mb-2">
                {
                    cardDatas.map((cardData) => {
                        return (
                            <Card
                                key={cardData.id}
                                cardCategory={cardData.cardCategory}
                                cardTitle={cardData.cardTitle}
                                cardDate={cardData.cardDate}
                                cardDesc={cardData.cardDesc}
                            />
                        )
                    })
                }
            </div>
        )
    }
}