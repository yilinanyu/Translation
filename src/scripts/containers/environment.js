/**
 * Created by lyi on 12/5/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setEnvironment } from '../actions/index'
class Environment extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.environment.title}</div>
                <div className="panel-body">
                    {this.getRadios(this.props.environment.radios)}
                </div>
            </div>
        )
    }

    getRadios(radios) {
        return radios.map(radio => {
            return (
                <label  key={`env-radio-${radio.id}`} className="radio-inline">
                    <input
                        onChange={this.props.setEnvironment.bind(null, radio.id)}
                        type="radio"
                        value={radio.value}
                        checked={radio.selected}/> {radio.label}
                    </label>)
        })
    }
}


function mapStateToProps(appState){
    return {environment: appState.environment}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setEnvironment}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Environment)
