import React from 'react'

class LikeSection extends React.Component {
  constructor() {
    super();
    this.state= {
      newLike: ''
    }
  }

  handleLikes = event => {
    event.preventDefault()
    this.setState({
      [event.target.newLike] : event.target.value
    })
  }


  render() {
    return(
      <div>
        <form onClick={(event) => this.props.upDateLike(event, this.state.newLike)}>
          <i 
            className='far fa-heart'
            name="newLike"
            onChange={this.handleLike}
            value={this.state.newLike}
          ></i>
        </form>

      </div>
    )
  }
}

export default LikeSection