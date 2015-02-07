<h1>Simple Slider</h1>
<p>
Hi everyone, this is a very simple slider I have created for my personal needs. I was looking for something without a timer that automatically switched slides without the use of arrows.
After a lot of research I decided to create one by myself, it was faster than taking one and changing it.
</p>
<h2>Different classes for each layout</h2>
<p>There are 3 different layouts for each slide.
<ul>
<li><strong>imageSlide</strong> this is for a slide with an sull size image</li>
<li><strong>imageTextSlide</strong> this is the layout for image and text</li>
<li><strong>onlyTextSlide</strong> this is a layout with only text</li>
</ul>
</p>
<h4>imageSlide</h4>
In this layout you can only use the <code>img</code> tag. Feel free to add any further class or style with a personalized <code>css</code>.
</p>
<h4>imageTextSlide</h4>
<p>In this layout you can have both an image and text.<br/>
For the image, as previously stated, use the <code>img</code> tag.<br/>
For adding text, wrap it in <code>&lt;div class="text"&gt;&lt;/div&gt;</code>. You can use any tag you want and style them as you wish. For example <code>ul, ol, h1, h2, p,</code> etc…
</p>
<h4>onlyTextSlide</h4>
<p>And last, but not least, the slide with only text. As with the <code>imageTextSlide</code>, you can add any tag you need.<br/>
<sup>tThere is also the possibility to add images, but it was not designed for that use.</sup>
</p>
<h2>The elements</h2>
<h4>The Caption</h4>
<p>
Every slide has a caption contained in <code>&lt;p class="caption"&gt;&lt;/p&gt;</code>. Here you are not allowed to add any further tag, but feel free to add a class in order to style it.
</p>
<h4>The navbar</h4>
<p>The navbar is very easy to use. If you need to add a new slide, just add a new div but make sure it has the correct classes
<i><code>nav nav</code>+ the number of slide</i>, so it will be <code>&lt;div class="nav nav<strong>1</strong>"&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;</code>
</p>
<h4>Adding a new slide</h4>
<p>The structure of each slide is<br/><br/>
&nbsp;&nbsp;<code>&lt;div class="single-slide <strong>imageTextSlide</strong> slide1"&gt;</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;img src="img/img1.png"/&gt;</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;div class="text"&gt;</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;/div&gt;</code><br>
&nbsp;&nbsp;<code>&lt;p class="caption"&gt;CAPTION ONE&lt;/p&gt;</code><br>
<code>&lt;/div&gt;</code><br/><br/>
This is the full structure with both image and text. Keep in mind not to alter the classes I've used and if you want to add a new slide just change the class number.
For example <code>single-slide imageTextSlide slide<strong>1</strong></code>.
</p>
<h4>active (class)</h4>
<p>TThe class active, will indicate to you which slide is visible. In my example, the class is on the first slide, but if you want to start from a different slide, just add active to a different one.
Remember to move it onto the corresponding button on the navbar.
<code>navbar</code>
</p>
