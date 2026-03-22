import styles from './trellis.module.css'

export default function TrellisSequencer(){
    return(
        <div className={styles.sectionContainer}>

            <div className={styles.projectContainer}>

                <div className={styles.leftContainer}>


                    <h4 className={styles.projectTagline}>
                        A real-time 16-step sequencer
                    </h4>

                    <p className={styles.projectDescription}>
                        The Trellis sequencer was designed to solve the nightmare of latency in online music production.
                        Built with Socket.io and Tone.js, Trellis allows multiple users to collaborate online with the precision and time-consistency of a hardware sampler. 
                    </p>
                </div>

                <div className={styles.rightContainer}>
                     <div className={styles.videoContainer}>
                        <iframe
                            src="https://www.youtube.com/embed/xl6ijl_q9w4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>

            <hr style={{margin:"3rem 0"}}/>


            <div className={styles.projectContainer} id="architecture">

                <h1>oh hi</h1>

            </div>
        </div>
    )
}