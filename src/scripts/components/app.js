import React, { Component } from 'react'

import Header from '../containers/header'
import Result from '../containers/result'
import CheckButton from '../containers/checkbutton'
import Environment from '../containers/environment'
import Marketingpage from '../containers/marketingpage'
import Locales from '../containers/locales'

class App extends Component {
    render() {
        return (
            <div className="react-container">
                <div className="content">
                    <Header />
                    <Environment />
                    <Marketingpage/>
                    <Locales/>
                    <div className="main">
                        <CheckButton/>
                    </div>
                    <Result />
                </div>
            </div>
        )
    }
}

export default App