import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import { TwitterTimelineEmbed,
    }
    from 'react-twitter-embed';

class MainPage extends Component {
    render() {
        return (
            <div className="MainBody-style">
                <div className="split left">
                    <div className="centered">

                        <div className="BlogPostItem">
                            <h1>
                                <a href="http://oldtraffordfaithful.com/man-united-hoping-to-secure-jadon-sancho-on-cut-price-deal-worth-52m-due-to-global-pandemic-report/">Jadon Sancho Transfer</a>
                            </h1>
                            <p><b>  Transfer News</b>     April 23, 2020</p>
                            <img src="http://oldtraffordfaithful.com/wp-content/uploads/2020/03/sanchooo.jpg" alt="Jadon Sancho" />


                            <p>Man United hoping to secure Jadon Sancho on cut-price deal worth £52m due to global pandemic: report</p>
                            <hr />
                        </div>
                        <div className="BlogPostItem">
                            <h1>
                                <a href="http://oldtraffordfaithful.com/man-united-not-looking-to-activate-one-year-contract-extension-in-pogbas-deal-report/">Pogba's Contract Extension</a>
                            </h1>
                            <p><b>Transfer News</b>April 23, 2020</p>
                            <img src="http://oldtraffordfaithful.com/wp-content/uploads/2019/10/paulpogba.jpg" alt="Paul Pogba" />

                            <p>Man United not looking to activate one-year contract extension in Pogba’s deal: report</p>
                            <hr />

                        </div>
                        <div className="BlogPostItem">
                            <h1>
                                <a href="http://oldtraffordfaithful.com/fred-names-james-garner-as-the-man-united-youngster-who-impresses-him-most/">Young Sensation</a>
                            </h1>
                            <p><b> Players  </b>April 23, 2020</p>
                            <img src="http://oldtraffordfaithful.com/wp-content/uploads/2019/10/jamesgarner.jpg" alt="James Garner" />

                            <p>Fred names James Garner as the Man United youngster who impresses him most</p>
                            <hr />

                        </div>
                    </div>
                </div>

                <div className="vertical"></div>

                <div className="split right">

                    <div className="centered">
                        <div className="bloglinks">
                        <h3>Top Blogs of The Month.</h3>
                        <br/>
                        <ul>
                            <li>
                                <a href="http://oldtraffordfaithful.com/man-united-hoping-to-secure-jadon-sancho-on-cut-price-deal-worth-52m-due-to-global-pandemic-report/">Sancho Transfer</a>
                            </li>
                            <li>
                                <a href="http://oldtraffordfaithful.com/man-united-not-looking-to-activate-one-year-contract-extension-in-pogbas-deal-report/">Paul Contract</a>
                            </li>
                            <li>
                                <a href="http://oldtraffordfaithful.com/fred-names-james-garner-as-the-man-united-youngster-who-impresses-him-most/">Young Star</a>
                            </li>
                        </ul>
                        </div>
                    </div>


                    <TwitterTimelineEmbed
                        sourceType="list"
                        ownerScreenName="palafo"
                        slug="breakingnews"
                        options={{height: 800}}
                    />

                </div>
            </div>
        );
    }
}

export default MainPage;