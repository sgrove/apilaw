import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import headerBg from '../../../images/liberty.jpg';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

class Home extends React.Component {
  render() {
    return (
        <div id="home">
          <div className="breakpoint active" id="bp_infinity" data-min-width={1201}>{/* responsive breakpoint node */}
            <div className="clearfix" id="page">{/* column */}
        <div className="position_content" id="page_position_content">
        <Header pageName="home" scrollableHeader={true} heroImage={headerBg}/>
        <div className="clearfix colelem shared_content" id="u304" data-content-guid="u304_content">{/* group */}
        <div className="headlogo grpelem" id="u297">{/* custom html */}
        <i className="fa fa-balance-scale" aria-hidden="true" />
        </div>
        <div className="headlogo rounded-corners grpelem" id="u301">{/* simple frame */}</div>
        </div>
        <div className="headline clearfix colelem shared_content" id="u259-4" data-content-guid="u259-4_content">{/* content */}
        <p>IMMIGRATION LEGAL SERVICES</p>
        </div>
        <div className="headtitle clearfix colelem shared_content" id="u124-4" data-content-guid="u124-4_content">{/* content */}
        <h1>API Law Office</h1>
        </div>
        <div className="clearfix colelem shared_content" id="u325" data-content-guid="u325_content">{/* group */}
        <div className="grpelem" id="u312">{/* simple frame */}</div>
        <div className="grpelem" id="u322" data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')" data-mu-ie-matrix-dx={-3} data-mu-ie-matrix-dy={-3}>{/* simple frame */}</div>
        </div>
        <div className="year clearfix colelem shared_content" id="u307-4" data-content-guid="u307-4_content">{/* content */}
        <p>Since 1975</p>
        </div>
        <div className="clearfix colelem shared_content" id="pu447" data-content-guid="pu447_content" style={{marginTop: "-22px"}}>{/* group */}
        <div className="browser_width grpelem shared_content" id="u447-bw" data-content-guid="u447-bw_content">
        <div id="u447">{/* simple frame */}</div>
        </div>
        <div className="browser_width grpelem" id="u183-bw">
        <div className="museBGSize rgba-background" id="u183">{/* group */}
        <div className="clearfix" id="u183_align_to_page" style={{width: "900px"}}>
        <div className="clearfix grpelem shared_content" id="u372" data-content-guid="u372_content">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u328-7">{/* content */}
        <p id="u328-2">CORPORATE &amp; COMMERCIAL LAW</p>
        <p id="u328-5"><span id="u328-3">​</span><span className="actAsInlineDiv normal_text" id="u360">{/* content */}<span className="actAsDiv clearfix excludeFromNormalFlow" id="u354">{/* group */}<a className="nonblock nontext actAsDiv transition clearfix grpelem" id="u356-4" href="features.html">{/* content */}<span className="actAsPara">Learn More &gt;</span></a><a className="nonblock nontext actAsDiv grpelem" id="u355" href="features.html">{/* simple frame */}</a></span></span><span /></p>
        </div>
        <div className="grpelem" id="u369" data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')" data-mu-ie-matrix-dx={-3} data-mu-ie-matrix-dy={-3}>{/* simple frame */}</div>
        </div>
        <div className="clearfix grpelem shared_content" id="u618" data-content-guid="u618_content">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u621-9">{/* content */}
        <p id="u621-2">SOCIAL SECURITY</p>
        <p id="u621-4">&nbsp;LAW</p>
        <p id="u621-7"><span id="u621-5">​</span><span className="actAsInlineDiv normal_text" id="u622">{/* content */}<span className="actAsDiv clearfix excludeFromNormalFlow" id="u623">{/* group */}<a className="nonblock nontext actAsDiv transition clearfix grpelem" id="u624-4" href="features.html">{/* content */}<span className="actAsPara">Learn More &gt;</span></a><a className="nonblock nontext actAsDiv grpelem" id="u625" href="features.html">{/* simple frame */}</a></span></span><span /></p>
        </div>
        <div className="grpelem" id="u620" data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')" data-mu-ie-matrix-dx={-3} data-mu-ie-matrix-dy={-3}>{/* simple frame */}</div>
        </div>
        <div className="clearfix grpelem shared_content" id="u642" data-content-guid="u642_content">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u643-8">{/* content */}
        <p id="u643-2">BANKING &amp; FINANCE</p>
        <p id="u643-3">&nbsp;</p>
        <p id="u643-6"><span id="u643-4">​</span><span className="actAsInlineDiv normal_text" id="u644">{/* content */}<span className="actAsDiv clearfix excludeFromNormalFlow" id="u645">{/* group */}<a className="nonblock nontext actAsDiv transition clearfix grpelem" id="u647-4" href="features.html">{/* content */}<span className="actAsPara">Learn More &gt;</span></a><a className="nonblock nontext actAsDiv grpelem" id="u646" href="features.html">{/* simple frame */}</a></span></span></p>
        </div>
        <div className="grpelem" id="u649" data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')" data-mu-ie-matrix-dx={-3} data-mu-ie-matrix-dy={-3}>{/* simple frame */}</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem shared_content" id="u2171-bw" data-content-guid="u2171-bw_content">
        <div id="u2171">{/* column */}
        <div className="clearfix" id="u2171_align_to_page">
        <div className="clearfix colelem shared_content" id="pu709-4" data-content-guid="pu709-4_content">{/* group */}
        <div className="clearfix grpelem" id="u709-4">{/* content */}
        <p>About Us</p>
        </div>
        <div className="whoweare clearfix grpelem shared_content" id="u729-4" data-content-guid="u729-4_content">{/* content */}
        <h2>-Who We Are-</h2>
        </div>
        </div>
        <div className="clearfix colelem" id="pu715-15">{/* group */}
        <div className="history clearfix grpelem shared_content" id="u715-15" data-content-guid="u715-15_content">{/* content */}
        <p id="u715-2">Our History</p>
        <p id="u715-5"><span id="u715-3">​</span><span className="actAsInlineDiv normal_text" id="u741">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u739">{/* simple frame */}</span></span></p>
        <p id="u715-7">Vivamus ante est, tempus eget suscipit sit amet, laoreet a dui. Fusce aliquet arcu eget sapien varius fringilla. Suspendisse porttitor efficitur facilisis. Quisque a condimentum justo. Donec sed tristique augue. In hac habitasse platea dictumst.</p>
        <p id="u715-8">&nbsp;</p>
        <p id="u715-10">Nam id enim eleifend turpis efficitur vestibulum. Donec placerat libero vitae sem placerat pellentesque. Vivamus mauris tellus, tristique nec rhoncus ac, pulvinar vel lectus. Mauris eleifend ante ut rutrum rhoncus.</p>
        <p id="u715-11">&nbsp;</p>
        <p id="u715-13">John Dowson</p>
        </div>
        <div className="historyimage museBGSize grpelem shared_content" id="u718" data-content-guid="u718_content">{/* simple frame */}</div>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem" id="pu733">{/* group */}
        <div className="browser_width grpelem shared_content" id="u733-bw" data-content-guid="u733-bw_content">
        <div id="u733">{/* simple frame */}</div>
        </div>
        <form className="form-grp clearfix grpelem" id="widgetu745" method="post" encType="multipart/form-data" action="scripts/form-u745.php">{/* none box */}
        <div className="fld-grp clearfix grpelem" id="widgetu748" data-required="true">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem" id="u749-4">{/* content */}<input className="wrapped-input" type="text" spellCheck="false" id="widgetu748_input" name="custom_U748" tabIndex={1} /><label className="wrapped-input fld-prompt" id="widgetu748_prompt" htmlFor="widgetu748_input"><span className="actAsPara shared_content" data-content-guid="widgetu748_prompt_0_content">Enter Name</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem" id="widgetu754" data-required="true" data-type="email">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem" id="u755-4">{/* content */}<input className="wrapped-input" type="email" spellCheck="false" id="widgetu754_input" name="Email" tabIndex={2} /><label className="wrapped-input fld-prompt" id="widgetu754_prompt" htmlFor="widgetu754_input"><span className="actAsPara shared_content" data-content-guid="widgetu754_prompt_0_content">Enter Email</span></label></span>
        </div>
        <div className="clearfix grpelem" id="u746-4">{/* content */}
        <p className="shared_content" data-content-guid="u746-4_0_content">Submitting Form...</p>
        </div>
        <div className="clearfix grpelem" id="u752-4">{/* content */}
        <p className="shared_content" data-content-guid="u752-4_0_content">The server encountered an error.</p>
        </div>
        <div className="clearfix grpelem" id="u747-4">{/* content */}
        <p className="shared_content" data-content-guid="u747-4_0_content">Form received.</p>
        </div>
        <input className="submit-btn NoWrap grpelem" id="u753-17" type="submit" value="" tabIndex={4} />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem" id="widgetu758" data-required="false">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem" id="u759-4">{/* content */}<textarea className="wrapped-input" id="widgetu758_input" name="custom_U758" tabIndex={3} defaultValue={""} /><label className="wrapped-input fld-prompt" id="widgetu758_prompt" htmlFor="widgetu758_input"><span className="actAsPara shared_content" data-content-guid="widgetu758_prompt_0_content">Enter Your Message</span></label></span>
        </div>
        </form>
        </div>
        <div className="clearfix colelem shared_content" id="pu799" data-content-guid="pu799_content">{/* group */}
        <div className="browser_width grpelem" id="u799-bw">
        <div id="u799">{/* simple frame */}</div>
        </div>
        <div className="browser_width grpelem" id="u802-bw">
        <div className="museBGSize" id="u802">{/* group */}
        <Fade duration={500} up>
        <div className="clearfix" id="u802_align_to_page">
        <div className="experience clearfix grpelem" id="u821-6">{/* content */}
        <p id="u821-2">35 Years of Expirience</p>
        <p id="u821-4">Vestibulum ultrices id ipsum in lacinia. Nunc diam nibh, tempus sed nunc et, ultrices facilisis velit. Morbi cursus ipsum a arcu ultricies tempor.</p>
        </div>
        </div>
        </Fade>
        </div>
        </div>
        </div>
        <div className="browser_width colelem shared_content" id="u860-bw" data-content-guid="u860-bw_content">
        <div id="u860">{/* column */}
        <div className="clearfix" id="u860_align_to_page">
        <div className="clearfix colelem shared_content" id="pu866-4" data-content-guid="pu866-4_content">{/* group */}
        <div className="clearfix grpelem" id="u866-4">{/* content */}
        <p>Practice Area</p>
        </div>
        <div className="whatwedo clearfix grpelem shared_content" id="u869-4" data-content-guid="u869-4_content">{/* content */}
        <h2>-What We Do-</h2>
        </div>
        </div>
        <div className="clearfix colelem" id="u9964">{/* group */}
        <div className="clearfix grpelem" id="pu875-12">{/* column */}
        <div className="transition shadow clearfix colelem shared_content" id="u875-12" data-content-guid="u875-12_content">{/* content */}
        <p id="u875-3"><span id="u875">​</span><span className="actAsInlineDiv normal_text" id="u894">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u891">{/* custom html */}<i className="fa fa-university" aria-hidden="true" /></span></span></p>
        <p id="u875-5"><span id="u875-4">CORPORATE LAW</span></p>
        <p id="u875-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u875-10"><span id="u875-8">​</span><span className="actAsInlineDiv normal_text" id="u883">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u881-4">{/* content */}<span className="actAsPara" id="u881-2">READ MORE</span></span></span></p>
        </div>
        <div className="transition shadow clearfix colelem shared_content" id="u1001-12" data-content-guid="u1001-12_content">{/* content */}
        <p id="u1001-3"><span id="u1001">​</span><span className="actAsInlineDiv normal_text" id="u1968">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1965">{/* custom html */}<i className="fa fa-handshake-o" aria-hidden="true" /></span></span><span /></p>
        <p id="u1001-5"><span id="u1001-4">FAMILY LAW</span></p>
        <p id="u1001-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u1001-10"><span id="u1001-8">​</span><span className="actAsInlineDiv normal_text" id="u1004">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u1005-4">{/* content */}<span className="actAsPara" id="u1005-2">READ MORE</span></span></span></p>
        </div>
        </div>
        <div className="clearfix grpelem" id="pu950-12">{/* column */}
        <div className="transition shadow clearfix colelem shared_content" id="u950-12" data-content-guid="u950-12_content">{/* content */}
        <p id="u950-3"><span id="u950">​</span><span className="actAsInlineDiv normal_text" id="u1915">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1912">{/* custom html */}<i className="fa fa-money" aria-hidden="true" /></span></span><span /></p>
        <p id="u950-5"><span id="u950-4">BUSINESS TRANSACTION</span></p>
        <p id="u950-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u950-10"><span id="u950-8">​</span><span className="actAsInlineDiv normal_text" id="u953">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u954-4">{/* content */}<span className="actAsPara" id="u954-2">READ MORE</span></span></span></p>
        </div>
        <div className="transition shadow clearfix colelem shared_content" id="u1018-12" data-content-guid="u1018-12_content">{/* content */}
        <p id="u1018-3"><span id="u1018">​</span><span className="actAsInlineDiv normal_text" id="u1951">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1948">{/* custom html */}<i className="fa fa-globe" aria-hidden="true" /></span></span><span /></p>
        <p id="u1018-5"><span id="u1018-4">&nbsp;COMPETITION LAW</span></p>
        <p id="u1018-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u1018-10"><span id="u1018-8">​</span><span className="actAsInlineDiv normal_text" id="u1021">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u1022-4">{/* content */}<span className="actAsPara" id="u1022-2">READ MORE</span></span></span></p>
        </div>
        </div>
        <div className="clearfix grpelem shared_content" id="pu967-12" data-content-guid="pu967-12_content">{/* column */}
        <div className="transition shadow clearfix colelem shared_content" id="u967-12" data-content-guid="u967-12_content">{/* content */}
        <p id="u967-3"><span id="u967">​</span><span className="actAsInlineDiv normal_text" id="u1927">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1924">{/* custom html */}<i className="fa fa-diamond" aria-hidden="true" /></span></span><span /></p>
        <p id="u967-5"><span id="u967-4">BANKING AND FINANCE</span></p>
        <p id="u967-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u967-10"><span id="u967-8">​</span><span className="actAsInlineDiv normal_text" id="u970">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u971-4">{/* content */}<span className="actAsPara" id="u971-2">READ MORE</span></span></span></p>
        </div>
        <div className="transition shadow clearfix colelem shared_content" id="u1035-12" data-content-guid="u1035-12_content">{/* content */}
        <p id="u1035-3"><span id="u1035">​</span><span className="actAsInlineDiv normal_text" id="u1980">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1977">{/* custom html */}<i className="fa fa-truck" aria-hidden="true" /></span></span><span /></p>
        <p id="u1035-5"><span id="u1035-4">TRANSPORT LAW</span></p>
        <p id="u1035-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u1035-10"><span id="u1035-8">​</span><span className="actAsInlineDiv normal_text" id="u1038">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u1039-4">{/* content */}<span className="actAsPara" id="u1039-2">READ MORE</span></span></span></p>
        </div>
        </div>
        <div className="clearfix grpelem" id="pu984-12">{/* column */}
        <div className="transition shadow clearfix colelem shared_content" id="u984-12" data-content-guid="u984-12_content">{/* content */}
        <p id="u984-3"><span id="u984">​</span><span className="actAsInlineDiv normal_text" id="u1939">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1936">{/* custom html */}<i className="fa fa-users" aria-hidden="true" /></span></span><span /></p>
        <p id="u984-5"><span id="u984-4">INTELLECTUAL PROPERTY</span></p>
        <p id="u984-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u984-10"><span id="u984-8">​</span><span className="actAsInlineDiv normal_text" id="u987">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u988-4">{/* content */}<span className="actAsPara" id="u988-2">READ MORE</span></span></span></p>
        </div>
        <div className="transition shadow clearfix colelem shared_content" id="u1052-12" data-content-guid="u1052-12_content">{/* content */}
        <p id="u1052-3"><span id="u1052">​</span><span className="actAsInlineDiv normal_text" id="u1992">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1989">{/* custom html */}<i className="fa fa-gavel" aria-hidden="true" /></span></span><span /></p>
        <p id="u1052-5"><span id="u1052-4">CRIMINAL LAW</span></p>
        <p id="u1052-7">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        <p id="u1052-10"><span id="u1052-8">​</span><span className="actAsInlineDiv normal_text" id="u1055">{/* content */}<span className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow" id="u1056-4">{/* content */}<span className="actAsPara" id="u1056-2">READ MORE</span></span></span></p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem" id="pu1088">{/* group */}
        <div className="browser_width grpelem shared_content" id="u1088-bw" data-content-guid="u1088-bw_content">
        <div id="u1088">{/* column */}
        <div className="clearfix" id="u1088_align_to_page">
        <div className="clearfix colelem shared_content" id="pu1113-4" data-content-guid="pu1113-4_content">{/* group */}
        <div className="clearfix grpelem" id="u1113-4">{/* content */}
        <p>Performance</p>
        </div>
        <div className="whychooseus clearfix grpelem shared_content" id="u1116-4" data-content-guid="u1116-4_content">{/* content */}
        <h2>-Why Choose Us-</h2>
        </div>
        </div>
        <div className="clearfix colelem" id="pu1119">{/* group */}
        <div className="performanceimage museBGSize grpelem shared_content" id="u1119" data-content-guid="u1119_content">{/* simple frame */}</div>
        <div className="performance clearfix grpelem shared_content" id="u1130-21" data-content-guid="u1130-21_content">{/* content */}
        <p id="u1130-2">High Quality Performance</p>
        <p id="u1130-5"><span id="u1130-3">​</span><span className="actAsInlineDiv normal_text" id="u1131">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1132">{/* simple frame */}</span></span></p>
        <p id="u1130-7">Vivamus ante est, tempus eget suscipit sit amet, laoreet a dui. Fusce aliquet arcu eget sapien varius fringilla. Suspendisse porttitor efficitur facilisis. Quisque a condimentum justo. Donec sed tristique augue. In hac habitasse platea dictumst.</p>
        <p id="u1130-8">&nbsp;</p>
        <p id="u1130-10">Nam id enim eleifend turpis efficitur vestibulum.</p>
        <p id="u1130-11">&nbsp;</p>
        <p id="u1130-13">Donec placerat libero vitae sem placerat pellentesque.</p>
        <p id="u1130-14">&nbsp;</p>
        <p id="u1130-16">Vivamus mauris tellus, tristique nec rhoncus</p>
        <p id="u1130-17">&nbsp;</p>
        <p id="u1130-18">&nbsp;</p>
        <p id="u1130-19">&nbsp;</p>
        </div>
        <a className="nonblock nontext transition clearfix grpelem shared_content" id="u1232-4" href="attorneys.html" data-content-guid="u1232-4_content">{/* content */}<p id="u1232-2">Meet Our Team</p></a>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width grpelem shared_content" id="u1210-bw" data-content-guid="u1210-bw_content">
        <div id="u1210">{/* simple frame */}</div>
        </div>
        <div className="browser_width grpelem shared_content" id="u1213-bw" data-content-guid="u1213-bw_content">
        <div className="museBGSize" id="u1213">{/* group */}
        <div className="clearfix" id="u1213_align_to_page">
        <div className="rgba-background chart1 transition clearfix grpelem shared_content" id="u1139-6" data-content-guid="u1139-6_content">{/* content */}
        <p id="u1139-2">1200</p>
        <p id="u1139-4">CASES</p>
        </div>
        <div className="rgba-background chart2 transition clearfix grpelem shared_content" id="u1145-6" data-content-guid="u1145-6_content">{/* content */}
        <p id="u1145-2">678</p>
        <p id="u1145-4">CASE STUDIES</p>
        </div>
        <div className="rgba-background chart3 transition clearfix grpelem shared_content" id="u1142-6" data-content-guid="u1142-6_content">{/* content */}
        <p id="u1142-2">790</p>
        <p id="u1142-4">CLIENTS</p>
        </div>
        <div className="rgba-background chart4 transition clearfix grpelem shared_content" id="u1148-6" data-content-guid="u1148-6_content">{/* content */}
        <p id="u1148-2">3456</p>
        <p id="u1148-4">SOLVED CASES</p>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width grpelem shared_content" id="u1167-bw" data-content-guid="u1167-bw_content">
        <div id="u1167">{/* simple frame */}</div>
        </div>
        <div className="browser_width grpelem shared_content" id="u1170-bw" data-content-guid="u1170-bw_content">
        <div className="museBGSize" id="u1170">{/* group */}
        <div className="clearfix" id="u1170_align_to_page">
        <div className="clearfix grpelem" id="u1243-12">{/* content */}
        <p id="u1243-2">Free Case Evaluation</p>
        <p id="u1243-5"><span id="u1243-3">​</span><span className="actAsInlineDiv normal_text" id="u1244">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1245">{/* simple frame */}</span></span></p>
        <p id="u1243-7">Vivamus ante est, tempus eget suscipit sit amet, laoreet a dui. Fusce aliquet arcu eget sapien varius fringilla. Suspendisse porttitor efficitur facilisis. Quisque a condimentum justo. Donec sed tristique augue. In hac habitasse platea dictumst.</p>
        <p id="u1243-8">&nbsp;</p>
        <p id="u1243-10">Etiam commodo mollis felis hendrerit auctor. Mauris eu urna bibendum tortor molestie tincidunt</p>
        </div>
        </div>
        </div>
        </div>
        <form className="form-grp clearfix grpelem" id="widgetu1252" method="post" encType="multipart/form-data" action="scripts/form-u1252.php">{/* none box */}
        <div className="fld-grp clearfix grpelem" id="widgetu1271" data-required="true">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem" id="u1272-4">{/* content */}<input className="wrapped-input" type="text" spellCheck="false" id="widgetu1271_input" name="custom_U1271" tabIndex={5} /><label className="wrapped-input fld-prompt" id="widgetu1271_prompt" htmlFor="widgetu1271_input"><span className="actAsPara shared_content" data-content-guid="widgetu1271_prompt_0_content">Enter Name</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem" id="widgetu1288" data-required="true" data-type="email">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem" id="u1290-4">{/* content */}<input className="wrapped-input" type="email" spellCheck="false" id="widgetu1288_input" name="Email" tabIndex={6} /><label className="wrapped-input fld-prompt" id="widgetu1288_prompt" htmlFor="widgetu1288_input"><span className="actAsPara shared_content" data-content-guid="widgetu1288_prompt_0_content">Enter Email</span></label></span>
        </div>
        <div className="clearfix grpelem" id="u1261-4">{/* content */}
        <p className="shared_content" data-content-guid="u1261-4_0_content">Submitting Form...</p>
        </div>
        <div className="clearfix grpelem" id="u1287-4">{/* content */}
        <p className="shared_content" data-content-guid="u1287-4_0_content">The server encountered an error.</p>
        </div>
        <div className="clearfix grpelem" id="u1292-4">{/* content */}
        <p className="shared_content" data-content-guid="u1292-4_0_content">Form received.</p>
        </div>
        <input className="submit-btn NoWrap grpelem" id="u1270-17" type="submit" value="" tabIndex={9} />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem" id="widgetu1279" data-required="true">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem" id="u1282-4">{/* content */}<textarea className="wrapped-input" id="widgetu1279_input" name="custom_U1279" tabIndex={8} defaultValue={""} /><label className="wrapped-input fld-prompt" id="widgetu1279_prompt" htmlFor="widgetu1279_input"><span className="actAsPara shared_content" data-content-guid="widgetu1279_prompt_0_content">Enter Your Message</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem" id="widgetu1436" data-required="true">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem" id="u1439-4">{/* content */}<input className="wrapped-input" type="tel" spellCheck="false" id="widgetu1436_input" name="custom_U1436" tabIndex={7} /><label className="wrapped-input fld-prompt" id="widgetu1436_prompt" htmlFor="widgetu1436_input"><span className="actAsPara shared_content" data-content-guid="widgetu1436_prompt_0_content">Enter Phone Number</span></label></span>
        </div>
        </form>
        <a className="anchor_item grpelem shared_content" id="news" data-content-guid="news_content" />
        </div>
        <div className="clearfix colelem" id="pu1467">{/* group */}
        <div className="browser_width grpelem shared_content" id="u1467-bw" data-content-guid="u1467-bw_content">
        <div id="u1467">{/* group */}
        <div className="clearfix" id="u1467_align_to_page">
        <div className="clearfix grpelem" id="u1470-4">{/* content */}
        <p>News</p>
        </div>
        <div className="news clearfix grpelem shared_content" id="u1473-4" data-content-guid="u1473-4_content">{/* content */}
        <p>-Latest Cases Solved-</p>
        </div>
        </div>
        </div>
        </div>
        <div className="PamphletWidget clearfix grpelem" id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem" id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element" id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element" id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor" id="u1768popup">
        <div className="ContainerGroup clearfix" id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem" id="u1770">{/* group */}
        <div className="clearfix grpelem shared_content" id="u1686" data-content-guid="u1686_content">{/* group */}
        <div className="clearfix grpelem shared_content" id="u1695" data-content-guid="u1695_content">{/* group */}
        <div className="clearfix grpelem" id="u1699">{/* column */}
        <div className="museBGSize transition shadow rgba-background clearfix colelem" id="u1701">{/* group */}
        <div className="clearfix grpelem" id="u1702-6">{/* content */}
        <p id="u1702-2">20</p>
        <p id="u1702-4">APR</p>
        </div>
        </div>
        <div className="clearfix colelem" id="u1700-9">{/* content */}
        <p id="u1700-2"><span id="u1700">The Case Thomas Grow Successfully Closed</span></p>
        <p id="u1700-4"><span id="u1700-3">Posted by Admin</span></p>
        <p id="u1700-5">&nbsp;</p>
        <p id="u1700-7">Proin arcu justo, dictum at quam vitae, malesuada viverra ex. Phasellus congue rutrum diam, ut tristique felis commodo et. Ut ac erat quis augue congue dignissim. Donec condimentum sapien in ligula porta, sed mollis lacus ultricies.</p>
        </div>
        </div>
        <div className="clearfix grpelem" id="u1696">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u1697">{/* group */}
        <div className="grpelem" id="u1698">{/* custom html */}
        <i className="fa fa-university" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix grpelem shared_content" id="u1703" data-content-guid="u1703_content">{/* group */}
        <div className="clearfix grpelem" id="u1704">{/* column */}
        <div className="museBGSize transition shadow rgba-background clearfix colelem" id="u1705">{/* group */}
        <div className="clearfix grpelem" id="u1706-6">{/* content */}
        <p id="u1706-2">05</p>
        <p id="u1706-4">AUG</p>
        </div>
        </div>
        <div className="clearfix colelem" id="u1707-9">{/* content */}
        <p id="u1707-2"><span id="u1707">The Case Thomas Grow Successfully Closed</span></p>
        <p id="u1707-4"><span id="u1707-3">Posted by Admin</span></p>
        <p id="u1707-5">&nbsp;</p>
        <p id="u1707-7">&nbsp;Etiam aliquet odio in enim pulvinar molestie. Nullam vel odio dictum, viverra est quis, suscipit dui. Cras tellus augue, elementum eu ornare eget, eleifend quis enim.</p>
        </div>
        </div>
        <div className="clearfix grpelem" id="u1708">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u1710">{/* group */}
        <div className="grpelem" id="u1709">{/* custom html */}
        <i className="fa fa-university" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix grpelem shared_content" id="u1687" data-content-guid="u1687_content">{/* group */}
        <div className="clearfix grpelem" id="u1688">{/* column */}
        <div className="museBGSize transition shadow rgba-background clearfix colelem" id="u1691">{/* group */}
        <div className="clearfix grpelem" id="u1690-6">{/* content */}
        <p id="u1690-2">18</p>
        <p id="u1690-4">DEC</p>
        </div>
        </div>
        <div className="clearfix colelem" id="u1689-9">{/* content */}
        <p id="u1689-2"><span id="u1689">The Case Thomas Grow Successfully Closed</span></p>
        <p id="u1689-4"><span id="u1689-3">Posted by Admin</span></p>
        <p id="u1689-5">&nbsp;</p>
        <p id="u1689-7">&nbsp;Cras viverra posuere tortor, at condimentum elit. Donec a neque tristique, vestibulum lorem vitae, volutpat leo. Integer lorem mi, sollicitudin in nunc a, bibendum maximus purus. Vivamus placerat facilisis</p>
        </div>
        </div>
        <div className="clearfix grpelem" id="u1692">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u1694">{/* group */}
        <div className="grpelem" id="u1693">{/* custom html */}
        <i className="fa fa-university" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="Container invi clearfix grpelem" id="u1821">{/* group */}
        <div className="clearfix grpelem shared_content" id="u1683" data-content-guid="u1683_content">{/* group */}
        <div className="clearfix grpelem shared_content" id="u1554" data-content-guid="u1554_content">{/* group */}
        <div className="clearfix grpelem" id="u1498">{/* column */}
        <div className="museBGSize transition shadow rgba-background clearfix colelem" id="u1476">{/* group */}
        <div className="clearfix grpelem" id="u1490-6">{/* content */}
        <p id="u1490-2">20</p>
        <p id="u1490-4">APR</p>
        </div>
        </div>
        <div className="clearfix colelem" id="u1495-9">{/* content */}
        <p id="u1495-2"><span id="u1495">The Case Thomas Grow Successfully Closed</span></p>
        <p id="u1495-4"><span id="u1495-3">Posted by Admin</span></p>
        <p id="u1495-5">&nbsp;</p>
        <p id="u1495-7">Proin arcu justo, dictum at quam vitae, malesuada viverra ex. Phasellus congue rutrum diam, ut tristique felis commodo et. Ut ac erat quis augue congue dignissim. Donec condimentum sapien in ligula porta, sed mollis lacus ultricies.</p>
        </div>
        </div>
        <div className="clearfix grpelem" id="u1551">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u1541">{/* group */}
        <div className="grpelem" id="u1544">{/* custom html */}
        <i className="fa fa-university" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix grpelem shared_content" id="u1557" data-content-guid="u1557_content">{/* group */}
        <div className="clearfix grpelem" id="u1561">{/* column */}
        <div className="museBGSize transition shadow rgba-background clearfix colelem" id="u1563">{/* group */}
        <div className="clearfix grpelem" id="u1564-6">{/* content */}
        <p id="u1564-2">05</p>
        <p id="u1564-4">AUG</p>
        </div>
        </div>
        <div className="clearfix colelem" id="u1562-9">{/* content */}
        <p id="u1562-2"><span id="u1562">The Case Thomas Grow Successfully Closed</span></p>
        <p id="u1562-4"><span id="u1562-3">Posted by Admin</span></p>
        <p id="u1562-5">&nbsp;</p>
        <p id="u1562-7">&nbsp;Etiam aliquet odio in enim pulvinar molestie. Nullam vel odio dictum, viverra est quis, suscipit dui. Cras tellus augue, elementum eu ornare eget, eleifend quis enim.</p>
        </div>
        </div>
        <div className="clearfix grpelem" id="u1558">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u1559">{/* group */}
        <div className="grpelem" id="u1560">{/* custom html */}
        <i className="fa fa-university" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix grpelem shared_content" id="u1591" data-content-guid="u1591_content">{/* group */}
        <div className="clearfix grpelem" id="u1595">{/* column */}
        <div className="museBGSize transition shadow rgba-background clearfix colelem" id="u1596">{/* group */}
        <div className="clearfix grpelem" id="u1597-6">{/* content */}
        <p id="u1597-2">18</p>
        <p id="u1597-4">DEC</p>
        </div>
        </div>
        <div className="clearfix colelem" id="u1598-9">{/* content */}
        <p id="u1598-2"><span id="u1598">The Case Thomas Grow Successfully Closed</span></p>
        <p id="u1598-4"><span id="u1598-3">Posted by Admin</span></p>
        <p id="u1598-5">&nbsp;</p>
        <p id="u1598-7">&nbsp;Cras viverra posuere tortor, at condimentum elit. Donec a neque tristique, vestibulum lorem vitae, volutpat leo. Integer lorem mi, sollicitudin in nunc a, bibendum maximus purus. Vivamus placerat facilisis</p>
        </div>
        </div>
        <div className="clearfix grpelem" id="u1592">{/* group */}
        <div className="rounded-corners clearfix grpelem" id="u1594">{/* group */}
        <div className="grpelem" id="u1593">{/* custom html */}
        <i className="fa fa-university" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix" id="u1776">{/* group */}
        <div className="transition clearfix grpelem shared_content" id="u1777-4" data-content-guid="u1777-4_content">{/* content */}
        <p id="u1777-2">&lt;</p>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix" id="u1778">{/* group */}
        <div className="transition clearfix grpelem shared_content" id="u1779-4" data-content-guid="u1779-4_content">{/* content */}
        <p id="u1779-2">&gt;</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem" id="u1625-bw">
        <div id="u1625">{/* column */}
        <div className="clearfix" id="u1625_align_to_page">
        <div className="ourclients clearfix colelem shared_content" id="u1838-9" data-content-guid="u1838-9_content">{/* content */}
        <p id="u1838-2">Our Clients</p>
        <p id="u1838-5"><span id="u1838-3">​</span><span className="actAsInlineDiv normal_text" id="u1839">{/* content */}<span className="actAsDiv excludeFromNormalFlow" id="u1840">{/* simple frame */}</span></span></p>
        <p id="u1838-7">Vivamus ante est, tempus eget suscipit sit amet, laoreet a dui. Fusce aliquet arcu eget sapien varius fringilla. Suspendisse porttitor efficitur facilisis.</p>
        </div>
        <div className="clearfix colelem" id="pu1680">{/* group */}
        <div className="clearfix grpelem shared_content" id="u1680" data-content-guid="u1680_content">{/* group */}
        <div className="museBGSize grpelem shared_content" id="u1628" data-content-guid="u1628_content">{/* simple frame */}</div>
        <div className="museBGSize grpelem shared_content" id="u1659" data-content-guid="u1659_content">{/* simple frame */}</div>
        <div className="museBGSize grpelem shared_content" id="u1668" data-content-guid="u1668_content">{/* simple frame */}</div>
        <div className="museBGSize grpelem shared_content" id="u1671" data-content-guid="u1671_content">{/* simple frame */}</div>
        <div className="museBGSize grpelem shared_content" id="u1674" data-content-guid="u1674_content">{/* simple frame */}</div>
        <div className="museBGSize grpelem shared_content" id="u1677" data-content-guid="u1677_content">{/* simple frame */}</div>
        </div>
        <div className="grpelem shared_content" id="u2152" data-content-guid="u2152_content">{/* custom html */}
      </div>
        </div>
        </div>
        </div>
        </div>
        <div className="verticalspacer" data-offset-top={5406} data-content-above-spacer={5406} data-content-below-spacer={322} />
        <Footer />
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r.png?crc=238622133" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m.png?crc=238622133" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs.png?crc=392315850" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs.png?crc=509054720" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        <div className="breakpoint" id="bp_1200" data-min-width={1001} data-max-width={1200}>{/* responsive breakpoint node */}
        <div className="clearfix temp_no_id" data-orig-id="page">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="page_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">{/* group */}
        <span className="browser_width placeholder" data-placeholder-for="u94-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u105-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u232-bw_content">{/* placeholder node */}</span>
        <span className="nonblock nontext MuseLinkActive shadow clearfix placeholder" data-placeholder-for="u318-6_content">{/* placeholder node */}</span>
        <nav className="MenuBar clearfix temp_no_id" data-orig-id="menuu1997">{/* horizontal box */}
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u1998">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix colelem temp_no_id" href="index.html" data-orig-id="u1999">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2001-4">{/* content */}<span className="placeholder" data-placeholder-for="u2001-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2042">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="practice.html" data-orig-id="u2045">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2046-4">{/* content */}<span className="placeholder" data-placeholder-for="u2046-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2063">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="attorneys.html" data-orig-id="u2066">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2068-4">{/* content */}<span className="placeholder" data-placeholder-for="u2068-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2105">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="contact.html" data-orig-id="u2108">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2111-4">{/* content */}<span className="placeholder" data-placeholder-for="u2111-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        </nav>
        <span className="shadow clearfix placeholder" data-placeholder-for="u2126-4_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u304_content">{/* placeholder node */}</span>
        <span className="headline clearfix colelem placeholder" data-placeholder-for="u259-4_content">{/* placeholder node */}</span>
        <span className="headtitle clearfix colelem placeholder" data-placeholder-for="u124-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u325_content">{/* placeholder node */}</span>
        <span className="year clearfix colelem placeholder" data-placeholder-for="u307-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu447_content">{/* placeholder node */}</span>
        <span className="browser_width colelem placeholder" data-placeholder-for="u2171-bw_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu733">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u733-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u745.php" data-orig-id="widgetu745">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu748">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u749-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U748" tabIndex={10} data-orig-id="widgetu748_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu748_input" data-orig-id="widgetu748_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu748_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu754">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u755-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={11} data-orig-id="widgetu754_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu754_input" data-orig-id="widgetu754_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu754_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u746-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u746-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u752-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u752-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u747-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u747-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" value="" tabIndex={13} data-orig-id="u753-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="false" data-orig-id="widgetu758">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u759-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U758" tabIndex={12} data-orig-id="widgetu758_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu758_input" data-orig-id="widgetu758_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu758_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu799_content">{/* placeholder node */}</span>
        <span className="browser_width colelem placeholder" data-placeholder-for="u860-bw_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1088">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1088-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1210-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1213-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1167-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1170-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u1252.php" data-orig-id="widgetu1252">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1271">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1272-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U1271" tabIndex={14} data-orig-id="widgetu1271_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1271_input" data-orig-id="widgetu1271_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1271_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu1288">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1290-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={15} data-orig-id="widgetu1288_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1288_input" data-orig-id="widgetu1288_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1288_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1261-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1261-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1287-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1287-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1292-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1292-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" value="" tabIndex={18} data-orig-id="u1270-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1279">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1282-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U1279" tabIndex={17} data-orig-id="widgetu1279_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1279_input" data-orig-id="widgetu1279_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1279_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1436">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1439-4">{/* content */}<input className="wrapped-input temp_no_id" type="tel" spellCheck="false" name="custom_U1436" tabIndex={16} data-orig-id="widgetu1436_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1436_input" data-orig-id="widgetu1436_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1436_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        <span className="anchor_item grpelem placeholder" data-placeholder-for="news_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1467">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1467-bw_content">{/* placeholder node */}</span>
        <div className="PamphletWidget clearfix grpelem temp_no_id" data-orig-id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor temp_no_id" data-orig-id="u1768popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem temp_no_id" data-orig-id="u1770">{/* group */}
        <span className="clearfix grpelem placeholder" data-placeholder-for="u1686_content">{/* placeholder node */}</span>
        </div>
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u1821">{/* group */}
        <span className="clearfix grpelem placeholder" data-placeholder-for="u1683_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u1776">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1777-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id" data-orig-id="u1778">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1779-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u1625-bw">
        <div className="temp_no_id" data-orig-id="u1625">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1625_align_to_page">
        <span className="ourclients clearfix colelem placeholder" data-placeholder-for="u1838-9_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1680_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="colelem placeholder" data-placeholder-for="u2152_content">{/* placeholder node */}</span>
        <div className="verticalspacer" data-offset-top={5878} data-content-above-spacer={5877} data-content-below-spacer={91} />
        <span className="clearfix colelem placeholder" data-placeholder-for="pu1110_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r2.png?crc=4217847756" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m2.png?crc=4217847756" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs2.png?crc=3941467825" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r2.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m2.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs2.png?crc=509054720" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        <div className="breakpoint" id="bp_1000" data-min-width={801} data-max-width={1000}>{/* responsive breakpoint node */}
        <div className="clearfix temp_no_id" data-orig-id="page">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="page_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">{/* group */}
        <span className="browser_width placeholder" data-placeholder-for="u94-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u105-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u232-bw_content">{/* placeholder node */}</span>
        <span className="nonblock nontext MuseLinkActive shadow clearfix placeholder" data-placeholder-for="u318-6_content">{/* placeholder node */}</span>
        <nav className="MenuBar clearfix temp_no_id" data-orig-id="menuu1997">{/* horizontal box */}
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u1998">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix colelem temp_no_id" href="index.html" data-orig-id="u1999">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2001-4">{/* content */}<span className="placeholder" data-placeholder-for="u2001-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2042">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="practice.html" data-orig-id="u2045">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2046-4">{/* content */}<span className="placeholder" data-placeholder-for="u2046-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2063">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="attorneys.html" data-orig-id="u2066">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2068-4">{/* content */}<span className="placeholder" data-placeholder-for="u2068-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2105">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="contact.html" data-orig-id="u2108">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2111-4">{/* content */}<span className="placeholder" data-placeholder-for="u2111-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        </nav>
        <span className="shadow clearfix placeholder" data-placeholder-for="u2126-4_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u304_content">{/* placeholder node */}</span>
        <span className="headline clearfix colelem placeholder" data-placeholder-for="u259-4_content">{/* placeholder node */}</span>
        <span className="headtitle clearfix colelem placeholder" data-placeholder-for="u124-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u325_content">{/* placeholder node */}</span>
        <span className="year clearfix colelem placeholder" data-placeholder-for="u307-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu447_content">{/* placeholder node */}</span>
        <span className="browser_width colelem placeholder" data-placeholder-for="u2171-bw_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu733">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u733-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u745.php" data-orig-id="widgetu745">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu748">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u749-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U748" tabIndex={19} data-orig-id="widgetu748_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu748_input" data-orig-id="widgetu748_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu748_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu754">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u755-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={20} data-orig-id="widgetu754_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu754_input" data-orig-id="widgetu754_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu754_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u746-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u746-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u752-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u752-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u747-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u747-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={22} data-orig-id="u753-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="false" data-orig-id="widgetu758">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u759-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U758" tabIndex={21} data-orig-id="widgetu758_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu758_input" data-orig-id="widgetu758_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu758_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu799_content">{/* placeholder node */}</span>
        <div className="browser_width colelem temp_no_id" data-orig-id="u860-bw">
        <div className="temp_no_id" data-orig-id="u860">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u860_align_to_page">
        <span className="clearfix colelem placeholder" data-placeholder-for="pu866-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u9964">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu875-12">{/* column */}
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u875-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1001-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u984-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu950-12">{/* column */}
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u950-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1018-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1052-12_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix grpelem placeholder" data-placeholder-for="pu967-12_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1088">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1088-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1210-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1213-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1167-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1170-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u1252.php" data-orig-id="widgetu1252">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1271">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1272-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U1271" tabIndex={23} data-orig-id="widgetu1271_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1271_input" data-orig-id="widgetu1271_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1271_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu1288">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1290-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={24} data-orig-id="widgetu1288_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1288_input" data-orig-id="widgetu1288_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1288_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1261-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1261-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1287-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1287-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1292-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1292-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={27} data-orig-id="u1270-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1279">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1282-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U1279" tabIndex={26} data-orig-id="widgetu1279_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1279_input" data-orig-id="widgetu1279_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1279_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1436">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1439-4">{/* content */}<input className="wrapped-input temp_no_id" type="tel" spellCheck="false" name="custom_U1436" tabIndex={25} data-orig-id="widgetu1436_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1436_input" data-orig-id="widgetu1436_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1436_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        <span className="anchor_item grpelem placeholder" data-placeholder-for="news_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1467">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1467-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1625-bw">
        <div className="temp_no_id" data-orig-id="u1625">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1625_align_to_page">
        <span className="ourclients clearfix colelem placeholder" data-placeholder-for="u1838-9_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1680_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="PamphletWidget clearfix grpelem temp_no_id" data-orig-id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor temp_no_id" data-orig-id="u1768popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem temp_no_id" data-orig-id="u1770">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1686">{/* group */}
        <div className="clearfix grpelem" id="pu1695">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u1695_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1687_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u1703_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u1821">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1683">{/* group */}
        <div className="clearfix grpelem" id="pu1554">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u1554_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1591_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u1557_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u1776">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1777-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id" data-orig-id="u1778">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1779-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="grpelem placeholder" data-placeholder-for="u2152_content">{/* placeholder node */}</span>
        </div>
        <div className="verticalspacer" data-offset-top={6899} data-content-above-spacer={6899} data-content-below-spacer={320} />
        <span className="clearfix colelem placeholder" data-placeholder-for="pu1110_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r3.png?crc=171551299" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m3.png?crc=171551299" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs3.png?crc=4289920847" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r3.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m3.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs3.png?crc=509054720" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        <div className="breakpoint" id="bp_800" data-min-width={701} data-max-width={800}>{/* responsive breakpoint node */}
        <div className="clearfix temp_no_id" data-orig-id="page">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="page_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">{/* group */}
        <span className="browser_width placeholder" data-placeholder-for="u94-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u105-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u232-bw_content">{/* placeholder node */}</span>
        <span className="nonblock nontext MuseLinkActive shadow clearfix placeholder" data-placeholder-for="u318-6_content">{/* placeholder node */}</span>
        <nav className="MenuBar clearfix temp_no_id" data-orig-id="menuu1997">{/* horizontal box */}
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u1998">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix colelem temp_no_id" href="index.html" data-orig-id="u1999">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2001-4">{/* content */}<span className="placeholder" data-placeholder-for="u2001-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2042">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="practice.html" data-orig-id="u2045">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2046-4">{/* content */}<span className="placeholder" data-placeholder-for="u2046-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2063">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="attorneys.html" data-orig-id="u2066">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2068-4">{/* content */}<span className="placeholder" data-placeholder-for="u2068-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix grpelem temp_no_id" data-orig-id="u2105">{/* vertical box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix colelem temp_no_id" href="contact.html" data-orig-id="u2108">{/* horizontal box */}<div className="MenuItemLabel NoWrap clearfix grpelem temp_no_id" data-orig-id="u2111-4">{/* content */}<span className="placeholder" data-placeholder-for="u2111-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        </nav>
        <span className="shadow clearfix placeholder" data-placeholder-for="u2126-4_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u304_content">{/* placeholder node */}</span>
        <span className="headline clearfix colelem placeholder" data-placeholder-for="u259-4_content">{/* placeholder node */}</span>
        <span className="headtitle clearfix colelem placeholder" data-placeholder-for="u124-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u325_content">{/* placeholder node */}</span>
        <span className="year clearfix colelem placeholder" data-placeholder-for="u307-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu447" style={{marginTop: "-22px"}}>{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u447-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u183-bw">
        <div className="museBGSize rgba-background temp_no_id" data-orig-id="u183">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u183_align_to_page">
        <div className="clearfix grpelem" id="pu372">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u372_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u642_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem" id="pu618">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u618_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u666_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width colelem placeholder" data-placeholder-for="u2171-bw_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu733">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u733-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u745.php" data-orig-id="widgetu745">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu748">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u749-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U748" tabIndex={28} data-orig-id="widgetu748_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu748_input" data-orig-id="widgetu748_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu748_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu754">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u755-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={29} data-orig-id="widgetu754_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu754_input" data-orig-id="widgetu754_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu754_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u746-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u746-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u752-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u752-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u747-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u747-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={31} data-orig-id="u753-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="false" data-orig-id="widgetu758">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u759-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U758" tabIndex={30} data-orig-id="widgetu758_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu758_input" data-orig-id="widgetu758_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu758_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu799_content">{/* placeholder node */}</span>
        <div className="browser_width colelem temp_no_id" data-orig-id="u860-bw">
        <div className="temp_no_id" data-orig-id="u860">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u860_align_to_page">
        <span className="clearfix colelem placeholder" data-placeholder-for="pu866-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u9964">{/* column */}
        <div className="clearfix colelem temp_no_id" data-orig-id="pu875-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u875-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u950-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem" id="pu1001-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1001-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1018-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu984-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u984-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1052-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu967-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u967-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1035-12_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1088">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1088-bw">
        <div className="temp_no_id" data-orig-id="u1088">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1088_align_to_page">
        <span className="clearfix colelem placeholder" data-placeholder-for="pu1113-4_content">{/* placeholder node */}</span>
        <span className="performanceimage museBGSize colelem placeholder" data-placeholder-for="u1119_content">{/* placeholder node */}</span>
        <div className="clearfix colelem" id="pu1130-21">{/* group */}
        <span className="performance clearfix grpelem placeholder" data-placeholder-for="u1130-21_content">{/* placeholder node */}</span>
        <span className="nonblock nontext transition clearfix grpelem placeholder" data-placeholder-for="u1232-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1210-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1213-bw">
        <div className="museBGSize temp_no_id" data-orig-id="u1213">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u1213_align_to_page">
        <div className="clearfix grpelem" id="pu1139-6">{/* column */}
        <span className="rgba-background chart1 transition clearfix colelem placeholder" data-placeholder-for="u1139-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart3 transition clearfix colelem placeholder" data-placeholder-for="u1142-6_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem" id="pu1145-6">{/* column */}
        <span className="rgba-background chart2 transition clearfix colelem placeholder" data-placeholder-for="u1145-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart4 transition clearfix colelem placeholder" data-placeholder-for="u1148-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1167-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1170-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u1252.php" data-orig-id="widgetu1252">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1271">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1272-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U1271" tabIndex={32} data-orig-id="widgetu1271_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1271_input" data-orig-id="widgetu1271_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1271_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu1288">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1290-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={33} data-orig-id="widgetu1288_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1288_input" data-orig-id="widgetu1288_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1288_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1261-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1261-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1287-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1287-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1292-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1292-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={36} data-orig-id="u1270-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1279">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1282-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U1279" tabIndex={35} data-orig-id="widgetu1279_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1279_input" data-orig-id="widgetu1279_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1279_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1436">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1439-4">{/* content */}<input className="wrapped-input temp_no_id" type="tel" spellCheck="false" name="custom_U1436" tabIndex={34} data-orig-id="widgetu1436_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1436_input" data-orig-id="widgetu1436_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1436_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        <span className="anchor_item grpelem placeholder" data-placeholder-for="news_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1467">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1467-bw_content">{/* placeholder node */}</span>
        <div className="PamphletWidget clearfix grpelem temp_no_id" data-orig-id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor temp_no_id" data-orig-id="u1768popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem temp_no_id" data-orig-id="u1770">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1686">{/* column */}
        <div className="position_content" id="u1686_position_content">
        <span className="clearfix colelem placeholder" data-placeholder-for="u1695_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1687_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1703_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u1821">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1683">{/* column */}
        <div className="position_content" id="u1683_position_content">
        <span className="clearfix colelem placeholder" data-placeholder-for="u1554_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1591_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1557_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u1776">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1777-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id" data-orig-id="u1778">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1779-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u1625-bw">
        <div className="temp_no_id" data-orig-id="u1625">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1625_align_to_page">
        <div className="clearfix colelem" id="pu1838-9">{/* group */}
        <span className="ourclients clearfix grpelem placeholder" data-placeholder-for="u1838-9_content">{/* placeholder node */}</span>
        <span className="grpelem placeholder" data-placeholder-for="u2152_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1680_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="verticalspacer" data-offset-top={8882} data-content-above-spacer={8882} data-content-below-spacer={399} />
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1110">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1110-bw">
        <div className="temp_no_id" data-orig-id="u1110">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1110_align_to_page">
        <div className="clearfix colelem" id="ppu2270-6">{/* group */}
        <span className="clearfix grpelem placeholder" data-placeholder-for="pu2270-6_content">{/* placeholder node */}</span>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u2267_content">{/* placeholder node */}</span>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u2276_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2245_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2303-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u2300-bw_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r4.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m4.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs4.png?crc=193939537" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r4.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m4.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs4.png?crc=509054720" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        <div className="breakpoint" id="bp_700" data-min-width={601} data-max-width={700}>{/* responsive breakpoint node */}
        <div className="clearfix temp_no_id" data-orig-id="page">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="page_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">{/* group */}
        <span className="browser_width placeholder" data-placeholder-for="u94-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u105-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u232-bw_content">{/* placeholder node */}</span>
        <span className="nonblock nontext MuseLinkActive shadow clearfix placeholder" data-placeholder-for="u318-6_content">{/* placeholder node */}</span>
        <div className="PamphletWidget clearfix" id="pamphletu35010">{/* none box */}
        <div className="popup_anchor" id="u35016popup">
        <div className="ContainerGroup clearfix" id="u35016">{/* stack box */}
        <div className="Container invi clearfix grpelem" id="u35017">{/* column */}
        <nav className="MenuBar clearfix colelem" id="menuu35019">{/* vertical box */}
        <div className="MenuItemContainer clearfix colelem" id="u35034">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix grpelem" id="u35037" href="index.html">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem" id="u35038-4">{/* content */}<p className="shared_content" data-content-guid="u35038-4_0_content">Home</p></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem" id="u35020">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem" id="u35023" href="practice.html">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem" id="u35025-4">{/* content */}<p className="shared_content" data-content-guid="u35025-4_0_content">Practice</p></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem" id="u35027">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem" id="u35028" href="attorneys.html">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem" id="u35030-4">{/* content */}<p className="shared_content" data-content-guid="u35030-4_0_content">Attorneys</p></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem" id="u35041">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem" id="u35042" href="contact.html">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem" id="u35043-4">{/* content */}<p className="shared_content" data-content-guid="u35043-4_0_content">Contact</p></div></a>
        </div>
        </nav>
        <a className="nonblock nontext MuseLinkActive clearfix colelem shared_content" id="u35018-4" href="index.html" data-content-guid="u35018-4_content">{/* content */}<p id="u35018-2">Call Us : +394847 848 8485</p></a>
        </div>
        </div>
        </div>
        <div className="ThumbGroup clearfix grpelem" id="u35011">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element clearfix" id="u35012">{/* group */}
        <div className="grpelem shared_content" id="u35013" data-content-guid="u35013_content">{/* custom html */}
        <i className="fa fa-bars" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletCloseButton PamphletLightboxPart popup_element clearfix" id="u35014">{/* group */}
        <div className="grpelem shared_content" id="u35015" data-content-guid="u35015_content">{/* custom html */}
        <i className="fa fa-times" aria-hidden="true" />
        </div>
        </div>
        </div>
        </div>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u304_content">{/* placeholder node */}</span>
        <span className="headline clearfix colelem placeholder" data-placeholder-for="u259-4_content">{/* placeholder node */}</span>
        <div className="headtitle clearfix colelem shared_content" id="u35667-4" data-content-guid="u35667-4_content">{/* content */}
        <h1>Halleson &amp; Smith</h1>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u325_content">{/* placeholder node */}</span>
        <span className="year clearfix colelem placeholder" data-placeholder-for="u307-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu447">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u447-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u183-bw">
        <div className="museBGSize rgba-background temp_no_id" data-orig-id="u183">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u183_align_to_page">
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu372">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u372_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u642_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu618">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u618_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u666_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u2171-bw">
        <div className="temp_no_id" data-orig-id="u2171">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u2171_align_to_page">
        <span className="clearfix colelem placeholder" data-placeholder-for="pu709-4_content">{/* placeholder node */}</span>
        <span className="historyimage museBGSize colelem placeholder" data-placeholder-for="u718_content">{/* placeholder node */}</span>
        <span className="history clearfix colelem placeholder" data-placeholder-for="u715-15_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu733">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u733-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u745.php" data-orig-id="widgetu745">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu748">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u749-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U748" tabIndex={37} data-orig-id="widgetu748_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu748_input" data-orig-id="widgetu748_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu748_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu754">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u755-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={38} data-orig-id="widgetu754_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu754_input" data-orig-id="widgetu754_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu754_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u746-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u746-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u752-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u752-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u747-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u747-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={40} data-orig-id="u753-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="false" data-orig-id="widgetu758">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u759-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U758" tabIndex={39} data-orig-id="widgetu758_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu758_input" data-orig-id="widgetu758_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu758_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu799_content">{/* placeholder node */}</span>
        <div className="browser_width colelem temp_no_id" data-orig-id="u860-bw">
        <div className="temp_no_id" data-orig-id="u860">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u860_align_to_page">
        <span className="whatwedo clearfix colelem placeholder" data-placeholder-for="u869-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u9964">{/* column */}
        <div className="clearfix colelem temp_no_id" data-orig-id="pu875-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u875-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u950-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1001-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1001-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1018-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu984-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u984-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1052-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu967-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u967-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1035-12_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1088">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1088-bw">
        <div className="temp_no_id" data-orig-id="u1088">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1088_align_to_page">
        <span className="whychooseus clearfix colelem placeholder" data-placeholder-for="u1116-4_content">{/* placeholder node */}</span>
        <span className="performanceimage museBGSize colelem placeholder" data-placeholder-for="u1119_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1130-21">{/* group */}
        <span className="performance clearfix grpelem placeholder" data-placeholder-for="u1130-21_content">{/* placeholder node */}</span>
        <span className="nonblock nontext transition clearfix grpelem placeholder" data-placeholder-for="u1232-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1210-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1213-bw">
        <div className="museBGSize temp_no_id" data-orig-id="u1213">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u1213_align_to_page">
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu1139-6">{/* column */}
        <span className="rgba-background chart1 transition clearfix colelem placeholder" data-placeholder-for="u1139-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart3 transition clearfix colelem placeholder" data-placeholder-for="u1142-6_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu1145-6">{/* column */}
        <span className="rgba-background chart2 transition clearfix colelem placeholder" data-placeholder-for="u1145-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart4 transition clearfix colelem placeholder" data-placeholder-for="u1148-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1167-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1170-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u1252.php" data-orig-id="widgetu1252">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1271">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1272-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U1271" tabIndex={41} data-orig-id="widgetu1271_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1271_input" data-orig-id="widgetu1271_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1271_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu1288">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1290-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={42} data-orig-id="widgetu1288_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1288_input" data-orig-id="widgetu1288_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1288_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1261-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1261-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1287-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1287-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1292-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1292-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={45} data-orig-id="u1270-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1279">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1282-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U1279" tabIndex={44} data-orig-id="widgetu1279_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1279_input" data-orig-id="widgetu1279_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1279_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1436">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1439-4">{/* content */}<input className="wrapped-input temp_no_id" type="tel" spellCheck="false" name="custom_U1436" tabIndex={43} data-orig-id="widgetu1436_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1436_input" data-orig-id="widgetu1436_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1436_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        <span className="anchor_item grpelem placeholder" data-placeholder-for="news_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1467">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1467-bw">
        <div className="temp_no_id" data-orig-id="u1467">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u1467_align_to_page">
        <span className="news clearfix grpelem placeholder" data-placeholder-for="u1473-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="PamphletWidget clearfix grpelem temp_no_id" data-orig-id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor temp_no_id" data-orig-id="u1768popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem temp_no_id" data-orig-id="u1770">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1686">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="u1686_position_content">
        <span className="clearfix colelem placeholder" data-placeholder-for="u1695_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1687_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1703_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u1821">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1683">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="u1683_position_content">
        <span className="clearfix colelem placeholder" data-placeholder-for="u1554_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1591_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1557_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u1776">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1777-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id" data-orig-id="u1778">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1779-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="grpelem placeholder" data-placeholder-for="u2152_content">{/* placeholder node */}</span>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u1625-bw">
        <div className="temp_no_id" data-orig-id="u1625">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1625_align_to_page">
        <span className="ourclients clearfix colelem placeholder" data-placeholder-for="u1838-9_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1680_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="verticalspacer shared_content" data-offset-top={9334} data-content-above-spacer={9334} data-content-below-spacer={398} data-content-guid="page_position_content_14_content" />
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1110">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1110-bw">
        <div className="temp_no_id" data-orig-id="u1110">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1110_align_to_page">
        <div className="clearfix colelem temp_no_id" data-orig-id="ppu2270-6">{/* group */}
        <span className="clearfix grpelem placeholder" data-placeholder-for="pu2270-6_content">{/* placeholder node */}</span>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u2267_content">{/* placeholder node */}</span>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u2276_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2245_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2303-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u2300-bw_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r5.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m5.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs5.png?crc=193939537" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r5.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m5.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs5.png?crc=509054720" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        <div className="breakpoint" id="bp_600" data-min-width={501} data-max-width={600}>{/* responsive breakpoint node */}
        <div className="clearfix borderbox temp_no_id" data-orig-id="page">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="page_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">{/* group */}
        <span className="browser_width placeholder" data-placeholder-for="u94-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u105-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u232-bw_content">{/* placeholder node */}</span>
        <span className="nonblock nontext MuseLinkActive shadow clearfix placeholder" data-placeholder-for="u318-6_content">{/* placeholder node */}</span>
        <div className="PamphletWidget clearfix temp_no_id" data-orig-id="pamphletu35010">{/* none box */}
        <div className="popup_anchor temp_no_id" data-orig-id="u35016popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u35016">{/* stack box */}
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u35017">{/* column */}
        <nav className="MenuBar clearfix colelem temp_no_id" data-orig-id="menuu35019">{/* vertical box */}
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35034">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix grpelem temp_no_id" href="index.html" data-orig-id="u35037">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35038-4">{/* content */}<span className="placeholder" data-placeholder-for="u35038-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35020">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="practice.html" data-orig-id="u35023">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35025-4">{/* content */}<span className="placeholder" data-placeholder-for="u35025-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35027">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="attorneys.html" data-orig-id="u35028">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35030-4">{/* content */}<span className="placeholder" data-placeholder-for="u35030-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35041">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="contact.html" data-orig-id="u35042">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35043-4">{/* content */}<span className="placeholder" data-placeholder-for="u35043-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        </nav>
        <span className="nonblock nontext MuseLinkActive clearfix colelem placeholder" data-placeholder-for="u35018-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u35011">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element clearfix temp_no_id" data-orig-id="u35012">{/* group */}
        <span className="grpelem placeholder" data-placeholder-for="u35013_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletCloseButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u35014">{/* group */}
        <span className="grpelem placeholder" data-placeholder-for="u35015_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u304_content">{/* placeholder node */}</span>
        <span className="headline clearfix colelem placeholder" data-placeholder-for="u259-4_content">{/* placeholder node */}</span>
        <span className="headtitle clearfix colelem placeholder" data-placeholder-for="u35667-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u325_content">{/* placeholder node */}</span>
        <span className="year clearfix colelem placeholder" data-placeholder-for="u307-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu447">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u447-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u183-bw">
        <div className="museBGSize rgba-background temp_no_id" data-orig-id="u183">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u183_align_to_page">
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu372">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u372_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u642_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu618">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u618_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u666_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u2171-bw">
        <div className="temp_no_id" data-orig-id="u2171">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u2171_align_to_page">
        <span className="clearfix colelem placeholder" data-placeholder-for="pu709-4_content">{/* placeholder node */}</span>
        <span className="historyimage museBGSize colelem placeholder" data-placeholder-for="u718_content">{/* placeholder node */}</span>
        <span className="history clearfix colelem placeholder" data-placeholder-for="u715-15_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu733">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u733-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u745.php" data-orig-id="widgetu745">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu748">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u749-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U748" tabIndex={46} data-orig-id="widgetu748_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu748_input" data-orig-id="widgetu748_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu748_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu754">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u755-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={47} data-orig-id="widgetu754_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu754_input" data-orig-id="widgetu754_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu754_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u746-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u746-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u752-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u752-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u747-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u747-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={49} data-orig-id="u753-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="false" data-orig-id="widgetu758">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u759-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U758" tabIndex={48} data-orig-id="widgetu758_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu758_input" data-orig-id="widgetu758_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu758_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu799_content">{/* placeholder node */}</span>
        <div className="browser_width colelem temp_no_id" data-orig-id="u860-bw">
        <div className="temp_no_id" data-orig-id="u860">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u860_align_to_page">
        <span className="whatwedo clearfix colelem placeholder" data-placeholder-for="u869-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u9964">{/* column */}
        <div className="clearfix colelem temp_no_id" data-orig-id="pu875-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u875-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u950-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1001-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1001-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1018-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu984-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u984-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1052-12_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu967-12">{/* group */}
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u967-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix grpelem placeholder" data-placeholder-for="u1035-12_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1088">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1088-bw">
        <div className="temp_no_id" data-orig-id="u1088">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1088_align_to_page">
        <span className="whychooseus clearfix colelem placeholder" data-placeholder-for="u1116-4_content">{/* placeholder node */}</span>
        <span className="performanceimage museBGSize colelem placeholder" data-placeholder-for="u1119_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1130-21">{/* group */}
        <span className="performance clearfix grpelem placeholder" data-placeholder-for="u1130-21_content">{/* placeholder node */}</span>
        <span className="nonblock nontext transition clearfix grpelem placeholder" data-placeholder-for="u1232-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1210-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1213-bw">
        <div className="museBGSize temp_no_id" data-orig-id="u1213">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1213_align_to_page">
        <div className="position_content" id="u1213_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1139-6">{/* group */}
        <span className="rgba-background chart1 transition clearfix grpelem placeholder" data-placeholder-for="u1139-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart2 transition clearfix grpelem placeholder" data-placeholder-for="u1145-6_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix colelem" id="pu1142-6">{/* group */}
        <span className="rgba-background chart3 transition clearfix grpelem placeholder" data-placeholder-for="u1142-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart4 transition clearfix grpelem placeholder" data-placeholder-for="u1148-6_content">{/* placeholder node */}</span>
        </div>
        <span className="anchor_item colelem placeholder" data-placeholder-for="news_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1167-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1170-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u1252.php" data-orig-id="widgetu1252">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1271">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1272-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U1271" tabIndex={50} data-orig-id="widgetu1271_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1271_input" data-orig-id="widgetu1271_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1271_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu1288">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1290-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={51} data-orig-id="widgetu1288_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1288_input" data-orig-id="widgetu1288_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1288_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1261-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1261-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1287-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1287-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1292-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1292-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={54} data-orig-id="u1270-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1279">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1282-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U1279" tabIndex={53} data-orig-id="widgetu1279_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1279_input" data-orig-id="widgetu1279_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1279_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1436">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1439-4">{/* content */}<input className="wrapped-input temp_no_id" type="tel" spellCheck="false" name="custom_U1436" tabIndex={52} data-orig-id="widgetu1436_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1436_input" data-orig-id="widgetu1436_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1436_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1467">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1467-bw">
        <div className="temp_no_id" data-orig-id="u1467">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u1467_align_to_page">
        <span className="news clearfix grpelem placeholder" data-placeholder-for="u1473-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="PamphletWidget clearfix grpelem temp_no_id" data-orig-id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor temp_no_id" data-orig-id="u1768popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem temp_no_id" data-orig-id="u1770">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1686">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="u1686_position_content">
        <span className="clearfix colelem placeholder" data-placeholder-for="u1695_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1687_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1703_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u1821">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1683">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u1554_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1591_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1557_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u1776">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1777-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id" data-orig-id="u1778">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1779-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="grpelem placeholder" data-placeholder-for="u2152_content">{/* placeholder node */}</span>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u1625-bw">
        <div className="temp_no_id" data-orig-id="u1625">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1625_align_to_page">
        <span className="ourclients clearfix colelem placeholder" data-placeholder-for="u1838-9_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1680_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="verticalspacer placeholder" data-placeholder-for="page_position_content_14_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1110">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1110-bw">
        <div className="temp_no_id" data-orig-id="u1110">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1110_align_to_page">
        <div className="clearfix colelem temp_no_id" data-orig-id="ppu2270-6">{/* group */}
        <span className="clearfix grpelem placeholder" data-placeholder-for="pu2270-6_content">{/* placeholder node */}</span>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u2267_content">{/* placeholder node */}</span>
        <span className="clearfix grpelem placeholder" data-placeholder-for="u2276_content">{/* placeholder node */}</span>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2245_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2303-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u2300-bw_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r6.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m6.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs6.png?crc=193939537" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r6.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m6.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs6.png?crc=509054720" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        <div className="breakpoint" id="bp_500" data-min-width={401} data-max-width={500}>{/* responsive breakpoint node */}
        <div className="clearfix borderbox temp_no_id" data-orig-id="page">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="page_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">{/* group */}
        <span className="browser_width placeholder" data-placeholder-for="u94-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u105-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u232-bw_content">{/* placeholder node */}</span>
        <span className="nonblock nontext MuseLinkActive shadow clearfix placeholder" data-placeholder-for="u318-6_content">{/* placeholder node */}</span>
        <div className="PamphletWidget clearfix temp_no_id" data-orig-id="pamphletu35010">{/* none box */}
        <div className="popup_anchor temp_no_id" data-orig-id="u35016popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u35016">{/* stack box */}
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u35017">{/* column */}
        <nav className="MenuBar clearfix colelem temp_no_id" data-orig-id="menuu35019">{/* vertical box */}
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35034">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix grpelem temp_no_id" href="index.html" data-orig-id="u35037">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35038-4">{/* content */}<span className="placeholder" data-placeholder-for="u35038-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35020">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="practice.html" data-orig-id="u35023">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35025-4">{/* content */}<span className="placeholder" data-placeholder-for="u35025-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35027">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="attorneys.html" data-orig-id="u35028">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35030-4">{/* content */}<span className="placeholder" data-placeholder-for="u35030-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35041">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="contact.html" data-orig-id="u35042">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35043-4">{/* content */}<span className="placeholder" data-placeholder-for="u35043-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        </nav>
        <span className="nonblock nontext MuseLinkActive clearfix colelem placeholder" data-placeholder-for="u35018-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u35011">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element clearfix temp_no_id" data-orig-id="u35012">{/* group */}
        <span className="grpelem placeholder" data-placeholder-for="u35013_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletCloseButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u35014">{/* group */}
        <span className="grpelem placeholder" data-placeholder-for="u35015_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u304_content">{/* placeholder node */}</span>
        <span className="headline clearfix colelem placeholder" data-placeholder-for="u259-4_content">{/* placeholder node */}</span>
        <span className="headtitle clearfix colelem placeholder" data-placeholder-for="u35667-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u325_content">{/* placeholder node */}</span>
        <span className="year clearfix colelem placeholder" data-placeholder-for="u307-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu447">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u447-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u183-bw">
        <div className="museBGSize rgba-background temp_no_id" data-orig-id="u183">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u183_align_to_page">
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu372">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u372_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u642_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu618">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u618_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u666_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u2171-bw">
        <div className="temp_no_id" data-orig-id="u2171">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u2171_align_to_page">
        <span className="whoweare clearfix colelem placeholder" data-placeholder-for="u729-4_content">{/* placeholder node */}</span>
        <span className="historyimage museBGSize colelem placeholder" data-placeholder-for="u718_content">{/* placeholder node */}</span>
        <span className="history clearfix colelem placeholder" data-placeholder-for="u715-15_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu733">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u733-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u745.php" data-orig-id="widgetu745">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu748">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u749-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U748" tabIndex={55} data-orig-id="widgetu748_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu748_input" data-orig-id="widgetu748_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu748_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu754">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u755-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={56} data-orig-id="widgetu754_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu754_input" data-orig-id="widgetu754_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu754_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u746-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u746-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u752-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u752-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u747-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u747-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={58} data-orig-id="u753-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="false" data-orig-id="widgetu758">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u759-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U758" tabIndex={57} data-orig-id="widgetu758_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu758_input" data-orig-id="widgetu758_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu758_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu799_content">{/* placeholder node */}</span>
        <div className="browser_width colelem temp_no_id" data-orig-id="u860-bw">
        <div className="temp_no_id" data-orig-id="u860">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u860_align_to_page">
        <span className="whatwedo clearfix colelem placeholder" data-placeholder-for="u869-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u9964">{/* column */}
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u875-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1001-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u984-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u967-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u950-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1018-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1052-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1035-12_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1088">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1088-bw">
        <div className="temp_no_id" data-orig-id="u1088">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1088_align_to_page">
        <span className="whychooseus clearfix colelem placeholder" data-placeholder-for="u1116-4_content">{/* placeholder node */}</span>
        <span className="performanceimage museBGSize colelem placeholder" data-placeholder-for="u1119_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1130-21">{/* group */}
        <span className="performance clearfix grpelem placeholder" data-placeholder-for="u1130-21_content">{/* placeholder node */}</span>
        <span className="nonblock nontext transition clearfix grpelem placeholder" data-placeholder-for="u1232-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1167-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1170-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u1252.php" data-orig-id="widgetu1252">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1271">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1272-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U1271" tabIndex={59} data-orig-id="widgetu1271_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1271_input" data-orig-id="widgetu1271_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1271_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu1288">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1290-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={60} data-orig-id="widgetu1288_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1288_input" data-orig-id="widgetu1288_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1288_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1261-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1261-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1287-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1287-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1292-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1292-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={63} data-orig-id="u1270-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1279">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1282-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U1279" tabIndex={62} data-orig-id="widgetu1279_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1279_input" data-orig-id="widgetu1279_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1279_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1436">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1439-4">{/* content */}<input className="wrapped-input temp_no_id" type="tel" spellCheck="false" name="custom_U1436" tabIndex={61} data-orig-id="widgetu1436_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1436_input" data-orig-id="widgetu1436_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1436_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <div className="clearfix colelem" id="pu1210">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1210-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1213-bw">
        <div className="museBGSize temp_no_id" data-orig-id="u1213">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u1213_align_to_page">
        <span className="anchor_item grpelem placeholder" data-placeholder-for="news_content">{/* placeholder node */}</span>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu1139-6">{/* column */}
        <span className="rgba-background chart1 transition clearfix colelem placeholder" data-placeholder-for="u1139-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart3 transition clearfix colelem placeholder" data-placeholder-for="u1142-6_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu1145-6">{/* column */}
        <span className="rgba-background chart2 transition clearfix colelem placeholder" data-placeholder-for="u1145-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart4 transition clearfix colelem placeholder" data-placeholder-for="u1148-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem" id="pppu1467">{/* group */}
        <div className="clearfix grpelem" id="ppu1467">{/* column */}
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1467">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1467-bw">
        <div className="temp_no_id" data-orig-id="u1467">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u1467_align_to_page">
        <span className="news clearfix grpelem placeholder" data-placeholder-for="u1473-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="PamphletWidget clearfix grpelem temp_no_id" data-orig-id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor temp_no_id" data-orig-id="u1768popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem temp_no_id" data-orig-id="u1770">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1686">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u1695_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1687_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1703_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u1821">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1683">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u1554_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1591_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1557_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u1776">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1777-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id" data-orig-id="u1778">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1779-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u1625-bw">
        <div className="temp_no_id" data-orig-id="u1625">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1625_align_to_page">
        <span className="ourclients clearfix colelem placeholder" data-placeholder-for="u1838-9_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u1680">{/* group */}
        <div className="clearfix grpelem" id="pu1628">{/* column */}
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1628_content">{/* placeholder node */}</span>
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1671_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem" id="pu1659">{/* column */}
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1659_content">{/* placeholder node */}</span>
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1674_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem" id="pu1668">{/* column */}
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1668_content">{/* placeholder node */}</span>
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1677_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <span className="grpelem placeholder" data-placeholder-for="u2152_content">{/* placeholder node */}</span>
        </div>
        <div className="verticalspacer" data-offset-top={11028} data-content-above-spacer={11027} data-content-below-spacer={671} />
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1110">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1110-bw">
        <div className="temp_no_id" data-orig-id="u1110">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1110_align_to_page">
        <span className="nonblock nontext MuseLinkActive clearfix colelem placeholder" data-placeholder-for="u2270-6_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2273-6_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2267_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2276_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2245_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2303-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u2300-bw_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r7.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m7.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs7.png?crc=193939537" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r7.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m7.png?crc=3842467463" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs7.png?crc=509054720" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        <div className="breakpoint" id="bp_400" data-max-width={400}>{/* responsive breakpoint node */}
        <div className="clearfix borderbox temp_no_id" data-orig-id="page">{/* column */}
        <div className="position_content temp_no_id" data-orig-id="page_position_content">
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">{/* group */}
        <span className="browser_width placeholder" data-placeholder-for="u94-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u105-bw_content">{/* placeholder node */}</span>
        <span className="browser_width placeholder" data-placeholder-for="u232-bw_content">{/* placeholder node */}</span>
        <span className="nonblock nontext MuseLinkActive shadow clearfix placeholder" data-placeholder-for="u318-6_content">{/* placeholder node */}</span>
        <div className="PamphletWidget clearfix temp_no_id" data-orig-id="pamphletu35010">{/* none box */}
        <div className="popup_anchor temp_no_id" data-orig-id="u35016popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u35016">{/* stack box */}
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u35017">{/* column */}
        <nav className="MenuBar clearfix colelem temp_no_id" data-orig-id="menuu35019">{/* vertical box */}
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35034">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix grpelem temp_no_id" href="index.html" data-orig-id="u35037">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35038-4">{/* content */}<span className="placeholder" data-placeholder-for="u35038-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35020">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="practice.html" data-orig-id="u35023">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35025-4">{/* content */}<span className="placeholder" data-placeholder-for="u35025-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35027">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="attorneys.html" data-orig-id="u35028">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35030-4">{/* content */}<span className="placeholder" data-placeholder-for="u35030-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        <div className="MenuItemContainer clearfix colelem temp_no_id" data-orig-id="u35041">{/* horizontal box */}
        <a className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id" href="contact.html" data-orig-id="u35042">{/* horizontal box */}<div className="MenuItemLabel clearfix grpelem temp_no_id" data-orig-id="u35043-4">{/* content */}<span className="placeholder" data-placeholder-for="u35043-4_0_content">{/* placeholder node */}</span></div></a>
        </div>
        </nav>
        <span className="nonblock nontext MuseLinkActive clearfix colelem placeholder" data-placeholder-for="u35018-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u35011">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element clearfix temp_no_id" data-orig-id="u35012">{/* group */}
        <span className="grpelem placeholder" data-placeholder-for="u35013_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletCloseButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u35014">{/* group */}
        <span className="grpelem placeholder" data-placeholder-for="u35015_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="u304_content">{/* placeholder node */}</span>
        <span className="headline clearfix colelem placeholder" data-placeholder-for="u259-4_content">{/* placeholder node */}</span>
        <span className="headtitle clearfix colelem placeholder" data-placeholder-for="u35667-4_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u325_content">{/* placeholder node */}</span>
        <span className="year clearfix colelem placeholder" data-placeholder-for="u307-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu447">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u447-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u183-bw">
        <div className="museBGSize rgba-background temp_no_id" data-orig-id="u183">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u183_align_to_page">
        <span className="clearfix colelem placeholder" data-placeholder-for="u372_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u642_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u618_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u666_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u2171-bw">
        <div className="temp_no_id" data-orig-id="u2171">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u2171_align_to_page">
        <span className="whoweare clearfix colelem placeholder" data-placeholder-for="u729-4_content">{/* placeholder node */}</span>
        <span className="historyimage museBGSize colelem placeholder" data-placeholder-for="u718_content">{/* placeholder node */}</span>
        <span className="history clearfix colelem placeholder" data-placeholder-for="u715-15_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu733">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u733-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u745.php" data-orig-id="widgetu745">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu748">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u749-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U748" tabIndex={64} data-orig-id="widgetu748_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu748_input" data-orig-id="widgetu748_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu748_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu754">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u755-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={65} data-orig-id="widgetu754_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu754_input" data-orig-id="widgetu754_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu754_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u746-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u746-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u752-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u752-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u747-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u747-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={67} data-orig-id="u753-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="false" data-orig-id="widgetu758">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u759-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U758" tabIndex={66} data-orig-id="widgetu758_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu758_input" data-orig-id="widgetu758_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu758_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <span className="clearfix colelem placeholder" data-placeholder-for="pu799_content">{/* placeholder node */}</span>
        <div className="browser_width colelem temp_no_id" data-orig-id="u860-bw">
        <div className="temp_no_id" data-orig-id="u860">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u860_align_to_page">
        <span className="whatwedo clearfix colelem placeholder" data-placeholder-for="u869-4_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u9964">{/* column */}
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u875-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1001-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u984-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u967-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u950-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1018-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1052-12_content">{/* placeholder node */}</span>
        <span className="transition shadow clearfix colelem placeholder" data-placeholder-for="u1035-12_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1088">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1088-bw">
        <div className="temp_no_id" data-orig-id="u1088">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1088_align_to_page">
        <span className="whychooseus clearfix colelem placeholder" data-placeholder-for="u1116-4_content">{/* placeholder node */}</span>
        <span className="performanceimage museBGSize colelem placeholder" data-placeholder-for="u1119_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1130-21">{/* group */}
        <span className="performance clearfix grpelem placeholder" data-placeholder-for="u1130-21_content">{/* placeholder node */}</span>
        <span className="nonblock nontext transition clearfix grpelem placeholder" data-placeholder-for="u1232-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1167-bw_content">{/* placeholder node */}</span>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1170-bw_content">{/* placeholder node */}</span>
        <form className="form-grp clearfix grpelem temp_no_id" method="post" encType="multipart/form-data" action="scripts/form-u1252.php" data-orig-id="widgetu1252">{/* none box */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1271">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1272-4">{/* content */}<input className="wrapped-input temp_no_id" type="text" spellCheck="false" name="custom_U1271" tabIndex={68} data-orig-id="widgetu1271_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1271_input" data-orig-id="widgetu1271_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1271_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-type="email" data-orig-id="widgetu1288">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1290-4">{/* content */}<input className="wrapped-input temp_no_id" type="email" spellCheck="false" name="Email" tabIndex={69} data-orig-id="widgetu1288_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1288_input" data-orig-id="widgetu1288_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1288_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1261-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1261-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1287-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1287-4_0_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1292-4">{/* content */}
        <span className="placeholder" data-placeholder-for="u1292-4_0_content">{/* placeholder node */}</span>
        </div>
        <input className="submit-btn NoWrap grpelem temp_no_id" type="submit" defaultValue tabIndex={72} data-orig-id="u1270-17" />{/* state-based BG images */}
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1279">{/* none box */}
        <span className="fld-textarea actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1282-4">{/* content */}<textarea className="wrapped-input temp_no_id" name="custom_U1279" tabIndex={71} data-orig-id="widgetu1279_input" defaultValue={""} /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1279_input" data-orig-id="widgetu1279_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1279_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        <div className="fld-grp clearfix grpelem temp_no_id" data-required="true" data-orig-id="widgetu1436">{/* none box */}
        <span className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id" data-orig-id="u1439-4">{/* content */}<input className="wrapped-input temp_no_id" type="tel" spellCheck="false" name="custom_U1436" tabIndex={70} data-orig-id="widgetu1436_input" /><label className="wrapped-input fld-prompt temp_no_id" htmlFor="widgetu1436_input" data-orig-id="widgetu1436_prompt"><span className="actAsPara placeholder" data-placeholder-for="widgetu1436_prompt_0_content">{/* placeholder node */}</span></label></span>
        </div>
        </form>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1210">{/* group */}
        <span className="browser_width grpelem placeholder" data-placeholder-for="u1210-bw_content">{/* placeholder node */}</span>
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1213-bw">
        <div className="museBGSize temp_no_id" data-orig-id="u1213">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1213_align_to_page">
        <span className="rgba-background chart1 transition clearfix colelem placeholder" data-placeholder-for="u1139-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart3 transition clearfix colelem placeholder" data-placeholder-for="u1142-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart2 transition clearfix colelem placeholder" data-placeholder-for="u1145-6_content">{/* placeholder node */}</span>
        <span className="rgba-background chart4 transition clearfix colelem placeholder" data-placeholder-for="u1148-6_content">{/* placeholder node */}</span>
        <span className="anchor_item colelem placeholder" data-placeholder-for="news_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="clearfix colelem temp_no_id" data-orig-id="pppu1467">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="ppu1467">{/* column */}
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1467">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1467-bw">
        <div className="temp_no_id" data-orig-id="u1467">{/* group */}
        <div className="clearfix temp_no_id" data-orig-id="u1467_align_to_page">
        <span className="news clearfix grpelem placeholder" data-placeholder-for="u1473-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="PamphletWidget clearfix grpelem temp_no_id" data-orig-id="pamphletu1767">{/* none box */}
        <div className="ThumbGroup clearfix grpelem temp_no_id" data-orig-id="u1772">{/* none box */}
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1773">{/* simple frame */}</div>
        </div>
        <div className="popup_anchor">
        <div className="Thumb popup_element temp_no_id" data-orig-id="u1818">{/* simple frame */}</div>
        </div>
        </div>
        <div className="popup_anchor temp_no_id" data-orig-id="u1768popup">
        <div className="ContainerGroup clearfix temp_no_id" data-orig-id="u1768">{/* stack box */}
        <div className="Container clearfix grpelem temp_no_id" data-orig-id="u1770">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1686">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u1695_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1687_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1703_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="Container invi clearfix grpelem temp_no_id" data-orig-id="u1821">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="u1683">{/* column */}
        <span className="clearfix colelem placeholder" data-placeholder-for="u1554_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1591_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u1557_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id" data-orig-id="u1776">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1777-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        <div className="popup_anchor">
        <div className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id" data-orig-id="u1778">{/* group */}
        <span className="transition clearfix grpelem placeholder" data-placeholder-for="u1779-4_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        <div className="browser_width colelem temp_no_id" data-orig-id="u1625-bw">
        <div className="temp_no_id" data-orig-id="u1625">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1625_align_to_page">
        <span className="ourclients clearfix colelem placeholder" data-placeholder-for="u1838-9_content">{/* placeholder node */}</span>
        <div className="clearfix colelem temp_no_id" data-orig-id="u1680">{/* group */}
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu1628">{/* column */}
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1628_content">{/* placeholder node */}</span>
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1671_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu1659">{/* column */}
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1659_content">{/* placeholder node */}</span>
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1674_content">{/* placeholder node */}</span>
        </div>
        <div className="clearfix grpelem temp_no_id" data-orig-id="pu1668">{/* column */}
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1668_content">{/* placeholder node */}</span>
        <span className="museBGSize colelem placeholder" data-placeholder-for="u1677_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <span className="grpelem placeholder" data-placeholder-for="u2152_content">{/* placeholder node */}</span>
        </div>
        <div className="verticalspacer" data-offset-top={11773} data-content-above-spacer={11773} data-content-below-spacer={670} />
        <div className="clearfix colelem temp_no_id" data-orig-id="pu1110">{/* group */}
        <div className="browser_width grpelem temp_no_id" data-orig-id="u1110-bw">
        <div className="temp_no_id" data-orig-id="u1110">{/* column */}
        <div className="clearfix temp_no_id" data-orig-id="u1110_align_to_page">
        <span className="nonblock nontext MuseLinkActive clearfix colelem placeholder" data-placeholder-for="u2270-6_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2273-6_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2267_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2276_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2245_content">{/* placeholder node */}</span>
        <span className="clearfix colelem placeholder" data-placeholder-for="u2303-6_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <span className="browser_width grpelem placeholder" data-placeholder-for="u2300-bw_content">{/* placeholder node */}</span>
        </div>
        </div>
        </div>
        <div className="preload_images">
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-r8.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-m8.png?crc=122963081" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u753-17-fs8.png?crc=193939537" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-r8.png?crc=522526091" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-m8.png?crc=522526091" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/u1270-17-fs8.png?crc=4225927277" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        <img className="preload temp_no_img_src" data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308" alt src="images/blank.gif?crc=4208392903" />
        </div>
        </div>
        </div>
    )
  }
}

export default Home
