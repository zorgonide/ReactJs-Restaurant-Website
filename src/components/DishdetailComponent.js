import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderComments (comments){
        const comList = comments.map(comment => {
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
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {comList}
                </ul>
            </div>
        )
    }

    renderDish(dish){
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
    render(){
        const dish = this.props.dish;
        const comments = this.props.comments;
        if (dish == null){
            return (<div></div>)
        }
        const dishID = this.renderDish(dish)
        const commentDish = this.renderComments(dish.comments)
        return(
            <div className='row'>
                {dishID}
                {commentDish}
            </div>
        )
    }
}
export default DishDetail