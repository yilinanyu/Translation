import React, { Component } from 'react'
import {Button, ButtonToolbar, Panel, Checkbox, Radio, FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import map from 'lodash/map'


class Result extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.results) {
            return <div>Select a checkbox to get started.</div>;
        }
        return (
           <div className="panel panel-default">
               <div className="panel-heading">Result!</div>
               <div className="panel-body">
                   <div>Selected:
                       {map(this.props.results, result => {
                       return (` ${result.label} |  `
                       )
                   })}
                   </div>
               </div>
           </div>
        )
    }
}

/// for(var i =0; i < this.props.result.length, i++) {
//   console.log(this.props.result[i])
//        "country's: " + result.label
// }
// result from reducer/index
function mapStateToProps(appState){
    return {results: appState.result}
}

export default connect(mapStateToProps)(Result)
