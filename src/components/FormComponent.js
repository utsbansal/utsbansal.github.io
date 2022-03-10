import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    if(status === ""){
        return (
            <Form onSubmit={this.submitForm} action="https://formspree.io/xleorgqg" method="POST">
            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" innerRef={(input) => this.name = input}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" innerRef={(input) => this.email = input}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Feedback</Label>
                <Input type="textarea" rows="6" id="feedback" name="feedback" innerRef={(input) => this.feedback = input}/>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Submit</Button>
        </Form>
        );
    }
    else{
        return(
            <div className="row">
                <div className="col-12">
                    <p>{status}</p>
                </div>
            </div>
        );
    }
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "Thank You for your feedback!" });
      } else {
        this.setState({ status: "ERROR. Could not submit feedback." });
      }
    };
    xhr.send(data);
  }
}

export default MyForm;