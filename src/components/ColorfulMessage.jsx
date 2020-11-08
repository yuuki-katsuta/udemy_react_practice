import React from "react";

const ColorfulMessage = (props) => {
  const { color, message } = props;
  //分割代入でpropsから抽出できる（propsを書かなくていい）

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return (
    <div>
      <p style={contentStyle}>{message}</p>
    </div>
  );
};
export default ColorfulMessage;
