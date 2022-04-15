import React from "react";
import PropTypes from "prop-types";
import ToolkitContext from "./context";

const Toolkitprovider = (props) => {
  console.log(props, "currentpage send");

  return (
    <ToolkitContext.Provider {...props}>
      <ToolkitContext.Consumer>
        {(tookKitProps) => props.children(tookKitProps)}
      </ToolkitContext.Consumer>
    </ToolkitContext.Provider>
  );
};

Toolkitprovider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Toolkitprovider;
