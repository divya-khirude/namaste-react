import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Nashik Class"} />
        <UserClass name={"Second"} location={"US"} />
        <UserClass name={"Third"} location={"US"} />
      </div>
    );
  }
}

/**
 * - Parent Constructor
 * - Parent Render
 *    - First Child Constructor
 *    - First Child Render
 *
 *    - Second Child Constructor
 *    - Second Child Render
 *
 *    - Third Child Constructor
 *    - Third Child Render
 *
 *    - First Child Component Did Mount
 *    - Second Child Component Did Mount
 *    - Third Child Component Did Mount
 * - Parent Component Did Mount
 */

export default About;
