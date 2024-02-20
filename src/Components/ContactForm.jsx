import React, { useReducer } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function ContactForm(props) {

  const reducer = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      case "gender":
        return { ...state, gender: action.payload };
      case "skill":
        if (action.checked) {
          return { ...state, skill: [...state.skill, action.payload] };
        }

      default:
        return state;
    }
  };
  const initialState = { email: "", password: "", gender: "", skill: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", state.email);
    console.log("Password:", state.password);
    console.log("Gender:", state.gender);
    console.log("Skill:", state.skill);

    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
    dispatch({ type: "gender", payload: "" });
    dispatch({ type: "skill", payload: [], checked: false });
  };

  return (
    <>
      <div className="h1 text-center my-4">{props.sectionTitle}</div>
      <div className="container mb-4">
        <div className="row">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="inputEmail4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={state.email}
                onChange={(e) => {
                  dispatch({ type: "email", payload: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputPassword4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) => {
                  dispatch({ type: "password", payload: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="inputCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="inputState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="inputZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Label> Select Gender:</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  value={"Male"}
                  type={"radio"}
                  id={`inline-${type}-1`}
                  checked={state.gender === "Male"}
                  onChange={(e) => {
                    dispatch({ type: "gender", payload: e.target.value });
                  }}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  value={"Female"}
                  type={"radio"}
                  id={`inline-${type}-2`}
                  checked={state.gender === "Female"}
                  onChange={(e) => {
                    dispatch({ type: "gender", payload: e.target.value });
                  }}
                />
              </div>
            ))}
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Label> Select Skill:</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="HTML"
                  name="skill"
                  type={"checkbox"}
                  id={`inline-${type}-1`}
                  value={"HTML"}
                  checked={state.skill.includes("HTML")}
                  onChange={(e) => {
                    dispatch({
                      type: "skill",
                      payload: e.target.value,
                      checked: e.target.checked,
                    });
                  }}
                />
                <Form.Check
                  inline
                  label="CSS"
                  name="skill"
                  type={"checkbox"}
                  id={`inline-${type}-2`}
                  value={"CSS"}
                  checked={state.skill.includes("CSS")}
                  onChange={(e) => {
                    dispatch({
                      type: "skill",
                      payload: e.target.value,
                      checked: e.target.checked,
                    });
                  }}
                />
                <Form.Check
                  inline
                  label="JavaScript"
                  name="skill"
                  type={"checkbox"}
                  id={`inline-${type}-3`}
                  value={"JS"}
                  checked={state.skill.includes("JS")}
                  onChange={(e) => {
                    dispatch({
                      type: "skill",
                      payload: e.target.value,
                      checked: e.target.checked,
                    });
                  }}
                />
              </div>
            ))}

            <Button variant="dark" type="submit" className="my-4">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
