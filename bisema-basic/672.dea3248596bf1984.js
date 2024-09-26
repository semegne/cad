"use strict";(self.webpackChunkbisema_basic=self.webpackChunkbisema_basic||[]).push([[672],{2672:(pt,O,s)=>{s.r(O),s.d(O,{CatalogueModule:()=>_});var c=s(6895),r=s(6491),y=s(9579),b=s(5133),p=s(2687),t=s(1571),T=s(6814),v=s(2216);class x{constructor(a){this.store=a,this.faClipboard=p.Yjj,this.company=null,this.catalogue=null}getCompany(){this.store.select(b.p).subscribe({next:a=>{this.company=a}})}getCatalogue(){this.store.select(y.P).subscribe({next:a=>{this.catalogue=a}})}ngOnInit(){this.getCompany(),this.getCatalogue()}}x.\u0275fac=function(a){return new(a||x)(t.Y36(T.yh))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-catalogue"]],decls:13,vars:5,consts:[[1,"card","bg-main","border-0","rounded-0"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"d-flex","flex-md-row","flex-column","justify-content-between","align-items-center"],["href","https://teams.microsoft.com","target","_blank",1,"navbar-brand"],["src","../../../assets/img/ms-teams.jpg","alt","logo","height","25"],["type","button",1,"btn"],[3,"icon"],[1,"card-body","p-0","catalogue-body"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3),t.ALo(4,"uppercase"),t.qZA(),t.TgZ(5,"div",2)(6,"a",3),t._UZ(7,"img",4),t.qZA(),t.TgZ(8,"button",5),t._UZ(9,"fa-icon",6),t._uU(10," Dealers Board "),t.qZA()()(),t.TgZ(11,"div",7),t._UZ(12,"router-outlet"),t.qZA()()),2&a&&(t.xp6(3),t.AsE("",t.lcZ(4,3,null==e.company||null==e.company.company?null:e.company.company.CompanyName)," | ",null==e.catalogue?null:e.catalogue.desc,""),t.xp6(6),t.Q6J("icon",e.faClipboard))},dependencies:[v.BN,r.lC,c.gd]});var h=s(2340),A=s(5136);class g extends A.b{constructor(a){super(a)}getCatalogueFile(a,e){return this._networkService.get(`assets/${a}/${e}/catalogue_text.txt`,{responseType:"text"})}getGalleryImages(a,e){return this._networkService.get(`gallery/${a}/${e}`)}}g.\u0275fac=function(a){return new(a||g)(t.LFG(t.zs3))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac});var N=s(3947);function L(n,a){if(1&n&&(t.TgZ(0,"span")(1,"a",7),t._uU(2),t.ALo(3,"uppercase"),t.qZA(),t._uU(4," | "),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",e.router),t.xp6(1),t.hij(" ",t.lcZ(3,2,e.name)," ")}}function S(n,a){if(1&n&&(t.TgZ(0,"span",8),t._uU(1),t.ALo(2,"uppercase"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.name),"")}}function w(n,a){if(1&n&&(t.ynx(0),t.YNc(1,L,5,4,"span",5),t.YNc(2,S,3,3,"span",6),t.BQk()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("ngIf",null!=e.router),t.xp6(1),t.Q6J("ngIf",null==e.router)}}class m{constructor(){this.baseUrl=h.N.baseUrl,this.faCircle=p.diR,this.data={}}ngOnChanges(a){}}function q(n,a){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",4),t.TgZ(2,"h5",5),t._uU(3),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",null==e.data?null:e.data.imgUrl,t.LSH),t.xp6(2),t.Oqu(null==e.result?null:e.result.DESCRIPTIONS.TEXT.Text)}}function F(n,a){if(1&n&&(t.TgZ(0,"div")(1,"h5",5),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(null==e.result?null:e.result.LONG_DESC.TEXT.Text)}}function M(n,a){if(1&n&&(t.TgZ(0,"li",8),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.DESCRIPTIONS.TEXT.Text)}}function J(n,a){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,M,2,1,"li",7),t.qZA()),2&n){const e=a.index;t.xp6(1),t.Q6J("ngIf",e<7)}}function $(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,J,2,1,"ul",6),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==e.result?null:e.result.LEVEL.LABEL)}}function Q(n,a){if(1&n&&(t.TgZ(0,"div")(1,"div",9)(2,"h6"),t._uU(3,"Size:"),t.qZA(),t.TgZ(4,"p"),t._uU(5),t._UZ(6,"br"),t._uU(7," -- -- -- "),t._UZ(8,"br"),t._uU(9),t.qZA()(),t.TgZ(10,"h6",9),t._uU(11),t.ALo(12,"currency"),t.ALo(13,"currency"),t.qZA()()),2&n){const e=t.oxw();t.xp6(5),t.Oqu(null==e.catalog1?null:e.catalog1.LONG_DESC.TEXT.Text),t.xp6(4),t.hij(" ",null==e.catalog2?null:e.catalog2.LONG_DESC.TEXT.Text,""),t.xp6(2),t.AsE("Price:",t.lcZ(12,4,null==e.catalog1?null:e.catalog1.PRICES.PRICE.Text)," -- ",t.lcZ(13,6,null==e.catalog2?null:e.catalog2.PRICES.PRICE.Text),"")}}function k(n,a){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",4),t.TgZ(2,"p",10)(3,"strong"),t._uU(4),t.ALo(5,"currency"),t.qZA()()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",null==e.data?null:e.data.imgUrl,t.LSH),t.xp6(3),t.hij("Price: ",t.lcZ(5,2,null==e.result?null:e.result.PRICES.PRICE.Text),"")}}m.\u0275fac=function(a){return new(a||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-breadcrumb"]],inputs:{data:"data"},features:[t.TTD],decls:11,vars:8,consts:[[1,"d-flex","justify-content-between","align-items-center","bg-white","p-3"],[4,"ngFor","ngForOf"],["routerLink","/catalog/category",1,"clr-black"],["href","javascript:;","fileSaver","",1,"clr-red",3,"method","fileName","url"],[3,"icon"],[4,"ngIf"],["class","clr-black",4,"ngIf"],[1,"clr-black",3,"routerLink"],[1,"clr-black"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div"),t.YNc(2,w,3,2,"ng-container",1),t.qZA(),t.TgZ(3,"div")(4,"a",2),t._uU(5),t.ALo(6,"uppercase"),t.qZA(),t._uU(7," | "),t.TgZ(8,"a",3),t._UZ(9,"fa-icon",4),t._uU(10," Award "),t.qZA()()()),2&a&&(t.xp6(2),t.Q6J("ngForOf",e.data.breadcrumbs),t.xp6(3),t.hij("",t.lcZ(6,6,e.data.catalogueCode)," "),t.xp6(3),t.Q6J("method","GET")("fileName","Award.pdf")("url",e.baseUrl+"assets/"+e.data.companyCode+"/"+e.data.catalogueCode+"/awards/awards.pdf"),t.xp6(1),t.Q6J("icon",e.faCircle))},dependencies:[c.sg,c.O5,r.rH,v.BN,N.vy,c.gd]});class f{constructor(){this.data=null,this.catalogue=null,this.result=null,this.catalog1=null,this.catalog2=null}ngOnChanges(a){"category"==this.data?.type?this.categoryData(this.data):"sub-category"==this.data?.type?this.subCategoryData(this.data):this.productsData(this.data)}categoryData(a){this.result=this.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL.find(e=>e.id==a.id)}subCategoryData(a){this.result=this.data?.productCatalogue.LEVEL.LABEL.find(e=>e.id==a.id),this.catalog1=this.catalogue.ITEMS.ITEM.find(e=>e.id==this.result.TOC_ITEMS.TOC_ITEM[0].id),this.catalog2=this.catalogue.ITEMS.ITEM.find(e=>e.id==this.result.TOC_ITEMS.TOC_ITEM[this.result.TOC_ITEMS.TOC_ITEM.length-1].id)}productsData(a){this.result=this.catalogue.ITEMS.ITEM.find(e=>e.id==a.id)}}function B(n,a){if(1&n&&(t.TgZ(0,"div")(1,"small",10),t._uU(2,"About Catalogue:"),t.qZA(),t.TgZ(3,"h6"),t._uU(4),t.qZA(),t._UZ(5,"hr",5),t.TgZ(6,"pre",11),t._uU(7),t.qZA()()),2&n){const e=t.oxw();t.xp6(4),t.hij("What is ",null==e.catalogue?null:e.catalogue.code,""),t.xp6(3),t.Oqu(e.catalogueDescritption)}}function Y(n,a){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-info-modal",12),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("data",e.infoData)("catalogue",e.catalogue)}}f.\u0275fac=function(a){return new(a||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-info-modal"]],inputs:{data:"data",catalogue:"catalogue"},features:[t.TTD],decls:8,vars:5,consts:[[1,"card","mx-auto","w-20","shadow","bg-light-purple","rounded-3",2,"max-width","20rem"],[1,"card-body"],[4,"ngIf"],[1,"border-dark"],["width","100px","height","100px","alt","",1,"rounded","mx-auto","d-block",3,"src"],[1,"card-title","text-center","mt-2"],[4,"ngFor","ngForOf"],["class","fw-bold",4,"ngIf"],[1,"fw-bold"],[1,"text-center"],[1,"text-center","mt-2"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,q,4,2,"div",2),t.YNc(3,F,3,1,"div",2),t._UZ(4,"hr",3),t.YNc(5,$,2,1,"div",2),t.YNc(6,Q,14,8,"div",2),t.YNc(7,k,6,4,"div",2),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("ngIf","products"!=(null==e.data?null:e.data.type)),t.xp6(1),t.Q6J("ngIf","products"==(null==e.data?null:e.data.type)),t.xp6(2),t.Q6J("ngIf","category"==(null==e.data?null:e.data.type)),t.xp6(1),t.Q6J("ngIf","sub-category"==(null==e.data?null:e.data.type)),t.xp6(1),t.Q6J("ngIf","products"==(null==e.data?null:e.data.type)))},dependencies:[c.sg,c.O5,c.H9]});class P{constructor(a,e){this.store=a,this.catalogService=e,this.baseUrl=h.N.baseUrl,this.company=null,this.catalogue=null,this.breadcrumbData={},this.catalogueDescritption="",this.infoModal=!1,this.infoData={}}getCompany(){this.store.select(b.p).subscribe({next:a=>{a?.company&&(this.company=a,this.breadcrumbData.companyCode=this.company?.company?.CompanyName,this.getCatalogue())}})}getCatalogue(){this.store.select(y.P).subscribe({next:a=>{a?.catalogueCode&&(this.breadcrumbData.breadcrumbs=[],this.catalogue=a,this.breadcrumbData.catalogueCode=this.catalogue.catalogueCode,this.breadcrumbData.breadcrumbs.push({name:this.company?.company?.CompanyName,router:null}),this.getCatalogFile())}})}getCatalogFile(){this.catalogService.getCatalogueFile(this.company?.company?.CompanyName,this.catalogue?.catalogueCode).subscribe({next:a=>{this.catalogueDescritption=a}})}mouseIn(a){this.infoModal=!0,this.infoData.type="category",this.infoData.id=a.id,this.infoData.imgUrl=`${this.baseUrl}assets/${this.company?.company?.CompanyName}/${this.catalogue?.catalogueCode}/labels_icons/${a.id}.png`}mouseOut(){this.infoModal=!1}ngOnInit(){this.getCompany()}}P.\u0275fac=function(a){return new(a||P)(t.Y36(T.yh),t.Y36(g))},P.\u0275cmp=t.Xpm({type:P,selectors:[["app-category"]],decls:13,vars:7,consts:[[3,"data"],[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-6","col-12"],[4,"ngIf"],[1,"border-dark"],[1,"mt-3"],[1,"embed-responsive","embed-responsive-16by9"],["controls","",1,"embed-responsive-item","w-100"],["type","video/mp4",3,"src"],[1,"text-muted"],[1,"description"],[3,"data","catalogue"]],template:function(a,e){1&a&&(t._UZ(0,"app-breadcrumb",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,B,8,2,"div",4),t.YNc(5,Y,2,2,"div",4),t.TgZ(6,"div"),t._UZ(7,"hr",5),t.TgZ(8,"h6",6),t._uU(9),t.qZA(),t.TgZ(10,"div",7)(11,"video",8),t._UZ(12,"source",9),t.qZA()()()()()()),2&a&&(t.Q6J("data",e.breadcrumbData),t.xp6(4),t.Q6J("ngIf",!e.infoModal),t.xp6(1),t.Q6J("ngIf",e.infoModal),t.xp6(4),t.hij("",null==e.catalogue?null:e.catalogue.code," Video"),t.xp6(3),t.cQ8("src","",e.baseUrl,"assets/",null==e.company||null==e.company.company?null:e.company.company.CompanyName,"/",null==e.catalogue?null:e.catalogue.catalogueCode,"/video.mp4",t.LSH))},dependencies:[c.O5,m,f],styles:[".description[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif}.h_line[_ngcontent-%COMP%]{background-color:#000;color:#000;width:60%;height:5px;line-height:50%}"]});var u=s(433),R=s(6916),G=s(7185),j=s(7103);function X(n,a){if(1&n&&(t.TgZ(0,"option",33)(1,"a",34),t._uU(2),t.qZA()()),2&n){const e=a.$implicit;t.Q6J("ngValue",e.url),t.xp6(1),t.Q6J("method","GET")("fileName",e.name)("url",e.url),t.xp6(1),t.hij(" ",e.fullName," ")}}function H(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1," / price:0"),t.qZA())}function V(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.AsE(" -> ",o.singleProductData.finishName[e]," | ",o.singleProductData.finishPrice[e],"")}}const z=function(n,a){return{"bg-purple text-white":n,"clr-grey":a}};function K(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"a",40),t.NdJ("click",function(){const l=t.CHM(e).$implicit,d=t.oxw().index,I=t.oxw();return t.KtG(I.finish(l.id,l.name,d,l.PRICES.PRICE.Text,l.DESCRIPTIONS.TEXT.Text))}),t._uU(2),t.qZA()()}if(2&n){const e=a.$implicit,o=t.oxw().index,i=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(2,z,e.name==i.singleProductData.finishCode[o],e.name!=i.singleProductData.finishCode[o])),t.xp6(1),t.hij(" ",e.DESCRIPTIONS.TEXT.Text," ")}}const U=function(n,a){return{"clr-red":n,"text-success":a}};function W(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",35)(1,"a",36),t.NdJ("click",function(){const l=t.CHM(e).index,d=t.oxw();return t.KtG(d.finishCollapseToggle(l))}),t._UZ(2,"fa-icon",28),t._uU(3),t.YNc(4,H,2,0,"span",37),t.YNc(5,V,2,2,"span",37),t.qZA(),t.TgZ(6,"div",38,39),t.YNc(8,K,3,5,"div",19),t.qZA()()}if(2&n){const e=a.$implicit,o=a.index,i=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(7,U,null==i.singleProductData.finishImages[o],null!=i.singleProductData.finishImages[o])),t.xp6(1),t.Q6J("icon",i.faCaretDown),t.xp6(1),t.hij(" ",e.grp.DESCRIPTIONS.TEXT.Text," "),t.xp6(1),t.Q6J("ngIf",null==i.singleProductData.finishPrice[o]),t.xp6(1),t.Q6J("ngIf",null!=i.singleProductData.finishPrice[o]),t.xp6(1),t.Q6J("ngbCollapse",e.collapse),t.xp6(2),t.Q6J("ngForOf",i.singleProductData.finishOptions[o])}}function tt(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e)}}function et(n,a){if(1&n&&(t.TgZ(0,"div",41)(1,"a",42),t._UZ(2,"img",43),t.ALo(3,"lowercase"),t.TgZ(4,"div",44),t._uU(5),t.qZA()()()),2&n){const e=a.$implicit,o=t.oxw();t.xp6(1),t.FAE("routerLink","/catalogue/",o.company.company.CompanyName,"/product/",null==o.productCatalogue?null:o.productCatalogue.id,"/",null==o.subProductCatalogue?null:o.subProductCatalogue.id,"/",e.id,""),t.xp6(1),t.FAE("src","",o.baseUrl,"assets/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/",null==o.catalogue?null:o.catalogue.catalogueCode,"/prod_icons/",t.lcZ(3,9,e.id),"_3d.png",t.LSH),t.xp6(3),t.hij(" ",e.id," ")}}class Z{constructor(a,e,o,i,l,d,I,ut){this.store=a,this.route=e,this.catalogueService=o,this.fb=i,this.busService=l,this.toastr=d,this._FileSaverService=I,this.baseUrl=h.N.baseUrl,this.appUrl=h.N.appUrl,this.faCaretDown=p.eW2,this.faShoppingCart=p.sq$,this.faDownload=p.q7m,this.faCubesStacked=p.hGM,this.faArrowRotateBack=p.SD9,this.finishCollapse=[],this.company=null,this.catalogue=null,this.productCatalogue=null,this.subProductCatalogue=null,this.breadcrumbData={},this.codeChk=!1,this.singleProductData={id:null,item:null,group:[],price:null,description:null,finishImages:[],finishOptions:[],finishCode:[],finishPrice:[],finishName:[],qty:1},this.qty=new u.NI({value:"1",disabled:!0}),this.pdfControl=new u.NI(""),this.price=null,this.pdfs=[{fullName:"ANSI / BIFMA-Certificates",name:"anci_bifma_certificate.pdf",folder:"prod_certificates",url:""},{fullName:"Price Product Guide",name:"price_product_guide.pdf",folder:"price_guide",url:""},{fullName:"Installation Guide",name:"installation_guide.pdf",folder:"installation_guide",url:""},{fullName:"Environment Data",name:"environment_report.pdf",folder:"env_data",url:`${this.baseUrl}assets/${this.company?.company?.CompanyName}/${this.catalogue?.catalogueCode}/labels/${this.productCatalogue?.id}/env_data/${this.subProductCatalogue?.id}.pdf`}],this.autoCadForm=this.fb.group({dwg_2d:[""],dxf_2d:[""],rvt_2d:[""],dwg_3d:[""],dxf_3d:[""],rvt_3d:[""]}),ut.events.subscribe({next:dt=>{dt instanceof r.m2&&this.getCatalogue()}})}getCompany(){this.store.select(b.p).subscribe({next:a=>{a?.company&&(this.company=a,this.breadcrumbData.companyCode=this.company?.company?.CompanyName,this.getCatalogue())}})}getCatalogue(){let a=this.route.snapshot.paramMap.get("categoryId"),e=this.route.snapshot.paramMap.get("subCategoryId");this.store.select(y.P).subscribe({next:o=>{o?.catalogueCode&&(this.breadcrumbData.breadcrumbs=[],this.catalogue=o,this.productCatalogue=o.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL.find(i=>i.id==a),this.subProductCatalogue=this.productCatalogue?.LEVEL.LABEL.find(i=>i.id==e),this.breadcrumbData.catalogueCode=o.catalogueCode,this.setPdf(),this.getProduct())}})}getProduct(){let a=this.route.snapshot.paramMap.get("productId");if(this.breadcrumbData.breadcrumbs=[{name:this.company?.company?.CompanyName,router:`/catalogue/${this.company?.company?.CompanyName}/category`},{name:this.productCatalogue?.DESCRIPTIONS.TEXT.Text,router:`/catalogue/${this.company?.company?.CompanyName}/sub-category/${this.productCatalogue?.id}`},{name:this.subProductCatalogue?.DESCRIPTIONS.TEXT.Text,router:`/catalogue/${this.company?.company?.CompanyName}/products/${this.productCatalogue?.id}/${this.subProductCatalogue?.id}`},{name:a,router:null}],this.singleProductData.group=[],this.singleProductData.finishImages=[],this.singleProductData.finishCode=[],this.singleProductData.finishPrice=[],this.singleProductData.finishName=[],this.singleProductData.finishOptions=[],this.singleProductData.id=a,this.singleProductData.item=this.catalogue?.ITEMS.ITEM.find(o=>o.id==this.singleProductData?.id),this.singleProductData.qty=1,this.singleProductData.item?.ITEM_GROUPS.ITEM_GROUP instanceof Array)this.singleProductData.item?.ITEM_GROUPS.ITEM_GROUP.forEach((o,i)=>{this.productGroup(o.id,i)});else{let o=this.singleProductData.item?.ITEM_GROUPS.ITEM_GROUP.id;this.productGroup(o,0)}this.singleProductData.price=parseFloat(this.singleProductData.item?.PRICES.PRICE.Text),this.company&&this.getProductSectionTextFile(),this.price=this.singleProductData.price.toFixed(2)}productGroup(a,e){let o=this.catalogue?.GROUPS.GROUP.find(i=>i.id==a);this.singleProductData.group.push({grp:o,collapse:!0}),this.finishCollapse.push(!0),this.singleProductData.finishCode.push(" ??"),o?.OPTIONS.OPTION instanceof Array?this.singleProductData.finishOptions[e]=o?.OPTIONS.OPTION:(this.singleProductData.finishOptions[e]=[],this.singleProductData.finishOptions[e].push(o?.OPTIONS.OPTION))}getProductSectionTextFile(){this.productCatalogue?.id&&this.subProductCatalogue?.id&&this.catalogueService.getSectionTextFile(this.productCatalogue?.id,this.subProductCatalogue?.id,this.catalogue?.catalogueCode,this.company?.company?.CompanyName).subscribe({next:a=>{this.singleProductData.description=a}})}finish(a,e,o,i,l){this.singleProductData.finishImages[o]=a,this.singleProductData.finishCode[o]=e,this.singleProductData.finishName[o]=l;let d=this.singleProductData.finishCode.find(I=>" ??"==I);null!=i&&null==this.singleProductData.finishPrice[o]&&(this.singleProductData.finishPrice[o]=parseFloat(i),this.price=+this.price+ +this.singleProductData.finishPrice[o],this.price=parseFloat(this.price).toFixed(2)),null==d&&(this.codeChk=!0)}finishCollapseToggle(a){this.singleProductData.group.forEach((e,o)=>{e.collapse=o!=a||!e.collapse})}setPdf(){this.pdfs.forEach(a=>{a.url=`${this.baseUrl}assets/${this.company?.company?.CompanyName}/${this.catalogue?.catalogueCode}/labels/${this.productCatalogue?.id}/${a.folder}/${this.subProductCatalogue?.id}.pdf`})}stepDown(){1!=this.qty.value&&(this.qty.setValue(parseInt(this.qty.value)-1),this.changePrice())}stepUp(){this.qty.setValue(parseInt(this.qty.value)+1),this.changePrice()}changePrice(){this.price=this.singleProductData.price*this.qty.value;for(let a=0;a<this.singleProductData.finishPrice.length;a++)this.price=this.price+this.singleProductData.finishPrice[a]*this.qty.value;this.price=parseFloat(this.price).toFixed(2)}addToCart(){let e,a=this.singleProductData.finishCode.toString();a=a.replace(/,/g,""),e=a.includes("?")?"":"#cbebc6";const o={productID:this.singleProductData.id,productImage:this.singleProductData.id.toLowerCase()+"_3d.png",description:this.singleProductData.description,backgroundColor:e,companyCode:this.company?.company.CompanyName,displayName:this.singleProductData.item.LONG_DESC.TEXT.Text,baseUnitofMeasure:"PCS",unitPrice:parseFloat(this.singleProductData.price.toFixed(2)),quantity:parseInt(this.qty.value),genProdPostingGroup:"RETAIL",inventoryPostingGroup:"RESALE",manufacturingCompany:this.catalogue.desc,manufacturingCompanyThreeLettersCode:this.catalogue.code,catalogName:this.catalogue.catalogueCode,catalogThreeLettersCode:this.catalogue.catalogueCode,catalogReleaseDate:`${this.catalogue.year}-${this.catalogue.month}-${this.catalogue.day}`,fullSpecificationCode:this.singleProductData.id+a,tagName:"",finishOptions:this.singleProductData.finishOptions,productGroup:this.singleProductData.group,finishCode:this.singleProductData.finishCode,finishName:this.singleProductData.finishName,finishPrice:this.singleProductData.finishPrice,edit:!1};this.catalogueService.addToCart(o).subscribe({next:i=>{this.toastr.success("Added to cart successfully"),this.busService.sendShowCart()}})}downloadPdf(){}ngOnInit(){this.getCompany()}}function at(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("mouseover",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.mouseIn(l))})("mouseout",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.mouseOut())}),t.TgZ(1,"a",11),t._UZ(2,"img",12),t.ALo(3,"lowercase"),t.TgZ(4,"div",13),t._uU(5),t.qZA()()()}if(2&n){const e=a.$implicit,o=t.oxw();t.xp6(1),t.FAE("routerLink","/catalogue/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/product/",o.productCatalogue.id,"/",o.subProductCatalogue.id,"/",e.id,""),t.xp6(1),t.FAE("src","",o.baseUrl,"assets/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/",null==o.catalogue?null:o.catalogue.catalogueCode,"/prod_icons/",t.lcZ(3,9,e.id),"_3d.png",t.LSH),t.xp6(3),t.hij(" ",e.id," ")}}Z.\u0275fac=function(a){return new(a||Z)(t.Y36(T.yh),t.Y36(r.gz),t.Y36(g),t.Y36(u.qu),t.Y36(R.Z),t.Y36(G._W),t.Y36(N.m9),t.Y36(r.F0))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-product-detail"]],decls:74,vars:27,consts:[[3,"data"],[1,"container-fluid"],[1,"row","mt-3"],[1,"col-12"],[1,"d-flex","flex-md-row","flex-column","justify-content-between","align-items-center"],[1,"flex-fill"],[1,"text-muted"],[1,"ms-2","text-dark"],[1,"d-flex","flex-md-row","flex-column","align-items-center"],[1,"form-select","form-select-sm","decorated",3,"formControl"],["value",""],[3,"ngValue",4,"ngFor","ngForOf"],[1,"border-dark"],[1,"col-md-6","col-12"],[1,"img-hover-zoom"],["alt","","width","200",1,"img-rounded",3,"src"],["class","menu mb-2",4,"ngFor","ngForOf"],[1,"prod-description"],[1,"p-1",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center"],[1,""],[1,"ms-5","qtyInput"],[1,"input-group","bg-main","mb-3"],[1,"input-group-text"],["type","button",1,"btn","bg-light-purple","border",3,"click"],["min","1","value","1","type","number",1,"form-control","form-control-sm",3,"formControl","change"],["type","button",1,"btn","btn-dark","btn-sm","btn2","w-100",3,"click"],[3,"icon"],[1,"col-md-12","col-12"],[1,"mt-3"],[1,"row"],["class","col-3 mb-3 text-center img-hover-zoom",4,"ngFor","ngForOf"],[3,"ngValue"],["fileSaver","","href","javascript:;",1,"text-dark","ms-2",3,"method","fileName","url"],[1,"menu","mb-2"],["href","javascript:;",1,"text-decoration-none","fw-bold",3,"ngClass","click"],[4,"ngIf"],[3,"ngbCollapse"],["finishCollapse","ngbCollapse"],["href","javascript:;",1,"side-child-item","p-1","text-decoration-none",3,"ngClass","click"],[1,"col-3","mb-3","text-center","img-hover-zoom"],[1,"clr-purple","text-decoration-none","font-weight-bold",3,"routerLink"],["alt","","width","100",1,"img-rounded",3,"src"],[1,"mt-2"]],template:function(a,e){1&a&&(t._UZ(0,"app-breadcrumb",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"span")(7,"small",6),t._uU(8,"Product Description:"),t.qZA(),t.TgZ(9,"span",7),t._uU(10),t.ALo(11,"uppercase"),t.qZA()()(),t.TgZ(12,"div",5)(13,"div",8)(14,"select",9)(15,"option",10),t._uU(16,"Product info"),t.qZA(),t.YNc(17,X,3,5,"option",11),t.qZA()()()()(),t._UZ(18,"hr",12),t.TgZ(19,"div",13)(20,"div")(21,"small",6),t._uU(22,"Product:"),t.qZA(),t.TgZ(23,"h6"),t._uU(24),t.qZA(),t._UZ(25,"hr",12),t.TgZ(26,"div",14),t._UZ(27,"img",15),t.ALo(28,"lowercase"),t.qZA()(),t.TgZ(29,"div"),t._UZ(30,"hr",12),t.TgZ(31,"h6"),t._uU(32,"Finishes"),t.qZA(),t.YNc(33,W,9,10,"div",16),t.qZA()(),t.TgZ(34,"div",13)(35,"div"),t._UZ(36,"br"),t.TgZ(37,"h6"),t._uU(38,"Description"),t.qZA(),t._UZ(39,"hr",12),t.TgZ(40,"p"),t._uU(41),t.qZA(),t.TgZ(42,"p",17),t._uU(43),t.qZA()(),t.TgZ(44,"div"),t._UZ(45,"hr",12),t.TgZ(46,"h6"),t._uU(47,"Product Code"),t.qZA(),t.TgZ(48,"h3",18),t._uU(49),t.YNc(50,tt,2,1,"span",19),t.qZA(),t.TgZ(51,"div",20)(52,"div",21)(53,"h6",21),t._uU(54),t.qZA()(),t.TgZ(55,"div",22)(56,"div",23)(57,"span",24),t._uU(58,"Qty"),t.qZA(),t.TgZ(59,"button",25),t.NdJ("click",function(){return e.stepDown()}),t._uU(60,"-"),t.qZA(),t.TgZ(61,"input",26),t.NdJ("change",function(){return e.changePrice()}),t.qZA(),t.TgZ(62,"button",25),t.NdJ("click",function(){return e.stepUp()}),t._uU(63,"+"),t.qZA()()()(),t.TgZ(64,"button",27),t.NdJ("click",function(){return e.addToCart()}),t._UZ(65,"fa-icon",28),t._uU(66," Add to Cart "),t.qZA()()(),t.TgZ(67,"div",29)(68,"div"),t._UZ(69,"hr",12),t.TgZ(70,"h6",30),t._uU(71),t.qZA(),t.TgZ(72,"div",31),t.YNc(73,et,6,11,"div",32),t.qZA()()()()()),2&a&&(t.Q6J("data",e.breadcrumbData),t.xp6(10),t.Oqu(t.lcZ(11,20,null==e.singleProductData.item?null:e.singleProductData.item.LONG_DESC.TEXT.Text)),t.xp6(4),t.Q6J("formControl",e.pdfControl),t.xp6(3),t.Q6J("ngForOf",e.pdfs),t.xp6(7),t.Oqu(e.singleProductData.id),t.xp6(3),t.FAE("src","",e.baseUrl,"assets/",null==e.company||null==e.company.company?null:e.company.company.CompanyName,"/",null==e.catalogue?null:e.catalogue.catalogueCode,"/prod_icons/",t.lcZ(28,22,null==e.singleProductData?null:e.singleProductData.id),"_3d.png",t.LSH),t.xp6(6),t.Q6J("ngForOf",e.singleProductData.group),t.xp6(8),t.Oqu(null==e.subProductCatalogue?null:e.subProductCatalogue.DESCRIPTIONS.TEXT.Text),t.xp6(2),t.Oqu(e.singleProductData.description),t.xp6(5),t.Q6J("ngClass",t.WLB(24,U,0==e.codeChk,1==e.codeChk)),t.xp6(1),t.hij(" ",e.singleProductData.id," "),t.xp6(1),t.Q6J("ngForOf",e.singleProductData.finishCode),t.xp6(4),t.hij("$",e.price,""),t.xp6(7),t.Q6J("formControl",e.qty),t.xp6(4),t.Q6J("icon",e.faShoppingCart),t.xp6(6),t.hij("Other ",null==e.subProductCatalogue?null:e.subProductCatalogue.DESCRIPTIONS.TEXT.Text," sizes"),t.xp6(2),t.Q6J("ngForOf",null==e.subProductCatalogue?null:e.subProductCatalogue.TOC_ITEMS.TOC_ITEM))},dependencies:[c.mk,c.sg,c.O5,m,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.qQ,u.oH,j._D,v.BN,N.vy,r.rH,c.gd,c.i8],styles:[".prod-description[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif}.qtyInput[_ngcontent-%COMP%]{width:160px}.last-col[_ngcontent-%COMP%]{width:28%!important}#rendererContainer[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important}.three-d-parent[_ngcontent-%COMP%]{height:55%}.qrBg[_ngcontent-%COMP%]{background:transparent}.three-parent[_ngcontent-%COMP%]{background-color:#fff;width:400px;height:350px}.qrHeading[_ngcontent-%COMP%]{color:#4d4d4d;font-size:30px;font-weight:700;line-height:1}.qrPara[_ngcontent-%COMP%]{color:#4d4d4d;font-size:14px;font-weight:100}.box[_ngcontent-%COMP%]{border:5px solid rgba(0,0,0,0);background:conic-gradient(from 90deg at top 5px left 5px,rgba(0,0,0,0) 90deg,black 0) 0 0/20px 20px border-box no-repeat,conic-gradient(from 180deg at top 5px right 5px,rgba(0,0,0,0) 90deg,black 0) 100% 0/20px 20px border-box no-repeat,conic-gradient(from 0deg at bottom 5px left 5px,rgba(0,0,0,0) 90deg,black 0) 0 100%/20px 20px border-box no-repeat,conic-gradient(from -90deg at bottom 5px right 5px,rgba(0,0,0,0) 90deg,black 0) 100% 100%/20px 20px border-box no-repeat;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;text-align:center}"]});class E{constructor(a,e,o){this.store=a,this.route=e,this.baseUrl=h.N.baseUrl,this.faLevelUp=p.K_v,this.company=null,this.catalogue=null,this.productCatalogue=null,this.subProductCatalogue=null,this.breadcrumbData={},this.infoModal=!1,this.infoData={},o.events.subscribe({next:i=>{i instanceof r.m2&&this.getCatalogue()}})}getCompany(){this.store.select(b.p).subscribe({next:a=>{a?.company&&(this.company=a,this.breadcrumbData.companyCode=this.company?.company?.CompanyName,this.getCatalogue())}})}getCatalogue(){let a=this.route.snapshot.paramMap.get("categoryId"),e=this.route.snapshot.paramMap.get("subCategoryId");this.store.select(y.P).subscribe({next:o=>{o?.catalogueCode&&(this.breadcrumbData.breadcrumbs=[],this.catalogue=o,this.productCatalogue=o.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL.find(l=>l.id==a),this.subProductCatalogue=this.productCatalogue?.LEVEL.LABEL.find(l=>l.id==e),this.breadcrumbData.catalogueCode=o.catalogueCode,this.breadcrumbData.breadcrumbs=[{name:this.company?.company?.CompanyName,router:`/catalogue/${this.company?.company?.CompanyName}/category`},{name:this.productCatalogue?.DESCRIPTIONS.TEXT.Text,router:`/catalogue/${this.company?.company?.CompanyName}/sub-category/${this.productCatalogue?.id}`},{name:this.subProductCatalogue?.DESCRIPTIONS.TEXT.Text,router:null}])}})}mouseIn(a){this.infoModal=!0,this.infoData.type="products",this.infoData.id=a.id,this.infoData.imgUrl=`${this.baseUrl}assets/${this.company?.company?.CompanyName}/${this.catalogue?.catalogueCode}/prod_icons/${a.id.toLowerCase()}_3d.png`}mouseOut(){this.infoModal=!1}ngOnInit(){this.getCompany()}}function ot(n,a){if(1&n&&(t.TgZ(0,"div",16)(1,"a",17),t._UZ(2,"img",18),t.TgZ(3,"div",19),t._uU(4),t.qZA()()()),2&n){const e=a.$implicit,o=t.oxw(2);t.xp6(1),t.hYB("routerLink","/catalogue/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/sub-category/",e.id,""),t.xp6(1),t.FAE("src","",o.baseUrl,"assets/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/",null==o.catalogue?null:o.catalogue.catalogueCode,"/labels_icons/",e.id,".png",t.LSH),t.xp6(2),t.hij(" ",e.DESCRIPTIONS.TEXT.Text," ")}}function nt(n,a){if(1&n&&(t.TgZ(0,"div")(1,"small",9),t._uU(2,"Catalogue Name:"),t.qZA(),t.TgZ(3,"h6"),t._uU(4),t.qZA(),t._UZ(5,"hr",5),t.TgZ(6,"div",14),t.YNc(7,ot,5,7,"div",15),t.qZA()()),2&n){const e=t.oxw();t.xp6(4),t.Oqu(null==e.catalogue?null:e.catalogue.code),t.xp6(3),t.Q6J("ngForOf",null==e.catalogue||null==e.catalogue.TABLE_OF_CONTENTS||null==e.catalogue.TABLE_OF_CONTENTS.LEVEL||null==e.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL||null==e.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL?null:e.catalogue.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL)}}function it(n,a){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-info-modal",20),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("data",e.infoData)("catalogue",e.catalogue)}}function lt(n,a){if(1&n&&(t.TgZ(0,"div",21),t._UZ(1,"img",22),t.qZA()),2&n){const e=a.$implicit,o=t.oxw();t.xp6(1),t.FAE("src","",o.baseUrl,"assets/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/",null==o.catalogue?null:o.catalogue.catalogueCode,"/gallery/",e.name,"",t.LSH)}}function st(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",23),t.NdJ("mouseover",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.mouseIn(l))})("mouseout",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.mouseOut())}),t.TgZ(1,"a",17),t._UZ(2,"img",24),t.TgZ(3,"div",19),t._uU(4),t.qZA()()()}if(2&n){const e=a.$implicit,o=t.oxw();t.xp6(1),t.cQ8("routerLink","/catalogue/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/products/",o.productCatalogue.id,"/",e.id,""),t.xp6(1),t.XOb("src","",o.baseUrl,"assets/",null==o.company||null==o.company.company?null:o.company.company.CompanyName,"/",null==o.catalogue?null:o.catalogue.catalogueCode,"/labels/",null==o.productCatalogue?null:o.productCatalogue.id,"/label_images/",e.id,".png",t.LSH),t.xp6(2),t.hij(" ",e.DESCRIPTIONS.TEXT.Text," ")}}E.\u0275fac=function(a){return new(a||E)(t.Y36(T.yh),t.Y36(r.gz),t.Y36(r.F0))},E.\u0275cmp=t.Xpm({type:E,selectors:[["app-products"]],decls:13,vars:9,consts:[[3,"data"],[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-6","col-12"],[1,"text-muted"],[1,"level-up-btn",3,"routerLink"],[3,"icon"],[1,"border-dark"],[1,"row"],["class","col-6 col-lg-3 mb-3 text-center img-hover-zoom",3,"mouseover","mouseout",4,"ngFor","ngForOf"],[1,"col-6","col-lg-3","mb-3","text-center","img-hover-zoom",3,"mouseover","mouseout"],[1,"clr-purple","font-weight-bold",3,"routerLink"],["alt","","width","100",1,"img-rounded",3,"src"],[1,"mt-2"]],template:function(a,e){1&a&&(t._UZ(0,"app-breadcrumb",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"small",4),t._uU(5),t.qZA(),t.TgZ(6,"h6")(7,"a",5),t._UZ(8,"fa-icon",6),t.qZA(),t._uU(9),t.qZA(),t._UZ(10,"hr",7),t.TgZ(11,"div",8),t.YNc(12,at,6,11,"div",9),t.qZA()()()()),2&a&&(t.Q6J("data",e.breadcrumbData),t.xp6(5),t.hij("",null==e.productCatalogue?null:e.productCatalogue.DESCRIPTIONS.TEXT.Text," Products:"),t.xp6(2),t.hYB("routerLink","/catalogue/",null==e.company||null==e.company.company?null:e.company.company.CompanyName,"/sub-category/",null==e.productCatalogue?null:e.productCatalogue.id,""),t.xp6(1),t.Q6J("icon",e.faLevelUp),t.xp6(1),t.lnq(" ",null==e.catalogue?null:e.catalogue.code," | ",null==e.productCatalogue?null:e.productCatalogue.DESCRIPTIONS.TEXT.Text," | ",null==e.subProductCatalogue?null:e.subProductCatalogue.DESCRIPTIONS.TEXT.Text," "),t.xp6(3),t.Q6J("ngForOf",null==e.subProductCatalogue?null:e.subProductCatalogue.TOC_ITEMS.TOC_ITEM))},dependencies:[c.sg,m,v.BN,r.rH,c.i8],styles:[".h_line[_ngcontent-%COMP%]{background-color:#000;color:#000;width:60%;height:5px;line-height:50%}"]});class D{constructor(a,e,o,i){this.store=a,this.route=e,this.catalogService=o,this.baseUrl=h.N.baseUrl,this.faLevelUp=p.K_v,this.company=null,this.catalogue=null,this.productCatalogue=null,this.breadcrumbData={},this.gallery=[],this.infoModal=!1,this.infoData={},i.events.subscribe({next:l=>{l instanceof r.m2&&this.getCatalogue()}})}getCompany(){this.store.select(b.p).subscribe({next:a=>{a?.company&&(this.company=a,this.breadcrumbData.companyCode=this.company?.company?.CompanyName,this.getCatalogue())}})}getCatalogue(){let a=this.route.snapshot.paramMap.get("id");this.store.select(y.P).subscribe({next:e=>{e?.catalogueCode&&(this.breadcrumbData.breadcrumbs=[],this.catalogue=e,this.productCatalogue=e.TABLE_OF_CONTENTS.LEVEL.LABEL.LEVEL.LABEL.find(i=>i.id==a),this.breadcrumbData.catalogueCode=e.catalogueCode,this.breadcrumbData.breadcrumbs=[{name:this.company?.company?.CompanyName,router:`/catalogue/${this.company?.company?.CompanyName}/category`},{name:this.productCatalogue?.DESCRIPTIONS.TEXT.Text,router:null}],this.getGalleryImages())}})}getGalleryImages(){this.company?.company?.CompanyName&&this.catalogService.getGalleryImages(this.company?.company?.CompanyName,this.catalogue?.catalogueCode).subscribe({next:a=>{this.gallery=a.message}})}mouseIn(a){this.infoModal=!0,this.infoData.type="sub-category",this.infoData.id=a.id,this.infoData.productCatalogue=this.productCatalogue,this.infoData.imgUrl=`${this.baseUrl}assets/${this.company?.company?.CompanyName}/${this.catalogue?.catalogueCode}/labels/${this.productCatalogue.id}/label_images/${a.id}.png`}mouseOut(){this.infoModal=!1}ngOnInit(){this.getCompany()}}D.\u0275fac=function(a){return new(a||D)(t.Y36(T.yh),t.Y36(r.gz),t.Y36(g),t.Y36(r.F0))},D.\u0275cmp=t.Xpm({type:D,selectors:[["app-sub-category"]],decls:22,vars:11,consts:[[3,"data"],[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-6","col-12"],[4,"ngIf"],[1,"border-dark"],[1,"mt-3"],[1,"row"],["class","col-6 col-lg-3 text-center img-hover-zoom mb-3",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"level-up-btn",3,"routerLink"],[3,"icon"],[1,"h_line"],["class","col-6 col-lg-3 mb-3 text-center img-hover-zoom",3,"mouseover","mouseout",4,"ngFor","ngForOf"],[1,"row","mt-3","pb-3"],["class","col-6 col-lg-3 text-center img-hover-zoom",4,"ngFor","ngForOf"],[1,"col-6","col-lg-3","text-center","img-hover-zoom"],[1,"clr-purple","font-weight-bold",3,"routerLink"],["width","100",1,"img-rounded",3,"src"],[1,"mt-2"],[3,"data","catalogue"],[1,"col-6","col-lg-3","text-center","img-hover-zoom","mb-3"],["width","100","alt","Cinque Terre",1,"img-rounded",3,"src"],[1,"col-6","col-lg-3","mb-3","text-center","img-hover-zoom",3,"mouseover","mouseout"],["alt","","width","100",1,"img-rounded",3,"src"]],template:function(a,e){1&a&&(t._UZ(0,"app-breadcrumb",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,nt,8,2,"div",4),t.YNc(5,it,2,2,"div",4),t.TgZ(6,"div"),t._UZ(7,"hr",5),t.TgZ(8,"h6",6),t._uU(9),t.qZA(),t.TgZ(10,"div",7),t.YNc(11,lt,2,4,"div",8),t.qZA()()(),t.TgZ(12,"div",3)(13,"small",9),t._uU(14),t.qZA(),t.TgZ(15,"h6")(16,"a",10),t._UZ(17,"fa-icon",11),t.qZA(),t._uU(18),t.qZA(),t._UZ(19,"hr",12),t.TgZ(20,"div",7),t.YNc(21,st,5,9,"div",13),t.qZA()()()()),2&a&&(t.Q6J("data",e.breadcrumbData),t.xp6(4),t.Q6J("ngIf",!e.infoModal),t.xp6(1),t.Q6J("ngIf",e.infoModal),t.xp6(4),t.hij("",null==e.catalogue?null:e.catalogue.code," Gallery"),t.xp6(2),t.Q6J("ngForOf",e.gallery),t.xp6(3),t.hij("",null==e.productCatalogue?null:e.productCatalogue.DESCRIPTIONS.TEXT.Text," Products:"),t.xp6(2),t.MGl("routerLink","/catalogue/",null==e.company||null==e.company.company?null:e.company.company.CompanyName,"/category"),t.xp6(1),t.Q6J("icon",e.faLevelUp),t.xp6(1),t.AsE(" ",null==e.catalogue?null:e.catalogue.code," | ",null==e.productCatalogue?null:e.productCatalogue.DESCRIPTIONS.TEXT.Text," "),t.xp6(3),t.Q6J("ngForOf",null==e.productCatalogue?null:e.productCatalogue.LEVEL.LABEL))},dependencies:[c.sg,c.O5,m,f,v.BN,r.rH],styles:[".level-up-btn[_ngcontent-%COMP%]{color:#53386f}.level-up-btn[_ngcontent-%COMP%]:hover{color:#fff!important;background-color:#53386f!important;border-color:#53386f!important}.h_line[_ngcontent-%COMP%]{background-color:#000;color:#000;width:60%;height:5px;line-height:50%}"]});const ct=[{path:"",component:x,children:[{path:"category",component:P},{path:"sub-category/:id",component:D},{path:"products/:categoryId/:subCategoryId",component:E},{path:"product/:categoryId/:subCategoryId/:productId",component:Z},{path:"",pathMatch:"full",redirectTo:"category"}]}];class C{}C.\u0275fac=function(a){return new(a||C)},C.\u0275mod=t.oAB({type:C}),C.\u0275inj=t.cJS({imports:[r.Bz.forChild(ct),r.Bz]});var rt=s(7281);class _{}_.\u0275fac=function(a){return new(a||_)},_.\u0275mod=t.oAB({type:_}),_.\u0275inj=t.cJS({providers:[g],imports:[c.ez,rt.m,C]})}}]);