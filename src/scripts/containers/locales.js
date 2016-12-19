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
    //whatever is returned will show up as props inside the locales
    return {locales: appState.locales}
}
// Anything returned from this function will end up as props on the locales container
function mapDispatchToProps(dispatch) {
    // whenever setLocales is called, the result should be passed by dispatch to all of our reducers
    return bindActionCreators({setLocales}, dispatch)
}
// Promote locales from a component to a container- it needs to know about this new dispatch method, Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Locales)
