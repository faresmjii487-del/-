let lang = "ar";

document.getElementById("langBtn").onclick = () => {
    lang = lang === "ar" ? "en" : "ar";
    changeLanguage();
};

function changeLanguage() {
    if (lang === "en") {
        document.documentElement.dir = "ltr";

        // Header
        setText("homeLink", "Home");
        setText("productsLink", "Products");
        setText("aboutLink", "About");
        setText("contactLink", "Contact");
        setText("langBtn", "Arabic");

        // Home Page
        setText("heroTitle", "LAMSA – Premium Sweaters");
        setText("heroSubtitle", "Price: 10 KWD");
        setText("heroBtn", "Buy Now – KNET");

        // Products Page
        setText("productTitle", "LAMSA Winter Sweater");
        setText("productPrice", "Price: 10 KWD");
        setText("productBtn", "Order Now");

        // About Page
        setText("aboutTitle", "About LAMSA");
        setText("aboutText", "LAMSA is a Kuwaiti clothing brand specializing in premium sweaters.");

        // Contact Page
        setText("contactTitle", "Contact Us");
        setText("contactText", "You can reach us through Instagram or WhatsApp.");
    }

    else {
        document.documentElement.dir = "rtl";

        // Header
        setText("homeLink", "الرئيسية");
        setText("productsLink", "المنتجات");
        setText("aboutLink", "من نحن");
        setText("contactLink", "تواصل معنا");
        setText("langBtn", "English");

        // Home Page
        setText("heroTitle", "لمسة – بلوفرات فخمة");
        setText("heroSubtitle", "السعر: 10 دينار كويتي");
        setText("heroBtn", "شراء الآن – KNET");

        // Products Page
        setText("productTitle", "بلوفر لمسة الشتوي");
        setText("productPrice", "السعر: 10 د.ك");
        setText("productBtn", "اطلب الآن");

        // About Page
        setText("aboutTitle", "من نحن");
        setText("aboutText", "لمسة علامة كويتية مختصة بالبلوفرات الفخمة.");

        // Contact Page
        setText("contactTitle", "تواصل معنا");
        setText("contactText", "تقدر تتواصل معنا عبر إنستغرام أو واتساب.");
    }
}

function setText(id, text) {
    let el = document.getElementById(id);
    if (el) el.textContent = text;
}

function buyNow() {
    alert("سيتم تحويلك إلى صفحة الدفع KNET (اربطها لاحقًا)");
}