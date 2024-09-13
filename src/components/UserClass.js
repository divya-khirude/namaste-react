import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");
    // Api Call

    const data = await fetch("https://api.github.com/users/divya-khirude");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    console.log("Child Component Will Unmount");
  }

  render() {
    console.log(this.props.name + " Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @divya_khirude</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * ----- MOUNTING -------
 *
 * Constructor (dummy)
 * Render (dummy)
 *    <HTML Dummy>
 * Component Did Mount
 *    <API Call>
 *    <this.setState> -> State variable is updated
 *
 * ------ UPDATE --------
 *
 * Render (API Data)
 *    <HTML API Data>
 * Component Did Update
 *
 *
 *
 *
 */
