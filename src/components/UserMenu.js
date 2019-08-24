import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

const UserMenu = props => {
  return (
    <Dropdown
      trigger={
        <Image
          avatar={true}
          //size="mini"
          src="/static/profile.png"
          style={{ width: "18px", height: "18px" }}
        />
      }
      pointing={true}
      className="link item"
    >
      <Dropdown.Menu>
        <Dropdown.Item>{props.username}</Dropdown.Item>
        <Dropdown.Item>Student</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Actions</Dropdown.Header>
        <Dropdown.Item href="http://localhost:4000/logout">
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
