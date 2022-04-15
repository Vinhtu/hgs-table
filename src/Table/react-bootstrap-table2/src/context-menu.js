import React from "react";
import ContentContextMenu from "./content-contextmenu";

const ContextMenu = (props) => {
  const [popup, setPopup] = React.useState({ visible: false, x: 0, y: 0 });

  const rowEvents = {
    onContextMenu: (event, row, rowIndex) => {
      event.preventDefault();
      if (!popup.visible) {
        document.addEventListener("click", function onClickOutside() {
          setPopup({ ...popup, visible: false });
          document.removeEventListener("click", onClickOutside);
        });
      }
      setPopup({
        ...popup,
        props,
        visible: !popup.visible,
        x: event.clientX,
        y: event.clientY,
      });
    },
  };

  return <ContentContextMenu {...popup} />;
};

export default ContextMenu;
