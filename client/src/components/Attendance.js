import React, { Component } from 'react'
import '../styles/attendance.css' 

class Attendance extends Component {
  render() {
    return (
      <div className="attendanceWrapper">
        <h4>Attendance for 2018-02-26</h4>
        <div className="takeAttendanceContainer">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Status</th>
              </tr> 
            </thead>
            <tbody>
              <tr>
                <td>Ryan Lee</td>
                <td>
                  <div className="btnGroup" role="group">
                    <div className="btn">Present</div>
                    <div className="btn">Tardy</div>
                    <div className="btn">Absent</div>
                    <div className="btn">Left Early</div>
                    <div className="btn">Excused Tardy</div>
                    <div className="btn">Excused Absence</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="attendanceOverview">
          <div className="table">
            <table className="attendanceTable">
              <thead className="thead">
                <tr>
                  <th>Name</th>
                  <th>2/26</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ryan Lee</th>
                  <td><small>Present</small></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Attendance
