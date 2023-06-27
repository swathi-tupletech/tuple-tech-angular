import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

// import * as $ from 'jquery'
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  route: any;
  // constructor() { }
  constructor(config: NgbCarouselConfig, private router: Router, private elRef: ElementRef) {
    // customize default values of carousels used by this component tree
    config.interval = 112000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;

    config.showNavigationArrows = true;
    console.log(this.router.url)
    this.route = this.router.url;
  }
  images: any;
  div: any;
  ngAfterViewInit() {
    if (this.route == '/home/partners')
      this.div = this.elRef.nativeElement.querySelector('#partners');

    // scroll(this.div) {
    console.log(typeof (this.div))
    //   this.div.scrollIntoView();
    // }
  }

  ngOnInit(): void {



    (<any>$('.items')).slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [

        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  }

}
