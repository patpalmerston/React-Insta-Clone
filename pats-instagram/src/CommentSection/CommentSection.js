import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // comments: props.passCom, ---this already exists in props of Comment section blood from passCom
      comment: ''
    }
  }

  eventHandler = (e) => {
    // console.log(e.target.value) first look at 'e', then 'target', then 'value'
    this.setState({comment: e.target.value})
  }

  render() {
    return (
      <div>

      {this.props.passCom.length && this.props.passCom.map((comment, index) => <Comment key={index} comment={comment} />)}

      <CommentInput 
        comment={this.state.comment} 
        eventHandler={this.eventHandler} 
        upDatePost={(this.props.upDatePost)}
        passId={this.props.passId} 
      />

      </div>
     
    )
  }
}




CommentSection.propTypes = {
  
}

export default CommentSection