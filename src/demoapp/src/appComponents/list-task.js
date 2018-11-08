import React from "react";
import { TextField, Button } from "@material-ui/core"

class ListTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                title: ""
            }
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        const { task } = this.state;
        this.setState({
            task: {
                ...task,
                [name]: value
            }
        })
    }
    render() {
        const { task } = this.state;
        return (
            <div>
                <TextField label="Title*" placeholder="Title*" name="title"
                    value={task.title} onChange={this.handleChange}></TextField>
                <Button variant="contained" color="primary">Add</Button>
            </div>
        )
    }
}

export default ListTask