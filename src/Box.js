import React, { Component } from 'react'
import './Box.css'

export default class Box extends Component {
    static defaultProps = {
        colors: ['white', 'indianred', ' pink', 'black', 'ligthsalmon', 'gold', 'lavender', 'palender', 'cyan', 'steeleblue', 'bisque']
    }
    constructor(props) {
        super(props)
        this.state = {
            color: 'indianred'
        }
        this.change = this.change.bind(this)
    }

    componentDidMount() {
        this.change()
    }
    

    change() {
        debugger
        const newColor = this.props.colors[Math.floor(Math.random() * 11)]
        console.log(newColor)
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div>
                <div className="Box" onClick={this.change} style={{ background: this.state.color }}></div>
            </div>
        )
    }
}
