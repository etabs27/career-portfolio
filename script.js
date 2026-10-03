const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const slider=document.querySelector('.work-samples-slider');
if(slider){
	const track=slider.querySelector('.work-samples-grid');
	const slides=Array.from(track.querySelectorAll('.work-sample-card'));
	const previous=slider.querySelector('[data-slide-prev]');
	const next=slider.querySelector('[data-slide-next]');
	const count=slider.querySelector('.work-sample-count');
	const dots=Array.from(slider.querySelectorAll('[data-slide-to]'));
	const viewport=slider.querySelector('.work-samples-viewport');
	let activeSlide=0;

	function showSlide(index){
		activeSlide=(index+slides.length)%slides.length;
		track.style.transform=`translateX(-${activeSlide*100}%)`;
		count.textContent=`${String(activeSlide+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
		slides.forEach((slide,slideIndex)=>{
			const isActive=slideIndex===activeSlide;
			slide.setAttribute('aria-hidden',String(!isActive));
			slide.setAttribute('aria-label',`${slideIndex+1} of ${slides.length}${isActive?', current slide':''}`);
		});
		dots.forEach((dot,dotIndex)=>dot.setAttribute('aria-pressed',String(dotIndex===activeSlide)));
	}

	previous.addEventListener('click',()=>showSlide(activeSlide-1));
	next.addEventListener('click',()=>showSlide(activeSlide+1));
	dots.forEach((dot,index)=>dot.addEventListener('click',()=>showSlide(index)));
	slider.addEventListener('keydown',event=>{
		if(event.key==='ArrowLeft'){
			event.preventDefault();
			showSlide(activeSlide-1);
		}else if(event.key==='ArrowRight'){
			event.preventDefault();
			showSlide(activeSlide+1);
		}
	});

	let touchStartX=null;
	viewport.addEventListener('touchstart',event=>{touchStartX=event.changedTouches[0].clientX},{passive:true});
	viewport.addEventListener('touchend',event=>{
		if(touchStartX===null)return;
		const swipeDistance=event.changedTouches[0].clientX-touchStartX;
		if(Math.abs(swipeDistance)>40)showSlide(activeSlide+(swipeDistance<0?1:-1));
		touchStartX=null;
	},{passive:true});
}
