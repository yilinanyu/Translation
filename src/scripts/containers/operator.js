import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateCounter } from '../actions/index'


class Operator extends Component {

    constructor(props){
        super(props)
    }

    render() {
       return (
           <span className="operator" onClick={this.onClickHandler.bind(this, this.props.type)}>{this.props.type}</span>
        )
    }

    onClickHandler(value) {
        this.props.updateCounter(value)
    }
}

function mapStateToProps(appState){
    return {operator: appState.operator}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({updateCounter}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Operator)
