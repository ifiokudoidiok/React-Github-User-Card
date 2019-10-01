import React from "react";
import axios from "axios";

const userAPI = "https://api.github.com/users/ifiokudoidiok";

export default class GithubUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userImage: "",
        userAlias: "",
        userBio: "",
        userLocation: "",
        userFollowers: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get(userAPI)
      .then(response => {
        this.setState({
          user: {
            username: response.data.name,
            userImage: response.data.avatar_url,
            userAlias: response.data.login,
            userBio: response.data.bio,
            userFollowers: response.data.followers
          }
        });
      })
      .catch(response => {
        debugger;
      });
  }
  render() {
    return (
      <div>
        {/* <img src={this.state.user.userImage} /> */}
        <h1>Name: {this.state.user.username}</h1>
        <h1>Username: {this.state.user.userAlias}</h1>
        <h1>Bio: {this.state.user.userBio}</h1>
        <h1>Number of followers:{this.state.user.userFollowers}</h1>
      </div>
    );
  }
}
