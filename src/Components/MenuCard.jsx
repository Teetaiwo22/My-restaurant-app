import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MenuCard = () => {
  return (
    <Card style={{ width: "8rem container text-center" }}>
      <div className="row pt-5">
        <div class="col">
          <Card.Img variant="top" src="./Images/foodCard-1.jpg" />
          <Card.Body>
            <Card.Title>Jollof Rice with Salad</Card.Title>
            <Card.Text>
              We serve the best Jollof rice in the town, a trial will convinvince you.
              You’ll often see jollof rice served with juicy proteins such as minced meat or chicken
            </Card.Text>
            <Button variant="primary">See more dishes</Button>
          </Card.Body>
        </div>

        <div class="col">
          <Card.Img variant="top" src="./Images/NewfFood2.jpg" />
          <Card.Body>
            <Card.Title>Fried Rice and Chiken</Card.Title>
            <Card.Text>
              We serve the best fried rice in the town, a trial will convinvince you.
              You’ll often see jollof rice served with juicy proteins such as minced meat or chicken
            </Card.Text>
            <Button variant="primary">See more dishes</Button>
          </Card.Body>
        </div>

        <div class="col">
          <Card.Img variant="top" src="./Images/NewFood3.jpg" />
          <Card.Body>
            <Card.Title>Chinese Rice</Card.Title>
            <Card.Text>
              We are good at what we do,
              we serve the best Chinese rice in the town, a trial will convinvince you.
              You’ll often see jollof rice served with juicy proteins such as minced meat or chicken
            </Card.Text>
            <Button variant="primary">See more dishes</Button>
          </Card.Body>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Card.Img variant="top" src="./Images/new4.jpg" />
          <Card.Body>
            <Card.Title>Amala with Assorted Meat</Card.Title>
            <Card.Text>
            If you’re looking for something to warm your soul and fill your stomach, this soup is the dish for you. 
            </Card.Text>
            <Button variant="primary">See more dishes</Button>
          </Card.Body>
        </div>

        <div class="col">
          <Card.Img variant="top" src="./Images/food5.jpg" />
          <Card.Body>
            <Card.Title>Smoked Chicken</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">See more dishes</Button>
          </Card.Body>
        </div>

        <div class="col">
          <Card.Img variant="top" src="./Images/food6.webp" />
          <Card.Body>
            <Card.Title>Chicken Salad</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">See more dishes</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;
