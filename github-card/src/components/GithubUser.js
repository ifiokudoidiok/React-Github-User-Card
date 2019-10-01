import React from "react";
import axios from "axios";
import styled from "styled-components";

const UserStyle = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
 border: 0.1rem solid black;
 background: grey;
  display: flex;
  align-items: center;
h1{
  display:block;
  color:white;
  font-size:2rem;
  text-align:left;
  
}
span{
  color:black;
  font-size:1.5rem;
  font-weight: normal;
}
  /* text-align: center; */
  /* width: 50%; */
  img{
    padding-right: 30px;
  max-width: 200px;
}
  /* flex-direction: column; */
`;
const Info = styled.div`

`;


const userAPI = "https://api.github.com/users/ifiokudoidiok";
const options = {
  headers: { Authorization: 'fd1d7881204da2a1712d521b38c2fa6b5ff4510d' }
};

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
      .get(userAPI, options)
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
      <UserStyle>
        <img src={this.state.user.userImage} />
        <Info>

          <h1>Name: <span> {this.state.user.username}</span></h1>
          <h1>Username: <span> {this.state.user.userAlias}</span></h1>
          <h1>Bio: <span> {this.state.user.userBio}</span></h1>
          <h1>Number of followers: <span> {this.state.user.userFollowers}</span></h1>
        </Info>
      </UserStyle>
    );
  }
}
