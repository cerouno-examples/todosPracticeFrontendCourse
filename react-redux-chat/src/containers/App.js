import React from 'react';
import NavBar from './NavBar';
import ChatTable from './ChatTable';
import Home from './Home';
import SideChat from './SideChat';
import Notification from './Notification';
import { connect } from 'react-redux';

class App extends React.Component {

	render() {
		return (
			<div className="container">
				<Notification />
				<NavBar />
				<div className="row">
					<SideChat />
					{ this.props.currentChat ? <ChatTable /> : <Home /> }
		    </div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
  const currentChat = state.getIn(['chats', 'currentChat']);
  return {
    currentChat
  }
}

export default connect(mapStateToProps)(App);
