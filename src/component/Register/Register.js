import React, { useState, useRef } from "react";
import facebookLogo from "../../assets/images/Facebook-Logo.png";
import { genders } from "../../helpers/constants";
import Select from "react-select";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { onInputChange, registerUser } from "../../store/auth/register/actions";
import { getValidator } from "../../helpers/utils";
import moment from 'moment';

function Register(props) {
  const validator = useRef(getValidator());
  const [, forceUpdate] = useState();

  const YEARS = () => {
    const years = []
    const dateStart = moment().subtract(50, 'y')
    const dateEnd = moment()
    while (dateEnd.diff(dateStart, 'years') >= 0) {
      years.push({value: dateStart.format('YYYY'), label: dateStart.format('YYYY')})
      dateStart.add(1, 'year')
    }
    return years
   }

   const DAYS = () => {
     const days = []
     let i = 1
     while (i < 32) {
       days.push({value: i, label: i})
       i++;
     }
     return days

   }

  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const register = (e) => {
    e.preventDefault();
    validator.current.showMessages();
    forceUpdate(1);
    const data = {}
    data.firstName = props.firstName
    data.lastName = props.lastName
    data.email = props.email
    data.password = props.password
    data.gender = props.gender
    data.dateOfBirth = {
      date: props.date,
      month: props.month,
      year: props.year,
    }
    console.log("data::", data)
    props.registerUser(data)
  };

  return (
    <div className="register h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-3/4 flex ">
        <div className="login__content w-2/4 flex flex-col items-center justify-center">
          <div className="w-3/4">
            <img src={facebookLogo} alt="" className="w-3/4" />
            <p className="text-2xl ml-2">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </div>
        <div className="login__form w-2/4 flex flex-col items-start justify-center">
          <div className="bg-white p-3 w-3/4 rounded-md shadow-xl">
            <h3 className="text-2xl font-medium">Sign Up</h3>
            <p className="text-gray-400">It's quick and easy.</p>
            <hr className="my-2" />
            <form className="flex flex-col items-center">
              <div className="flex my-1">
                <div className="mr-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    value={props.firstName}
                    placeholder="First Name"
                    className="rounded-md w-full border-gray-300 required"
                    onChange={(e) =>
                      props.onInputChange("firstName", e.target.value)
                    }
                  />
                  {validator.current.message(
                    "firstName",
                    props.firstName,
                    "_required",
                    { className: "text-red-500 text-xs" }
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                    className="rounded-md w-full border-gray-300 required"
                    onChange={(e) =>
                      props.onInputChange("lastName", e.target.value)
                    }
                  />
                  {validator.current.message(
                    "lastName",
                    props.lastName,
                    "_required",
                    { className: "text-red-500 text-xs" }
                  )}
                </div>
              </div>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email address"
                className="rounded-md my-1 w-full border-gray-300 required mb-0"
                onChange={(e) => props.onInputChange("email", e.target.value)}
              />
              {validator.current.message(
                "email",
                props.email,
                "_required|_email",
                { className: "text-red-500 text-xs w-full" }
              )}
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="rounded-md my-1 w-full border-gray-300 required mb-0"
                onChange={(e) =>
                  props.onInputChange("password", e.target.value)
                }
              />
              {validator.current.message("password", props.password, "_required", {
                className: "text-red-500 text-xs w-full",
              })}
              <div className="w-full">
                <div className="flex justify-between items-end">
                <p className="p-2 pb-0 pl-1 text-gray-400 text-sm">
                  Date of Birth
                </p>
                {validator.current.message(
                  "date",
                  props.state,
                  "_required",
                  { className: "text-red-500 text-xs" }
                )}
                </div>
                <div className="flex flex-1 flex justify-between">
                  <Select
                    value={props.date ? DAYS().filter(option => option.value === props.date) : ""}
                    options={DAYS()}
                    className="mx-1 w-full"
                    onChange={(e) =>
                      props.onInputChange("date", e.value)
                    }
                  />
                  <Select
                    value={props.month ? months.filter(option => option.value === props.month) : ""}
                    options={months}
                    className="mx-1  w-full"
                    onChange={(e) =>
                      props.onInputChange("month", e.value)
                    }
                  />
                  <Select
                    value={props.year ? YEARS().filter(option => option.value === props.year) : ""}
                    options={YEARS()}
                    className="mx-1 w-full"
                    onChange={(e) =>
                      props.onInputChange("year", e.value)
                    }
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between items-end">
                <p className="p-2 pb-0 pl-1 text-gray-400 text-sm">Gender</p>
                {validator.current.message(
                  "gender",
                  props.gender,
                  "_required",
                  { className: "text-red-500 text-xs" }
                )}
                </div>
                <div className="flex">
                  {genders.map((item, id) => (
                    <div className="p-2 flex-1 border-solid border border-gray-300 rounded mx-1 flex justify-between items-center">
                      <label for={item.value}>{item.label}</label>
                      <input
                        type="radio"
                        name="gender"
                        onChange={(e) =>
                          props.onInputChange("gender", e.target.value)
                        }
                        id={item.value}
                        value={item.value}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="p-2 text-gray-400 text-xs">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time.
              </p>
              <button
                onClick={register}
                className="rounded-md p-2 my-1 mt-2 bg-green-500 text-white w-full h-14"
              >
                Sign Up
              </button>
            </form>
            <hr className="my-2" />
            <Link to="/login">
              <button className="rounded-md p-2 my-1 bg-blue-500 text-white w-full h-14">
                Log In to Existing Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const { firstName, lastName, email, password, date, month, year, gender } = state.Account;
  return { firstName, lastName, email, password, date, month, year, gender };
};

export default withRouter(connect(mapStateToProps, { onInputChange, registerUser })(Register));
