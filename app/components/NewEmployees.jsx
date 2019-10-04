import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";


const Employees = ({employees}) => {

  const emp = Object.values(employees);
  const men = emp.filter(employee => employee.gender === "male");
  const women = emp.filter(employee => employee.gender === "female");
  console.log("The Men ARE : "+ JSON.stringify(men));
  console.log("The Women ARE : "+ JSON.stringify(women));

  return (
    <Row>
      <Col xs={12}>
        <div className="employees-container">
          <div className="employees-list">
            <ul>
              {employees.length &&
                employees.map((employee) => (
                  <li key={employee.id} className="employee-list-item">
                    <a href="#" onClick={(e) => this.onSelectEmployee(e, employee.id)}>
                      <div className="img">
                        <img
                          width={70}
                          height={70}
                          className="rounded-circle"
                          src={employee.picture}
                          alt={`${employee.firstName} ${employee.lastName} photo`}
                        />
                      </div>
                      <div className="info">
                        <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
                        <p className="email">{employee.email}</p>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
            <div className="employee-details">
            <h3> </h3>
          </div>
        </div>
      </Col>
    </Row>
  );


};

export default Employees;
