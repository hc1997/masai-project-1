import React from 'react';
import axios from "axios";


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: [],
            input_value: "",
            bring: false,
        }
    }
    handleInput = (input_value) => this.setState({
        input_value: input_value.target.value,
        bring: true
    });
    onSubmit = () => {
        axios({
            method: 'get',
            url: 'https://content.guardianapis.com/search',
            params: {
                "api-key": "d3f55193-5bcf-448b-ade0-37d22e405bfe",

                "show-fields": "all"
            }
        })
            .then((response) => {
                console.log(response.data.response.results)
                this.setState({
                    output: response.data.response.results
                })
            })
            .catch((err) => alert(err))
        this.setState({
            bring: true
        })
    }
    search = (e) => {
        this.setState({
            input_value: e.target.value
        });
    }

    render() {
        console.log(this.state.output)

        return (
            <div>
                <div className="jumbotron-fluid bg-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="card col-lg-8 col-sm-5">
                                <h5 className="card-header" style={{ color: "black", fontWeight: "700" }}><h5 className="head" style={{color:"red"}}> INX Media case</h5>SC refuses Chidambaram's plea against dismissal of anticipatory bail</h5>
                                <div className="card-body">
                                    <h5 className="card-title"> August 26, 2019 12:52 IST </h5>
                                   <a href="https://www.thehindu.com/news/national/supreme-court-dismisses-chidambarams-plea-in-cbi-case/article29259051.ece?homepage=true"><img src="news.jpeg" className="img-fluid" alt=""></img></a>
                                    <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>The Supreme Court on Monday refused to entertain Congress leader P. Chidambaram’s plea challenging the dismissal of his anticipatory bail by the Delhi High Court in a corruption case lodged by the CBI in the alleged INX media scam.
                The apex court said his petition has become infructuous as he has already been arrested by the CBI. A Bench comprising Justices R. Banumathi and A.S. Bopanna said Mr. Chidambaram was at liberty to seek remedy in accordance with the law.</p>
                                    {/* <a href="https://www.thehindu.com/news/national/supreme-court-dismisses-chidambarams-plea-in-cbi-case/article29259051.ece?homepage=true" className="btn btn-primary">Source Link</a> */}
                                </div>
                            </div>
                            <div className="card col-lg-4 col-sm-5">
                                <h5 className="card-header" style={{ color: "black", fontWeight: "700" }}><h5 className="head" style={{color:"red"}}> WATCH</h5>| P.V. Sindhu’s journey to victory </h5>
                                <div className="card-body">
                                    <h5 className="card-title"> August 26, 2019 12:52 IST </h5>
                                    <a href="https://www.thehindu.com/sport/watch-pv-sindhus-journey-to-victory/article29259097.ece?homepage=true"><img src="news1.jpeg" className="img-fluid" alt=""></img></a>
                                    <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>P.V. Sindhu became the first Indian to win a Badminton World Championships gold on August 25, 2019.
                                    She beat Nozomi Okuhara of Japan in a lop-sided final held in Switzerland. This was Sindhu’s fifth World Championships medal.
                Sindhu has often credited her parents, P. Vijaya and P. V. Ramana, for her success. Both of whom are former volleyball players. She became world champion on her mother's birthday and dedicated the medal to her.</p>
                                </div>
                            </div>
                            <div className="card col-lg-4 col-sm-5">
                                <h5 className="card-header" style={{ color: "black", fontWeight: "700" }}>Athens police poised to evict refugees from squatted housing projects </h5>
                                <div className="card-body">
                                    <h5 className="card-title">A self-governing community in central Athens which has helped house refugees is threatened by a government crackdown</h5>
                                    <a href="https://www.theguardian.com/cities/2019/aug/26/athens-police-poised-to-evict-refugees-from-squatted-housing-projects"><img src="news3.jpg" className="img-fluid" alt=""></img></a>
                                    <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>It’s just after 5am in the central Athens neighbourhood of Exarcheia. A group of Afghans and Iranians are sitting down together for breakfast in the middle of the street, with a banner that reads “No Pasaran” (“They shall not pass”) strung between the buildings above their heads. They laugh and joke as they help themselves to bread and cheese pies from the communal table.

The public breakfast is outside Notara 26, a self-organised refugee accommodation squat. Since opening in September 2015, at the height of the refugee crisis, it has provided shelter to over 9,000 people.</p>
                                </div>
                            </div>
                            <div className="card col-lg-8 col-sm-5">
                                <h5 className="card-header" style={{ color: "red", fontWeight: "700" }}> EU 'would block trade deal if Britain reneged on bill'</h5>
                                <div className="card-body">
                                    <h5 className="card-title">UK must honour its debts before starting to negotiate trade deal, say Brussels sources</h5>
                                    <a href="https://www.theguardian.com/world/2019/aug/26/eu-would-block-trade-deal-if-britain-reneged-on-brexit-bill"><img src="news4.jpg" className="img-fluid"  alt=""></img></a>
                                    <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>The European Union would refuse to negotiate a trade deal with the UK if the government reneged on the Brexit bill, EU sources have said.

At the G7 summit in Biarritz, Boris Johnson said it was a “simple statement of reality” that the UK would withhold much of the £39bn financial settlement agreed by Theresa May, in the event of a no-deal.

Brussels sources have warned that future trade talks would be blocked until the UK agreed to a settlement.</p>
                                </div>
                            </div>
                            <div className="card col-lg-3 col-sm-5">
                                <h5 className="card-header" style={{ color: "black", fontWeight: "700" }}>Hong Kong protests: dozens arrested as government warns of 'dangerous situation' </h5>
                                <div className="card-body">
                                    <h5 className="card-title">Twelve-year-old among those held after violent clashes in which police fire warning shot</h5>
                                    <a href="https://www.theguardian.com/world/2019/aug/26/hong-kong-protests-dozens-arrested-as-government-warns-of-very-dangerous-situation"><img src="news5.jpg" className="img-fluid" alt=""></img></a>
                                </div>
                            </div>
                            <div className="card col-lg-3 col-sm-5">
                                <h5 className="card-header" style={{ color: "red", fontWeight: "700" }}>Trump suggests 'nuking hurricanes' to stop them hitting America – report</h5>
                                <div className="card-body">
                                    <h5 className="card-title">US president asked more than once about why military could not bomb hurricanes,military should bomb in order to disrupt.</h5>
                                    <a href="https://www.theguardian.com/us-news/2019/aug/26/donald-trump-suggests-nuking-hurricanes-to-stop-them-hitting-america-report"><img src="news6.jpg" className="img-fluid" alt=""></img></a>
                                </div>
                            </div>
                            <div className="card col-lg-3 col-sm-5">
                                <h5 className="card-header" style={{ color: "black", fontWeight: "700" }}>Nestlé plan to take 1.1m gallons of water a day from natural springs sparks outcry</h5>
                                <div className="card-body">
                                    <h5 className="card-title">Opponents fighting to stop the project say the fragile river cannot sustain such a large draw</h5>
                                    <a href="https://www.theguardian.com/business/2019/aug/26/nestle-suwannee-river-ginnie-springs-plan-permit"><img src="news7.jpg" className="img-fluid" alt=""></img></a>
                                </div>
                            </div>
                            <div className="card col-lg-3 col-sm-5">
                                <h5 className="card-header" style={{ color: "red", fontWeight: "700" }}>Shares across Asia fall sharply amid US-Chinese trade tensions </h5>
                                <div className="card-body">
                                    <h5 className="card-title">Investors seek safe havens such as US treasuries and gold as the superpower standoff shows no sign of being resolved</h5>
                                    <a href="https://www.theguardian.com/australia-news/2019/aug/26/australian-share-market-us-chinese-trade-tensions"><img src="news8.jpg" className="img-fluid" alt=""></img></a>
                                </div>
                            </div>
                            <div className="card col-lg-5 col-sm-5">
                                <h5 className="card-header" style={{ color: "black", fontWeight: "700" }}>Nigeria misses chance to transform lives – and must pay $9bn damages</h5>
                                <div className="card-body">
                                    
                                    <h5 className="card-title">UK court ruling over aborted project means country will have to pay one-fifth of its foreign reserves to gas supply company</h5>
                                    <p className="card-text" style={{ fontFamily: "Assistant, sans-serif" }}>Nigeria’s government stands accused of letting down its 201 million residents by failing to complete a gas supply and production agreement that would have transformed their lives.
The accusation is being levied at the federal republic by lawyers representing Process and Industrial Developments Ltd (P&ID), a gas supply and engineering company, following a UK court ruling that paves the way for the seizure of assets belonging to Africa’s richest country. The extraordinary figure represents one-fifth of the country’s declared foreign reserves of $45bn.</p>
<a href="https://www.theguardian.com/global-development/2019/aug/24/nigeria-must-pay-9bn-damages"><img src="news9.jpg" className="img-fluid" alt=""></img></a>
                                </div>
                            </div>
                            <div className="card col-lg-2 col-sm-5">
                                <h5 className="card-header" style={{ color: "red", fontWeight: "700" }}>Pakistan expands ban on plastic bags as inspectors are caught in shop spat</h5>
                                <div className="card-body">
                                Punjab joins regions where polythene bags are illegal and stiff fines take effect in Islamabad amid demands for alternatives.So far there is no date for implementation in Pakistan’s most populous state.Ban bags from October, and last week a ban took effect in Islamabad.
                                <a href="https://www.theguardian.com/global-development/2019/aug/23/pakistan-expands-ban-plastic-bags"><img src="news10.jpg" className="img-fluid" alt=""></img></a>
                                </div>
                            </div>

                            <div className="col">
                            <div className="row">
                                    <div className="card col-lg-12 col-sm-5">
                                        <a className="card-header" href="https://www.theguardian.com/world/2019/aug/23/a-killer-is-always-a-killer-gambia-gripped-by-junglers-testimony" style={{ color: "black", fontWeight: "700" }}>A killer is always a killer’: Gambia gripped by Junglers’ testimony </a>
                                        <div className="card-body">
                                            <img src="news11.jpg" className="img-fluid" style={{ height: "100%", width: "40%" }} alt=""></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card col-lg-12 col-sm-5">
                                        <a className="card-header" href="https://www.theguardian.com/global-development/2019/aug/23/violence-forces-19-million-children-out-of-classes-africa" style={{ color: "black", fontWeight: "700" }}>Violence forces 1.9 million children out of classes in west and central Africa </a>
                                        <div className="card-body">
                                            <img src="news12.jpg" className="img-fluid" style={{ height: "100%", width: "40%" }} alt=""></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card col-lg-12 col-sm-5">
                                        <a className="card-header" href="https://www.theguardian.com/global-development/2019/aug/23/its-not-legal-un-stands-by-as-turkey-deports-vulnerable-syrians" style={{ color: "black", fontWeight: "700" }}>'It's not legal': UN stands by as Turkey deports vulnerable Syrians </a>
                                        <div className="card-body">
                                            <img src="news13.jpg" className="img-fluid" style={{ height: "100%", width: "40%" }} alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Homepage;

