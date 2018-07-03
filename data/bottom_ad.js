<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Using Zend Framework 3 Chapter - Bottom - Adaptive -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3933778336056438"
     data-ad-slot="1546211126"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>


$(function() {
 
 var popupDiv = `
<div id="contact_popup">
   <h1>Contact</h1>
   <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
 </div>
</div>`;
 
 $('body').append(popupDiv);
 
 animateSlider(this.hash);
 
 function animateSlider(hash) {
   if (!$('#container div.open').length) {
     if (hash == '#about') {
       openPopup(hash);
     }
     if (hash == '#contact') {
       openPopup(hash);
     }
   } else {
     if (hash == '#about') {
       openAndClose(hash)
     }
     if (hash == '#contact') {
       openAndClose(hash)
     }
   }
 }
 
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
 
});