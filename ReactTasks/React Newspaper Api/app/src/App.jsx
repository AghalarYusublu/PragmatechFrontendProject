import React from 'react'
import { useRef, useEffect, useState } from 'react';
import shortid from "short-id";

import './App.css';


function App() {
  const inputValue = useRef(null)
  const pageLink = useRef(null)
  const [data, setData] = useState()
  
  const [pageCount, setPageCount] = useState()

  const [terms, setTerms] = useState()
  const [page, setPage] = useState()




  useEffect(() => {
    fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${terms}&format=json&page=${page}`).then(a => a.json())
      .then((data) => {
        setData(data);
        setPageCount(data.totalItems / (data.endIndex - data.startIndex + 1));
      }).catch(() => {
        alert("data yoxdur")
      })
  }, [terms, pageCount,page])

  const Search = (e) => {
    e.preventDefault()
    setTerms(inputValue.current.value)
  }



  return <>
    <div className="main mt-5">
      <div className="container">
        <div className="row offset-4">
          <div className="col-lg-6">
            <form>
              <div class="form-row text-center">
                <div class="col">
                  <input type="text" ref={inputValue} class="form-control" placeholder="Search..." />
                  <button className='btn btn-success mt-3' onClick={Search}> Search</button>
                </div>
              </div>
            </form>
            <nav aria-label="Page navigation example " className='mt-5 d-flex justify-content-center'>
              <ul class="pagination">
                {
                  Array(Math.ceil(pageCount)).fill('').map((num, index) => {
                    (<li key={shortid.generate()} class="page-item"><a class="page-link" href="#" ref={pageLink} onClick={() => setPage(index + 1)}>{index + 1}</a></li>)
                  })
                }
              </ul>
            </nav>
          </div>
        </div>
        <div className="data-show d-flex justify-content-between">
          <div className="title">
            <h4>Title</h4>
            {
              data?.items.map((elem) => {
                return <p key={shortid.generate()} >{elem.title}</p>
              })
            }
          </div>
          <div className="start-year">
            <h4>Start Year</h4>
            {
              data?.items.map((elem) => {
                return <p key={shortid.generate()} >{elem.start_year}</p>
              })
            }
          </div>
          <div className="publisher">
            <h4>Publisher</h4>
            {
              data?.items.map((elem) => {
                return <p key={shortid.generate()}>{elem.publisher}</p>
              })
            }
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App;
