import React, { Component } from 'react'

class About extends Component {
    state={
        aboutDesc:"Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you."
    }
    render() {
        const{aboutDesc}=this.state
        return (
            
              
                    <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="fst-italic">About</h4>
                        <p class="mb-0">{aboutDesc}</p>
                    </div>
            
        )
    }
}

export default About