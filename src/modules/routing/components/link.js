import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "redux-router5";

export const Link = ({ onClick, children, className }) => (
  <a className={className} onClick={onClick}>
    {children}
  </a>
);

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const mapDispatchToProps = {
  onClick: actions.navigateTo
};

/**
 * router5 synchronized link component
 * changes router state in the app state
 */
const ConnectedLink = connect(
  null,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    onClick: () => dispatchProps.onClick(ownProps.name, ownProps.params)
  })
)(Link);

ConnectedLink.propTypes = {
  name: PropTypes.string.isRequired,
  params: PropTypes.object
};

export default ConnectedLink;
