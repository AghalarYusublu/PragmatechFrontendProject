import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../css/main.css";

interface IStateData {
    id: number;
    title: string;
    columns: IStateColumns[]
}

interface IStateColumns {
    name: string;
    icon?: string;
}

export function Footer() {
    const [data, setData] = useState<IStateData[]>([
        {
            id: 1,
            title: "Support",
            columns: [
                { name: "FAQ's" },
                { name: "Delivery" },
                { name: "Returns" },
                { name: "Warranty" },
                { name: "Garment Care" },
                { name: "Contact Us" },
                { name: "Refund policy" },
                { name: "Terms of Service" },
                { name: "Terms & Conditions" },
                { name: "Privacy Polic" }
            ]
        },
        {
            id: 2,
            title: "Explore",
            columns: [
                { name: "About Us" },
                { name: "Technologies" },
                { name: "Ambassadors" },
                { name: "Expeditions" },
                { name: "News" },
                { name: "Development" },
                { name: "Affiliates" }
            ]
        },
        {
            id: 3,
            title: "Collections",
            columns: [
                { name: "Shop All" },
                { name: "Men's" },
                { name: "Women's" },
                { name: "Newsletter" },
                { name: "Klarna" }
            ]
        },
        {
            id: 4,
            title: "Follow",
            columns: [
                { name: "Instagram", icon: "uil uil-instagram" },
                { name: "Facebook", icon: "fab fa-facebook" },
                { name: "Twitter", icon: "uil uil-twitter" },
                { name: "Youtube", icon: "uil uil-youtube" }
            ]
        }
    ])

    const showColumn = (info: IStateColumns) => {
        return (
            <div className="footer__inner__column__item pt-[15px]">
                <Link to="/pages/fags" className='leading-6 font-light text-sm text-[#f4f4f4] w-[max-content] flex items-center relative cursor-none'>
                    {info.icon ? <span className='mr-[15px] w-[20px] h-[20px]'>
                        <i className={info.icon}></i>
                    </span> : null}
                    <span className='leading-6 font-light text-sm text-[#f4f4f4]'>{info.name}</span>
                </Link>
            </div>
        )
    }

    return (
        <div className='footer__sec'>
            <div className="footer mt-[75px] grid relative">
                <div className="footer__background col-[1] row-[1] opacity-[.45] flex pb-[90px]">
                    <div className="footer__background_img flex w-full">
                        <img className='w-full object-cover' src="/images/TD_Footer_Image_2x_c56e5718-85b5-4bd3-8feb-5eea907b8a7e_1944x.png" alt="TD Footer" />
                    </div>
                </div>
                <div className="footer__inner flex justify-end flex-col col-[1] row-[1]">
                    <div className="footer__inner_body px-[60px] mx-auto w-full">
                        <div className="footer__newsLetter">
                            <div className="footer__newsLetter__container my-[100px]">
                                <div className="footer__newsLetter__header text-center my-0 mx-auto">
                                    <h3 className='text-xs font-light leading-[15px] uppercase text-[#4f4f4f] mb-[15px]'>Subscribe</h3>
                                    <h1 className='text-5xl font-light uppercase text-[#f4f4f4] mb-[15px]'>Join the Brotherhood</h1>
                                </div>
                                <div className="footer__newsLetter__content max-w-[420px] text-center my-0 mx-auto">
                                    <p className='text-sm font-light leading-6 text-[#f4f4f4] mb-[25px]'>Get closer to the brotherhood by receiving the latest ThruDark news on products, expeditions, events and more.</p>
                                    <div className="footer__newsLetter__form">
                                        <form action="" className='footer__form'>
                                            <div className="footer__form_row flex">
                                                <div className="footer__formgroup clip__path flex flex-grow">
                                                    <input type="email" name="email" id="email" placeholder='Your Email Address' className='w-full border border-solid border-[rgba(180,187,195,0)] bg-[#fff] text-black text-left h-[44px] pl-4 outline-none box-border' />
                                                </div>
                                                <div className="footer__form__btn flex justify-start p-0 flex-initial">
                                                    <button className='leading-4 font-normal text-[13px] tracking-[.2em] py-[10px] px-[15px] clip__path h-full cursor-pointer self-end text-center text-white border-0 border-black bg-[#030000] border-none rounded-none uppercase'>Join</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <p className='text-xs font-light leading-5 text-[#f4f4f4] mt-[25px]'>I can confirm I wish to receive emails from ThruDark, you may opt out of these emails at any time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__inner__columns py-[50px] grid grid-cols-[repeat(12,1fr)] gap-[30px]">
                            <div className="footer__inner__column footer__inner__column__dbl">
                                <div className="footer__sec__logo m-[unset] relative max-w-[180px]">
                                    <img className='w-full object-cover' src="/images/Footer-Badge_360x.png" alt="Footer Logo" />
                                </div>
                            </div>
                            {
                                data.map((item) => {
                                    return (
                                        <div className="footer__inner__column">
                                            <div className="footer__innercolumn__content">
                                                <div className="footer_innercolumn_header">
                                                    <h3 className='text-xs font-light leading-[15px] uppercase text-[#f4f4f4]'>{item.title}</h3>
                                                </div>
                                                <nav className='footer__inner__column__items'>
                                                    {item.columns.map((info) => {
                                                        return (
                                                            showColumn(info)
                                                        )
                                                    })}
                                                </nav>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="footer__copyright px-[60px] mx-auto w-full flex bg-[#080808] py-[30px] justify-start flex-row items-center">
                        <p className='footer__copyright__text my-0 leading-5 font-light text-xs text-[#f4f4f4]'>Copyright ThruDark 2021</p>
                        <div className="footer_sec_payment ml-auto">
                            <ul className="footer__secpymnt_cards list-none mx-[-8px] flex justify-center flex-wrap flex-shrink-0 items-center mt-0">
                                <li className="footer_secpymnt_card mx-[8px] h-[30px] w-[47px] mt-0">
                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 30"><rect x=".498444" width="50" height="30" rx="2" fill="#fff" fill-opacity=".1"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M29.6231 19.0287c-2.0562 1.5145-5.0366 2.3225-7.6027 2.3225-3.598 0-6.8371-1.3298-9.2877-3.5415-.1925-.1739-.02-.4109.211-.2755 2.6446 1.5376 5.9146 2.4626 9.2924 2.4626 2.278 0 4.784-.471 7.0882-1.4483.3481-.1478.6392.2278.2988.4802z" fill="#fff" fill-opacity=".8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4779 18.0518c-.2618-.3355-1.7374-.1585-2.3997-.08-.2018.0246-.2326-.1509-.0508-.2771 1.1752-.8265 3.1036-.5879 3.3285-.3109.2248.2786-.0586 2.2102-1.1629 3.1321-.1695.1416-.3312.0662-.2557-.1216.248-.6187.804-2.0054.5406-2.3425z" fill="#fff" fill-opacity=".8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.1244 11.8601v-.8034c0-.1216.0924-.2032.2033-.2032h3.5996c.1155 0 .2079.0831.2079.2032v.688c-.0015.1154-.0986.2662-.2711.5048l-1.8652 2.6611c.6931-.017 1.4247.0862 2.0531.4401.1417.0801.1803.197.191.3125v.8573c0 .1169-.1293.2539-.2649.1831-1.1074-.5802-2.5784-.6433-3.8029.0062-.1247.0677-.2556-.0678-.2556-.1847v-.8142c0-.1308.0015-.354.1324-.5525l2.161-3.0967h-1.8807c-.1155 0-.2079-.0816-.2079-.2016zM14.9938 16.8725h-1.0951c-.1048-.0077-.1879-.0862-.1956-.1862v-5.6162c0-.1123.0939-.2016.211-.2016h1.0212c.1062.0046.191.0862.1987.1878v.7341h.02c.2664-.7095.767-1.0404 1.4417-1.0404.6854 0 1.1136.3309 1.4216 1.0404.2649-.7095.8672-1.0404 1.5125-1.0404.459 0 .9611.1893 1.2677.6141.3465.4725.2757 1.1589.2757 1.7607l-.0016 3.5446c0 .1123-.0939.2031-.211.2031H19.767c-.1093-.0077-.1971-.0954-.1971-.2031v-2.9767c0-.237.0215-.828-.0308-1.0527-.0817-.3771-.3266-.4833-.6439-.4833-.2649 0-.5421.177-.6546.4602-.1124.2832-.1016.7573-.1016 1.0758v2.9767c0 .1123-.094.2031-.211.2031h-1.0936c-.1109-.0077-.1972-.0954-.1972-.2031l-.0015-2.9767c0-.6264.1032-1.5483-.6746-1.5483-.7871 0-.7563.8988-.7563 1.5483v2.9767c0 .1123-.0939.2031-.211.2031zM35.2342 10.75c1.625 0 2.5044 1.3944 2.5044 3.1675 0 1.713-.9718 3.072-2.5044 3.072-1.5957 0-2.4644-1.3944-2.4644-3.1321 0-1.7484.8795-3.1074 2.4644-3.1074zm.0092 1.1465c-.807 0-.8579 1.0989-.8579 1.7838 0 .6864-.0108 2.1516.8487 2.1516.8487 0 .8887-1.182.8887-1.9023 0-.474-.02-1.0404-.1632-1.4898-.1233-.3909-.3682-.5433-.7163-.5433zM39.8457 16.8725h-1.0905c-.1093-.0077-.1971-.0954-.1971-.2031l-.0016-5.6177c.0093-.1032.1001-.1832.211-.1832h1.0151c.0955.0046.174.0693.1956.157v.8588h.02c.3065-.768.7362-1.1343 1.4925-1.1343.4913 0 .9703.177 1.2784.6618.2865.4494.2865 1.2051.2865 1.7484v3.5353c-.0123.0985-.1032.177-.211.177h-1.0982c-.1001-.0077-.1833-.0816-.1941-.177V13.645c0-.6141.0709-1.5129-.6854-1.5129-.2665 0-.5114.1785-.6331.4494-.154.3432-.174.6849-.174 1.0635v3.0244c-.0015.1123-.097.2031-.2141.2031M25.2549 14.1901c0 .4264.0108.7819-.2048 1.1605-.1741.3078-.4513.4971-.7578.4971-.4205 0-.667-.3201-.667-.7926 0-.9327.8364-1.102 1.6296-1.102v.237zm1.1044 2.6672c-.0724.0646-.1771.0692-.2588.0261-.3635-.3016-.4297-.4417-.6284-.7295-.6007.6126-1.0273.7957-1.8052.7957-.9226 0-1.6388-.5679-1.6388-1.7053 0-.888.4806-1.4929 1.1675-1.7884.5946-.2617 1.4247-.3078 2.0593-.3802v-.1416c0-.2601.0201-.5679-.134-.7926-.1324-.2016-.3881-.2847-.6145-.2847-.4174 0-.7886.2139-.8795.6572-.0185.0985-.0909.1954-.191.2l-1.0612-.1139c-.0894-.02-.1895-.0923-.1633-.2293.2434-1.2867 1.4078-1.6745 2.449-1.6745.5329 0 1.2291.1416 1.6496.5448.5329.4972.4821 1.1605.4821 1.8823v1.7054c0 .5125.2126.7372.4128 1.0142.0693.0985.0847.217-.0046.2909-.2234.1862-.6208.5325-.8395.7265l-.0015-.0031M10.8983 14.1901c0 .4264.0107.7819-.2049 1.1605-.174.3078-.4497.4971-.75779.4971-.42049 0-.66538-.3201-.66538-.7926 0-.9327.83637-1.102 1.62807-1.102v.237zm1.1043 2.6672c-.0724.0646-.1771.0692-.2587.0261-.3635-.3016-.4282-.4417-.6285-.7295-.6007.6126-1.0258.7957-1.80513.7957-.92107 0-1.63882-.5679-1.63882-1.7053 0-.888.4821-1.4929 1.16751-1.7884.59453-.2617 1.42474-.3078 2.05934-.3802v-.1416c0-.2601.02-.5679-.1325-.7926-.134-.2016-.3897-.2847-.6146-.2847-.41736 0-.7901.2139-.88097.6572-.01849.0985-.09088.1954-.18945.2L8.018 12.6001c-.08933-.02-.18791-.0923-.16326-.2293.2449-1.2867 1.40778-1.6745 2.44896-1.6745.533 0 1.2292.1416 1.6496.5448.533.4972.4821 1.1605.4821 1.8823v1.7054c0 .5125.2126.7372.4128 1.0142.0709.0985.0863.217-.0031.2909-.2233.1862-.6207.5325-.8394.7265l-.0031-.0031" fill="#fff"></path></svg>
                                </li>
                                <li className="footer__secpymnt__card mx-[8px] h-[30px] w-[47px] mt-0">
                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 30"><rect x=".498444" width="50" height="30" rx="2" fill="#fff" fill-opacity=".1"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2434 19.7734l1.5374-9.5371h2.4574l-1.5372 9.5371h-2.4576zM32.6149 10.4705c-.4859-.1915-1.2501-.4002-2.2021-.4002-2.4296 0-4.1398 1.2942-4.154 3.1475-.0155 1.3708 1.2204 2.1353 2.1521 2.591.9576.467 1.2793.7659 1.2755 1.1835-.0066.6387-.7643.9314-1.4708.9314-.9839 0-1.5066-.1441-2.3148-.5001l-.3161-.1519-.3437 2.1348c.5731.2656 1.6354.4962 2.7379.5083 2.5821 0 4.2598-1.2786 4.2795-3.2576.0089-1.087-.646-1.911-2.0641-2.5913-.8588-.4422-1.3859-.7352-1.3799-1.1828.0006-.3963.4453-.8207 1.4078-.8207.8038-.0129 1.3857.1727 1.8392.3665l.2206.109.3329-2.0674zM35.8871 16.392c.2037-.5481.979-2.6657.979-2.6657-.0144.0252.2025-.5524.3266-.9099l.1658.8225s.4716 2.2764.5687 2.7531h-2.0401zm3.0317-6.1459h-1.8991c-.5891 0-1.03.1687-1.2881.7906l-3.6494 8.7401h2.5811s.4211-1.1758.5167-1.4338c.2815 0 2.7895.0049 3.1475.0049.0737.3328.2993 1.4289.2993 1.4289h2.2808l-1.9888-9.5307zM19.1818 10.2441l-2.4053 6.502-.2576-1.3217c-.4482-1.5228-1.8435-3.1734-3.4042-4.0004l2.2005 8.3408 2.6008-.0015 3.87-9.5192h-2.6042z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5437 10.2383h-3.9629l-.0326.1976c3.0836.79 5.1239 2.6969 5.9707 4.9891l-.8612-4.3821c-.1485-.6043-.5803-.7835-1.114-.8046z" fill="#fff" fill-opacity=".8"></path></svg>
                                </li>
                                <li className="footer__secpymnt__card mx-[8px] h-[30px] w-[47px] mt-0">
                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 30"><rect width="50" height="30" rx="2" transform="matrix(1 0 0 -1 .498444 30)" fill="#fff" fill-opacity=".1"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1452 23.5997v-1.9271h-.4298v1.1204c-.1583-.2018-.3822-.3138-.7011-.3138-.6105 0-1.0632.4707-1.0632 1.1205 0 .6497.4521 1.1204 1.0632 1.1204.3167 0 .5428-.112.7011-.3138v.2705h.4298v-1.0771zm-14.0461-1.0532h.7918l-.0005.0028v.3586h-.7918v1.0301c0 .224.113.3587.3391.3587.1439.0025.2854-.0364.4074-.112l.1359.3787c-.1799.0988-.3814.1527-.587.1569-.5428 0-.7235-.2916-.7235-.7845v-1.0105h-.4522v-.3788h.4522v-.6492h.4286v.6492zm-6.2645.7843v1.3444h-.474v-1.2324c0-.3581-.1808-.5599-.4975-.5599s-.5428.1812-.5428.5599v1.2324h-.4297v-1.2324c0-.3581-.1808-.5599-.4975-.5599s-.5428.1812-.5428.5599v1.2308h-.4298v-2.151h.4298v.2705c.1514-.207.3975-.3249.6553-.3138.3413 0 .5652.132.7235.3787.2037-.2889.4959-.3787.7689-.3787.5199 0 .8366.3359.8366.8515zm11.082-.8516c-.2382-.0053-.4615.1139-.5882.3138v-.2705h-.4297v2.151h.4297v-1.2081c0-.3587.1808-.5826.4751-.5826.0993.004.1979.019.2938.0449l.136-.4036c-.1037-.0259-.2099-.041-.3167-.0449zm-6.9657.0002c.3391 0 .6558.0671.8819.224l-.2223.3382c-.1359-.0671-.4057-.1791-.6787-.1791-.249 0-.4298.1136-.4298.2705 0 .1342.1786.2018.3823.224l.226.0221c.4735.0677.7465.2489.7465.6276 0 .4036-.3391.6947-.9725.6947-.2272 0-.6116-.0466-.9284-.2705l.2261-.336c.2102.1506.4642.2293.7235.224.3397 0 .5205-.1136.5205-.2705 0-.112-.1584-.2018-.4074-.2467l-.2261-.0222c-.4745-.0676-.7235-.2689-.7235-.6276 0-.4258.3391-.6725.8819-.6725zm7.4408 1.1217c.0006.6485.4302 1.119 1.1309 1.119.3167 0 .5428-.067.7688-.2466l-.226-.336c-.1601.1284-.3593.1995-.5652.2018-.3823 0-.6788-.2911-.6788-.7168 0-.4258.2927-.7147.6788-.7147.2059.0022.4051.0734.5652.2018l.226-.336c-.226-.1791-.4521-.2467-.7688-.2467-.6783-.0449-1.1303.4251-1.1309 1.0742zm-4.094-.0012c0-.6725.4298-1.1205 1.0632-1.1205v.0006c.6106 0 1.0179.4479 1.0179 1.1204v.1791h-1.606c.0448.3809.3615.5599.6553.5599.2298-.006.4517-.0844.6335-.224l.226.3138c-.2512.1949-.5628.2978-.8819.2911-.6558 0-1.108-.448-1.108-1.1204zm1.0409-.7173c.3167 0 .5427.2018.5651.5378H24.728c.0678-.3138.2731-.5378.6106-.5378zm-5.8577-.3585v2.1542h-.4298v-.2705c-.1584.2018-.3844.3138-.7012.3138-.611 0-1.0632-.4707-1.0632-1.1204 0-.6498.4527-1.1204 1.0632-1.1204.3189 0 .5428.112.7012.3138v-.2705h.4298zm-1.7415 1.0754c0-.4036.249-.7169.6788-.7169.4074 0 .6553.3138.6553.7169 0 .4258-.2731.7168-.6553.7168-.4298.0222-.6788-.3138-.6788-.7168zm16.1261-.8065c.1266-.1999.35-.3191.5881-.3138h-.0005c.1068.0039.213.019.3167.0449l-.136.4036c-.0959-.0259-.1944-.0409-.2938-.0449-.2943 0-.4751.2239-.4751.5826v1.2081h-.4292v-2.151h.4298v.2705zm-1.0856.8066v-1.0755h-.4298v.2705c-.1583-.2018-.3822-.3138-.7011-.3138-.6105 0-1.0632.4706-1.0632 1.1204 0 .6497.4521 1.1204 1.0632 1.1204.3167 0 .5428-.112.7011-.3138v.2705h.4298v-1.0787zm-1.0627-.717c-.4297 0-.6787.3133-.6787.7169 0 .403.249.739.6787.7168.3823 0 .6553-.291.6553-.7168 0-.4031-.2479-.7169-.6553-.7169zm4.3654 0c-.4298 0-.6788.3133-.6788.7169h-.0006c0 .4036.249.7395.6794.7168.3822 0 .6552-.291.6552-.7168 0-.4031-.2479-.7169-.6552-.7169z" fill="#fff"></path><circle opacity=".15" cx="20.3526" cy="12.7977" r="8.12217" fill="#fff"></circle><circle opacity=".3" cx="30.2797" cy="12.7977" r="8.12217" fill="#fff"></circle></svg>
                                </li>
                                <li className="footer__secpymnt__card mx-[8px] h-[30px] w-[47px] mt-0">
                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30"><rect width="49.1803" height="30" rx="2" transform="matrix(1 0 0 -1 .498444 30)" fill="#fff" fill-opacity=".1"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M30.6675 13.4772c-.1321.8675-.7946.8675-1.4356.8675h-.3645l.2558-1.6197c.0153-.0979.0997-.1698.1988-.1698h.1673c.4363 0 .8482 0 1.0607.2483.1272.1486.1655.3693.1175.6737zm-.2789-2.2641h-2.4168c-.1655 0-.306.1203-.3319.2836l-.9772 6.1973c-.0193.1221.0754.2328.1988.2328h1.2402c.1156 0 .2141-.0842.2322-.1982l.2773-1.7572c.0256-.1633.1664-.2836.3316-.2836h.7646c1.5921 0 2.511-.7703 2.7509-2.2974.1082-.6675.0044-1.1923-.3082-1.5597-.3437-.4038-.9529-.6176-1.7615-.6176z" fill="#fff" fill-opacity=".8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4294 13.4772c-.1321.8675-.7946.8675-1.4356.8675h-.3646l.2559-1.6197c.0152-.0979.0997-.1698.1988-.1698h.1673c.4363 0 .8482 0 1.0607.2483.1272.1486.1655.3693.1175.6737zm-.2789-2.2641h-2.4168c-.1655 0-.306.1203-.3319.2836l-.97721 6.1973c-.01932.1221.0751.2328.19881.2328h1.1542c.1651 0 .3057-.1203.3315-.2833l.264-1.6721c.0255-.1633.1664-.2836.3315-.2836h.7647c1.592 0 2.511-.7703 2.7509-2.2974.1081-.6675.0044-1.1923-.3082-1.5597-.3437-.4038-.9529-.6176-1.7615-.6176zM18.7614 15.7014c-.1118.6612-.6366 1.1052-1.3062 1.1052-.3356 0-.6046-.1081-.7772-.3125-.1711-.2025-.2356-.4914-.1813-.8127.104-.6556.6375-1.1137 1.2969-1.1137.3287 0 .5955.1091.7715.3154.1773.2078.2471.4982.1963.8183zm1.6129-2.2525H19.217c-.0991 0-.1835.0719-.1991.1701l-.0508.3234-.0807-.1171c-.2509-.3637-.8096-.4855-1.3674-.4855-1.2785 0-2.3707.9691-2.5832 2.328-.1106.6781.0464 1.3259.431 1.7781.353.4153.8569.5883 1.4574.5883 1.0308 0 1.6022-.6619 1.6022-.6619l-.0517.3216c-.0193.1222.0751.2328.1991.2328h1.0421c.1654 0 .306-.12.3318-.2833l.6257-3.9618c.0194-.1221-.0754-.2327-.1991-.2327z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.9996 15.7014c-.1119.6612-.6366 1.1052-1.3063 1.1052-.3356 0-.6045-.1081-.7771-.3125-.1714-.2025-.2356-.4914-.1814-.8127.1041-.6556.6376-1.1137 1.2969-1.1137.3288 0 .5955.1091.7716.3154.1773.2078.2471.4982.1963.8183zm1.6129-2.2525h-1.1574c-.099 0-.1835.0719-.1991.1701l-.0508.3234-.081-.1171c-.2505-.3637-.8092-.4855-1.367-.4855-1.2785 0-2.3707.9691-2.5833 2.328-.1106.6781.0465 1.3259.431 1.7781.3531.4153.8569.5883 1.4574.5883 1.0308 0 1.6023-.6619 1.6023-.6619l-.0517.3216c-.0194.1222.0751.2328.1991.2328h1.042c.1655 0 .306-.12.3319-.2833l.6257-3.9618c.0193-.1221-.0754-.2327-.1991-.2327z" fill="#fff" fill-opacity=".8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5382 13.4492h-1.1633c-.1112 0-.2153.0551-.2776.1474l-1.6048 2.3632-.6799-2.271c-.0427-.1421-.1736-.2396-.3219-.2396h-1.1433c-.1381 0-.2353.1359-.1907.2664l1.2807 3.7599-1.2047 1.6998c-.0944.1334.0009.3179.1645.3179h1.162c.11 0 .2132-.0539.2761-.1443l3.8683-5.5834c.0926-.1337-.0028-.3163-.1654-.3163z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M38.9765 11.3833l-.9919 6.3107c-.0193.1221.0751.2328.1989.2328h.9977c.1652 0 .306-.1203.3316-.2836l.9781-6.1973c.0193-.1221-.0751-.2328-.1991-.2328h-1.1162c-.0994 0-.1838.072-.1991.1702z" fill="#fff" fill-opacity=".8"></path></svg>
                                </li>
                                <li className="footer__secpymnt__card mx-[8px] h-[30px] w-[47px] mt-0">
                                    <svg width="51" height="30" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.678772" width="50" height="30" rx="2" fill="white" fill-opacity="0.1"></rect>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2822 15.137C35.2957 16.3752 35.2873 17.612 35.2873 18.8476C35.2873 19.1375 35.2534 19.1703 34.9584 19.1703C34.6173 19.1722 34.2749 19.1722 33.9331 19.1703C33.6662 19.1703 33.6361 19.1414 33.6361 18.8797C33.6361 17.6789 33.64 16.4787 33.6323 15.2772C33.6323 15.0766 33.6048 14.8754 33.5683 14.6774C33.5165 14.3913 33.3232 14.2287 33.0473 14.183C32.5462 14.0994 32.0957 14.2589 31.6758 14.5186C31.6201 14.5533 31.5984 14.6787 31.5984 14.7622C31.5926 15.7728 31.5945 16.7834 31.5945 17.7939C31.5945 18.1745 31.5901 18.5538 31.5965 18.9331C31.5997 19.1073 31.5235 19.1742 31.3545 19.1722C30.9763 19.1652 30.5981 19.1703 30.2198 19.169C30.0009 19.1677 29.9408 19.106 29.9408 18.8817C29.9401 16.9704 29.9401 15.0599 29.9408 13.1487C29.9408 12.9474 30.0009 12.8844 30.2019 12.8832C30.543 12.8799 30.8835 12.8806 31.2272 12.8825C31.4435 12.8838 31.4806 12.9243 31.4857 13.1403C31.487 13.2232 31.4947 13.3049 31.4998 13.4367C31.6118 13.3653 31.6771 13.3254 31.7424 13.2817C32.4086 12.8279 33.1485 12.7173 33.9248 12.8555C34.6358 12.9802 35.023 13.4579 35.167 14.1361C35.2393 14.4646 35.2784 14.8027 35.2822 15.137Z" fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8169 14.7194C24.8534 16.1196 24.8464 17.5223 24.8547 18.9244C24.8553 19.1114 24.7875 19.1725 24.5961 19.1738C24.2665 19.1751 23.9376 19.1744 23.6086 19.1738C23.3296 19.1738 23.295 19.1391 23.2809 18.8626C23.2796 18.8324 23.2739 18.8029 23.2662 18.7444C23.0787 18.8491 22.9193 18.9494 22.7516 19.0311C22.166 19.3159 21.5561 19.3422 20.9404 19.1603C20.3862 18.9944 20.047 18.6113 19.9113 18.0488C19.8134 17.6425 19.8051 17.2343 19.8864 16.8299C20.0131 16.2038 20.4336 15.856 21.0185 15.6799C21.5849 15.5076 22.168 15.4883 22.7529 15.4941C23.1715 15.4992 23.1721 15.4954 23.1708 15.0691C23.1708 14.9592 23.1785 14.8461 23.1587 14.7394C23.096 14.3961 22.8668 14.182 22.4892 14.182C21.8569 14.182 21.224 14.209 20.5923 14.245C20.2825 14.2636 20.2416 14.2482 20.2416 13.9339C20.2416 13.7134 20.2454 13.4922 20.2403 13.273C20.2377 13.1502 20.2857 13.066 20.4022 13.0416C21.3833 12.8314 22.3696 12.6861 23.3648 12.9342C24.262 13.156 24.7926 13.7828 24.8169 14.7194ZM23.2099 17.5617C23.1952 17.4157 23.2067 17.2679 23.2067 17.12C23.2067 16.9304 23.2137 16.7401 23.2016 16.5511C23.1984 16.5035 23.1337 16.4206 23.0998 16.4219C22.7184 16.4354 22.335 16.4457 21.9561 16.4926C21.7238 16.5222 21.5536 16.6925 21.5068 16.9252C21.4633 17.1432 21.4505 17.3733 21.4684 17.5964C21.4889 17.8407 21.6643 17.9834 21.9036 18.0245C22.2883 18.0914 22.6505 18.0162 23.0089 17.8767C23.1632 17.8175 23.2291 17.7314 23.2099 17.5617Z" fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1069 15.0652C41.1101 16.3393 41.1088 17.6141 41.1081 18.8883C41.1081 19.1409 41.0768 19.1698 40.8214 19.1698C40.504 19.1718 40.1878 19.1718 39.8704 19.1698C39.5977 19.1698 39.5805 19.1538 39.5664 18.887C39.5651 18.8555 39.5619 18.8253 39.5555 18.7944C39.5542 18.7828 39.5427 18.7758 39.5241 18.7475C39.4845 18.7655 39.448 18.777 39.4192 18.7976C38.9942 19.1158 38.5053 19.2399 37.9862 19.2804C36.959 19.364 36.1737 18.6851 36.1251 17.6514C36.1129 17.3968 36.1065 17.1371 36.1443 16.887C36.2377 16.284 36.6077 15.8835 37.1779 15.7222C37.608 15.6013 38.0592 15.5499 38.504 15.4972C38.7625 15.4657 39.0281 15.4882 39.2905 15.492C39.4057 15.4959 39.4627 15.456 39.4563 15.3352C39.4467 15.1533 39.4633 14.9662 39.4326 14.7862C39.3641 14.3844 39.1376 14.1755 38.7331 14.1768C38.1065 14.1806 37.48 14.2089 36.8528 14.2443C36.5379 14.261 36.4931 14.2359 36.4931 13.9106C36.4931 13.7088 36.4937 13.5063 36.4931 13.3044C36.4925 13.1475 36.5597 13.0601 36.7197 13.0228C37.4486 12.8576 38.1846 12.7683 38.9296 12.8152C39.2413 12.8351 39.5581 12.9039 39.855 13.0035C40.5635 13.2408 40.9545 13.764 41.0685 14.4969C41.0973 14.6859 41.1062 14.8768 41.1069 15.0652ZM39.4947 17.6207C39.487 17.4542 39.4934 17.2896 39.4921 17.125C39.4921 16.9489 39.4889 16.7702 39.4947 16.5928C39.4973 16.4719 39.4557 16.4108 39.3257 16.4166C39.0947 16.4218 38.8611 16.4031 38.6313 16.4211C37.8614 16.4796 37.7219 16.767 37.7123 17.4028C37.7072 17.7769 37.8806 17.9788 38.1769 18.0295C38.5885 18.097 38.9731 18.0115 39.3475 17.845C39.4493 17.7994 39.4992 17.7377 39.4947 17.6207Z" fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6973 10.7129C18.3433 10.7129 17.9901 10.7129 17.6361 10.7129C17.3705 10.7135 17.3456 10.7399 17.3456 11.0099C17.3456 12.3142 17.3456 13.6192 17.3456 14.9236C17.3456 16.2524 17.3456 17.5812 17.3456 18.9112C17.3456 19.1317 17.3833 19.1684 17.5997 19.1697C17.9465 19.1716 18.2941 19.1697 18.6422 19.1697C18.9693 19.1697 18.9993 19.1407 18.9993 18.8167C18.9993 16.5809 18.9993 14.345 18.9993 12.1098C18.9993 11.7421 19 11.375 18.9993 11.0073C18.9987 10.7572 18.9526 10.7135 18.6973 10.7129Z" fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0173 12.808C28.5411 12.8286 28.111 12.979 27.7257 13.2587C27.6733 13.2972 27.6208 13.3326 27.5421 13.3892C27.5357 13.3011 27.5286 13.249 27.5286 13.1963C27.5235 12.9327 27.4774 12.8839 27.2208 12.8839C26.8899 12.8826 26.5622 12.8832 26.2326 12.8832C25.9312 12.8839 25.8813 12.9327 25.8813 13.2342C25.8813 14.0789 25.8813 14.9249 25.8813 15.7697C25.8813 16.7944 25.8806 17.8172 25.8813 18.8387C25.8813 19.1099 25.9408 19.1704 26.1974 19.1704C26.5443 19.1723 26.8931 19.1723 27.2406 19.1704C27.5209 19.1704 27.5657 19.1279 27.5657 18.8374C27.5664 17.479 27.5677 16.1187 27.5632 14.7572C27.5632 14.6228 27.6022 14.5463 27.7251 14.4878C28.1321 14.2956 28.5494 14.1516 29.007 14.1702C29.1747 14.1773 29.256 14.1137 29.2521 13.9356C29.2451 13.6347 29.2464 13.3358 29.2515 13.0356C29.2521 12.8717 29.1792 12.8016 29.0173 12.808Z" fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7456 10.7138C11.4224 10.7118 11.0992 10.7106 10.7753 10.7144C10.4361 10.7196 10.2486 10.9137 10.2486 11.2557C10.2486 12.5176 10.2486 13.7802 10.2486 15.0421C10.2486 16.3233 10.2486 17.6026 10.2486 18.8838C10.2486 19.1082 10.2787 19.1384 10.5027 19.1384C10.8316 19.141 11.1612 19.141 11.4902 19.1384C11.8358 19.1358 12.0092 18.9629 12.0092 18.6177C12.0092 16.0752 12.0092 13.5314 12.0092 10.9896C12.0099 10.7665 11.9632 10.7157 11.7456 10.7138Z" fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3808 16.4804C14.6742 15.7386 13.8051 15.3303 12.8573 15.2358C12.5513 15.2301 12.5488 15.2301 12.5571 15.4621C12.5603 15.5476 12.5769 15.6318 12.5897 15.7167C12.7593 16.8449 13.3085 17.7436 14.2224 18.4154C14.8214 18.8577 15.4992 19.0872 16.2371 19.1566C16.4566 19.1778 16.4937 19.1624 16.472 18.9464C16.3779 18.0053 16.0368 17.1702 15.3808 16.4804Z" fill="white"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2422 10.7349C16.1584 10.7484 16.0713 10.7433 15.9881 10.7561C15.0269 10.9098 14.2109 11.3373 13.5619 12.0695C12.9673 12.7393 12.6371 13.5294 12.559 14.4217C12.5392 14.6544 12.552 14.6551 12.7958 14.6866C13.1305 14.6036 13.4787 14.5529 13.7987 14.4307C15.3968 13.8213 16.271 12.6384 16.4726 10.9413C16.4982 10.7259 16.4624 10.7015 16.2422 10.7349Z" fill="white"></path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}