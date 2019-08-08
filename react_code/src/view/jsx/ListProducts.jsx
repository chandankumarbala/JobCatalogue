import React from 'react';
const fetchJobs=require("../../services/GetJobs").getJobs

class ListProducts extends React.Component {
    constructor(props) {
        super(props);
       this.state = {jobs:[]};//using vanilla state as its a simple use case should use redux insted
      }
      

    componentDidMount() {
        fetchJobs()//using fetch as its esc default
            .then(res => res.json())
            .then((data) => {
                //console.log(JSON.stringify(data))
                this.setState({ jobs: data.splice(0,data.length-1) })
            })
            .catch(console.log);
    }
    render() {
        const items = this.state.jobs;

        return (
            <div>
                <ol>
                    {this.state.jobs.map((value, index) => {
                        return <li key={value.uuid}>{value.title} => UUID: {value.uuid}</li>
                    })}
                </ol>
            </div>
        );
    }
}

export default ListProducts;