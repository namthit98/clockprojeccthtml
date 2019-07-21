document.addEventListener("DOMContentLoaded", function(){
	drop_list_responsive();
	show_search_box();
	drop_list_search();
	chuyen_silde_cho_chi_tiet_sp();
	click_to_see_detail_product();
	zoom(e);
	

}, false)


function drop_list_responsive(){
	var nav = document.querySelector('#click-to-drop-list');
	var drop_list = document.querySelector('#drop-list');
	var icon = document.querySelector('#icon');
	nav.onclick = function(){
		icon.classList.toggle('doimau');
		drop_list.classList.toggle('show-content-res');
	}
}

function drop_list_search(){
	var search_btn = document.querySelector('#search-product');
	var drop_list = document.querySelector('#drop-list-two');
	var icon_search = document.querySelector('#search-icon');
	search_btn.onclick = function(){
		icon_search.classList.toggle('doimau');
		drop_list.classList.toggle('show-content-res');
	}

}

function show_search_box(){
	var search_button = document.querySelector('#search');
	var search_container = document.querySelector('#search-container');
	var back_ground = document.querySelector('#back-ground-search');
	search_button.onclick = function(){
		search_container.classList.add('show-search-container');
		back_ground.classList.add('background-search-show');
	}

	back_ground.onclick = function(){
		search_container.classList.remove('show-search-container');
		back_ground.classList.remove('background-search-show');
	}
}

$('body').keydown(function(e) {
	if(e.which === 27) {
		$('#myModal').modal('hide')
	}
});

function chuyen_silde_cho_chi_tiet_sp(){
	var nut = document.querySelectorAll('.move-slide ul li');
	var slides = document.querySelectorAll('.slide-box ul li');
	for(var i=0 ; i<nut.length; i++){
		nut[i].addEventListener('click', function(){
			for(var i =0 ; i<nut.length; i++){
				nut[i].classList.remove('active');
			}
			this.classList.add('active');

			var nut_kich_hoat = this;
			var vi_tri_nut = 0;

			for(vi_tri_nut = 0; nut_kich_hoat = nut_kich_hoat.previousElementSibling; vi_tri_nut++){

			}

			for(var i = 0; i<slides.length; i++){
				slides[i].classList.remove('active-slide');
				slides[vi_tri_nut].classList.add('active-slide');
			}

		})
	}
}

function click_to_see_detail_product(){
	var descrip_btn_one = document.querySelector('#desciption-btn-1');
	var descrip_btn_two = document.querySelector('#desciption-btn-2');
	var des = document.querySelector('#description');
	var spec = document.querySelector('#specifications');
	descrip_btn_one.onclick = function(){
		descrip_btn_two.classList.remove('active-des');
		descrip_btn_one.classList.add('active-des');
		spec.style.display = 'none';
		des.style.display = 'block';
	}

	descrip_btn_two.onclick = function(){
		descrip_btn_one.classList.remove('active-des');
		descrip_btn_two.classList.add('active-des');
		des.style.display = 'none';
		spec.style.display = 'flex';
	}

}

function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

