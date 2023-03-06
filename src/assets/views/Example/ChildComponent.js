import React, { Component } from "react";
import './Demo.scss'

class ChildComponent extends Component {
    
  state = {
    showJobs: false,
  };

  handleShowHide =() => {
        this.setState({
            showJobs: !this.state.showJobs
        })
  }

  handleOnClickDelete = (job) => {
    // alert(job)
    // console.log(job);
    this.props.deleteAJob(job)
  }
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';

    console.log(check);
    return (
      //   <div>ChildComponent {name} - {age} - {address}</div>

      <>
        {showJobs === false && (
          <>
            <div>
              <button
                onClick={() => this.handleShowHide()}
                className="btn-show"
              >Show</button>
            </div>
          </>
        )}

        {showJobs && (
          <>
            <div className="job-lists">
              {arrJobs.map((job, index) => (
                <div key={job.id}>
                  {index + 1}. {job.title}-{job.salary} <></>
                  <span
                  onClick={() => this.handleOnClickDelete(job)} 
                  >X</span>
                </div>
              ))}
            </div>
            <div>
              <button
                onClick={() => this.handleShowHide()}
              >Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {

//     let {arrJobs} = props;
//         return (
//         //   <div>ChildComponent {name} - {age} - {address}</div>
//         <>
//             <div className='job-lists'>
//                 {arrJobs.map((job,index) => {

//                     if (job.salary >= 500) {
//                         return <div key={job.id}>{(index + 1)}. {job.title}-{job.salary}</div>
//                     }

//                 })}
//             </div>
//         </>
//         )
// }

export default ChildComponent;
