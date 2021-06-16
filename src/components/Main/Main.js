import React from 'react'
import {Card, CardHeader, CardContent, Typography , Grid, Divider} from '@material-ui/core'
import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'


const Main = () => {
const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
                <CardContent>
                    <Typography align="center" variant="h5">Total Balance ₹ 10000</Typography>
                    <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                         {/* InfoCard */}
                         Try Saying : Add income for ₹ 2000 in category salary for Monday
                    </Typography>
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent className = {classes.cartContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
    
}

export default Main
