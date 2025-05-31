interface Translation {
  [key: string]: string;
}

interface Translations {
  [key: string]: Translation;
}

export const translations: Translations = {
  en: {
    // Language Names
    language: "Language",
    english: "US English",
    spanish: "Spanish",
    french: "French",
    turkish: "Turkish",
    hindi: "Hindi",
    arabic: "Arabic",
    
    // Hero Section
    heroTitle: "Master Forex Trading,\nStep by Step",
    heroDescription: "Learn from experts with structured video lessons & real-world strategies.",
    startLearning: "Start Learning",
    liveChartPreview: "Live Chart Preview",

    // Course Section
    availableCourses: "Available Courses",
    
    // Beginner Course
    beginnerBadge: "Beginner",
    beginnerTitle: "Forex Fundamentals",
    beginnerSubtitle: "Master the basics of forex trading",
    beginnerDescription: "Learn the core concepts of forex trading and market analysis",
    beginnerDuration: "6 weeks • 24 lessons",
    
    // Intermediate Course
    intermediateBadge: "Intermediate",
    intermediateTitle: "Technical Analysis",
    intermediateSubtitle: "Chart patterns & indicators",
    intermediateDescription: "Advanced technical analysis and trading strategies",
    intermediateDuration: "8 weeks • 32 lessons",
    
    // Advanced Course
    advancedBadge: "Advanced",
    advancedTitle: "Risk Management",
    advancedSubtitle: "Professional trading psychology",
    advancedDescription: "Master risk management and trading psychology",
    advancedDuration: "10 weeks • 40 lessons",
    
    // Common Course Elements
    oneTimePayment: "One-time payment",
    enrollNow: "Enroll Now",

    // Features Section
    interactiveFeatures: "Interactive Features",
    progressTracking: "Progress Tracking",
    progressDescription: "Track your learning progress and achievements",
    liveWebinars: "Live Webinars",
    webinarsDescription: "Monthly expert-led trading sessions",
    community: "Community",
    communityDescription: "Join our trading community and discussion forums",

    // CTA Section
    ctaTitle: "Ready to Start Your Trading Journey?",
    ctaDescription: "Join thousands of successful traders who learned with us",
    getStarted: "Get Started Now",

    // Authentication
    createAccount: "Create Account",
    joinCommunity: "Join our learning community",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    agreeToTerms: "I agree to the",
    termsOfService: "Terms of Service",
    and: "and",
    privacyPolicy: "Privacy Policy",
    alreadyHaveAccount: "Already have an account?",
    signIn: "Sign in",
    creatingAccount: "Creating Account...",
    signOut: "Sign Out",
    myProfile: "My Profile",

    // About Page
    aboutUs: "About Us",
    aboutDescription: "Learn about our mission, values, and the team behind LearnPro",
    ourMission: "Our Mission",
    missionStatement: "To democratize forex education and empower traders worldwide with professional-grade knowledge and tools",
    expertInstructors: "Expert Instructors",
    instructorsDescription: "Learn from seasoned traders with years of market experience",
    practicalApproach: "Practical Approach",
    practicalDescription: "Hands-on learning with real market scenarios and live trading sessions",
    globalCommunity: "Global Community",
    aboutCommunityDescription: "Join a worldwide network of traders sharing insights and experiences",
    lifetimeAccess: "Lifetime Access",
    accessDescription: "Unlimited access to course materials and future updates",
    meetOurTeam: "Meet Our Team",
    founderCEO: "Founder & CEO",
    coFounder: "Co-Founder",
    technicalLead: "Technical Lead",
    johnBio: "With over 15 years of forex trading experience, Pierre leads our vision of accessible trading education.",
    sarahBio: "Salim brings extensive experience in forex strategy development and risk management.",
    michaelBio: "Michael ensures our platform delivers the best learning experience through innovative technology.",
    ourValues: "Our Core Values",
    excellence: "Excellence",
    excellenceDescription: "We strive for excellence in every aspect of our educational content and delivery",
    integrity: "Integrity",
    integrityDescription: "We maintain the highest standards of honesty and transparency in our teachings",
    innovation: "Innovation",
    innovationDescription: "We continuously evolve our methods to stay ahead of market trends",
    communityValueDescription: "We foster a supportive environment where traders help each other grow",

    // Contact Page
    contactUs: "Contact Us",
    contactDescription: "Have questions? We're here to help and would love to hear from you",
    address: "Address",
    phone: "Phone",
    email: "Email",
    sendMessage: "Send us a Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    messageSent: "Message sent successfully! We'll get back to you soon.",
    messageError: "There was an error sending your message. Please try again.",

    // Payment Section
    processingPayment: "Processing payment...",
    paymentSuccess: "Payment successful! You are now enrolled in the course.",
    paymentError: "Payment failed. Please try again.",
    testCardInfo: "For testing, use card number: 4242 4242 4242 4242",
  },

  fr: {
    // Language Names
    language: "Langue",
    english: "Anglais américain",
    spanish: "Espagnol",
    french: "Français",
    turkish: "Turc",
    hindi: "Hindi",
    arabic: "Arabe",
    
    // Hero Section
    heroTitle: "Maîtrisez le Trading Forex,\nÉtape par Étape",
    heroDescription: "Apprenez avec des experts grâce à des leçons vidéo structurées et des stratégies réelles.",
    startLearning: "Commencer à Apprendre",
    liveChartPreview: "Aperçu du Graphique en Direct",

    // Course Section
    availableCourses: "Cours Disponibles",
    
    // Beginner Course
    beginnerBadge: "Débutant",
    beginnerTitle: "Fondamentaux du Forex",
    beginnerSubtitle: "Maîtrisez les bases du trading",
    beginnerDescription: "Apprenez les concepts fondamentaux du trading forex et de l'analyse de marché",
    beginnerDuration: "6 semaines • 24 leçons",
    
    // Intermediate Course
    intermediateBadge: "Intermédiaire",
    intermediateTitle: "Analyse Technique",
    intermediateSubtitle: "Motifs graphiques et indicateurs",
    intermediateDescription: "Analyse technique avancée et stratégies de trading",
    intermediateDuration: "8 semaines • 32 leçons",
    
    // Advanced Course
    advancedBadge: "Avancé",
    advancedTitle: "Gestion des Risques",
    advancedSubtitle: "Psychologie professionnelle du trading",
    advancedDescription: "Maîtrisez la gestion des risques et la psychologie du trading",
    advancedDuration: "10 semaines • 40 leçons",
    
    // Common Course Elements
    oneTimePayment: "Paiement unique",
    enrollNow: "S'inscrire Maintenant",

    // Features Section
    interactiveFeatures: "Fonctionnalités Interactives",
    progressTracking: "Suivi de Progression",
    progressDescription: "Suivez votre progression et vos réalisations",
    liveWebinars: "Webinaires en Direct",
    webinarsDescription: "Sessions mensuelles dirigées par des experts",
    community: "Communauté",
    communityDescription: "Rejoignez notre communauté et nos forums de trading",

    // CTA Section
    ctaTitle: "Prêt à Commencer Votre Voyage dans le Trading ?",
    ctaDescription: "Rejoignez des milliers de traders qui ont réussi grâce à nous",
    getStarted: "Commencer Maintenant",

    // Authentication
    createAccount: "Créer un compte",
    joinCommunity: "Rejoignez notre communauté d'apprentissage",
    firstName: "Prénom",
    lastName: "Nom",
    emailAddress: "Adresse e-mail",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    agreeToTerms: "J'accepte les",
    termsOfService: "Conditions d'utilisation",
    and: "et",
    privacyPolicy: "Politique de confidentialité",
    alreadyHaveAccount: "Vous avez déjà un compte ?",
    signIn: "Se connecter",
    creatingAccount: "Création du compte...",
    signOut: "Se déconnecter",
    myProfile: "Mon profil",

    // About Page
    aboutUs: "À Propos de Nous",
    aboutDescription: "Découvrez notre mission, nos valeurs et l'équipe derrière LearnPro",
    ourMission: "Notre Mission",
    missionStatement: "Démocratiser l'éducation au forex et donner aux traders du monde entier des connaissances et des outils de niveau professionnel",
    expertInstructors: "Instructeurs Experts",
    instructorsDescription: "Apprenez avec des traders expérimentés ayant des années d'expérience sur le marché",
    practicalApproach: "Approche Pratique",
    practicalDescription: "Apprentissage pratique avec des scénarios de marché réels et des sessions de trading en direct",
    globalCommunity: "Communauté Mondiale",
    aboutCommunityDescription: "Rejoignez un réseau mondial de traders partageant leurs connaissances et expériences",
    lifetimeAccess: "Accès à Vie",
    accessDescription: "Accès illimité aux supports de cours et aux futures mises à jour",
    meetOurTeam: "Notre Équipe",
    founderCEO: "Fondateur & PDG",
    coFounder: "Co-Fondateur",
    technicalLead: "Responsable Technique",
    johnBio: "Avec plus de 15 ans d'expérience en trading forex, Pierre dirige notre vision d'une éducation accessible au trading.",
    sarahBio: "Salim apporte une vaste expérience dans le développement de stratégies forex et la gestion des risques.",
    michaelBio: "Michael s'assure que notre plateforme offre la meilleure expérience d'apprentissage grâce à une technologie innovante.",
    ourValues: "Nos Valeurs Fondamentales",
    excellence: "Excellence",
    excellenceDescription: "Nous visons l'excellence dans tous les aspects de notre contenu et de notre enseignement",
    integrity: "Intégrité",
    integrityDescription: "Nous maintenons les plus hauts standards d'honnêteté et de transparence dans nos enseignements",
    innovation: "Innovation",
    innovationDescription: "Nous faisons évoluer continuellement nos méthodes pour rester à la pointe des tendances du marché",
    communityValueDescription: "Nous encourageons un environnement solidaire où les traders s'entraident pour progresser",

    // Contact Page
    contactUs: "Contactez-Nous",
    contactDescription: "Des questions ? Nous sommes là pour vous aider et serions ravis de vous entendre",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    sendMessage: "Envoyez-nous un Message",
    name: "Nom",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer",
    sending: "Envoi en cours...",
    messageSent: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
    messageError: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",

    // Payment Section
    processingPayment: "Traitement du paiement...",
    paymentSuccess: "Paiement réussi ! Vous êtes maintenant inscrit au cours.",
    paymentError: "Échec du paiement. Veuillez réessayer.",
    testCardInfo: "Pour tester, utilisez le numéro de carte : 4242 4242 4242 4242",
  },

  tr: {
    // Language Names
    language: "Dil",
    english: "Amerikan İngilizcesi",
    spanish: "İspanyolca",
    french: "Fransızca",
    turkish: "Türkçe",
    hindi: "Hintçe",
    arabic: "Arapça",
    
    // Hero Section
    heroTitle: "Forex Ticaretinde Uzmanlaşın,\nAdım Adım",
    heroDescription: "Yapılandırılmış video dersler ve gerçek dünya stratejileriyle uzmanlardan öğrenin.",
    startLearning: "Öğrenmeye Başla",
    liveChartPreview: "Canlı Grafik Önizleme",

    // Course Section
    availableCourses: "Mevcut Kurslar",
    
    // Beginner Course
    beginnerBadge: "Başlangıç",
    beginnerTitle: "Forex Temelleri",
    beginnerSubtitle: "Forex ticaretinin temellerinde uzmanlaşın",
    beginnerDescription: "Forex ticareti ve piyasa analizinin temel kavramlarını öğrenin",
    beginnerDuration: "6 hafta • 24 ders",
    
    // Intermediate Course
    intermediateBadge: "Orta Seviye",
    intermediateTitle: "Teknik Analiz",
    intermediateSubtitle: "Grafik desenleri ve göstergeler",
    intermediateDescription: "İleri teknik analiz ve ticaret stratejileri",
    intermediateDuration: "8 hafta • 32 ders",
    
    // Advanced Course
    advancedBadge: "İleri Seviye",
    advancedTitle: "Risk Yönetimi",
    advancedSubtitle: "Profesyonel ticaret psikolojisi",
    advancedDescription: "Risk yönetimi ve ticaret psikolojisinde uzmanlaşın",
    advancedDuration: "10 hafta • 40 ders",
    
    // Common Course Elements
    oneTimePayment: "Tek seferlik ödeme",
    enrollNow: "Şimdi Kaydol",

    // Features Section
    interactiveFeatures: "Etkileşimli Özellikler",
    progressTracking: "İlerleme Takibi",
    progressDescription: "Öğrenme ilerlemenizi ve başarılarınızı takip edin",
    liveWebinars: "Canlı Webinarlar",
    webinarsDescription: "Aylık uzman liderliğindeki oturumlar",
    community: "Topluluk",
    communityDescription: "Ticaret topluluğumuza ve forumlarımıza katılın",

    // CTA Section
    ctaTitle: "Ticaret Yolculuğunuza Başlamaya Hazır mısınız?",
    ctaDescription: "Bizimle başarıya ulaşan binlerce yatırımcıya katılın",
    getStarted: "Hemen Başla",

    // Authentication
    createAccount: "Hesap Oluştur",
    joinCommunity: "Öğrenme topluluğumuza katılın",
    firstName: "Ad",
    lastName: "Soyad",
    emailAddress: "E-posta Adresi",
    password: "Şifre",
    confirmPassword: "Şifreyi Onayla",
    agreeToTerms: "Kabul ediyorum",
    termsOfService: "Kullanım Şartları",
    and: "ve",
    privacyPolicy: "Gizlilik Politikası",
    alreadyHaveAccount: "Zaten hesabınız var mı?",
    signIn: "Giriş Yap",
    creatingAccount: "Hesap Oluşturuluyor...",
    signOut: "Çıkış Yap",
    myProfile: "Profilim",

    // About Page
    aboutUs: "Hakkımızda",
    aboutDescription: "LearnPro'nun arkasındaki misyonu, değerleri ve ekibi tanıyın",
    ourMission: "Misyonumuz",
    missionStatement: "Forex eğitimini demokratikleştirmek ve dünya çapındaki yatırımcıları profesyonel düzeyde bilgi ve araçlarla güçlendirmek",
    expertInstructors: "Uzman Eğitmenler",
    instructorsDescription: "Yılların piyasa deneyimine sahip tecrübeli yatırımcılardan öğrenin",
    practicalApproach: "Pratik Yaklaşım",
    practicalDescription: "Gerçek piyasa senaryoları ve canlı ticaret oturumlarıyla uygulamalı öğrenme",
    globalCommunity: "Global Topluluk",
    aboutCommunityDescription: "Bilgi ve deneyimlerini paylaşan dünya çapında bir yatırımcı ağına katılın",
    lifetimeAccess: "Ömür Boyu Erişim",
    accessDescription: "Kurs materyallerine ve gelecek güncellemelere sınırsız erişim",
    meetOurTeam: "Ekibimizle Tanışın",
    founderCEO: "Kurucu & CEO",
    coFounder: "Ortak Kurucu",
    technicalLead: "Teknik Direktör",
    johnBio: "15 yılı aşkın forex ticaret deneyimiyle Pierre, erişilebilir ticaret eğitimi vizyonumuza öncülük ediyor.",
    sarahBio: "Salim, forex strateji geliştirme ve risk yönetimi konusunda geniş deneyim getiriyor.",
    michaelBio: "Michael, yenilikçi teknoloji aracılığıyla platformumuzun en iyi öğrenme deneyimini sunmasını sağlıyor.",
    ourValues: "Temel Değerlerimiz",
    excellence: "Mükemmellik",
    excellenceDescription: "Eğitim içeriğimizin ve sunumumuzun her yönünde mükemmelliği hedefliyoruz",
    integrity: "Dürüstlük",
    integrityDescription: "Öğretilerimizde en yüksek dürüstlük ve şeffaflık standartlarını koruyoruz",
    innovation: "Yenilik",
    innovationDescription: "Piyasa trendlerinin önünde kalmak için yöntemlerimizi sürekli geliştiriyoruz",
    communityValueDescription: "Yatırımcıların birbirlerinin gelişimine yardımcı olduğu destekleyici bir ortam yaratıyoruz",

    // Contact Page
    contactUs: "Bize Ulaşın",
    contactDescription: "Sorularınız mı var? Size yardımcı olmak için buradayız ve sizden haber almak isteriz",
    address: "Adres",
    phone: "Telefon",
    email: "E-posta",
    sendMessage: "Mesaj Gönderin",
    name: "İsim",
    subject: "Konu",
    message: "Mesaj",
    send: "Gönder",
    sending: "Gönderiliyor...",
    messageSent: "Mesajınız başarıyla gönderildi! En kısa sürede size geri döneceğiz.",
    messageError: "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",

    // Payment Section
    processingPayment: "Ödeme işleniyor...",
    paymentSuccess: "Ödeme başarılı! Artık kursa kayıtlısınız.",
    paymentError: "Ödeme başarısız. Lütfen tekrar deneyin.",
    testCardInfo: "Test için kart numarası: 4242 4242 4242 4242",
  },

  hi: {
    // Language Names
    language: "भाषा",
    english: "अमेरिकी अंग्रे़ी",
    spanish: "स्पेनिश",
    french: "फ्रेंच",
    turkish: "तुर्की",
    hindi: "हिंदी",
    arabic: "अरबी",
    
    // Hero Section
    heroTitle: "फॉरेक्स ट्रेडिंग में महारत हासिल करें,\nकदम दर कदम",
    heroDescription: "संरचित वीडियो पाठ और वास्तविक रणनीतियों के साथ विशेषज्ञों से सीखें।",
    startLearning: "सीखना शुरू करें",
    liveChartPreview: "लाइव चार्ट प्रीव्यू",

    // Course Section
    availableCourses: "उपलब्ध पाठ्यक्रम",
    
    // Beginner Course
    beginnerBadge: "शुरुआती",
    beginnerTitle: "फॉरेक्स की मूल बातें",
    beginnerSubtitle: "ट्रेडिंग की बुनियादी बातें सीखें",
    beginnerDescription: "फॉरेक्स ट्रेडिंग और मार्केट एनालिसिस की मूल अवधारणाएं सीखें",
    beginnerDuration: "6 सप्ताह • 24 पाठ",
    
    // Intermediate Course
    intermediateBadge: "मध्यम स्तर",
    intermediateTitle: "तकनीकी विश्लेषण",
    intermediateSubtitle: "चार्ट पैटर्न और संकेतक",
    intermediateDescription: "उन्नत तकनीकी विश्लेषण और ट्रेडिंग रणनीतियां",
    intermediateDuration: "8 सप्ताह • 32 पाठ",
    
    // Advanced Course
    advancedBadge: "उन्नत",
    advancedTitle: "जोखिम प्रबंधन",
    advancedSubtitle: "पेशेवर ट्रेडिंग मनोविज्ञान",
    advancedDescription: "जोखिम प्रबंधन और ट्रेडिंग मनोविज्ञान में महारत हासिल करें",
    advancedDuration: "10 सप्ताह • 40 पाठ",
    
    // Common Course Elements
    oneTimePayment: "एकमुश्त भुगतान",
    enrollNow: "अभी दाखिला लें",

    // Features Section
    interactiveFeatures: "इंटरैक्टिव सुविधाएं",
    progressTracking: "प्रगति ट्रैकिंग",
    progressDescription: "अपनी सीखने की प्रगति और उपलब्धियों को ट्रैक करें",
    liveWebinars: "लाइव वेबिनार",
    webinarsDescription: "विशेषज्ञों द्वारा मासिक सत्र",
    community: "समुदाय",
    communityDescription: "हमारे ट्रेडिंग समुदाय और फोरम में शामिल हों",

    // CTA Section
    ctaTitle: "अपनी ट्रेडिंग यात्रा शुरू करने के लिए तैयार हैं?",
    ctaDescription: "हजारों सफल ट्रेडर्स से जुड़ें जिन्होंने हमारे साथ सीखा",
    getStarted: "अभी शुरू करें",

    // Authentication
    createAccount: "खाता बनाएं",
    joinCommunity: "हमारे लर्निंग कम्युनिटी से जुड़ें",
    firstName: "पहला नाम",
    lastName: "अंतिम नाम",
    emailAddress: "ईमेल पता",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    agreeToTerms: "मैं स्वीकार करता हूं",
    termsOfService: "सेवा की शर्तें",
    and: "और",
    privacyPolicy: "गोपनीयता नीति",
    alreadyHaveAccount: "पहले से खाता है?",
    signIn: "साइन इन करें",
    creatingAccount: "खाता बनाया जा रहा है...",
    signOut: "साइन आउट",
    myProfile: "मेरी प्रोफ़ाइल",

    // About Page
    aboutUs: "हमारे बारे में",
    aboutDescription: "LearnPro के पीछे के मिशन, मूल्यों और टीम के बारे में जानें",
    ourMission: "हमारा मिशन",
    missionStatement: "फॉरेक्स शिक्षा को लोकतांत्रिक बनाना और दुनिया भर के व्यापारियों को पेशेवर स्तर के ज्ञान और उपकरणों से सशक्त बनाना",
    expertInstructors: "विशेषज्ञ प्रशिक्षक",
    instructorsDescription: "बाजार के वर्षों के अनुभव वाले अनुभवी व्यापारियों से सीखें",
    practicalApproach: "व्यावहारिक दृष्टिकोण",
    practicalDescription: "वास्तविक बाजार परिदृश्यों और लाइव ट्रेडिंग सत्रों के साथ व्यावहारिक सीख",
    globalCommunity: "वैश्विक समुदाय",
    aboutCommunityDescription: "Bilgi ve deneyimlerini paylaşan dünya çapında bir yatırımcı ağına katılın",
    lifetimeAccess: "आजीवन पहुंच",
    accessDescription: "कोर्स सामग्री और भविष्य के अपडेट तक असीमित पहुंच",
    meetOurTeam: "हमारी टीम से मिलें",
    founderCEO: "संस्थापक और सीईओ",
    coFounder: "सह-संस्थापक",
    technicalLead: "तकनीकी प्रमुख",
    johnBio: "15 yılı aşkın forex ticaret deneyimiyle Pierre, erişilebilir ticaret eğitimi vizyonumuza öncülük ediyor.",
    sarahBio: "सलीम फॉरेक्स रणनीति विकास और जोखिम प्रबंधन में व्यापक अनुभव लाते हैं।",
    michaelBio: "माइकल नवीन तकनीक के माध्यम से हमारा प्लेटफॉर्म सर्वोत्तम सीखने का अनुभव प्रदान करता है।",
    ourValues: "हमारे मूल मूल्य",
    excellence: "उत्कृष्टता",
    excellenceDescription: "हम अपनी शैक्षिक सामग्री और वितरण के हर पहलू में उत्कृष्टता का प्रयास करते हैं",
    integrity: "ईमानदारी",
    integrityDescription: "हम अपनी शिक्षाओं में ईमानदारी और पारदर्शिता के उच्चतम मानकों को बनाए रखते हैं",
    innovation: "नवाचार",
    innovationDescription: "हम बाजार के रुझानों से आगे रहने के लिए अपनी विधियों को लगातार विकसित करते हैं",
    communityValueDescription: "हम एक सहायक वातावरण को बढ़ावा देते हैं जहां व्यापारी एक-दूसरे को बढ़ने में मदद करते हैं",

    // Contact Page
    contactUs: "संपर्क करें",
    contactDescription: "कोई प्रश्न हैं? हम मदद करने के लिए यहां हैं और आपसे सुनना चाहेंगे",
    address: "पता",
    phone: "फोन",
    email: "ईमेल",
    sendMessage: "हमें संदेश भेजें",
    name: "नाम",
    subject: "विषय",
    message: "संदेश",
    send: "भेजें",
    sending: "भेज रहे हैं...",
    messageSent: "संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।",
    messageError: "आपका संदेश भेजने में एक त्रुटि हुई। कृपया पुनः प्रयास करें।",

    // Payment Section
    processingPayment: "भुगतान प्रक्रिया जारी...",
    paymentSuccess: "भुगतान सफल! आप अब कोर्स में नामांकित हैं।",
    paymentError: "भुगतान विफल। कृपया पुनः प्रयास करें।",
    testCardInfo: "परीक्षण के लिए कार्ड नंबर: 4242 4242 4242 4242",
  },

  ar: {
    // Language Names
    language: "اللغة",
    english: "الإنجليزية الأمريكية",
    spanish: "الإسبانية",
    french: "الفرنسية",
    turkish: "التركية",
    hindi: "الهندية",
    arabic: "العربية",
    
    // Hero Section
    heroTitle: "أتقن تداول الفوركس،\nخطوة بخطوة",
    heroDescription: "تعلم من الخبراء من خلال دروس الفيديو المنظمة واستراتيجيات العالم الحقيقي.",
    startLearning: "ابدأ التعلم",
    liveChartPreview: "معاينة الرسم البياني المباشر",

    // Course Section
    availableCourses: "الدورات المتاحة",
    
    // Beginner Course
    beginnerBadge: "مبتدئ",
    beginnerTitle: "أساسيات الفوركس",
    beginnerSubtitle: "أتقن أساسيات التداول",
    beginnerDescription: "تعلم المفاهيم الأساسية لتداول الفوركس وتحليل السوق",
    beginnerDuration: "6 أسابيع • 24 درسًا",
    
    // Intermediate Course
    intermediateBadge: "متوسط",
    intermediateTitle: "التحليل الفني",
    intermediateSubtitle: "أنماط الرسم البياني والمؤشرات",
    intermediateDescription: "التحليل الفني المتقدم واستراتيجيات التداول",
    intermediateDuration: "8 أسابيع • 32 درسًا",
    
    // Advanced Course
    advancedBadge: "متقدم",
    advancedTitle: "إدارة المخاطر",
    advancedSubtitle: "علم نفس التداول المحترف",
    advancedDescription: "أتقن إدارة المخاطر وعلم نفس التداول",
    advancedDuration: "10 أسابيع • 40 درسًا",
    
    // Common Course Elements
    oneTimePayment: "دفعة واحدة",
    enrollNow: "سجل الآن",

    // Features Section
    interactiveFeatures: "الميزات التفاعلية",
    progressTracking: "تتبع التقدم",
    progressDescription: "تتبع تقدمك في التعلم وإنجازاتك",
    liveWebinars: "ندوات عبر الإنترنت",
    webinarsDescription: "جلسات شهرية يقودها خبراء",
    community: "المجتمع",
    communityDescription: "انضم إلى مجتمع التداول ومنتدياتنا",

    // CTA Section
    ctaTitle: "هل أنت مستعد لبدء رحلة التداول الخاصة بك؟",
    ctaDescription: "انضم إلى آلاف المتداولين الناجحين الذين تعلموا معنا",
    getStarted: "ابدأ الآن",

    // Authentication
    createAccount: "إنشاء حساب",
    joinCommunity: "انضم إلى مجتمع التعلم لدينا",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    emailAddress: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    agreeToTerms: "أوافق على",
    termsOfService: "شروط الخدمة",
    and: "و",
    privacyPolicy: "سياسة الخصوصية",
    alreadyHaveAccount: "هل لديك حساب بالفعل؟",
    signIn: "تسجيل الدخول",
    creatingAccount: "جاري إنشاء الحساب...",
    signOut: "تسجيل الخروج",
    myProfile: "ملفي الشخصي",

    // About Page
    aboutUs: "عنا",
    aboutDescription: "تعرف على مهمتنا وقيمنا وفريقنا وراء LearnPro",
    ourMission: "مهمتنا",
    missionStatement: "تصنيف تعليم الفوركس وتطوير المستثمرين على المستوى المهني بمعرفة وأدوات المعرفة والمعرفة",
    expertInstructors: "معلمون خبيرون",
    instructorsDescription: "تعلم من المستثمرين الذين لديهم خبرة السوق من عدة سنوات",
    practicalApproach: "النهج العملي",
    practicalDescription: "تعلم العملي مع السيناريوهات السوقية الحقيقية وجلسات التداول الحية",
    globalCommunity: "المجتمع العالمي",
    aboutCommunityDescription: "انضم إلى الشبكة العالمية للمستثمرين الذين يشاركون الرؤية والخبرات",
    lifetimeAccess: "الوصول حتى الموت",
    accessDescription: "الوصول إلى مواد الكورس وتحديثات المستقبل",
    meetOurTeam: "تقابل فريقنا",
    founderCEO: "المؤسس والرئيس التنفيذي",
    coFounder: "الشريك المؤسس",
    technicalLead: "المدير الفني",
    johnBio: "مع خبرة 15 عامًا من تداول الفوركس، يقود بيري رؤية تعليم التداول المتاح بشكل مباشر.",
    sarahBio: "سليم يجلب تجربة كبيرة في تطوير الاستراتيجيات الفوركس وإدارة المخاطر.",
    michaelBio: "مايكل يضمن أن منصتنا توفر أفضل تجربة تعليم باستخدام تكنولوجيا جديدة.",
    ourValues: "قيمنا الأساسية",
    excellence: "الإكسيلنس",
    excellenceDescription: "نحن نهدف إلى الإكسيلنس في كل جوانب محتوى تعليمنا وتقديمه",
    integrity: "الإيمان",
    integrityDescription: "نحن نحتفظ بأعلى معايير الإيمان والشفافية في التدريس",
    innovation: "الابتكار",
    innovationDescription: "نحن نطور طرقنا باستمرار للبقاء أمام اتجاهات السوق",
    communityValueDescription: "نحن نشجع البيئة الداعمة التي تساعد المستثمرين على النمو مع بعضهم البعض",

    // Contact Page
    contactUs: "اتصل بنا",
    contactDescription: "هل هناك أسئلة؟ نحن هنا لمساعدتك وسنكون سعداء بالتواصل معك",
    address: "العنوان",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    sendMessage: "أرسل لنا رسالة",
    name: "الاسم",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة بنجاح! سنتواصل معك في أقرب وقت",
    messageError: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى",

    // Payment Section
    processingPayment: "جاري معالجة الدفع...",
    paymentSuccess: "تم الدفع بنجاح! أنت الآن مسجل في الدورة.",
    paymentError: "فشل الدفع. يرجى المحاولة مرة أخرى.",
    testCardInfo: "للاختبار، استخدم رقم البطاقة: 4242 4242 4242 4242",
  },

  es: {
    // Hero Section
    heroTitle: "Master Forex Trading,\nStep by Step",
    heroDescription: "Learn from experts with structured video lessons & real-world strategies.",
    startLearning: "Start Learning",
    liveChartPreview: "Live Chart Preview",

    // Course Section
    availableCourses: "Available Courses",
    
    // Beginner Course
    beginnerBadge: "Beginner",
    beginnerTitle: "Forex Fundamentals",
    beginnerSubtitle: "Master the basics of forex trading",
    beginnerDescription: "Learn the core concepts of forex trading and market analysis",
    beginnerDuration: "6 weeks • 24 lessons",
    
    // Intermediate Course
    intermediateBadge: "Intermediate",
    intermediateTitle: "Technical Analysis",
    intermediateSubtitle: "Chart patterns & indicators",
    intermediateDescription: "Advanced technical analysis and trading strategies",
    intermediateDuration: "8 weeks • 32 lessons",
    
    // Advanced Course
    advancedBadge: "Advanced",
    advancedTitle: "Risk Management",
    advancedSubtitle: "Professional trading psychology",
    advancedDescription: "Master risk management and trading psychology",
    advancedDuration: "10 weeks • 40 lessons",
    
    // Common Course Elements
    oneTimePayment: "One-time payment",
    enrollNow: "Enroll Now",

    // Features Section
    interactiveFeatures: "Interactive Features",
    progressTracking: "Progress Tracking",
    progressDescription: "Track your learning progress and achievements",
    liveWebinars: "Live Webinars",
    webinarsDescription: "Monthly expert-led trading sessions",
    community: "Community",
    communityDescription: "Join our trading community and discussion forums",

    // CTA Section
    ctaTitle: "Ready to Start Your Trading Journey?",
    ctaDescription: "Join thousands of successful traders who learned with us",
    getStarted: "Get Started Now",

    // Language Switcher
    language: "Language",
    english: "English",
    spanish: "Spanish",

    // Payment Section
    processingPayment: "Procesando pago...",
    paymentSuccess: "¡Pago exitoso! Ahora estás inscrito en el curso.",
    paymentError: "Pago fallido. Por favor, inténtalo de nuevo.",
    testCardInfo: "Para pruebas, usa el número de tarjeta: 4242 4242 4242 4242",
  }
}; 