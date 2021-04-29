import {CssBaseline, makeStyles} from "@material-ui/core";
import bgImage from './images/pexels-oliver-sjöström-931018.jpg'
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage:`url(${bgImage})`,
        minHeight: '100vh',
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
    }
}));
export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <PlaceToVisit/>
        </div>
    )
}