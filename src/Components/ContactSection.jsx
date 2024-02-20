import React from 'react'
import { CommentForm } from "../Components";

function ContactSection(props) {
  return (
    <>
      <div className="h1 text-center my-4">{props.sectionTitle}</div>
      <div className="container mb-4">
        <div className="row">
          <CommentForm/>
        </div>
      </div>
    </>
  )
}

export default ContactSection