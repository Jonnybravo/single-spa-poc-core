import React from "react";
import {Sidebar, Menu, Icon} from "semantic-ui-react";

function LateralNavbar() {
  return (
    <Sidebar style={{top:"70px"}}
      as={Menu}
      animation="overlay"
      direction="left"
      icon="labeled"
      
      vertical
      visible={true}
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  );
}
export default LateralNavbar;
