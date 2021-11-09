import React from 'react'
import { useState,useContext } from 'react'
import { useHistory} from 'react-router'
import { DarkMode } from '../../App';

const textStyle = {
    color: "rgb(229, 9, 20)",
}
const boxStyle = {
    background: 'rgb(229, 9, 20)'
}

const RegisterStep2 = () => {
    let router = useHistory()
    const darkMode = useContext(DarkMode)
    const [plan, setPlan] = useState()

    const basic = 'basic';
    const standard = 'standard';
    const premium = 'premium';

    const planClick = (e) => {
        setPlan(e)
    }

    return <>
        <section id="register-section" style={darkMode.darkMode === false ? { borderColor: "#141414",color: "#141414" } : { borderColor: "hsla(0, 0%, 89.8%, .0784313725490196)",color: "#e5e5e5"  }}>
            <div className="step-items">
                <p className="steps">STEP <strong>2</strong> OF <strong>3</strong></p>
                <p className="head-line">Choose a plan that's right for you..</p>
                <p className="dl">Downgrade or upgrade at any time</p>

                <div className="plan-boxes">
                    <div className="empty-box"></div>
                    <div className="boxes">
                        <div style={plan === basic ? boxStyle : null} className="box box1 basic" onClick={(e) => planClick(basic)}>Basic</div>
                        <div style={plan === standard ? boxStyle : null} className="box box2 standard" onClick={(e) => planClick(standard)}>Standard</div>
                        <div style={plan === premium ? boxStyle : null} className="box box3 premium" onClick={(e) => planClick(premium)}>Premium</div>
                    </div>
                </div>
                <div className="plan-item">
                    <p className="item-spec">Monthly price after free month ends</p>
                    <div className="items" >
                        <p className="basic" style={plan === basic ? textStyle : null}>$7.99</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>$10.99</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>$13.99</p>
                    </div>
                </div>
                <div className="plan-item">
                    <p className="item-spec">HD available</p>
                    <div className="items">
                        <p className="basic" style={plan === basic ? textStyle : null}>No</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>Yes</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>Yes</p>
                    </div>
                </div>
                <div className="plan-item">
                    <p className="item-spec">Ultra HD available</p>
                    <div className="items">
                        <p className="basic" style={plan === basic ? textStyle : null}>No</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>No</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>Yes</p>
                    </div>
                </div>

                <div className="plan-item">
                    <p className="item-spec">Screens you can watch on at the same time</p>
                    <div className="items">
                        <p className="basic" style={plan === basic ? textStyle : null} >1</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>2</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>4</p>
                    </div>
                </div>

                <div className="plan-item">
                    <p className="item-spec">Watch on your laptop, TV, phone and tablet</p>
                    <div className="items">
                        <p className="basic" style={plan === basic ? textStyle : null}>Yes</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>Yes</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>Yes</p>
                    </div>
                </div>

                <div className="plan-item">
                    <p className="item-spec">Unlimited movies and TV shoes</p>
                    <div className="items">
                        <p className="basic" style={plan === basic ? textStyle : null}>Yes</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>Yes</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>Yes</p>
                    </div>
                </div>

                <div className="plan-item">
                    <p className="item-spec">Cancel anytime</p>
                    <div className="items" >
                        <p className="basic" style={plan === basic ? textStyle : null}>Yes</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>Yes</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>Yes</p>
                    </div>
                </div>
                <div className="plan-item">
                    <p className="item-spec">First month free</p>
                    <div className="items">
                        <p className="basic" style={plan === basic ? textStyle : null}>Yes</p>
                        <p className="standard" style={plan === standard ? textStyle : null}>Yes</p>
                        <p className="premium" style={plan === premium ? textStyle : null}>Yes</p>
                    </div>
                </div>
                {
                    <button className='btn-step continue' onClick={() => {
                        if (!plan) {
                            alert("Choose one of the packages")
                            return;
                        }
                        router.push({
                            pathname: "/registerStep-3",
                            state: {
                                plan
                            }
                        })
                    }} >Continue</button>

                }
            </div>
        </section>


    </>
}

export default RegisterStep2

