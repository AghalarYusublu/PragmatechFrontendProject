import React from 'react'
import '../App.css'

function Archives() {
    const mounths = ['March 2014', 'February 2014', 'January 2014','December 2013','November 2013','October 2013','September 2013','August 2013','July 2013','June 2013','May 2013','April 2013'];

    const list = []
  
    mounths.forEach((mounth) => {
      list.push(<li><a href="#">{mounth}</a></li>)
    })
    return (
        <div className="p-4">
            <h4 className="fst-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
                {list}
            </ol>
        </div>
    )
}

export default Archives;