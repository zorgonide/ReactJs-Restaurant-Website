import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
    if (dish != null) {
        return (
            
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
         
        )
    }
    else {
        return(
            <div></div>
        )
    }
} 

function RenderComments({comments}) {
    const commentList = comments.map(comment => {
        return (
            <li key= {comment.id}>
                <p>{comment.comment}</p>
                <p><i>{comment.author}</i>,
                &nbsp;
                {new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'

                }).format(new Date(comment.date))}
                </p>
                <br></br>
            </li>
        )
    })
    return(
        <div>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {commentList}
            </ul>
        </div>
    )
}

const DishDetail = props => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
export default DishDetail