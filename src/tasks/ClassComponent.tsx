import React, { Component } from "react";

export class ClassComponent extends Component{
    state = {
        balance : 0
    }

    minusBalance = () => {
        const { balance } = this.state
        if (balance > 0) {
            this.setState({
                balance: balance - 1,
            })
        }
    }

    plusBalance = () => {
        const { balance } = this.state
        this.setState({
            balance: balance + 1,
        })
    }

    render() {
        const { balance } = this.state

        return (
            <div>
                <button onClick={this.minusBalance}>-</button>
                <button onClick={this.plusBalance}>+</button>
                <span>{ balance }</span>
            </div>
        )
    }
}   

export default ClassComponent