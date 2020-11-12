import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../../actions/users';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Icon, Typography
} from '@material-ui/core';
import './styles.css';
class AdminHome extends Component {


  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  render() {
    const { userList } = this.props;
    if (userList.length === 0)
      return (
        <div className="emptylist">
          <Typography variant="h5" component="h3">
          No users added yet !!!
</Typography>
         </div>
      )
    else
      return (
        <div className="adminhome-container">
          <TableContainer component={Paper}>
            <Table aria-label="user table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Telephone Number</TableCell>
                  <TableCell align="center">Address</TableCell>
                  {/* <TableCell align="center">SSN</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>
                      <Icon>account_circle</Icon>
                    </TableCell>
                    <TableCell align="center">{user.firstName}</TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.telephoneNumber}</TableCell>
                    <TableCell align="center">{user.fullAddress}</TableCell>
                    {/* <TableCell align="center">{user.ssn}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )
  }
}


const mapStateToProps = (state) => {
  const { userList = [] } = state.users;
  return { userList }
}
const mapDispatchToProps = { loadUsers }

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);