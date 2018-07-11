<script>
$(document).ready(function() {

$(document).on('click', '#contact-close', function(event){
    event.preventDefault();
    setCookie('contact-cookie', '1', 30);
    $('#contact_popup').slideToggle();
});

if ($(document).width() < 640) {
    return; // Don't show this popup on small devices
}
 
var style = `
<style>
#contact_popup {
 width:360px;
 padding:20px;
 background:#4185f2;
 position:fixed;
 left:50%;
 margin-left: -180px;
 bottom:0;
 padding: 10px;
 display:none;
 -moz-border-radius-topleft:20px;
 -moz-border-radius-topright:20px;
 -webkit-border-top-left-radius:20px;
 -webkit-border-top-right-radius:20px;
}
#contact_popup h1 {
 margin-top: 0;
 color:#fff;
 font-size:20px;
}
#contact_popup p {
 margin:0;
 color:#fff;
}

.contact-btn {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.btn-yes {
    background-color: #4CAF50; /* Green */
}

.btn-no {
    background-color: red;
}
</style> 
`;

$('head').append(style);
 
 var popupDiv = `
<div id="contact_popup">
   <h1>Need Help with ZF3?</h1>
   
   <p>You can contact Oleg (author of this book) to get paid consulting and/or ZF3 development assistance.</p>
   <br>
   <p>
     <a class="contact-btn btn-yes" href="https://olegkrivtcov.wordpress.com/contact/">Contact now</a>&nbsp;&nbsp;<a id="contact-close" class="contact-btn btn-no" href="#">Not Now</a>
   </P>
 </div>
</div>`;
 
 $('body').append(popupDiv);

var cookie = getCookie('contact-cookie');

if (cookie)
    return; // Don't show this popup if user refused

if (Math.floor(Math.random() * 50) > 1) {
    return; // Show this popup in 2% of views
}

$('#contact_popup').slideToggle();
 
 function openPopup(hash) {
   $(hash + '_popup').slideToggle().addClass('open');
 }
 
 function openAndClose(hash) {
   if ($(hash + '_popup').hasClass('open')) {
     $($(hash + '_popup')).slideToggle().removeClass();
   } else {
     $('#container div.open').slideToggle().removeClass();
     $(hash + '_popup').slideToggle().addClass('open');
   }
 }
 
 function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
 
});
</script>