
Vue.component('footer-component', {
  template: '#footer-template',
  data() {
    return {
      address: {
        street: 'Regnagården 47',
        zipCode: '640 10',
        city: 'Högsjö'
      },
      openingHours: '18-24 Fredag-Söndag',
      contact: {
        email: 'regna@folketsbio.nu',
        phone: '0151-123 45'
      },
      socialIcons: {
        facebook: '/assets/iconmonstr-facebook-5-240.png',
        twitter: '/assets/icons8-twitterx-250.png',
        instagram: '/assets/iconmonstr-instagram-11-240.png',
        youtube: '/assets/iconmonstr-youtube-6-240.png'
      }
    };
  },
  methods: {
    showFAQ() {
      console.log('FAQ button clicked');
    }
  }
});
