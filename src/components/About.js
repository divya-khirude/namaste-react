import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name={"Divya Khirude (function)"} />
      <UserClass name={"Divya Khirude (class)"} location={"Nashik Class"} />
    </div>
  );
};

export default About;
