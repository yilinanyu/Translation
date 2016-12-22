import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import map from 'lodash/map'

import { checkTranslation } from '../actions/index'

class Result extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.checkTranslation()
    }

    render() {
        return (
           <div className="panel panel-default">
               <div className="panel-heading">{this.props.result.title}</div>
               <div className="panel-body">
                   {this.getSelectedResult(this.props.result.selectedOptions)}
               </div>
           </div>
        )
    }

    getSelectedResult(options) {
        return map(options, option => {
            return(
                <div key={`selected-result-${option.id}`} className="options">
                    <h6  className="title">{option.title}</h6>
                    {this.getSelected(option.selected)}
                </div>

            )
        })
    }

    getSelected(options) {
        return map(options, option => {
            return(
                <div key={`selected-${option.id}`}  className={option.value} >
                    <span>{option.label} : {option.value}</span>
                </div>
            )
        })
    }

}


// result from reducer/index
function mapStateToProps(appState){
    return {result: appState.result}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ checkTranslation }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Result)
