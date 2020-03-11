import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/*  FUNCTION BASED COMPONENT */
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Hi There!</div>
// };

/* CLASS BASED COMPONENT */
class App extends React.Component {
    /* REPLACEMENT FOR CONSTRUCTOR INITIALIZATION */
    state = { lat: null, errorMessage: ''};

    /* CONSTRUCTOR IS THE GOOD PLACE TO DO ONE TIME SETUP */
    // constructor(props) {
    //     super(props);

    //     /* THIS IS THE ONLY PLACE WHERE WE DO DIRECT ASSIGNEMENTS  */
    //     this.state = { lat: null, errorMessage: '' };
        
    //     /* MOVED THIS CODE TO COMPONENTDIDMOUNT() */
    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     (position) => {
    //     //         /* WE CALLED SETSTATE */
    //     //         this.setState({ lat: position.coords.latitude });

    //     //         /* NEVER DO DIRECT ASSIGNEMENTS LIKE THIS */
    //     //         // this.state.lat = position.coords.latitude;
    //     //     },
    //     //     (err) => {
    //     //         this.setState({errorMessage: err.message})
    //     //     }
    //     // );
    // }

    /* GOOD PLACE TO DO DATA LOADING */
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }), /* WE CALLED SETSTATE */
            err => this.setState({errorMessage: err.message})
        );
    }

    /* GOOD PLACE TO DO MORE DATA LOADING WHEN STATE/PROPS CHANGES */
    componentDidUpdate(){
        console.log('My component was just updated');
    }
    
    /* GOOD PLACE TO DO CLEANUP (ESPECIALLY FOR NON-REACT STUFF) */
    // componentWillUnmount(){
    //     console.log('My component unmounted');
    // }

    /* THIS IS USER DEFINED METHOD CALLED AS HELPER METHOD */
    renderContent() {
        // return (
        //     <div>
        //         Latitude : {this.state.lat}
        //         <br />
        //         Error: {this.state.errorMessage}
        //     </div>
        // )
        /* -- OR -- */
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }        
        
        return <Spinner message="Please accept location request"/>;
    };    

    /* REACT SAYS WE HAVE TO DEFINE RENDER MANDATORILY
    AVOID DOING ANYTHING BESIDES RETURNING JSX */
    render() {
        return (
        <div className="border red">
            {this.renderContent()}
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));