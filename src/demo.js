import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {TextField, Typography} from "@mui/material";

export default function MediaCard() {
    return (<Card sx={{Width: 900, borderRadius: '10px'}}>
        <CardContent>
            <Typography variant="h5" component="h2" sx={{height: 50}}>
                The best quote of the year!
            </Typography>
            <TextField
                id="outlined-basic"
                label="Quote"
                variant="outlined"
                size="medium"
                style ={{width: '100%'}}
            />
        </CardContent>

        <CardActions>
            <Button size="medium" variant={"contained"} sx={{borderRadius: '10px'}}>Share</Button>
        </CardActions>
    </Card>);
}
