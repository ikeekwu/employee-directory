import React from 'react';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

function Tables(props) {
    return (
<div>
  <Table dataSource={props.dataSource}>
    <ColumnGroup>
    <Column title="name" dataIndex="name" key="name" />
    <Column title="age" dataIndex="age" key="age" />
    <Column title="location" dataIndex="location" key="location" />
    <Column title="country" dataIndex="country" key="country"/>
    <Column title="number" dataIndex="number" key="number"/>
    </ColumnGroup>
  </Table>
</div>
);




}

export default Tables;
