// Kimya Sınav Çalışma App - İnteraktif Fonksiyonlar

let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeApp();
    setupThemeToggle();
});

// Tema yönetimi
function initializeTheme() {
    // LocalStorage'dan tema tercihi al veya sistem temasını kullan
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
    
    // Sistem teması değiştiğinde dinle
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function setTheme(theme) {
    const html = document.documentElement;
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Uygulamayı başlat
function initializeApp() {
    renderOverview();
    renderTopics();
    initializeFloatingMenu();
}

// Switch tab function
function switchTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Tüm sekmeleri gizle
    tabContents.forEach(content => {
        content.classList.add('hidden');
    });
    
    // Seçili sekmeyi göster
    const selectedContent = document.getElementById(`${tabName}-content`);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
}

// Genel bakış sekmesini render et
function renderOverview() {
    const topicsList = document.getElementById('topicsList');
    const questionDist = document.getElementById('questionDistribution');
    
    // Konuları listele
    examData.topics.forEach((topic, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center space-x-3 p-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer';
        li.style.cssText = 'background: var(--bg-tertiary); color: var(--text-primary);';
        li.innerHTML = `
            <span class="text-xl md:text-2xl">${topic.icon}</span>
            <span class="font-semibold text-sm md:text-base">${topic.title}</span>
        `;
        topicsList.appendChild(li);
    });
    
    // Toplam soru sayısını hesapla
    const totalQuestions = questionDistribution.reduce((sum, dist) => sum + dist.count, 0);
    
    // Başlık ekle
    const header = document.createElement('div');
    header.className = 'mb-4 p-3 rounded-lg';
    header.style.cssText = 'background: var(--bg-tertiary); border: 2px solid var(--border-color);';
    header.innerHTML = `
        <div class="flex justify-between items-center">
            <span class="font-bold" style="color: var(--text-primary);">Toplam Soru Sayısı</span>
            <span class="text-2xl font-bold" style="color: var(--text-primary);">${totalQuestions}</span>
        </div>
    `;
    questionDist.appendChild(header);
    
    // Soru dağılımını göster
    questionDistribution.forEach(dist => {
        const div = document.createElement('div');
        div.className = 'mb-3';
        div.innerHTML = `
            <div class="flex justify-between items-center mb-2 gap-2">
                <span class="font-semibold text-xs md:text-sm" style="color: var(--text-secondary)">${dist.topic}</span>
                <span class="px-3 py-1 rounded-full text-xs md:text-sm font-bold whitespace-nowrap" style="background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--border-color);">${dist.count} soru</span>
            </div>
            <div class="w-full rounded-full h-2" style="background: var(--bg-tertiary);">
                <div class="h-2 rounded-full transition-all duration-500" 
                     style="background: #4a4a4a; width: ${(dist.count / totalQuestions) * 100}%"></div>
            </div>
        `;
        questionDist.appendChild(div);
    });
}

// Konuları render et
function renderTopics() {
    examData.topics.forEach(topic => {
        const contentDiv = document.getElementById(`${topic.id}-content`);
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="fade-in">
                    <div class="flex items-center mb-6">
                        <span class="text-5xl mr-4">${topic.icon}</span>
                        <h2 class="text-4xl font-bold text-purple-600">${topic.title}</h2>
                    </div>
                    ${topic.content}
                </div>
            `;
        }
    });
}

// Floating menu navigation
function initializeFloatingMenu() {
    const fabButton = document.getElementById('fabButton');
    const fabMenuList = document.getElementById('fabMenuList');
    const fabMenuItems = document.querySelectorAll('.fab-menu-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Toggle menu
    fabButton.addEventListener('click', (e) => {
        e.stopPropagation();
        fabMenuList.classList.toggle('active');
        
        // Rotate icon
        const icon = fabButton.querySelector('i');
        if (fabMenuList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!fabButton.contains(e.target) && !fabMenuList.contains(e.target)) {
            fabMenuList.classList.remove('active');
            const icon = fabButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Handle menu item clicks
    fabMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.getAttribute('data-tab');
            
            // Tüm sekmeleri gizle
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Seçili sekmeyi göster
            const selectedContent = document.getElementById(`${tabName}-content`);
            if (selectedContent) {
                selectedContent.classList.remove('hidden');
            }
            
            // Update active menu item
            fabMenuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Close menu
            fabMenuList.classList.remove('active');
            const icon = fabButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            
            // Quiz sekmesine geçildiyse quizi başlat
            if (tabName === 'quiz') {
                initializeQuiz();
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}


// Quiz'i başlat
function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    
    document.getElementById('quizResults').classList.add('hidden');
    document.getElementById('quizContainer').innerHTML = '';
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    document.getElementById('currentQuestion').textContent = '0';
    document.getElementById('progressBar').style.width = '0%';
    
    showQuestion();
}

// Soruyu göster
function showQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    const container = document.getElementById('quizContainer');
    
    // İlerlemeyi güncelle
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    container.innerHTML = `
        <div class="fade-in">
            <div class="p-4 md:p-6 rounded-xl mb-6" style="background: var(--gradient-primary);">
                <h3 class="text-lg md:text-xl font-bold text-white mb-3">Soru ${currentQuestionIndex + 1}</h3>
                <p class="text-base md:text-lg text-white whitespace-pre-line">${question.question}</p>
            </div>
            
            <div class="space-y-3" id="optionsContainer">
                ${question.options.map((option, index) => `
                    <div class="quiz-option p-3 md:p-4 border-2 rounded-xl" 
                         style="border-color: var(--border-color);"
                         onclick="selectAnswer(${index})"
                         id="option-${index}">
                        <div class="flex items-center gap-3">
                            <span class="w-7 h-7 md:w-8 md:h-8 rounded-full text-white flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0"
                                  style="background: var(--gradient-primary);">
                                ${String.fromCharCode(65 + index)}
                            </span>
                            <span class="text-sm md:text-base">${option}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div id="explanation" class="hidden mt-6 p-4 md:p-6 rounded-xl border-l-4" 
                 style="background: var(--bg-tertiary); border-color: #667eea;">
                <h4 class="font-bold text-base md:text-lg mb-2" style="color: #667eea;">💡 Açıklama:</h4>
                <p class="text-sm md:text-base" style="color: var(--text-primary);"></p>
            </div>
            
            <button id="nextBtn" 
                    class="hidden mt-6 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:shadow-xl transition-all w-full"
                    style="background: var(--gradient-primary);"
                    onclick="nextQuestion()">
                Sonraki Soru →
            </button>
        </div>
    `;
}

// Cevap seç
function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    
    // Eğer daha önce cevaplandıysa, tekrar seçim yapma
    if (answeredQuestions[currentQuestionIndex]) {
        return;
    }
    
    answeredQuestions[currentQuestionIndex] = true;
    
    // Tüm seçenekleri devre dışı bırak
    options.forEach(option => {
        option.style.cursor = 'default';
        option.onclick = null;
    });
    
    // Doğru ve yanlış cevapları işaretle
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        }
        if (index === selectedIndex && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    // Skoru güncelle
    if (selectedIndex === question.correct) {
        score++;
    }
    
    // Açıklamayı göster
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.querySelector('p').textContent = question.explanation;
    explanationDiv.classList.remove('hidden');
    
    // Sonraki butonu göster
    document.getElementById('nextBtn').classList.remove('hidden');
}

// Sonraki soru
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Sonuçları göster
function showResults() {
    document.getElementById('quizContainer').classList.add('hidden');
    const resultsDiv = document.getElementById('quizResults');
    resultsDiv.classList.remove('hidden');
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const correctCount = score;
    const incorrectCount = quizQuestions.length - score;
    
    document.getElementById('finalScore').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    
    // Performansa göre emoji değiştir
    const emojiDiv = resultsDiv.querySelector('.text-6xl');
    if (percentage >= 90) {
        emojiDiv.textContent = '🏆';
    } else if (percentage >= 80) {
        emojiDiv.textContent = '🎉';
    } else if (percentage >= 70) {
        emojiDiv.textContent = '👍';
    } else if (percentage >= 60) {
        emojiDiv.textContent = '😊';
    } else {
        emojiDiv.textContent = '📚';
    }
}

// Quiz'i yeniden başlat
function restartQuiz() {
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    initializeQuiz();
}
