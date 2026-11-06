import styles from "../../app/page.module.css";

export default function ongoing(){
    return (
        <div className={styles.ongoingSection}>
            <h2 className={styles.featuredTitle}>Ongoing Projects</h2>

            {/* One Million Neighbours */}
            <ul className={styles.futureThings}>
                <li className={`${styles.futureThing} ${styles.title}`}>
                    One Million Neighbours Waterloo Region
                </li>
                <li className={`${styles.futureThing} ${styles.subtitle}`}>
                    Civic Technology · Data Visualization · Community Research
                </li>

                <li className={`${styles.futureThing} ${styles.paragraph}`}>
                    Collaborating with Civic Tech WR and Kitchener City Councillor Sam Nabi on a community-led
                    initiative exploring equity, access to
                    essential services, and urban planning as the Waterloo Region population grows.
                    <span><hr style={{
                        height: '10px',
                        color: 'transparent',
                    }}
                    /></span>
                    I'm contributing to the Neighbourhood Services Map, an interactive mapping tool that visualizes
                    neighbourhood-level access to community resources. My work includes developing a custom lasso
                    selection tool and improving the map's layout, usability, and information presentation.
                </li>

            </ul>
            <hr className={styles.horizontalRule}/>

            {/* Trinket Mag */}
            <ul className={styles.futureThings}>
                <li className={`${styles.futureThing} ${styles.title}`}>
                    Trinket Mag
                </li>
                <li className={`${styles.futureThing} ${styles.subtitle}`}>
                    E-Commerce · Web Development
                </li>

                <li className={`${styles.futureThing} ${styles.paragraph}`}>
                    Developing an e-commerce site for Trinket Mag, a Kitchener-based print publication that explores
                    collecting and collector culture through an artistic, historical, and personal lens.
                </li>
                <li className={`${styles.futureThing} ${styles.paragraph}`}>
                    This project involves building an online platform that reflects the magazine's unique and eclectic
                    personality.
                    <span><hr style={{
                        height: '10px',
                        color: 'transparent',
                    }}
                    /></span>
                    Beyond a traditional storefront, there are plans to incorporate playful interactive
                    elements such as draggable trinkets and customizable displays that allow visitors to interact with
                    the digital space in unexpected ways.
                </li>

            </ul>
            <hr className={styles.horizontalRule}/>

            {/* Trinket Mag */}
            <ul className={styles.futureThings}>
                <li className={`${styles.futureThing} ${styles.title}`}>
                    Trellis Sequencer
                </li>
                <li className={`${styles.futureThing} ${styles.subtitle}`}>
                    Music Technology
                </li>

                <li className={`${styles.futureThing} ${styles.paragraph}`}>
                    Continuing development of the Trellis sequencer, a real-time web sequencer that allows multiple
                    users to collaborate and make music from separate devices.
                    <span><hr style={{
                        height: '10px',
                        color: 'transparent',
                    }}
                    /></span>
                    The next phase of development will focus on expanding Trellis's functionality and introducing new
                    features, including
                    <ul className={styles.bulletList}>
                        <li className={styles.bullet}>Private Rooms</li>
                        <li className={styles.bullet}>Pitch change</li>
                        <li className={styles.bullet}>Reverse Audio</li>
                        <li className={styles.bullet}>Export Audio</li>
                        <li className={styles.bullet}>Save Room state</li>
                    </ul>
                </li>

            </ul>


        </div>
    );
}