import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
function Booklist() {
    const [book, setbook] = useState([])
    useEffect(() => {
        booktable()
    }, [])
    const booktable = async () => {
        try {
            var result = await axios.get("https://63493bc20b382d796c811987.mockapi.io/library")
            setbook(result.data)
        }
        catch (error) {
            alert("error")
        }
    }
    function deletebook(id) {

        return axios.delete(`https://63493bc20b382d796c811987.mockapi.io/library/${id}`)
        booktable()
    }
    return (
        <>
            <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Books List</h1>
                    <Link to="/booklist/addbook" href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm add-bt"><i
                        class="fas fa-download fa-sm text-white-50"></i> Add Books</Link>
                </div>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Booklist</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Book Name</th>
                                        <th>Author</th>
                                        <th>Genre</th>
                                        <th>Publised Date</th>
                                        <th>Issue</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>Id</th>
                                    <th>Book Name</th>
                                    <th>Author</th>
                                    <th>Genre</th>
                                    <th>Publised Date</th>
                                    <th>Issue</th>
                                    <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {

                                      book.map((bookdetails) => {
                                            return (
                                                <tr>
                                                    <td>{bookdetails.id}</td>
                                                    <td>{bookdetails.bookname}</td>
                                                    <td>{bookdetails.author}</td>
                                                    <td>{bookdetails.genre}</td>
                                                    <td>{bookdetails.publiseddate}</td>
                                                    <td>{bookdetails.issue}</td>
                                                    <td>
                                                        <Link to={`/booklist/:${bookdetails.id}`} type="button" class="btn btn-warning">Update</Link>
                                                        <button type="button" class="btn btn-danger" onClick={() => deletebook(bookdetails.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booklist;