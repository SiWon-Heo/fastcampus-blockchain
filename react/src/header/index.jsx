import React, { useState } from "react";
import Header from "./Header";

function Index(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSignIn = () => {
    setIsLoggedIn(true);
  };

  const onSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onSignIn={onSignIn} onSignOut={onSignOut} />
    </div>
  )
}

export default Index;