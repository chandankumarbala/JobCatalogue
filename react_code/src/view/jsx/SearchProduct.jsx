import React from 'react';
import { Form,Button } from 'react-bootstrap';
const searchJobs=require("../../services/GetJobs").searchJobs;
class SearchProduct extends React.Component {

    constructor(props) {
        super(props);
       this.state = {searchedjobs:[]};//using vanilla state as its a simple use case should use redux insted
      }

    fireSearchAPI() {
        let uuid=this.state.searchToken;
        searchJobs(uuid)//using fetch as its esc default
        .then(res => res.json())
        .then((data) => {
            console.log(JSON.stringify(data))
            this.setState({ searchedjobs: data.related_job_titles })
        })
        .catch(console.log);

      }
       readTextBoxValue(e){
        //console.log(e.target.value)
        this.setState({searchToken:e.target.value});
      }


    render() {
        
        return (
            <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label inline >Email address</Form.Label>
                    <Form.Control inline type="test" placeholder="Job UUID" onChange={e=>this.readTextBoxValue(e)}/>
                    <Button inline variant="primary" onClick={(e)=>this.fireSearchAPI()}>Search</Button>
                </Form.Group>
            </Form>
            <div>
                {this.state.searchedjobs.map((value, index) => {
                        return <li key={value.uuid}>{value.title}</li>
                })}
            </div>
            </div>
        );

    }

}

export default SearchProduct;