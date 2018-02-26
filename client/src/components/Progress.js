import React, { Component } from 'react'
import '../styles/progress.css' 

class Progress extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="coloumn">
            <h4 className="dateInline">February 26, 2018 - March 9, 2018</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Standing</th>
                  <th>Submitted?</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ryan Lee</th>
                  <td>Satisfactory</td>
                  <td><span>Yes</span></td>
                  <td>image</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Progress
