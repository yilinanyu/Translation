/**
 * Created by lyi on 12/5/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {Btton, ButtonToolbar, Panel, Checkbox, Radio, FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import { setLocales } from '../actions/index'

class Locales extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.locales.title}</div>
                <div className="panel-body">
                    {this.getCheckboxes(this.props.locales.checkboxes)}
                </div>
            </div>
        )
    }

    getCheckboxes(checkboxes) {
        return checkboxes.map(checkbox => {
            return (
                <label  key={`env-checkbox-${checkbox.id}`} className="checkbox-inline">
                    <input
                        onChange={this.props.setLocales.bind(null, checkbox.id)}
                        type="checkbox"
                        value={checkbox.value}
                        checked={checkbox.selected}/>
                    {checkbox.label}
                </label>)
        })
    }
}


function mapStateToProps(appState){
    return {locales: appState.locales}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setLocales}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Locales)
