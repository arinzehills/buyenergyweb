import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
    overrides: {
        MuiStepIcon: {
            root: {
                color: '#000000', // or 'rgba(0, 0, 0, 1)'
                '&$active': {
                    color: '#000000',
                },
                '&$completed': {
                    color: '#000000',
                },
            },
        }
    } 

}))