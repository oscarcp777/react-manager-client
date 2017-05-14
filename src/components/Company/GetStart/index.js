import React from 'react'
import Video from './Video'


const GetStart = (props) => (
    <div className="animated fadeIn">
        <div className="card card-default">
            <div className="card-header main-header">
                Getting Started
            </div>

            <div className="card-block text-center">
                <Video url='https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0' imgVideo='/img/video.jpg'></Video>
                <hr/>
                <p className="card-title">Welcome to the Work.Management App, we’ll have your team up and running in a few short Steps</p>
                <p className="card-subtitle mb-2 text-muted">Please complete the setup information in the following setup pages.</p>
                <button type="button" className="btn btn-primary">Start</button>
            </div>
        </div>
    </div>
)
export default GetStart
