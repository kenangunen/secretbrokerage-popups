//#region contact popup

//contact popup parametreleri.
//showTime: kaç saniye sonra çıkmasını istiyorsanız o değeri girin. Örnekte 30 saniye sonra çıkıyor.
const contactSettings = { showTime: 30 };

const contactSetTime = () => {
  //popup'ın hangi sayfada çıkmasını istiyorsanız, url'den sitenin adından sonraki kısmı kopyalayın buraya yapıştırın. Başındaki /'ı unutmayın.
  if (window.location.pathname == "/domain-acquisition") {
    setTimeout(showContactPopup, contactSettings.showTime * 1000);
  }
};

const showContactPopup = () => {
  $("#contact-popup").css("display", "flex");
};

//Contact submit butonu. Popup kapatır
$("#submi-button").click(function () {
  $("#contact-popup").css("display", "none");
  // Butonun fonksiyonu buraya yazılmalı.
});

let cUrl = "";
//Sayafadan başka bir sayfaya geçmek isterse popup' açan fonksiyon.
$("a").on("click", function (event) {
  //Popuplarda "a" tagı kullanacaksanız o tagların id'lirini bu fonksiyonun dışında tutacak bir if-else yapısı kurmanız gerekebilir.
  cUrl = $(this).attr("href");
  $("#contact-popup").css("display", "flex");
  setTimeout("loadContactPopup(cUrl)", 900000);
  event.preventDefault();
});

function loadContactPopup(url) {
  if (url != "") {
    window.location.href = url;
    cUrl = "";
  }
}

contactSetTime();
//#endregion

//#region domain-acquisition-pricing-popup

//domain-acquisition-pricing-popup parametreleri.
//showTime: kaç saniye sonra çıkmasını istiyorsanız o değeri girin.
const pricingSettings = { showTime: 30 };

const pricingSetTime = () => {
  //Bu popup /sellable ve /domain-appraisal sayfalarında gösteriliyor.
  if (
    window.location.pathname == "/sellable" ||
    window.location.pathname == "/domain-appraisal"
  ) {
    setTimeout(showPricingPopup, pricingSettings.showTime * 1000);
  }
};

const showPricingPopup = () => {
  $("#sale-popup").css("display", "flex");
};

let pUrl = "";
//Sayafadan başka bir sayfaya geçmek isterse popup'ı açan fonksiyon.
$("a").on("click", function (event) {
  //Popuplarda "a" tagı kullanacaksanız o tagların id'lirini bu fonksiyonun dışında tutacak bir if-else yapısı kurmanız gerekebilir.
  pUrl = $(this).attr("href");
  $("#sale-popup").css("display", "flex");
  setTimeout("loadPricingPopup(pUrl)", 900000);
  event.preventDefault();
});

function loadPricingPopup(url) {
  window.location.href = url;
  pUrl = "";
}

//domain-acquisition-pricing-popup submit butonu. Popup kapatır.
$("#useDiscount").click(function () {
  $("#sale-popup").css("display", "none");
  // Butonun fonksiyonu buraya yazılmalı.
});
pricingSetTime();
//#endregion

//#region sellable-popup

//sellable-popup parametreleri.
//showTime: kaç saniye sonra çıkmasını istiyorsanız o değeri girin.
const sellableSettings = { showTime: 45 };

const sellableSetTime = () => {
  //bu popup /sellable sayfası dışında heryerde gösteriliyor.
  if (window.location.pathname != "/sellable") {
    setTimeout(showSalePopup, sellableSettings.showTime * 1000);
  }
};

const showSalePopup = () => {
  $("#worth-score-popup").css("display", "flex");
};

sellableSetTime();

//sellable-popup yes, i like to know it. Popup kapatır.
$("#knowIt").click(function () {
  $("#worth-score-popup").css("display", "none");
  // Butonun fonksiyonu buraya yazılmalı.
});

//#endregion

//popupları kapatma fonksiyonu close iconlar ve "no" butonları popup'ı kapatır.
$(".sb-close-popup").click(function () {
  loadContactPopup(cUrl);
  loadPricingPopup(pUrl);
  $("#contact-popup").css("display", "none");
  $("#sale-popup").css("display", "none");
  $("#worth-score-popup").css("display", "none");
});
