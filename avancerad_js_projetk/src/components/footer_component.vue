
<template id="footer-template">
          <footer>
            <div class="footer__info">
              <div>
                <h3>Hitta hit</h3>
                <p>{{ address.street }}</p>
                <p>{{ address.zipCode }} {{ address.city }}</p>
              </div>
              <div>
                <h3>Öppettider</h3>
                <p>{{ openingHours }}</p>
                <p>(Obs. Vi har öppet endast när det regnar)</p>
              </div>
              <div>
                <h3>Kontakt</h3>
                <p>{{ contact.email }}</p>
                <p>{{ contact.phone }}</p>
              </div>
            </div>
            <button @click="showFAQ" id="faqBtn">FAQ</button>
            <div class="footer_social_icons">
              <img :src="socialIcons.facebook" alt="Facebook Icon" />
              <img :src="socialIcons.twitter" alt="Twitter Icon" />
              <img :src="socialIcons.instagram" alt="Instagram Icon" />
              <img :src="socialIcons.youtube" alt="Youtube Icon" />
            </div>
          </footer>
        </template>
        
        <script>
        // Vueコンポーネントの作成
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
              // FAQを表示する処理を追加
              console.log('FAQ button clicked');
            }
          }
        });
        </script>
        