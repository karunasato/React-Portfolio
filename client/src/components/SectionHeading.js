import Typography from '@material-ui/core/Typography';

const headingStyles = {
    root: {
        position: 'relative',
        top: "80px",
        right: "600px"
    },
    font: {
        fontWeight:"bold"
    }
}
const Heading = ({text})=> <div style={headingStyles.root}><Typography style={headingStyles.font} variant="h1">{text}</Typography></div>

export default Heading 