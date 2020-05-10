import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Navigationbar from '../layout/Navigationbar';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <div>
      <Navigationbar />
      <Route
        {...rest}
        render={props =>
          !!auth.uid ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(PrivateRoute);