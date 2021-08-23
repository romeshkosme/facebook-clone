import React, { useState, useRef } from "react";
import facebookLogo from "../../assets/images/Facebook-Logo.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { verifyUser } from "../../store/auth/register/actions";
import { getValidator } from "../../helpers/utils";

function VerifyUser(props) {
  const [otp, setOtp] = useState("");
  const validator = useRef(getValidator());
  const [, forceUpdate] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    validator.current.showMessages();
    if (validator.current.allValid()) {
      props.verifyUser({ otp, email: props.email }, props.history);
    } else {
      forceUpdate(1);
    }
  };
  return (
    <div className="h-screen w-100">
      {/* header */}
      <div className="h-12 p-2 border-b border-gray-200">
        <img src={facebookLogo} alt="" className="h-8" />
      </div>
      {/* body */}
      <div className="flex flex-col h-100 mt-20 ml-20 p-4">
        <p>Please Enter OTP sent your email:</p>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-40 h-10 rounded-sm mt-4"
        />
        {validator.current.message("otp", otp, "_required", {
          className: "text-red-500 text-xs",
        })}
        <button
          className="rounded-sm p-2 my-1 bg-blue-500 text-white w-28 mt-4"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { email } = state.Account;
  return { email };
};
// export default VerifyUser;
export default withRouter(connect(mapStateToProps, { verifyUser })(VerifyUser));
