import React, { Component } from 'react'
import Api from './Api'
import Card from './Card'
import Nav from './Nav'
export default class Home extends Component {
    state = {
        data: []
    }
    gettingData = async () => {
        const data = await Api.getData('http://localhost:4000/Data')
        this.setState({ data: data.data })
    }
    componentDidMount() {
        this.gettingData()
    }
    render() {
        const data = this.state.data
        return (
            <React.Fragment>
                <Nav />
                <Card data={data === null ? [] : data} />
            </React.Fragment>
        )
    }
}
