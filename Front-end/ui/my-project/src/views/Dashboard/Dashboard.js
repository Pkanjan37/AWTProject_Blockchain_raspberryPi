import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import { Bar, Line } from 'react-chartjs-2';

import {
  Form,
  FormGroup,
  FormText,
  Badge,
  Label,
  Input,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Collapse,
  Pagination,
  PaginationItem,
  PaginationLink,
  InputGroupAddon,
  InputGroup,
  Table,
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { getDeviceStatus, updateValue, showResult } from '../..//NodeJs/API/api.js'
//import {showResult} from '../..//NodeJs/API/RDF.js'
import Async from 'react-promise'
import dataFirst from '../../NodeJs/API/1.json'
import dataSecond from '../..//NodeJs/API/2.json'
import dataThrid from '../..//NodeJs/API/3.json'
import resultAfterQuery from '../..//NodeJs/API/currentQuery.json'

const fs = require('fs');

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
const address = "0xd6b921cae259d3deec788912a2a55c901a5aad70";
const creator = "0xa1dc48f251089d9d7f177c123bf9a7fd750142db";

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

function changedate() {
  var x = document.getElementById("selectdate");
  var y = document.getElementById("dateinput");
  //y.options.length = 0; // 清除second下拉框的所有内容
  if (x.selectedIndex == 1) {
    y.style.visibility = "hidden";
  }
  else if (x.selectedIndex == 0) {
    y.style.visibility = "visible";
  }
}

const openCloseLight = (value) => {
alert("Open Sesameeeeeee")

  var Light;
  if (value == false) {
    Light = "Open";
  } else {
    Light = "Close";
  }
  alert(address+" "+creator+" "+value+" "+Light)
  updateValue(address, creator,0 , Light);
}

const dataQuery = (value, title, citeria, result,date) => {
  //alert(value+" "+title+" "+date)
  //alert(result.result[0].date);
  if(value==""){
    value=null
  }
  if(date==""){
    date=null
  }
  if(citeria=="None"){
    citeria=null;
  }
  if(title=="All"){
    title=null;
  }

  var newR = showResult(value, title, citeria, result,date);
  //alert(JSON.stringify(newR));
  return newR;
}

const dataChart = (deviceId) => {
  var dataList = [12, 42, 5];
  var listTest = [];
  //const file = "/home/p/Documents/AWT/Front-end/ui/my-project/src/NodeJs/API/"+deviceId + '.json';
  //var content = fs.readFileSync(file, 'utf8');
  for (var i = 0; i < deviceId.transaction.length; i++) {
    var obj = deviceId.transaction[i];
    listTest.push(obj.value);
    //   alert("Name: " + obj.deviceId + ", " + obj.value);
  }
  //alert(listTest);
  return listTest;

  // var dataList;
  // var content = fs.readFileSync(file, 'utf8');
  // alert(content)
  // var obj = JSON.parse(content);   
  //   for(var val in obj.transaction){
  //     console.log(val)
  //     dataList.push(val.value);
  //   }
}

const getSensorType = (val) => {
  if (val == 0) {
    return "LED";
  } else if (val == 1) {
    return "Humidity";
  } else if (val == 2) {
    return "Pressure";
  } else if (val == 3) {
    return "Temperature";
  }
}

const borderRadiusStyle = { borderRadius: 2 }

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

const buttonController = (status) => {
  alert("status")
  if (status == "open") {
    return false;
  } else return true;

}

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Temperature sensor',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'LED sensor',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Joystick',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Presure sensor',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'Accelleration',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Gyroscope',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};
function handleShowFilterList(id) {
  if (this.state.filterListShow !== id) {
    this.setState({
      filterListShow: id,
      active: false
    })
  } else {
    this.setState({ filterListShow: false })
  }
}
// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = dataChart(dataFirst);
var data2 = dataChart(dataSecond);
var data3 = dataChart(dataThrid);

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }

const mainChart = {
  labels: ['0.00', '4.00', '8.00', '12.00', '16.00', '20.00'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },

  ],
};
const mainChart2 = {
  labels: ['0.00', '4.00', '8.00', '12.00', '16.00', '20.00'],
  datasets: [

    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },

  ],
};
const mainChart3 = {
  labels: ['0.00', '4.00', '8.00', '12.00', '16.00', '20.00'],
  datasets: [

    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(40 / 5),
          max: 40,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const mainChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(40 / 5),
          max: 40,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const mainChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          maxTicksLimit: 5,
          stepSize: Math.ceil(1100 / 100),
          max: 1100,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdown2 = this.toggleDropdown2.bind(this);
    this.select = this.select.bind(this);
    this.select2 = this.select2.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    
//    this.changeTable = this.changeTable.bind(this);
    

    this.state = {
      showComponent: false,
      dropdownOpen2: false,
      dropdownOpen: false,
      //preQ:dataQuery(null, null, null, resultAfterQuery,null),
      preQ:null,
      value : "All",
      value2 : "None",
      radioSelected: 2,
      collapse: false, status: 'Closed',
    };
  }

  // toggle() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen,
  //   });
  // }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    var value = document.getElementById("create-course-form").value;
    var title = document.getElementById("dropdown1").value;
    var citeria = document.getElementById("dropdown2").value;
    var date = document.getElementById("create-course-form2").value;
    alert(value + " "+title+ " " + citeria+ " "+date );
    //dataQuery(null, null, null, resultAfterQuery,null);
    this.setState({ collapse: true,preQ: dataQuery(value,title,citeria,resultAfterQuery,date),showComponent: true, });
  }

  cancelCourse = () => {
    // alert(document.getElementById("create-course-form"))
    document.getElementById("create-course-form").value = "";
    document.getElementById("create-course-form2").value = "";
  }




  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  changedate() {
    var x = document.getElementById("selectdate");
    var y = document.getElementById("dateinput");
    alert(x);
    //y.options.length = 0; // 清除second下拉框的所有内容

    //  if(x.selectedIndex == 1)
    //  {
    // 	y.style.visibility = "hidden";
    //  }
    //  else if(x.selectedIndex ==0)
    //  {
    //      y.style.visibility = "visible";
    //  }
  }
  handleChange(event) {
    alert(document.getElementById("create-course-form2").value);
    //this.setState({value: event.target.value});
  }
  handleDropdown1(event) {
    alert(document.getElementById("dropdown1").value);
    alert(document.getElementById("dropdown2").value);
    //this.setState({value: event.target.value});
  }
  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }
  select2(event) {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2,
      value2: event.target.innerText
    });
  }
  toggleDropdown() {
   // alert(document.getElementById("dropdown1").value);
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggleDropdown2() {
   // alert(document.getElementById("dropdown2").value);
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }
  // changeTable(){

  //   this.setState({
  //     changeTable: dataQuery(value,title,citeria,resultAfterQuery,date)
  //   });
  // }


  render() {

    var device1 = getDeviceStatus(address, creator, 0);
    var device2 = getDeviceStatus(address, creator, 1);
    var device3 = getDeviceStatus(address, creator, 2);
    var device4 = getDeviceStatus(address, creator, 3);
    //var resultQ = dataQuery(3, "All", "Higher", resultAfterQuery,null);

    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Search Device Information</strong>
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="date-input">Date Input </Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input id="create-course-form2" onChange={this.handleChange}  type="date" name="date-input" placeholder="date" />
                          </Col>
                        </FormGroup>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  {/* <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="email" id="input2-group3" name="input2-group3" placeholder="Email" />
                        <InputGroupAddon addonType="append">
                          <ButtonDropdown isOpen={this.state.second}
                                          toggle={() => { this.setState({ second: !this.state.second }); }}>
                            <DropdownToggle caret color="primary">
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu className={this.state.second ? 'show' : ''}>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup> */}
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup >
                        <InputGroupAddon addonType="prepend">
                          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                            {/*<Button id="caret" color="primary">Action</Button>*/}
                            <DropdownToggle id="dropdown1" value={this.state.value} onChange={this.handleDropdown1} caret color="primary">{this.state.value}</DropdownToggle>
                            <DropdownMenu >
                            <DropdownItem onClick={this.select}>All</DropdownItem>
                              <DropdownItem onClick={this.select}>Light1</DropdownItem>
                              <DropdownItem onClick={this.select}>Temperature1</DropdownItem>
                              <DropdownItem onClick={this.select}>Pressure1</DropdownItem>
                              <DropdownItem onClick={this.select}>Humidity1</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupAddon>
                        <Input id="create-course-form" type="text" name="input3-group3" placeholder="Input value of the sensor" />
                        <InputGroupAddon addonType="append">
                          <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggleDropdown2}>
                            <DropdownToggle id="dropdown2" value={this.state.value2}  onChange={this.handleDropdown1} caret color="primary">
                            {this.state.value2}
                            </DropdownToggle>
                            <DropdownMenu >
                            <DropdownItem onClick={this.select2}>None</DropdownItem>
                              <DropdownItem onClick={this.select2}>Higher</DropdownItem>
                              <DropdownItem onClick={this.select2}>Lower</DropdownItem>
                              <DropdownItem onClick={this.select2}>Equal</DropdownItem>

                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" onClick={this.toggle} color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <h5>Current state: {this.state.status}</h5>
                <Button type="reset" size="sm" onClick={this.cancelCourse} color="danger"><i className="fa fa-ban"></i> Reset</Button>
                <Collapse
                  isOpen={this.state.collapse}
                  onEntering={this.onEntering}
                  onEntered={this.onEntered}
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                >
                  <Card>
                    <CardBody>
                      <Col xs="12" lg="12">
                        <Card>
                          <CardHeader>
                            <i className="fa fa-align-justify"></i> Query Result Table
              </CardHeader>
                          <CardBody>
                            <Table responsive striped>
                              <thead>
                                <tr>
                                  <th>Device Name</th>
                                  <th>Date</th>
                                  <th>value</th>
                                  <th>Device ID</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                                              
                                  {
                                    
                                    this.state.showComponent ? this.state.preQ.map(template_name => {
                                      //alert(this.state.preQ)
                                      var temp = template_name;
                                      var cnt=0;
                                      
                                     //alert(JSON.stringify(template_name.value))
                                     var temp =template_name.value+"'";
                                      return (
                                        <tr>
                                          {/* {
                                            
                                          Object.values(template_name).map(name => {
                                           
                                           if(cnt==1||cnt==2||cnt==3||cnt==4||cnt==5){return(<td>{name}</td>)}
                                            cnt=cnt+1;
                                              
                                            
                                              
                                          })} */}
                                         {/* {resultQ[template_name]} */}
                                            <td>{template_name.title}</td>
                                            <td>{template_name.date}</td>
                                            <td>{temp}</td>
                                            <td>{template_name.id}</td>
                                            <td>{template_name.description}</td>
                                        </tr>
                                      )
                                    }):null
                                  }
                                
                                
                              </tbody>
                            </Table>
                            
                          </CardBody>
                        </Card>
                      </Col>
                    </CardBody>
                  </Card>
                </Collapse>

              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                Devices Management
              </CardHeader>
              <CardBody>
                {/* <Row>
                  <Col xs="12" md="6" xl="6">
                  <div className="small text-muted">Number of sensor</div>
                    <Row>
                    
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Accelleration</small>
                          <br />
                          <strong className="h4">9,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Gyroscope</small>
                          <br />
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Pressure</small>
                          <br />
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Humidity</small>
                          <br />
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                  
                    
                  </Col>
                  <Col xs="12" md="6" xl="6">
                  <div className="small text-muted">- - -</div>
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Compass</small>
                          <br />
                          <strong className="h4">78,623</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">Temperature</small>
                          <br />
                          <strong className="h4">49,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    
                  </Col>
               </Row>*/}
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">Owner</th>
                      <th>Device Name</th>
                      <th className="text-center">Type</th>
                      <th>Usage</th>
                      <th className="text-center">Active</th>
                      <th>Last activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div><Async promise={device1} then={(val) => val[1]} />
                        </div>
                      </td>
                      <td className="text-center">
                        <div><Async promise={device1} then={(val) => getSensorType(val[2])} /></div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 18, 2018 ~</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="50" />
                      </td>

                      <td className="text-center">
                        {/* <ToggleButton
                    // <Async promise={device1} then={(val) =>  buttonController(val[3])} />
  value={  true|| false }
  thumbStyle={borderRadiusStyle}
  trackStyle={borderRadiusStyle}
  onToggle={(value) => {
    // alert(value)
    // if(value == true){
    //   updateValue(address,creator,0,"close");
    // }else {
    //   updateValue(address,creator,0,"open")
    // }
    
    this.setState({
      value: !value,
    })
  }} /> */}
                        <ToggleButton
                          value={this.state.value || false}
                          thumbStyle={borderRadiusStyle}
                          trackStyle={borderRadiusStyle}
                          onToggle={(value) => {
                            openCloseLight(value)

                            this.setState({
                              value: !value,
                            })
                          }} />
                      </td>
                      <td>
                        <div className="small text-muted">Last Change</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                          <span className="avatar-status badge-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div><Async promise={device2} then={(val) => val[1]} /> </div>

                      </td>
                      <td className="text-center">
                        <div><Async promise={device2} then={(val) => getSensorType(val[2])} /></div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>100%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 18, 2018 ~</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">


                      </td>
                      <td>
                        <div className="small text-muted">Last Change</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                          <span className="avatar-status badge-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div><Async promise={device3} then={(val) => val[1]} /> </div>

                      </td>
                      <td className="text-center">
                        <div><Async promise={device3} then={(val) => getSensorType(val[2])} /></div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>100%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 18, 2018 ~</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">


                      </td>
                      <td>
                        <div className="small text-muted">Last Change</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                          <span className="avatar-status badge-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div><Async promise={device4} then={(val) => val[1]} /> </div>

                      </td>
                      <td className="text-center">
                        <div><Async promise={device4} then={(val) => getSensorType(val[2])} /></div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>100%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 18, 2018 ~</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">


                      </td>
                      <td>
                        <div className="small text-muted">Last Change</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr>

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Temperature Statistic</CardTitle>

                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Hours</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Pressure Statistic</CardTitle>

                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Hours</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart2} options={mainChartOpts2} height={300} />
                </div>
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Humidity Statistic</CardTitle>

                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Hours</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart3} options={mainChartOpts3} height={300} />
                </div>
              </CardBody>

            </Card>
          </Col>
        </Row>



      </div>
    );
  }
}

export default Dashboard;
