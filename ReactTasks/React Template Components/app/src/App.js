import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Banner from './components/Banner';
import Cards from './components/Cards';
import Blogs from './components/Blogs';
import Buttons from './components/Buttons';
import About from './components/About';
import Archive from './components/Archive';



import './App.css';

class App extends Component {
  state = {
    cardDatas: [
      {
        id: 1,
        cardCategory: "World",
        cardTitle: "Featured post",
        cardDate: "Nov 12",
        cardDesc: "This is a wider card with supporting text below as a natural lead-in to additional content."
      },
      {
        id: 2,
        cardCategory: "Design",
        cardTitle: "Post title",
        cardDate: "Nov 11",
        cardDesc: "This is a wider card with supporting text below as a natural lead-in to additional content."

      }
    ],
    blogDatas: [
      {
        id: 1,
        blogTitle: "Sample blog post ",
        blogDate: "January 1, 2014 by",
        blogAuther: "Mark",
        blogDesc: `This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. 
     Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.`
      },
      {
        id: 2,
        blogTitle: "Heading ",
        blogDesc: `This is some additional paragraph placeholder content.It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.`
      },
      {
        id: 3,
        blogTitle: "Sub-heading ",
        blogDesc: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
               Example code block
        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.`
      },
      {
        id: 4,
        blogTitle: "Another blog post",
        blogDate: "December 23, 2013 by",
        blogAuther: "Jacob",
        blogDesc: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

        Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
        
        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
        
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Menu />
        <Banner />
        <Cards cardDatas={this.state.cardDatas} />
        <div class="row g-5">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">
            From the Firehose
          </h3>
          <div className="col-md-8">

            <Blogs
              blogDatas={this.state.blogDatas}
            />
           <Buttons 
             btnValue='Older'
             btnValue2='Newer'
           />

          </div>

          <div className="col-md-4">
          <div class="position-sticky" style={{top:"2.rem"}}>
            <About

            />
            <Archive />
            </div>
          </div>

        </div>
      </div>
    );
  }
}




export default App



