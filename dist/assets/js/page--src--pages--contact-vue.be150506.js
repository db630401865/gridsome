(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{w981:function(e,a,t){"use strict";t.r(a);var s=t("HaE+"),o=(t("ls82"),t("vDqi")),r=t.n(o),l={metaInfo:{name:"Contactpage",title:"About us"},data:function(){return{form:{name:"",email:"",phone:"",message:""}}},methods:{onSubmit:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r()({method:"POST",url:"http://localhost:1337/contacts",data:e.form});case 3:alert("成功了"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),alert("失败了");case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}}},n=t("KHd+"),i=Object(n.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Layout",[t("header",{staticClass:"masthead",staticStyle:{"background-image":"url('/img/contact-bg.jpg')"}},[t("div",{staticClass:"overlay"}),t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[t("div",{staticClass:"page-heading"},[t("h1",[e._v("Contact Me")]),t("span",{staticClass:"subheading"},[e._v("Have questions? I have answers.")])])])])])]),t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[t("p",[e._v("Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!")]),t("form",{attrs:{name:"sentMessage",id:"contactForm",novalidate:""}},[t("div",{staticClass:"control-group"},[t("div",{staticClass:"form-group floating-label-form-group controls"},[t("label",[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name",id:"name",required:"","data-validation-required-message":"Please enter your name."},domProps:{value:e.form.name},on:{input:function(a){a.target.composing||e.$set(e.form,"name",a.target.value)}}}),t("p",{staticClass:"help-block text-danger"})])]),t("div",{staticClass:"control-group"},[t("div",{staticClass:"form-group floating-label-form-group controls"},[t("label",[e._v("Email Address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email Address",id:"email",required:"","data-validation-required-message":"Please enter your email address."},domProps:{value:e.form.email},on:{input:function(a){a.target.composing||e.$set(e.form,"email",a.target.value)}}}),t("p",{staticClass:"help-block text-danger"})])]),t("div",{staticClass:"control-group"},[t("div",{staticClass:"form-group col-xs-12 floating-label-form-group controls"},[t("label",[e._v("Phone Number")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"Phone Number",id:"phone",required:"","data-validation-required-message":"Please enter your phone number."},domProps:{value:e.form.phone},on:{input:function(a){a.target.composing||e.$set(e.form,"phone",a.target.value)}}}),t("p",{staticClass:"help-block text-danger"})])]),t("div",{staticClass:"control-group"},[t("div",{staticClass:"form-group floating-label-form-group controls"},[t("label",[e._v("Message")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{rows:"5",placeholder:"Message",id:"message",required:"","data-validation-required-message":"Please enter a message."},domProps:{value:e.form.message},on:{input:function(a){a.target.composing||e.$set(e.form,"message",a.target.value)}}}),t("p",{staticClass:"help-block text-danger"})])]),t("br"),t("div",{attrs:{id:"success"}}),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"sendMessageButton"},on:{click:function(a){return a.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._v("Send")])])])])])])}),[],!1,null,null,null);a.default=i.exports}}]);