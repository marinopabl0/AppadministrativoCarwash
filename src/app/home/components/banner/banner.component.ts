import { Component, OnInit, AfterViewInit } from "@angular/core";
import Swiper from "swiper";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;

  images: string[] = [
    "../../../../assets/images/banner-1.webp",
    "../../../../assets/images/banner-2.webp",
    "../../../../assets/images/banner-3.webp"
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // inicializar librería swiper
    this.mySwiper = new Swiper(".swiper-container", {
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  } // fin ngAfterViewInit
} // fin class
