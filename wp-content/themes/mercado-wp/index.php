<?php get_header(); ?>
    <body ng-app="MercadoApp">
        <nav class="navbar navbar-default">
          <div class="collapse navbar-collapse">
            <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="<?php bloginfo('url'); ?>"><img src="wp-content/themes/mercado-wp/images/mercado-logo.svg" alt="Latitude Financial Services" /></a>
                </div>
            </div>
        </nav>
<nav class="navbar navbar-default navbar-large">
    <div class="container-fluid">
        <ul class="nav navbar-nav">
            <li class="verticalLine" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<h6>Comms Hub</strong></h6><p>Keep in the loop with all that is happening across Operations and Sales at Latitude</p>">
                <a href="http://homepage.lfs.local/communications" target="_blank" >
                    <img onmouseover="this.src='wp-content/themes/mercado-wp/images/commsyT.svg'" onmouseout="this.src='wp-content/themes/mercado-wp/images/commsyT.svg'" src="wp-content/themes/mercado-wp/images/commsyT.svg" width="40px" alt="Ops & Sales Comms Hub">
                </a>
            </li>
            <li class="verticalLine" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<h6>Our Phonebook</strong></h6><p>Use Our Phonebook to locate contact details for Latitude departments and various external companies we work with</p>">
                <a href="http://homepage.lfs.local/phonebook" target="_blank">
                    <img onmouseover="this.src='wp-content/themes/mercado-wp/images/phonebookyT.svg'" onmouseout="this.src='wp-content/themes/mercado-wp/images/phonebookyT.svg'" src="wp-content/themes/mercado-wp/images/phonebookyT.svg" width="40px" alt="Connecting the dots">
                </a>
            </li>
            <li class="verticalLine" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<h6>Our Products</strong></h6><p>All you need to know and more about our products at Latitude</p>">
                <a href="http://homepage.lfs.local/products/" target="_blank">
                    <img onmouseover="this.src='wp-content/themes/mercado-wp/images/productsyT.svg'" onmouseout="this.src='wp-content/themes/mercado-wp/images/productsyT.svg'" src="wp-content/themes/mercado-wp/images/productsyT.svg" width="40px" alt="Our Products">
                </a>
            </li>
            <li class="verticalLine" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<h6>PhishWatch</strong></h6><p>When something sounds phishy, raise it here</p>">
                <a href="http://mercado.lfs.local/sites/latitude/phishwatch/index.html" target="_blank">
                    <img onmouseover="this.src='wp-content/themes/mercado-wp/images/phishwatchyT.svg'" onmouseout="this.src='wp-content/themes/mercado-wp/images/phishwatchyT.svg'"  src="wp-content/themes/mercado-wp/images/phishwatchyT.svg" width="40px" alt="PhishWatch">
                </a>
            </li>
            <li class="verticalLine" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<h6>Threat Procedure</strong></h6><p>What you should do in the event of a threat</p>">
                <a href="http://mercado.lfs.local/sites/latitude/threat/#/" target="_blank">
                    <img onmouseover="this.src='wp-content/themes/mercado-wp/images/threatyT.svg'" onmouseout="this.src='wp-content/themes/mercado-wp/images/threatyT.svg'" src="wp-content/themes/mercado-wp/images/threatyT.svg" width="40px" alt="Our Threat Procedure">
                </a>
            </li>
            <li class="verticalLine" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<h6>Change Request</strong></h6><p>Request form for communications, P & Ps and changes to intranet content</p>">
                <a href="https://lfscloud.sharepoint.com/sites/lfs/intranetcomms/Lists/Intranet%20PP%20and%20Comms%20Requests/NewForm.aspx?Source=/sites/lfs/intranetcomms" target="_blank">
                    <img onmouseover="this.src='wp-content/themes/mercado-wp/images/changerequestyT.svg'" onmouseout="this.src='wp-content/themes/mercado-wp/images/changerequestyT.svg'" src="wp-content/themes/mercado-wp/images/changerequestyT.svg" width="40px" alt="Change Request">
                </a>
            </li>
            <li class="verticalLine" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<h6>Connecting the dots</strong></h6><p>Our intranet site to keep you connected</p>">
                <a href="." target="_blank">
                    <img onmouseover="this.src='wp-content/themes/mercado-wp/images/intranetyT.svg'" onmouseout="this.src='wp-content/themes/mercado-wp/images/intranetyT.svg'" src="wp-content/themes/mercado-wp/images/intranetyT.svg" width="40px" alt="Change Request">
                </a>
            </li>
        </ul>
    </div>
</nav>
<div class="yellowLine"></div>
        <br>
        <div class="container-fluid">
            <div class="row" id="main-content">
                <div class="col-sm-2" id="sidebar">
                    <ul class="nav nav-pills nav-stacked">
                        <li><a href="" ui-sref="collections">Collections</a></li>
                        <li><a href="" ui-sref="originations">Originations</a></li>
                        <li><a href="" ui-sref="cs-support">Customer Solutions & Support</a></li>
                        <li><a href="" ui-sref="cmt">Complaints Management Team</a></li>
                        <li><a href="" ui-sref="personal-loans">Personal Loans</a></li>
                        <li><a href="" ui-sref="insurance">Insurance</a></li>
                        <li><a href="" ui-sref="fraud">Fraud</a></li>
                    </ul>
                </div>
                <div class="col-sm-10" id="dept-content">
                    <ui-view>
                        <h3 class="heading">Mercado Home</h3>
                        <div class="row"  ng-controller="CommsHubCtrl">
                            <div class="col-lg-12" ng-repeat="comms in response.data">
                              <h6 class="text-right">{{comms.date | date: dd/MM/yyyy}}</h6>
                              <a href="{{comms.link}}"><h4 ng-bind-html="comms.title.rendered" class="comms-title"></h4></a>

                              <h5 ng-bind-html="comms.excerpt.rendered"></h5>

                              <span class="badge" ng-repeat-start="category in comms.categories">
                                  <div class="" ng-show="category === 30">
                                    Business Support NZ
                                  </div>
                                  <div class="" ng-show="category === 14">
                                    Collections AU
                                  </div>
                                  <div class="" ng-show="category === 28">
                                    Collections NZ
                                  </div>
                                  <div class="" ng-show="category === 35">
                                    Complaints Management Team
                                  </div>
                                  <div class="" ng-show="category === 29">
                                    Customer Service NZ
                                  </div>
                                  <div class="" ng-show="category === 16">
                                    Customer Solutions AU
                                  </div>
                                  <div class="" ng-show="category === 15">
                                    Customer Support AU
                                  </div>
                                  <div class="" ng-show="category === 19">
                                    Insurance AU
                                  </div>
                                  <div class="" ng-show="category === 31">
                                    Insurance NZ
                                  </div>
                                  <div class="" ng-show="category === 17">
                                    Originations AU
                                  </div>
                                  <div class="" ng-show="category === 42">
                                    Personal Loans Sales AU
                                  </div>
                                  <div class="" ng-show="category === 32">
                                    Personal Loans NZ
                                  </div>
                              </span> <span ng-repeat-end></span>
                              <hr>
                            </div>
                        </div>
                    </ui-view>
                </div>
            </div>
        </div>
<?php get_footer(); ?>
