import React, { Component } from 'react'


class Menu extends Component {
    state= {
        datas:[
            {
                world:"World",
                us: "U.S.",
                techonology: "Technology",
                design: "Design",
                culture: "Culture",
                business: "Business",
                politics: "Politics",
                opinion: "Opinion",
                science: "Science",
                health: "Health",
                style: "Style",
                travel: "Travel"
            }
        ]
    }
    render() {
        const {datas} = this.state
        let list = []
        datas.forEach((product) => {
            for(let menu in product) {
                list.push(<a href="#" className="p-2 link-secondary">{product[menu]}</a>)
            }
          })
        return (
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    {list}
                </nav>
            </div>
        )
    }
}
export default Menu;