import axios from 'axios'
import {  useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'

function Update() {
  const Formik = useFormik({
    initialValues: {
        bookname: "",
        author: "",
        genre: "Fiction",
        publiseddate: "",
        issue: "Available"
    },
    validate: (values) => {
      const errors = {}
      if (!values.bookname) {
        errors.bookname = "please enter the name"
      }
      
      if (!values.author) {
        errors.author = "please enter the name"
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        console.log(values)
    
        var users = await axios.put("https://63493bc20b382d796c811987.mockapi.io/library/"+params1, values)
        console.log(users)
       
      }
      catch (error) {
        alert("error")
      }
    }
  }
  )

   const params=useParams()
   let params1=params.id.split(":")[1]
   console.log(params1)
  console.log(Formik.values.bookname)

  return (
    <div class="container">
    <form onSubmit={Formik.handleSubmit} class="form-group">
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group">
            <label>BookName</label>
            <input
              name="bookname"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.bookname}
              type={"text"}
              class={`form-control
           ${Formik.errors.bookname ? 'error-box' : ""}
           ${Formik.touched.bookname && !Formik.errors.bookname ? 'success-box' : ""}`
              }
            />
            {
              Formik.errors.bookname ? <span style={{ color: "red" }}>{Formik.errors.bookname}</span> : null
            }
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label>Author</label>
            <input
              name="author"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.author}
              type={"text"}
              class={`form-control 
          ${Formik.errors.author ? 'error-box' : ""}
          ${Formik.touched.author && !Formik.errors.author ? 'success-box' : ""}`
              }
            />
            {
              Formik.errors.author ? <span style={{ color: "red" }}>{Formik.errors.author}</span> : null
            }
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label>Genre</label>
            <select
              name="genre"
              onChange={Formik.handleChange}
              values={Formik.values.genre}
              class="form-control"
            >
              <option>Fiction</option>
              <option>Novel</option>
              <option>Mystery</option>
              <option>Fantacy</option>
              <option>Thriller</option>
            </select>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label>Publiseddate</label>
            <input
              name="publiseddate"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.publiseddate}
              type={"date"}
              class="form-control"/>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <label>Issue</label>
            <select
              name="issue"
              onChange={Formik.handleChange}
              value={Formik.values.issue}
              class="form-control">
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </div>
        </div>
        <div class="col-lg-4">
          <input type="submit" class="addbook-bt" />
        </div>

      </div>
    </form>
  </div>
  )
}

export default Update;