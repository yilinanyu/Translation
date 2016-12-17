import React, { Component } from 'react'
import {Button, ButtonToolbar, Panel, Checkbox, Radio, FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import map from 'lodash/map'


class Result extends Component {

    constructor(props){
        super(props)
    }

    render() {
       return (
           <div className="panel panel-default">
               <div className="panel-heading">Result!</div>
               <div className="panel-body">
                   {map(this.props.results, result => {
                       console.log(result)
                       return `country's：${result.label} |  `
                   })}
               </div>
           </div>
        )
    }
}

/// for(var i =0; i < this.props.result.length, i++) {
//   console.log(this.props.result[i])
//        "country's: " + result.label
// }
function mapStateToProps(appState){
    return {results: appState.result}
}

export default connect(mapStateToProps)(Result)
