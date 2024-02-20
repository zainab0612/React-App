import { useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { Card } from "react-bootstrap";

function Categories(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/categories')
          .then((json) => setUsers(json.data));
    
  }, []);

  return (
    <>
      <div className="h1 text-center my-4">{props.sectionTitle}</div>
          <div className="container text-center">
              <div className="row">{
                  users.map((val,key) => (
                      <div className="col-md-4 my-2" key={key}>
                          <Card>
                              <Card.Body>
                                  <Card.Title>
                                      { key+1 } - { val.toUpperCase().replace('-', ' ')}
                                  </Card.Title>
                              </Card.Body>
                          </Card>
                      </div>
                  ))}
              </div>
      </div>
    </>
  );
}

export default Categories;
