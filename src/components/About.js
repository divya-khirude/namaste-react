import { Component } from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Parent Component Did Update");
  }

  componentWillUnmount() {
    console.log("Parent Component Will Unmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Nashik Class"} />
      </div>
    );
  }
}

export default About;
