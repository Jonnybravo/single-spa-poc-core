import React, { useState } from "react";
import { navigateToUrl } from "single-spa";
import { Menu, Segment } from "semantic-ui-react";

function Navbar() {
  //   const location = useLocation().pathname.substring(1);
  const [selected, setSeleted] = useState("home");
  console.log("single-spa-poc-core");
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item href="/" name="home" onClick={navigateToUrl} />
        <Menu.Item href="/app1" name="app1" onClick={navigateToUrl} />
        <Menu.Item href="/persons" name="persons" onClick={navigateToUrl} />
      </Menu>
    </Segment>
  );
}
export default Navbar;
