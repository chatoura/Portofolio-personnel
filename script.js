 
        // Animation au scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');

        function checkScroll() {
            animateElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }

        // Vérifier au chargement
        window.addEventListener('load', checkScroll);
        // Vérifier au scroll
        window.addEventListener('scroll', checkScroll);

        // Header qui rétrécit au scroll
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Bouton retour en haut
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Envoi du formulaire
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Animation de succès
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé!';
            submitBtn.style.background = 'linear-gradient(135deg, #00ff88, #00ffcc)';
            
            // Réinitialiser après 3 secondes
            setTimeout(() => {
                submitBtn.innerHTML = 'Envoyer';
                submitBtn.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
                this.reset();
            }, 3000);
        });

        // Effet de curseur personnalisé
        document.addEventListener('mousemove', function(e) {
            const cursor = document.createElement('div');
            cursor.className = 'cursor-trail';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            document.body.appendChild(cursor);
            
            setTimeout(() => {
                cursor.remove();
            }, 1000);
        });

        // Animation des barres de compétences
        const skillBars = document.querySelectorAll('progress');
        skillBars.forEach(bar => {
            const value = bar.getAttribute('value');
            bar.setAttribute('value', '0');
            setTimeout(() => {
                bar.setAttribute('value', value);
            }, 500);
        });
   


      
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    setInterval(draw, 30);


    // Ajoutez ce script
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const follower = document.createElement('div');
follower.classList.add('cursor-follower');
document.body.appendChild(follower);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 100);
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.width = '30px';
        follower.style.height = '30px';
        follower.style.backgroundColor = 'rgba(125, 18, 255, 0.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        follower.style.width = '40px';
        follower.style.height = '40px';
        follower.style.backgroundColor = 'transparent';
    });
});

// Ajoutez ce script pour un effet de déplacement en 3D
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    
    parallaxElements.forEach((el, index) => {
        const speed = index * 0.1 + 0.2;
        el.style.transform = `translateY(${scrollValue * speed}px)`;
    });
});
