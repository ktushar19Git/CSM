import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
//import { Table,Row,Rows } from 'react-native-table-component';
import { DataTable } from 'react-native-paper'

export class Screen extends Component {
    constructor(props) {
        super(props)
        this.fnFetchData = this.fnFetchData.bind(this);
        this.state = {
            InputData: []
        }
    }
    componentDidMount() {
        this.fnFetchData();
    }
    fnFetchData = () => {
        axios.get('http://13.233.132.235:4000/app/staff')
            .then(response => {

                const data = response.data;
                this.setState({ InputData: data })
                console.log('inside');
                console.log(this.state.InputData);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>FirstName</DataTable.Title>
                        <DataTable.Title>MiddleName</DataTable.Title>
                        <DataTable.Title>LastName</DataTable.Title>
                        <DataTable.Title>Email</DataTable.Title>
                        <DataTable.Title>UserName</DataTable.Title>
                        <DataTable.Title>Password</DataTable.Title>
                        { /*<DataTable.Title>Address</DataTable.Title>
                        <DataTable.Title>City</DataTable.Title>
                       <DataTable.Title>Postcode</DataTable.Title>*/}

                    </DataTable.Header>
                    {this.state.InputData &&
                        this.state.InputData.map(item => {
                            return (
                                <DataTable.Row key={item._id}>
                                    
                                    <DataTable.Cell>{item.firstName}</DataTable.Cell>
                                    <DataTable.Cell>{item.middleName}</DataTable.Cell>
                                    <DataTable.Cell>{item.lastName}</DataTable.Cell>
                                    <DataTable.Cell>{item.email}</DataTable.Cell>
                                    <DataTable.Cell>{item.userName}</DataTable.Cell>
                                    <DataTable.Cell>{item.password}</DataTable.Cell>
                                   {/*  {item.Contacts.map(i => {
                                        return(
                                            <DataTable.Row>
                                            <DataTable.Cell>{i.Address}</DataTable.Cell>
                                            <DataTable.Cell>{i.City}</DataTable.Cell>
                                            <DataTable.Cell>{i.Postcode}</DataTable.Cell>
                                            </DataTable.Row>
                                        )
                                    })}*/}
                                </DataTable.Row>
                            )
                        })}

                </DataTable>
            </View>
        )
    }
}

export default Screen
