import React from 'react';
import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';

const UsersList = ({ users, addUser }) => (
  <div>
    <div>
      <button onClick={() => addUser({ firstName: 'Arya', lastName: 'Stark' })}>Add No One</button>
      <button onClick={() => addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })}>Add Mother of Dragons</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {!users.length && (
          <tr colSpan="2">
            <td>No Users</td>
          </tr>
        )}
        {users.map(({ id, firstName, lastName, regnalNumber }) => (
          <tr key={id}>
            <td>{firstName} {regnalNumber}</td>
            <td>{lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      regnalNumber: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  addUser: PropTypes.func.isRequired
};

const mapStoreToProps = ({ store }) => ({
  users: store.usersList,
  addUser: store.addUser,
});

export default inject(mapStoreToProps)(observer(UsersList));
