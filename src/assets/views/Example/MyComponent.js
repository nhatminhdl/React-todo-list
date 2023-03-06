import React from "react";
import AddComponent from "./AddComponent";

import ChildComponent from "./ChildComponent";
import Form from "./Form";
import withRouter from "./withRouter";

class MyComponent extends React.Component{
    state ={
        name: "Nguyễn Văn A",
        age: 18,
        arrJobs: [
            {id: 'abcJob1', title: 'Developer', salary: '500$'},
            {id: 'abcJob2', title: 'Tester', salary: '400$'},
            {id: 'abcJob3', title: 'Project Manager', salary: '1000$'},
        ]
    }


    addNewJob = (job) => {
        console.log(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }


    deleteAJob = (job) => {

        // console.log(job.id);
        let currentJobs = this.state.arrJobs;
        
        currentJobs = currentJobs.filter(jobs=> (jobs.id !== job.id))
        // console.log(currentJobs);
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log("run did update:", prevProps, this.state.arrJobs);
        console.log("run did update:", prevState, this.state.arrJobs);
    }
    componentDidMount(){

        console.log("Run component did mount");
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton =() => {
        alert('Hello word')
    }
    render(){

        console.log("run render");
        return(
            <>
                 <div>
                    <input value={this.state.name} type="text"
                        onChange={(event)=> this.handleOnChangeName(event)}
                    />
                    Hello my name is {this.state.name} 
                </div>
                 <h1>I am {this.state.age}</h1>
                 <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                 </div>
                
                <AddComponent
                    addNewJob = {this.addNewJob}
                   
                />
                 <ChildComponent arrJobs = {this.state.arrJobs}
                  deleteAJob = {this.deleteAJob} />
        
                 
            </>
           
        )
      
    }
}


export default MyComponent;