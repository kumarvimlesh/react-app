import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    const dishComments = this.props.dishdetail.comments.map((dishcomment)=>{
      return(
                <div key={dishcomment.id}>
                    <p>{dishcomment.comment}</p>
                    <p>--{dishcomment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dishcomment.date)))}</p>
                </div>
            );
    });
    console.log('dish component is invpked');
    return(
        <div className="row">
                <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={this.props.dishdetail.image} alt={this.props.dishdetail.name} /> 
                <CardBody>
                   <CardTitle>{this.props.dishdetail.name}</CardTitle>
                         <CardText>{this.props.dishdetail.description}</CardText>
                </CardBody>
            </Card>
        </div>                  
        <div className="col-12 col-md-5 m-1">
                  <div>
                    <h1>Comments</h1>
                    {dishComments}
          </div>
              </div>
            </div>
    );
  }
}

export default Dishdetail;