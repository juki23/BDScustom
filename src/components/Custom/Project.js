import React, { Component } from 'react';
// import Menu from '../Menu/Menu';
// import routes from '../../routes';
import { Switch, Route, BrowserRouter as Router, HashRouter } from 'react-router-dom';



class Project extends Component {
	render() {
		return (
			<div>
				<div className="post-list">
					<div className="container">
						<div className="row">
							<legend> <span><i className="fa fa-caret-right" aria-hidden="true" /> Căn hộ Quận 2 <i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
							<div className="col-md-12">
								<div className="duan-intro">
									<p>&nbsp;</p>
									<p>&nbsp;</p>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="duan-loop">
									<div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../du-an/one-verandah/index.html"><div className="mask" /> <img width={338} height={228} src="../wp-content/uploads/2017/09/vi-tri-du-an-one-verandah-mapletree-quan-2-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="one verandah mapletree" /> </a></div>
									<div className="info-wrapper">
										<div className="info-inner"> <a href="../du-an/one-verandah/index.html"><h2 className="duan-title">Mở bán One Verandah – dự án khu căn hộ Mapletree Quận 2</h2></a>
											<div className="info-loop"><b>Giá:</b> <span>2000 usd/m2</span></div>
											<div className="info-loop"><b>Vị trí:</b> Bát Nàn, Thạnh Mỹ Lợi, Quận 2</div>
											<div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/one-verandah/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/one-verandah/%20-%20M%e1%bb%9f%20b%c3%a1n%20One%20Verandah%20%e2%80%93%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Mapletree%20Qu%e1%ba%adn%202"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/one-verandah/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/one-verandah/&media=https://giahungland.vn/wp-content/uploads/2017/09/vi-tri-du-an-one-verandah-mapletree-quan-2.jpg&description=M%e1%bb%9f%20b%c3%a1n%20One%20Verandah%20%e2%80%93%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Mapletree%20Qu%e1%ba%adn%202"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../du-an/one-verandah/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="duan-loop">
									<div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../du-an/can-ho-lancer-quan-2/index.html"><div className="mask" /> <img width={338} height={228} src="../wp-content/uploads/2017/09/the-lancer-mapletree-thanh-my-loi-quan-2-1-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="khu căn hộ one verandah Quận 2" /> </a></div>
									<div className="info-wrapper">
										<div className="info-inner"> <a href="../du-an/can-ho-lancer-quan-2/index.html"><h2 className="duan-title">Đánh giá dự án khu căn hộ The Lancer Quận 2, Thạnh Mỹ Lợi của Mapletree</h2></a>
											<div className="info-loop"><b>Giá:</b> <span>2000 usd/m2</span></div>
											<div className="info-loop"><b>Vị trí:</b> Thạnh Mỹ Lợi Quận 2</div>
											<div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/can-ho-lancer-quan-2/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/can-ho-lancer-quan-2/%20-%20%c4%90%c3%a1nh%20gi%c3%a1%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20The%20Lancer%20Qu%e1%ba%adn%202,%20Th%e1%ba%a1nh%20M%e1%bb%b9%20L%e1%bb%a3i%20c%e1%bb%a7a%20Mapletree"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/can-ho-lancer-quan-2/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/can-ho-lancer-quan-2/&media=https://giahungland.vn/wp-content/uploads/2017/09/the-lancer-mapletree-thanh-my-loi-quan-2-1.jpg&description=%c4%90%c3%a1nh%20gi%c3%a1%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20The%20Lancer%20Qu%e1%ba%adn%202,%20Th%e1%ba%a1nh%20M%e1%bb%b9%20L%e1%bb%a3i%20c%e1%bb%a7a%20Mapletree"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../du-an/can-ho-lancer-quan-2/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="duan-loop">
									<div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../du-an/can-ho-chung-cu-binh-khanh-thuan-viet/index.html"><div className="mask" /> <img width={338} height={228} src="../wp-content/uploads/2017/08/can-ho-chung-cu-binh-khanh-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="căn hộ bình khánh quận 2" /> </a></div>
									<div className="info-wrapper">
										<div className="info-inner"> <a href="../du-an/can-ho-chung-cu-binh-khanh-thuan-viet/index.html"><h2 className="duan-title">Mở bán căn hộ chung cư Bình Khánh Thuận Việt Quận 2 – Nhận Nhà Ngay</h2></a>
											<div className="info-loop"><b>Giá:</b> <span>36tr/m2</span></div>
											<div className="info-loop"><b>Vị trí:</b> 27 Mai Chí Thọ, Thủ Thiêm, Quận 2</div>
											<div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/can-ho-chung-cu-binh-khanh-thuan-viet/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/can-ho-chung-cu-binh-khanh-thuan-viet/%20-%20M%e1%bb%9f%20b%c3%a1n%20c%c4%83n%20h%e1%bb%99%20chung%20c%c6%b0%20B%c3%acnh%20Kh%c3%a1nh%20Thu%e1%ba%adn%20Vi%e1%bb%87t%20Qu%e1%ba%adn%202%20%e2%80%93%20Nh%e1%ba%adn%20Nh%c3%a0%20Ngay"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/can-ho-chung-cu-binh-khanh-thuan-viet/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/can-ho-chung-cu-binh-khanh-thuan-viet/&media=https://giahungland.vn/wp-content/uploads/2017/08/can-ho-chung-cu-binh-khanh.jpg&description=M%e1%bb%9f%20b%c3%a1n%20c%c4%83n%20h%e1%bb%99%20chung%20c%c6%b0%20B%c3%acnh%20Kh%c3%a1nh%20Thu%e1%ba%adn%20Vi%e1%bb%87t%20Qu%e1%ba%adn%202%20%e2%80%93%20Nh%e1%ba%adn%20Nh%c3%a0%20Ngay"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../du-an/can-ho-chung-cu-binh-khanh-thuan-viet/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="duan-loop">
									<div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../du-an/mo-ban-sieu-du-raemian-glaxy-city-phu-khanh-hcm/index.html"><div className="mask" /> <img width={338} height={228} src="../wp-content/uploads/2017/06/tin-tuc-raemian-galaxy-5-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="Thiết kế tổng thể của căn hộ Raemain Galaxy City" /> </a></div>
									<div className="info-wrapper">
										<div className="info-inner"> <a href="../du-an/mo-ban-sieu-du-raemian-glaxy-city-phu-khanh-hcm/index.html"><h2 className="duan-title">Mở bán siêu dự án Raemian Galaxy City An Phú An Khánh tại Quận 2, HCM</h2></a>
											<div className="info-loop"><b>Giá:</b> <span>35tr/m2</span></div>
											<div className="info-loop"><b>Vị trí:</b> Lương Đình Của, Quận 2</div>
											<div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/mo-ban-sieu-du-raemian-glaxy-city-phu-khanh-hcm/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/mo-ban-sieu-du-raemian-glaxy-city-phu-khanh-hcm/%20-%20M%e1%bb%9f%20b%c3%a1n%20si%c3%aau%20d%e1%bb%b1%20%c3%a1n%20Raemian%20Galaxy%20City%20An%20Ph%c3%ba%20An%20Kh%c3%a1nh%20t%e1%ba%a1i%20Qu%e1%ba%adn%202,%20HCM"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/mo-ban-sieu-du-raemian-glaxy-city-phu-khanh-hcm/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/mo-ban-sieu-du-raemian-glaxy-city-phu-khanh-hcm/&media=https://giahungland.vn/wp-content/uploads/2017/06/tin-tuc-raemian-galaxy-5.jpg&description=M%e1%bb%9f%20b%c3%a1n%20si%c3%aau%20d%e1%bb%b1%20%c3%a1n%20Raemian%20Galaxy%20City%20An%20Ph%c3%ba%20An%20Kh%c3%a1nh%20t%e1%ba%a1i%20Qu%e1%ba%adn%202,%20HCM"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../du-an/mo-ban-sieu-du-raemian-glaxy-city-phu-khanh-hcm/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="duan-loop">
									<div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../du-an/can-ho-thuan-viet-quan-2-chung-cu-newcity/index.html"><div className="mask" /> <img width={338} height={228} src="../wp-content/uploads/2017/07/phoi-canh-new-city-thuan-viet-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="Phối cảnh tổng thể 4 Block cao cấp new city thuận việt" /> </a></div>
									<div className="info-wrapper">
										<div className="info-inner"> <a href="../du-an/can-ho-thuan-viet-quan-2-chung-cu-newcity/index.html"><h2 className="duan-title">CĂN HỘ THUẬN VIỆT QUẬN 2 – DỰ ÁN NEW CITY THỦ THIÊM</h2></a>
											<div className="info-loop"><b>Giá:</b> <span>38tr/m2</span></div>
											<div className="info-loop"><b>Vị trí:</b> 27 Mai Chí Thọ, Quận 2</div>
											<div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/can-ho-thuan-viet-quan-2-chung-cu-newcity/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/can-ho-thuan-viet-quan-2-chung-cu-newcity/%20-%20C%c4%82N%20H%e1%bb%98%20THU%e1%ba%acN%20VI%e1%bb%86T%20QU%e1%ba%acN%202%20%e2%80%93%20D%e1%bb%b0%20%c3%81N%20NEW%20CITY%20TH%e1%bb%a6%20THI%c3%8aM"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/can-ho-thuan-viet-quan-2-chung-cu-newcity/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/can-ho-thuan-viet-quan-2-chung-cu-newcity/&media=https://giahungland.vn/wp-content/uploads/2017/07/phoi-canh-new-city-thuan-viet.jpg&description=C%c4%82N%20H%e1%bb%98%20THU%e1%ba%acN%20VI%e1%bb%86T%20QU%e1%ba%acN%202%20%e2%80%93%20D%e1%bb%b0%20%c3%81N%20NEW%20CITY%20TH%e1%bb%a6%20THI%c3%8aM"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../du-an/can-ho-thuan-viet-quan-2-chung-cu-newcity/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="duan-loop">
									<div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../du-an/can-ho-the-cbd/index.html"><div className="mask" /> <img width={338} height={228} src="../wp-content/uploads/2017/05/can-ho-the-cbd-quan-2-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="can ho the cbd quan 2" /> </a></div>
									<div className="info-wrapper">
										<div className="info-inner"> <a href="../du-an/can-ho-the-cbd/index.html"><h2 className="duan-title">50 SUẤT NỘI BỘ CĂN HỘ THE CBD PREMIUM HOME QUẬN 2 – TỔNG CỤC II</h2></a>
											<div className="info-loop"><b>Giá:</b> <span>27tr/m2</span></div>
											<div className="info-loop"><b>Vị trí:</b> Mặt tiền đường Đồng Văn Cống, Quận 2</div>
											<div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/can-ho-the-cbd/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/can-ho-the-cbd/%20-%2050%20SU%e1%ba%a4T%20N%e1%bb%98I%20B%e1%bb%98%20C%c4%82N%20H%e1%bb%98%20THE%20CBD%20PREMIUM%20HOME%20QU%e1%ba%acN%202%20%e2%80%93%20T%e1%bb%94NG%20C%e1%bb%a4C%20II"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/can-ho-the-cbd/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/can-ho-the-cbd/&media=https://giahungland.vn/wp-content/uploads/2017/05/can-ho-the-cbd-quan-2.jpg&description=50%20SU%e1%ba%a4T%20N%e1%bb%98I%20B%e1%bb%98%20C%c4%82N%20H%e1%bb%98%20THE%20CBD%20PREMIUM%20HOME%20QU%e1%ba%acN%202%20%e2%80%93%20T%e1%bb%94NG%20C%e1%bb%a4C%20II"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../du-an/can-ho-the-cbd/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
									</div>
								</div>
							</div>
							<div className="clearfix" />
							<div className="page-nav">
								<div className="pages clearfix" />
							</div>
						</div>
					</div>
				</div>
				<section id="contact" className="contact" style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(../wp-content/uploads/2018/08/cropped-c-Michael-Sch%c3%bctz-fotolia.com_.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
					<div className="container">
						<div className="row">
							<div className="col-sm-5">
								<legend> Điền thông tin để nhận báo giá và tư vấn miễn phí</legend>
							</div>
							<div className="col-sm-7">
								<div role="form" className="wpcf7" id="wpcf7-f1341-o1" lang="vi" dir="ltr">
									<div className="screen-reader-response" />
									<form action="https://giahungland.vn/can-ho-chung-cu-quan-2/#wpcf7-f1341-o1" method="post" className="wpcf7-form" noValidate="novalidate">
										<div style={{ display: 'none' }}> <input type="hidden" name="_wpcf7" defaultValue={1341} /> <input type="hidden" name="_wpcf7_version" defaultValue="5.0.3" /> <input type="hidden" name="_wpcf7_locale" defaultValue="vi" /> <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f1341-o1" /> <input type="hidden" name="_wpcf7_container_post" defaultValue={0} /></div>
										<p><span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Họ tên *" /></span></p>
										<div className="row" style={{ marginBottom: 10 }}>
											<div className="col-sm-6"> <span className="wpcf7-form-control-wrap your-phone"><input type="tel" name="your-phone" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" aria-required="true" aria-invalid="false" placeholder="Số điện thoại *" /></span></div>
											<div className="col-sm-6"> <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email form-control" aria-invalid="false" placeholder="Địa chỉ Email" /></span></div>
										</div>
										<p><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols={40} rows={3} className="wpcf7-form-control wpcf7-textarea form-control" aria-invalid="false" placeholder="Nội dung" defaultValue={""} /></span></p>
										<p><input type="submit" defaultValue="Gửi đi" className="wpcf7-form-control wpcf7-submit btn-warning btn giahung-btn" /></p>
										<div className="wpcf7-response-output wpcf7-display-none" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</section> <a href="tel:0907015588"><div className="call-wrapper pulse-button"> <i className="element-animation fa fa-2x fa-phone" /></div> </a>
				<div className="footer-cta"> <a href="tel:0907015588"><i className="element-animation fa fa-phone" /> 0907 01 55 88</a> <a href="#contact">Yêu cầu thông tin</a></div>
			</div>

		);
	}
}

export default Project;