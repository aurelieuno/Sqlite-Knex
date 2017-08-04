import React from "react";
import axios from "axios";

const ProductRow = (props) => (

      <div>
      {props.rows.map(el=>
          <tr>
            <td>{el.user_name}</td>
            <td>{el.user_age}</td>
            <td>{el.id}</td>
          </tr>
        )}
      </div>
    );



class MongoResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
     axios.get("/api/data")
    .then (res => this.setState({data: res.data.rows}).bind(this))
    .catch(error => console.log(error))
  }

  render() {

    const data = this.state.data;

    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>TABLE</th>
          </tr>
        </thead>
        {data &&
          <tbody><ProductRow rows={data}/></tbody>}
      </table>
      </div>
    );
  }
}

module.exports=  MongoResults;





