import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {


    renderDish(dish) {

    	if(dish != null) {
            console.log(this.props.dish.comments);
    		return (
    			<Card>
    				<CardImg top src={dish.image} alt={dish.name} />
    				<CardBody>
	    				<CardTitle>{dish.name}</CardTitle>
	    				<CardText>{dish.description}</CardText>
    				</CardBody>
    			</Card>        
			);
    	}
    	else {
    		return (
                <div></div>
			);
    	}

        const log = this.props.dish.comments.map(comment => {
                return (comment);
            });
    }
    renderComment(dish) {

        if(dish != null) {
            return (
              <div className="col-12 col-md-5 m-1">
                <div>
                    <h2>Comments</h2>
                    <p>{comments.comment}</p>
                    <p>--{comments.author}, {comments.date}</p>
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

    render() {

        if(this.props.dish != null) {
            const dish = this.props.dish.comments.map(comment => 
            { return (<div>{comment.id}</div>


                ); 
            });

        }
        
    	return (
            
    		<div className="container">
                <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                  </div>
                   <div className="col-12 col-md-5 m-1">
                      {this.renderComment(this.props.dish)}
                  </div>
                </div>
            </div>
		);
    }
}


export default DishDetail;

{/*<h2>Comments</h2>
                    <p>{this.props.dish.comments.comment}</p>
                    <p>--{this.props.dish.comments.author},{this.props.dish.comments.date}</p>*/}


                     