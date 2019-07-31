import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Baitap1Component } from "./baitap1/baitap1.component";
import { Baitap1HeaderComponent } from "./baitap1/baitap1-header/baitap1-header.component";
import { Baitap1ContentComponent } from "./baitap1/baitap1-content/baitap1-content.component";
import { Baitap1SidebarComponent } from "./baitap1/baitap1-sidebar/baitap1-sidebar.component";
import { Baitap1FooterComponent } from "./baitap1/baitap1-footer/baitap1-footer.component";
import { Baitap2Component } from "./baitap2/baitap2.component";
import { Baitap2HeaderComponent } from "./baitap2/baitap2-header/baitap2-header.component";
import { Baitap2CarouselComponent } from "./baitap2/baitap2-carousel/baitap2-carousel.component";
import { Baitap2WhatwedoComponent } from "./baitap2/baitap2-whatwedo/baitap2-whatwedo.component";
import { Baitap2ContactusComponent } from "./baitap2/baitap2-contactus/baitap2-contactus.component";
import { Baitap2ListcardComponent } from "./baitap2/baitap2-listcard/baitap2-listcard.component";
import { Baitap2FooterComponent } from "./baitap2/baitap2-footer/baitap2-footer.component";
import { Baitap2ItemcardComponent } from "./baitap2/baitap2-listcard/baitap2-itemcard/baitap2-itemcard.component";
import { Baitap3Module } from "./baitap3/baitap3.module";
import { Baitap4Module } from "./baitap4/baitap4.module";

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2CarouselComponent,
    Baitap2WhatwedoComponent,
    Baitap2ContactusComponent,
    Baitap2ListcardComponent,
    Baitap2FooterComponent,
    Baitap2ItemcardComponent
  ],
  imports: [BrowserModule, Baitap3Module, Baitap4Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
