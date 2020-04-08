import React, {useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {AppState} from "../../redux/store";
import {useSelector} from "react-redux";
import {Statuses} from "../../helpers/types";
import {withRedux} from "../../redux/redux";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CustomizedSnackbars = () => {
    const status = useSelector((state: AppState) => state.root.status);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    debugger
    useEffect(() => {
        debugger
        setOpen(true)
    }, [status]);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status === Statuses.success ? 'success' : 'error'}>
                    {status === Statuses.success ? 'success' : 'error'}
                </Alert>
            </Snackbar>
        </div>
    );
};
export default withRedux(CustomizedSnackbars);
