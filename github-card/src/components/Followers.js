import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledFollowers = styled.div`
  /* text-align: center; */
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  
`;


const Follower = styled.div`
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
img{
  max-width: 200px;
  
}
  text-align: left;
  /* width: 50%; */
  /* display: flex; */
  flex-direction: column;
  /* flex-direction: row; */
`;

const followersAPI = "https://api.github.com/users/ifiokudoidiok/followers";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get(followersAPI)
      .then(response => {
        this.setState({
          followers: response.data
        });
      })
      .catch(response => {
        // debugger;
      });
  }
  render() {
    return (
      <StyledFollowers>
        {this.state.followers.map(follower => {
          return (
            <Follower>
              <img src={follower.avatar_url} /><br/>
              <h1>Username: {follower.login}</h1>
            </Follower>
          );
        })}
      </StyledFollowers>
    );
  }
}

export default Followers;
