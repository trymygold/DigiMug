/**
 * Jewels-AI Digital Magazine Logic
 * Created for Nishanth - 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    // 1. PRODUCT DATA (Update these links with your assets)
    const products = [
        { 
            title: "Traditional Haram", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+1", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "A timeless masterpiece featuring intricate temple motifs in 22k gold.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Diamond Choker", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+2", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Radiate elegance with brilliant-cut diamonds for modern royalty.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Antique Jhumka", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+3", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Handcrafted with rubies and emeralds in a vintage matte finish.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Bridal Bangles", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+4", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Complete your bridal set with these handcrafted 22k gold kadas.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Peacock Kada", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+5", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Bold peacock design with fine enamel work, a statement piece.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Emerald Necklace", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+6", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Lustrous emeralds that capture the very essence of luxury.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Pearl Symphony", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+7", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Soft lustrous pearls combined with delicate designer gold chains.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Modern Solitaire", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+8", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Simplistic luxury featuring a high-carat single diamond setting.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Rose Gold Band", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+9", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "A sleek rose gold band with hidden pavé-set diamonds.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        },
        { 
            title: "Royal Maang Tikka", 
            img: "https://via.placeholder.com/400x300?text=Jewelry+10", 
            video: "https://www.w3schools.com/html/mov_bbb.mp4", 
            desc: "Traditional head ornament featuring Kemp stones and gold beads.",
            vtnLink: "https://nishanthprabhu1.github.io/Vtn/" 
        }
    ];

    const totalProducts = products.length;

    // 2. GENERATE PAGES
    products.forEach((p, i) => {
        const page = document.createElement('div');
        page.className = 'page';
        // Set initial stack order (Cover is at the very top)
        page.style.zIndex = totalProducts - i;
        
        page.innerHTML = `
            <div class="content">
                <img src="${p.img}" class="product-img" alt="${p.title}">
                <video class="product-video" muted loop playsinline>
                    <source src="${p.video}" type="video/mp4">
                </video>
                <h2>${p.title}</h2>
                <p class="desc">${p.desc}</p>
                <button class="vtn-btn" onclick="event.stopPropagation(); window.open('${p.vtnLink}', '_blank')">
                    Virtual Try-On
                </button>
            </div>
            <div class="page-back"></div>
        `;

        // 3. ADD CLICK EVENT FOR FLIPPING
        page.addEventListener('click', function() {
            const isFlipped = this.classList.toggle('flipped');
            const video = this.querySelector('video');

            if (isFlipped) {
                video.play();
                // Move flipped page to the bottom of the "turned" stack
                this.style.zIndex = i + 1;
            } else {
                video.pause();
                video.currentTime = 0;
                // Return to original stack position
                this.style.zIndex = totalProducts - i;
            }
        });

        book.appendChild(page);
    });

    /**
     * Optional: Keyboard Navigation
     * Use Left/Right arrows to flip pages
     */
    document.addEventListener('keydown', (e) => {
        const pages = document.querySelectorAll('.page:not(.cover-page)'); // Exclude static cover if any
        if (e.key === "ArrowRight") {
            // Find the first non-flipped page and flip it
            for (let page of pages) {
                if (!page.classList.contains('flipped')) {
                    page.click();
                    break;
                }
            }
        } else if (e.key === "ArrowLeft") {
            // Find the last flipped page and unflip it
            for (let i = pages.length - 1; i >= 0; i--) {
                if (pages[i].classList.contains('flipped')) {
                    pages[i].click();
                    break;
                }
            }
        }
    });
});