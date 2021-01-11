import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import { Posts } from './components/Posts/Posts';
import Form from './components/Form/Form';
import DarkEarthlingsLogo  from './images/DarkEarthlingsLogo.png';
import useStyles from './styles';



export default function App() {
    const [CurrentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[CurrentId, dispatch]);

    return (
        <Container maxWidth="lg">
            
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={CurrentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
