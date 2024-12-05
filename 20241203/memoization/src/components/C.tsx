import React from "react";

export default React.memo(function C() {
  console.log("C rendering");
  return <div>C</div>;
});
