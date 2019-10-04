import React from "react";
import { Container } from "reactstrap";
import Header from "./Header";
//import Employees from "./NewEmployees";
import Employees from "./Employees";
import Footer from "./Footer";
import useGetUser  from  "./useGetUser";
import useGetEmployee from "./useGetEmployee";

const Dashboard = () => {

    const user = useGetUser(settings);
    const employees = useGetEmployee(settings);

    return (
      <Container>
        <Header user={user}/>
        <Employees employees = {employees} />
        <Footer user={user}/>
      </Container>
    );

}

const settings = {
    url: "http://localhost:3001",
    format: "json",
    userResource:"user",
    employeeResource:"employees",
}

export default Dashboard;
