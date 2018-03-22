import React from 'react';
import PropTypes from 'prop-types';

class SideChat extends React.Component {
	constructor(props) {
		super(props);
		this.selectUsername = this.selectUsername.bind(this);
	}

	selectUsername(userName) {
		this.props.selectChat(userName);
	}


	render() {
		return (
      <div className="col s12 m4 l3">
        <div className="card orange darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">Chats</span>
          </div>
          <div className="collection">
            {
              this.props.userList.map((user, index) => {
                return (
                  <a
                    onClick={() => this.selectUsername(user)}
                    key={index}
                    className="collection-item"
                    >{user}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
		);
	}
}

SideChat.propTypes = {
  userList: PropTypes.array.isRequired,
	selectChat: PropTypes.func.isRequired
}

export default SideChat;
