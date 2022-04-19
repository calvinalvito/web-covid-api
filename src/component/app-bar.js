class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
        .footer
		{

			background-color:#eef6f4;
			padding:45px 0 20px;
			padding-right:25px;
			line-height:24px;
			color:#737373;
		}
		.footer hr
		{
			border-top-color:#bbb;
			opacity:0.5
		}
		.footer hr.small
		{
			margin:20px 0
		}
		.footer h6
		{
			font: bold;
			color:black;
			margin-top:5px;
			letter-spacing:2px
		}
		.site-footer a
		{
			color:#737373;
		}
		.site-footer a:hover
		{
			color:#3366cc;
			text-decoration:none;
		}
		.footer-links
		{
			padding-left:0;
			list-style:none
		}
		.footer-links li
		{
			display:block
		}
		.footer-links a
		{
			color:#737373
		}
		.footer-links a:active,.footer-links a:focus,.footer-links a:hover
		{
			color:#3366cc;
			text-decoration:none;
		}
		.footer-links.inline li
		{
			display:inline-block
		}
		.site-footer .social-icons
		{
			text-align:right
		}
		.site-footer .social-icons a
		{
			width:40px;
			height:40px;
			line-height:40px;
			margin-left:6px;
			margin-right:0;
			border-radius:100%;
			background-color:#33353d
		}
		.copyright-text
		{
			margin:0
		}
		@media (max-width:991px)
		{
			.site-footer [class^=col-]
			{
			margin-bottom:30px
			}
		}
		@media (max-width:767px)
		{
			.site-footer
			{
			padding-bottom:0
			}
			.site-footer .copyright-text,.site-footer .social-icons
			{
			text-align:center
			}
		}
			</style>
        <footer class="site-footer">
		<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-6">
			<h6>About</h6>
			<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="col-xs-6 col-md-3">
			<h6>Categories</h6>
			<ul class="footer-links">
				<li><a href="#">Data Covid Jakarta</a></li>
				<li><a href="#">Data Covid Bali</a></li>
				<li><a href="#">Data Covid Surakarta</a></li>
				<li><a href="#">Data Covid Maluku</a></li>
				<li><a href="#">Data Covid Bandung</a></li>
			</ul>
			</div>

			<div class="col-xs-6 col-md-3">
			<h6>Quick Links</h6>
			<ul class="footer-links">
				<li><a href="#">About Us</a></li>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Contribute</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Sitemap</a></li>
			</ul>
			</div>
		</div>
		<hr>
		</div>
	</footer>
     `;
    }
 }
 customElements.define("app-bar", AppBar);