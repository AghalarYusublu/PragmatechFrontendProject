import { useState, useEffect } from "react";
import PostCard from './PostCard'
import Modal from "./Modal";

const PostSection = () => {
    const [list, setList] = useState([
        { title: "Apple takes down Quran app in China", desc: "The popular Islamic app was removed in the country, after an official request.", categoryName: "TECNOLOGY", imgSrc: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/15CA1/production/_121094298_gettyimages-992536972.jpg" },
        { title: "Colombia sterilises drug lord Escobar's hippos", desc: "Scientists are concerned about the impact of the rogue non-native herd near Escobar's former ranch.", categoryName: "Latin America & Caribbean", imgSrc: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/2519/production/_121079490_gettyimages-1228500670-1.jpg" },
        { title: "Fleeing the desert's shifting sands ", desc: "Rising temperatures and desertification are forcing many Mauritanians to leave their ancestral homes in search of a better life. ", categoryName: "Fleeing the desert's shifting sands", imgSrc: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/182AD/production/_121098989_p09ysrpd.jpg" },
    
    ])

    const [openModal, setOpenModal] = useState(false)
    const [modalInfo, setModalInfo] = useState();

    const clickModal = (param) => {
        if (openModal === false) {
            setModalInfo(list[param])
            setOpenModal(true)
        }
        console.log("dada")
    }
    /*    useEffect(() => {    
          
       }, [modalInfo]) */

    return <div className="px-24 my-20">    
        <div className="section-title">
            <h1>News</h1>
        </div>
        <div className="grid grid-cols-3 gap-3">
            {list.map((x, i) => <div onClick={() => clickModal(i)}> <PostCard title={x.title} desc={x.desc} categoryName={x.categoryName} imgSrc={x.imgSrc}></PostCard> </div>)}
            {openModal && <Modal {...modalInfo} setOpenModal={setOpenModal}></Modal>}
        </div>
    </div>
}
export default PostSection













































