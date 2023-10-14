// I included additional comments to reinforce my understanding (in this file as well as all other .js files in this lab).

// Import Bulma, the ProfileCard component, and all the images.
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

// This is the parent component for the application.
function App() {
    // Add all of the necessary JSX, styled with Bulma. Each instance of ProfileCard will be passed the props of title, handle, and image.
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard
                                title='Alexa'
                                handle='@alexa99'
                                image={AlexaImage}
                                description='Alexa was created by Amazon and helps you buy things.' />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard
                                title='Cortana'
                                handle='@cortana32'
                                image={CortanaImage}
                                description='Cortana was made by Microsoft. Who knows what it does?' />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard
                                title='Siri'
                                handle='@siri01'
                                image={SiriImage}
                                description='Siri was made by Apple and is being phased out.' />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;