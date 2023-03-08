import React from 'react'
import img1 from "../images/c1.jpg"
import img2 from "../images/c2.jpg"
import img3 from "../images/c3.jpg"
import img4 from "../images/c4.jpg"
import img5 from "../images/c5.jpg"
import img6 from "../images/c6.jpg"
import img7 from "../images/c7.jpg"
import img8 from "../images/c8.jpg"
import img9 from "../images/c9.jpg"
import img10 from "../images/c10.jpg"
import img11 from "../images/c11.jpg"
import img12 from "../images/c12.jpg"
import img13 from "../images/c13.jpg"
import img14 from "../images/c14.jpg"
import img15 from "../images/c15.jpg"
import img16 from "../images/c16.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


function Cards() {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-5 p-5 bg-dark" id='cardstyle'>
            <div className="col pt-3">
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/love-again/ET00352714' className="card-title">Love Again</a>
                        <p className="card-text"><FontAwesomeIcon icon={faStar}/> 9.3/10 2916 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 3m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/the-flash/ET00047401' className="card-title">The Flash</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 8.5/10 1916 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">3h 2m•Horror•U•21 jan,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/revolutionary-road/ET00002556' className="card-title">Jesus Revolution</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 8.4/10 1816 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 13m•Drama•U•24 mar,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/joker/ET00100071' className="card-title">Joker</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 8.3/10 1716 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 33m•Drama,Comedy•U•24 April,2022</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img5} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/iron-man-3-/ET00014683' className="card-title">Iron Man-3</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 8.2/10 1616 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 43m•Drama,Horror•U•24 May,2022</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img6} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/fast-x/ET00122562' className="card-title">Fast-X</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 8.1/10 1516 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 23m•Drama,Romantic•U•24 May,2022</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img7} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/superman-returns/ET00000084' className="card-title">Super Mario</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 8.0/10 1416 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 13m•Comedy•U•24 june,2022</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img8} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/simmba/ET00066720' className="card-title">SISU</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.9/10 1316 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 23m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img9} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/salman-society/ET00077385' className="card-title">Polite Society</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.8/10 1216 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 53m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img10} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/oh-my-darling/ET00352355' className="card-title">Alice Darling</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.7/10 1116 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 23m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img11} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/about-my-father/ET00353562' className="card-title">About My Father</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.6/10 1016 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 13m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img12} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/the-little-mermaid/ET00058086' className="card-title">A Little White Lie</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.5/10 916 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 36m•Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img13} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/the-popes-exorcist/ET00353346' className="card-title">The Pope's Exorist</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.4/10 816 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 35m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img14} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/creed-iii/ET00342714' className="card-title">Creed</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.3/10 716 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 33m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img15} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/alien-covenant/ET00049495' className="card-title">The covenant</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.2/10 616 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 15m•Drama•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
            <div className="col pt-3">
                <div className="card">
                    <img src={img16} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href='https://in.bookmyshow.com/kochi/movies/a-good-day-to-die-hard/ET00013168' className="card-title">A Good Person</a>
                        <p className="card-text"><FontAwesomeIcon icon={faThumbsUp}/> 7.1/10 516 Votes</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">2h 30m•Drama,Romantic•U•24 Feb,2023</small>
                    </div>
                </div>
            </div>
           
          
            
        </div>
    )
}

export default Cards
