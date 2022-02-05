import React from "react";
import Image from "next/image";
const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        alt="Facebook"
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1>Login with Facebook</h1>
    </div>
  );
};

export default Login;
