import React from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';

class ChatTable extends React.Component {


	render() {
		return (
      <div className="col s12 m8 l9">
        <div className="card hoverable indigo darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">{`${this.props.userName}'s Chat`}</span>
          </div>
          <div className="card">
            {
              this.props.messageList.map((msg, index) => {
								const classes = `card-content ${msg.userName === 'You' ? 'right-align' : 'left-align'}`;
								return (
									<div key={index} className={classes}>
										<div className="chip">
											<b>{msg.userName}: </b>
											<span>{msg.message}</span>
										</div>
									</div>
								)
              })
            }
            <div className="card-action">
              <ChatInput
								onSubmit={this.props.sendChat}
							/>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

ChatTable.propTypes = {
  userName: PropTypes.string,
  messageList: PropTypes.array.isRequired,
	sendChat: PropTypes.func.isRequired,
	selectChat: PropTypes.func.isRequired
}

export default ChatTable;
