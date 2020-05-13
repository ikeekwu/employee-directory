import './layout.css'
import React, { Component } from 'react';
import { Layout } from 'antd';
import API from '../utils/API'
import Tables from './Table'
import Search from './Search'

const {Header, Footer,Content} = Layout;


class Layouts extends Component {
  state = {
    employees: null,
    filtEmployee: null
  }

 componentDidMount(){
    API.search().then(res => {
      this.setState({
        employees: res
      })
    })
  }

filterArray = (text) => {
  console.log("hey");
        if (text.toString().length > 0) {
            const filtered = this.state.employees.reduce((allEmployees, employee) => {
              
                const array = Object.values(employee);
                console.log(array)
                for (let i = 0; i < array.length; i++) {
                    if (array[i].indexOf(text.toString()) > -1) {
                        allEmployees.push(employee);
                    }
                }
                
                return allEmployees
            }, []);
            console.log(filtered)
            this.setState({
                filtEmployee: filtered
            });
        } else {
            this.setState({
                filtEmployee: null
            })
        }
    }


render() {
  console.log(this.state.filtEmployee)
      return(
    <div>
    <Layout>
      <Header className="header"><h1>Employee Database</h1></Header>
      <Content>
        <Search filterArray={this.filterArray}/>
        <Tables dataSource={this.state.filtEmployee === null ? this.state.employees : this.state.filtEmployee} />
      </Content>
      <Footer><small>Employee Database</small></Footer>
    </Layout>
    </div>
    )
}
}

export default Layouts;