import React, { Component } from 'react'
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
class Toast extends Component {

  renderStatus() {
    let { reqStatus } = this.props;
    if (reqStatus.message)
      return (
        <Alert severity="warning">{reqStatus.message}</Alert>
      )
  }

  render() {
    return (
      <div>
        { this.renderStatus()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reqStatus: state.reqStatus
  }
}
export default connect(mapStateToProps)(Toast);
