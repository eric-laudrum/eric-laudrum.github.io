export default function TrellisSequencer(){
    return(
        
        <div className="section-container">

            <div className="solo-project-container">

                <div className="left-container">
                    <h1 className="solo-project-title">Trellis Sequencer</h1>
                    <h4 className="solo-project-tagline">
                        A real-time 16-step sequencer
                    </h4>
                    <p className="solo-project-description">
                        The Trellis sequencer was designed to solve the nightmare of latency in online music production.
                        Built with Socket.io and Tone.js, Trellis allows multiple users to collaborate online with the precision and time-consistency of a hardware sampler. 
                    </p>
                </div>

                <div className="right-container">
                    <img className="solo-project-img" src="./assets/trellis-sequencer.jpg" />

                </div>
            </div>
        </div>

    )
}