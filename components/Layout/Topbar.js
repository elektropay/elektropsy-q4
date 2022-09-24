import React, { Component } from 'react';
import Link from 'next/link'
import { withRouter } from "react-router";
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
//Import Images
import logo from "../../images/logo_grey.png";

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen : false, 
            navLinks : [
                 { id : 1, title : "Platform", link : "/#", isMegaMenu : true, isOpenSubMenu : false,
                    child : [
                        { title : "Card Processing", link : `/card-processing` },
                        { title : "Omni-Commerce", link : "/omni-commerce" },
                        { title : "Real-Time Payments", link : "/real-time-payments", isNew : true },
                        { title : "Bitcoin Payments", link : "/bitcoin-payments" },
                        { title : "Mobile Payments", link : "/mobile-payments" },
                        { title : "Bank Payments", link : "/bank-payments", isNew : true },
                    ],
                    child2 : [
                        { title : "ElektroPos", link : "/elektropos", isNew : true  },
                        { title : "Tasket", link : "/tasket" },
                        { title : "Marketplace", link : "/marketplace" },
                        { title : "EAuth", link : "/e-auth" },
                        { title : "SugarBiller", link : "/sugar-biller" },
                        { title : "KardIssue", link : "/kard-issue", isNew : true },                       
                    ]
                },
                { id : 2, title : "Features", link : "/#", isMegaMenu : true, isOpenSubMenu : false,
                    child : [
                        { title : "Payment Methods", link : "/payment-method" },
                        { title : "Fraud Prevention", link : "/fraud-prevention" },
                        { title : "Instore Payments", link : "/instore-payments" },
                        { title : "Risk Management", link : "/risk-management", isNew : true  }, 
                    ],
                    child2 : [
                        { title : "Payouts", link : "/payouts" },
                        { title : "Global Reach", link : "/global-reach" },
                        { title : "Analytics Engine", link : "/analytics-engine" },
                        { title : "Serverless Stack", link : "/serverless-stack"},                        
                    ]
                },

                { id : 3, title : "Plans", link : "/plans" },

                { id : 4, title : "Company", link : "/#", isOpenSubMenu : false,
                    child : [
                        { id : 1, title : "Contact Us", link : "/contact-us"},
                        { id : 3, title : "About Us", link : "/about-us"},
                        { id : 4, title : "Our Team", link : "/our-team"},
                        { id : 5, title : "Careers", link : "/careers", isNowHiring : true },
                        { id : 6, title : "Partners", link : "/partners"},
                        ]
                },
             
                { id : 5, title : "Resources", link : "/#", isOpenSubMenu : false,
                child : [
                    { title : "Our Blog", link : "/blog"},
                    { title : "Help & Support", link : "/support"},
                    { title : "Sandbox API", link : "https://sandbox.elektropay.com"},
                    { title : "Documentation", link : "https://docs.elektropay.com"},
                    { title : "Developer Portal", link : "https://developers.elektropay.com"},
                    ]
                },
                   
            ]
         };



        this.toggleLine = this.toggleLine.bind(this);
        this.openBlock.bind(this);
        this.openNestedBlock.bind(this);
    }

    toggleLine() {
        this.setState(prevState => ({  isOpen: !prevState.isOpen }));
    }

    componentDidMount() {
         var matchingMenuItem = null;
         var ul = document.getElementById("top-menu");
         var items = ul.getElementsByTagName("a");
         for (var i = 0; i < items?.length; ++i) {
             if (this.props?.location?.pathname === items[i]?.pathname) {
                 matchingMenuItem = items[i];
                 break;
             }
         }
         if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
         }
     }
 
    activateParentDropdown = (item) => {
          const parent = item.parentElement;
          if (parent) {
              parent.classList.add('active'); // li
              const parent1 = parent.parentElement;
              parent1.classList.add('active'); // li
              if (parent1) {
                  const parent2 = parent1.parentElement;
                  parent2.classList.add('active'); // li
                  if (parent2) {
                    const parent3 = parent2.parentElement;
                    parent3.classList.add('active'); // li
                    if (parent3) {
                        const parent4 = parent3.parentElement;
                        parent4.classList.add('active'); // li
                 }
             }
         }
    }
    }

    openBlock = (level2_id) => {
        //match level 2 id with current clicked id and if id is correct then update status and open level 2 submenu
        this.setState({
            navLinks: this.state.navLinks.map(navLink => (navLink.id === level2_id ? {...navLink, isOpenSubMenu : !navLink.isOpenSubMenu  } : navLink))
          });
    }

    openNestedBlock = (level2_id, level3_id) => {
        var tmpLinks = this.state.navLinks;
        tmpLinks.map((tmpLink) =>
        //Match level 2 id
           tmpLink.id === level2_id ?
                tmpLink.child.map((tmpchild) =>
                    //if level1 id is matched then match level 3 id
                    tmpchild.id === level3_id ?
                        //if id is matched then update status(level 3 sub menu will be open)
                        tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu
                    :
                        tmpchild.isOpenNestedSubMenu = false
                )
            :
                false 
            
        )
        this.setState({navLinks : tmpLinks});
    }

    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky active bg-white">
                <Container>
                          <div className="logo">
                           <Link href="/"><Image src={logo} alt="" className="header_logo" width={180} height={36} ></Image></Link>
                          
                        </div>
                         <div className="buy-button">
                            <a href="https://app.elektropay.com/signup" id="signupButton" className="btn btn-outline-primary mt-3 d-none d-sm-block">Try Its Free </a>
                        </div>
                        <div className="buy-button login-btn-light">
                            <a href="" id="loginButton" className="btn btn-light mt-3 me-2 d-none d-md-block">Login</a>
                        </div>

                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link href="/"  >
                                <a onClick={ this.toggleLine } className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle" }>
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div id="navigation" style={{ display : this.state.isOpen ? "block" : "none" }}>
                            <ul className="navigation-menu pt-1" id="top-menu">
                                {
                                    this.state.navLinks?.map((navLink, key) => 
                                    navLink.child || navLink.child2 ?
                                        <li className="has-submenu" key={key}>
                                            {/* child item(menu Item) - Level 1 */}
                                            <Link href={navLink?.link}><a onClick={(event) => {  event.preventDefault(); this.openBlock(navLink.id) } }>{navLink.title}</a></Link>
                                            
                                                {
                                                    navLink.isMegaMenu ?
                                                    // if menu is mega menu(2 columns grid)
                                                    <ul className={ navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu" }  >
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink?.child.map((item, childKey) =>
                                                                        <li key={childKey}>
                                                                            <Link href={item?.link}><a>{item.title}{item.isNew ? <span className="badge badge-danger rounded ml-2">v2.0</span> : null}</a></Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child2.map((item, childKey) =>
                                                                        <li key={childKey}>
                                                                            <Link href={item.link}><a>{item.title}{item.isNowHiring ? <span className="badge badge-success rounded ml-2">Now Hiring</span> : null}</a></Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                :
                                                    // if menu is not mega menu(1grid)
                                                    <ul  className={ navLink.isOpenSubMenu ? "submenu open" : "submenu" }  >
                                                            {
                                                                navLink.child.map((childArray, childKey) =>
                                                                    childArray.nestedChild ?
                                                                    // sub menu item - Level 2
                                                                        <li className="has-submenu" key={childKey}>
                                                                            <Link href={childArray?.link}> <a onClick={(event) => {  event.preventDefault(); this.openNestedBlock(navLink.id, childArray.id) } }> {childArray.title}{" "}{childArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null }</a></Link>
                                                                            <span className="submenu-arrow"></span>
                                                                            <ul className={ childArray.isOpenNestedSubMenu ? "submenu open" : "submenu" }>
                                                                                {
                                                                                    childArray.nestedChild.map((nestedChildArray, nestedKey) =>
                                                                                        // nested sub menu item - Level 3
                                                                                        <li key={nestedKey}><Link href={nestedChildArray.link}>{nestedChildArray.title}{" "}{nestedChildArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null }</Link></li>
                                                                                    )
                                                                                }
                                                                            </ul>
                                                                        </li>
                                                                    :
                                                                        <li key={childKey}>
                                                                        <Link href={childArray.link}><a>{childArray.title}</a></Link>
                                                                        </li>
                                                                )
                                                            }
                                                    </ul>
                                                }
                                                
                                        </li>
                                    :
                                      <li key={key}>
                                      <Link href={navLink.link}><a>{navLink.title}</a></Link>
                                      </li>
                                    )
                                }
                                <li><Link href="/support" ><a id="supportButton" className="text-secondary mdi-20px profile-icons"><i className="mdi mdi-account rounded-pill p-2 bg-light shadow profile-icons" title="Contact Support +1 800-566-6003"></i></a></Link> </li>    
                            </ul>
                            <div className="buy-menu-btn ml-4">
                                <Link href="/#"><a id="signupButton" target="_blank" className="btn btn-primary d-md-none">Get Started</a></Link>
                            </div>
                        <div className="buy-menu-btn ml-4 mt-2">
                            <Link href="/" id="loginButton"><a  className="btn btn-success d-md-none mr-2">Login</a></Link>
                        </div>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
        );
    }
}

export default Topbar;
