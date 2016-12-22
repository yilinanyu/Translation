import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {Btton, ButtonToolbar, Panel, Checkbox, Radio, FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import { setMarketingpages } from '../actions/index'


class Marketingpages extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.marketingPages.title}</div>
                <div className="panel-body">
                    {this.getCheckboxes(this.props.marketingPages.checkboxes)}
                </div>
            </div>
        )
    }

    getCheckboxes(checkboxes) {
        return checkboxes.map(checkbox => {
            return (
                <label  key={`env-checkbox-${checkbox.id}`} className="checkbox-inline">
                    <input
                        onChange={this.props.setMarketingpages.bind(null, checkbox.id)}
                        type="checkbox"
                        value={checkbox.value}
                        checked={checkbox.selected}/>
                    {checkbox.label}
                </label>)
        })
    }
}

function mapStateToProps(appState){
    return {marketingPages: appState.marketingPages}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setMarketingpages}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Marketingpages)
